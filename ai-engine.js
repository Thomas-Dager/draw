// Motor Multi-Biblioteca + IA para TRAZO
// Bibliotecas soportadas:
// - Sin API Key (activas de fábrica): Openverse (Flickr, Rawpixel, StockSnap), iNaturalist (Científica), Cleveland Museum Open Access, Wikimedia Commons
// - Con API Key gratuita (configurables en el modal): Pexels API, Pixabay API, Unsplash API, Google Gemini API (3.8 Flash / 3.1 Flash Image)

(function () {
  "use strict";

  const STORAGE_KEYS = {
    SEEN_IDS: "trazo_seen_object_ids_v2",
    CUSTOM_AI_OBJECTS: "trazo_ai_generated_objects_v2",
    GEMINI_API_KEY: "trazo_gemini_api_key",
    PEXELS_API_KEY: "trazo_pexels_api_key",
    PIXABAY_API_KEY: "trazo_pixabay_api_key",
    UNSPLASH_API_KEY: "trazo_unsplash_api_key",
    REF_SOURCE_MODE: "trazo_ref_source_mode_v6" // "google_web" | "all_libraries" | "pexels" | "openverse" | "museums_inat" | "wikimedia" | "gemini_ai"
  };

  const NOISE_TITLE_REGEX =
    /map|diagram|chart|graph|stamp|logo|icon|flag|coat of arms|crest|signature|autograph|plaque|memorial|grave|tomb|cemetery|museum exterior|festival|parade|crowd|politician|actor|singer|document|page|book|poster|advertisement|cartoon|comic|anime|svg|schematic|patent/i;

  // ==================== GESTOR DE BARAJA SIN REPETICIONES (DECK MANAGER) ====================
  class NonRepeatingDeck {
    constructor() {
      this.seenIds = new Set(this.loadJson(STORAGE_KEYS.SEEN_IDS, []));
      this.aiObjects = this.loadJson(STORAGE_KEYS.CUSTOM_AI_OBJECTS, []);
    }

    loadJson(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (_) {
        return fallback;
      }
    }

    saveSeen() {
      try {
        localStorage.setItem(STORAGE_KEYS.SEEN_IDS, JSON.stringify([...this.seenIds]));
      } catch (_) {}
    }

    saveAiObjects() {
      try {
        localStorage.setItem(STORAGE_KEYS.CUSTOM_AI_OBJECTS, JSON.stringify(this.aiObjects));
      } catch (_) {}
    }

    getAllObjects() {
      const base = window.SKETCH_OBJECTS || [];
      return [...this.aiObjects, ...base];
    }

    getPoolByCategory(category) {
      const all = this.getAllObjects();
      if (!category || category === "all") return all;
      return all.filter((o) => o.category === category);
    }

    drawNext(category = "all", currentId = null) {
      const totalPool = this.getPoolByCategory(category);
      if (!totalPool.length) return null;

      let unseen = totalPool.filter((o) => !this.seenIds.has(o.id) && o.id !== currentId);

      if (unseen.length === 0) {
        totalPool.forEach((o) => this.seenIds.delete(o.id));
        if (currentId) this.seenIds.add(currentId);
        this.saveSeen();
        unseen = totalPool.filter((o) => o.id !== currentId);
        if (!unseen.length) unseen = totalPool;
      }

      const shuffled = [...unseen];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      const chosen = shuffled[0];
      this.markSeen(chosen.id);
      return chosen;
    }

    drawAlternatives(category = "all", excludeId = null, count = 3) {
      const pool = this.getPoolByCategory(category).filter((o) => o.id !== excludeId);
      const unseen = pool.filter((o) => !this.seenIds.has(o.id));
      const source = unseen.length >= count ? unseen : pool;

      const copy = [...source];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, count);
    }

    markSeen(id) {
      if (!id) return;
      this.seenIds.add(id);
      this.saveSeen();
    }

    resetHistory() {
      this.seenIds.clear();
      this.saveSeen();
    }

    addAiObject(obj, markAsSeen = true) {
      const exists = this.getAllObjects().some(
        (o) => o.name.toLowerCase() === obj.name.toLowerCase()
      );
      if (!exists) {
        this.aiObjects.unshift(obj);
        this.saveAiObjects();
      }
      if (markAsSeen) {
        this.markSeen(obj.id);
      }
    }

    addBatchUnseenAiObjects(objs) {
      let added = 0;
      const currentAll = this.getAllObjects();
      const nameSet = new Set(currentAll.map((o) => o.name.toLowerCase()));
      for (const obj of objs) {
        if (!obj || !obj.name) continue;
        const lower = obj.name.toLowerCase();
        if (!nameSet.has(lower)) {
          nameSet.add(lower);
          this.aiObjects.push(obj);
          added++;
        }
      }
      if (added > 0) this.saveAiObjects();
      return added;
    }

    getStats(category = "all") {
      const pool = this.getPoolByCategory(category);
      const seenInPool = pool.filter((o) => this.seenIds.has(o.id)).length;
      return {
        seen: seenInPool,
        total: pool.length,
        remaining: Math.max(0, pool.length - seenInPool)
      };
    }
  }

  // ==================== GESTIÓN DE CLAVES DE API (PEXELS, PIXABAY, UNSPLASH, GEMINI) ====================
  const DEFAULT_USER_GEMINI_KEY = "";

  function getApiKeys() {
    return {
      pexels: (localStorage.getItem(STORAGE_KEYS.PEXELS_API_KEY) || "").trim(),
      pixabay: (localStorage.getItem(STORAGE_KEYS.PIXABAY_API_KEY) || "").trim(),
      unsplash: (localStorage.getItem(STORAGE_KEYS.UNSPLASH_API_KEY) || "").trim(),
      gemini: (localStorage.getItem(STORAGE_KEYS.GEMINI_API_KEY) || DEFAULT_USER_GEMINI_KEY).trim()
    };
  }

  function setApiKeys({ pexels, pixabay, unsplash, gemini }) {
    if (pexels !== undefined) localStorage.setItem(STORAGE_KEYS.PEXELS_API_KEY, pexels.trim());
    if (pixabay !== undefined) localStorage.setItem(STORAGE_KEYS.PIXABAY_API_KEY, pixabay.trim());
    if (unsplash !== undefined) localStorage.setItem(STORAGE_KEYS.UNSPLASH_API_KEY, unsplash.trim());
    if (gemini !== undefined) localStorage.setItem(STORAGE_KEYS.GEMINI_API_KEY, gemini.trim());
  }

  function getGeminiApiKey() {
    return getApiKeys().gemini;
  }

  function setGeminiApiKey(key) {
    setApiKeys({ gemini: key || "" });
  }

  function getRefSourceMode() {
    return localStorage.getItem(STORAGE_KEYS.REF_SOURCE_MODE) || "google_web";
  }

  function setRefSourceMode(mode) {
    localStorage.setItem(STORAGE_KEYS.REF_SOURCE_MODE, mode);
  }

  // ==================== GEMINI INTERACTIONS API (v1beta/interactions) ====================
  async function callGeminiStructuredJSON(promptText, jsonSchema) {
    const apiKey = getGeminiApiKey();
    if (!apiKey) throw new Error("NO_GEMINI_KEY");

    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
        "Api-Revision": "2026-05-20"
      },
      body: JSON.stringify({
        model: "gemini-3.8-flash",
        input: promptText,
        store: false,
        response_format: {
          type: "text",
          mime_type: "application/json",
          schema: jsonSchema
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    const rawText = extractInteractionText(data);
    return JSON.parse(rawText);
  }

  async function callGeminiImageGeneration(promptText) {
    const apiKey = getGeminiApiKey();
    if (!apiKey) throw new Error("NO_GEMINI_KEY");

    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
        "Api-Revision": "2026-05-20"
      },
      body: JSON.stringify({
        model: "gemini-3.1-flash-image",
        input: [{ type: "text", text: promptText }],
        store: false,
        response_format: {
          type: "image",
          mime_type: "image/jpeg",
          aspect_ratio: "1:1",
          image_size: "1K"
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini Image error (${response.status})`);
    }

    const data = await response.json();
    const imgObj = extractInteractionImage(data);
    if (imgObj && imgObj.data) {
      const mime = imgObj.mime_type || "image/png";
      return `data:${mime};base64,${imgObj.data}`;
    }
    throw new Error("No image in Gemini response");
  }

  function extractInteractionText(interaction) {
    if (typeof interaction?.output_text === "string" && interaction.output_text.trim()) {
      return interaction.output_text.trim();
    }
    const steps = interaction?.steps || interaction?.outputs || [];
    for (let i = steps.length - 1; i >= 0; i--) {
      const step = steps[i];
      if (step?.type === "model_output" && Array.isArray(step.content)) {
        for (const part of step.content) {
          if (part?.type === "text" && part.text) return part.text.trim();
        }
      }
      if (typeof step?.text === "string") return step.text.trim();
    }
    throw new Error("Empty text output from Gemini Interaction");
  }

  function extractInteractionImage(interaction) {
    if (interaction?.output_image?.data) {
      return interaction.output_image;
    }
    const steps = interaction?.steps || [];
    for (let i = steps.length - 1; i >= 0; i--) {
      const step = steps[i];
      if (step?.type === "model_output" && Array.isArray(step.content)) {
        for (const part of step.content) {
          if (part?.type === "image" && part.data) return part;
        }
      }
    }
    return null;
  }

  // ==================== DESCUBRIDOR SEMÁNTICO DE NUEVOS OBJETOS ====================
  async function discoverRealSubjectsFromCommonsAndTaxa(category = "all", existingNames = [], count = 8) {
    const existingSet = new Set(existingNames.map((n) => n.toLowerCase()));
    const discovered = [];

    if (category === "animales" || category === "naturaleza" || category === "all") {
      try {
        const iconic =
          category === "naturaleza"
            ? "Plantae,Fungi"
            : category === "animales"
            ? "Mammalia,Aves,Reptilia,Amphibia,Insecta,Mollusca"
            : "Aves,Mammalia,Reptilia,Plantae";
        const randomPage = Math.floor(Math.random() * 25) + 1;
        const url = `https://api.inaturalist.org/v1/taxa?rank=species&iconic_taxa=${encodeURIComponent(iconic)}&per_page=30&page=${randomPage}&locale=es`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          for (const taxon of data?.results || []) {
            if (discovered.length >= count) break;
            const commonEs = taxon.preferred_common_name;
            const sciName = taxon.name;
            if (!commonEs || !sciName) continue;
            const capName = commonEs.charAt(0).toUpperCase() + commonEs.slice(1) + ` (${sciName})`;
            if (existingSet.has(capName.toLowerCase())) continue;

            const isPlant = taxon.iconic_taxon_name === "Plantae" || taxon.iconic_taxon_name === "Fungi";
            existingSet.add(capName.toLowerCase());
            discovered.push({
              id: `taxon-${taxon.id}-${Date.now()}`,
              name: capName,
              category: isPlant ? "naturaleza" : "animales",
              categoryLabel: isPlant ? "Naturaleza y Botánica ✨" : "Animales ✨",
              icon: isPlant ? "🌿" : "🐾",
              wikiCategories: [`Category:${sciName.replace(/\s+/g, "_")}`],
              intitleQuery: sciName,
              mustMatch: [sciName.toLowerCase().split(" ")[0], commonEs.toLowerCase()],
              aiPromptSubject: `${sciName} (${commonEs})`,
              tip: `Observa la proporción general, la inserción de las extremidades o tallos y las masas de sombra de "${commonEs}".`,
              isAiGenerated: true
            });
          }
        }
      } catch (e) {
        console.warn("Aviso descubridor iNaturalist:", e);
      }
    }

    if (discovered.length < count) {
      const seedQueries = {
        simples: ["coffee mug", "fire hydrant", "headphones", "ceramic vase", "brass doorknob", "artist paintbrush", "brass padlock", "claw hammer"],
        arquitectura: ["historic building", "gothic cathedral", "arch bridge", "baroque facade", "clock tower", "colonnade"],
        naturaleza: ["botanical leaf", "wildflower", "tree bark", "mushroom", "pinecone", "seashell"],
        anatomia: ["marble bust", "bronze statue", "anatomical bone", "portrait sculpture", "hand gesture"],
        animales: ["bird of prey", "feline", "reptile", "beetle", "marine mammal"],
        cotidiano: ["kitchen utensil", "ceramic vessel", "tableware", "lamp", "clock", "still life"],
        vehiculos: ["vintage car", "motorcycle", "steam locomotive", "bicycle", "gears mechanism"],
        paisajes: ["mountain peak", "rock formation", "ocean wave", "waterfall", "cumulus clouds"],
        retro: ["vintage camera", "retro console", "tube radio", "typewriter", "rotary telephone"],
        personajes: ["character figurine", "samurai mask", "theatrical mask", "comic statue", "knight helmet"],
        gastronomia: ["artisan bread", "citrus fruit", "pastry", "wine glass", "pomegranate"],
        texturas: ["fabric drapery", "wood grain", "weathered leather", "cobblestone", "braided rope"],
        interiores: ["spiral staircase", "vintage armchair", "library interior", "reading corner", "arched window"],
        filigranas: ["heraldic crest", "postage stamp", "celtic knot", "filigree ornament", "wax seal"],
        industrial: ["power drill", "ergonomic headphones", "caliper", "sewing machine", "wristwatch"],
        fantasia: ["gargoyle statue", "medieval armor", "ornate sword", "dragon sculpture", "griffin statue"],
        all: ["musical instrument", "vintage tool", "marble sculpture", "ceramic teapot", "brass instrument"]
      };
      const poolQueries = seedQueries[category] || seedQueries.all;
      const pickedQuery = poolQueries[Math.floor(Math.random() * poolQueries.length)];
      const randomOffset = Math.floor(Math.random() * 40);

      try {
        const catUrl =
          `https://commons.wikimedia.org/w/api.php?action=query&list=search` +
          `&srsearch=${encodeURIComponent(pickedQuery)}&srnamespace=14&srlimit=20&sroffset=${randomOffset}&format=json&origin=*`;
        const res = await fetch(catUrl);
        const data = await res.json();
        for (const item of data?.query?.search || []) {
          if (discovered.length >= count) break;
          const catTitle = item.title;
          const cleanName = catTitle.replace(/^Category:/i, "").replace(/_/g, " ");
          if (/by country|by century|by year|in art|in paintings|museum|people|users|stubs|icons|logos|maps/i.test(cleanName)) {
            continue;
          }
          const displayEs = `Estudio de ${cleanName}`;
          if (existingSet.has(displayEs.toLowerCase())) continue;
          existingSet.add(displayEs.toLowerCase());

          discovered.push({
            id: `commons-cat-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            name: displayEs,
            category: category === "all" ? "cotidiano" : category,
            categoryLabel: "Descubierto por IA ✨",
            icon: "✨",
            wikiCategories: [catTitle],
            intitleQuery: cleanName,
            mustMatch: cleanName.toLowerCase().split(/\s+/).filter((w) => w.length >= 3),
            aiPromptSubject: cleanName,
            tip: `Encaja las formas geométricas primarias y los ejes de perspectiva de "${cleanName}" antes de detallar.`,
            isAiGenerated: true
          });
        }
      } catch (e) {
        console.warn("Aviso descubridor Commons:", e);
      }
    }

    return discovered;
  }

  async function generateBatchObjectsWithAI(category = "all", existingNames = [], count = 8) {
    if (getGeminiApiKey()) {
      try {
        const categoryDescriptions = {
          all: "variadas categorías de dibujo (objetos simples, arquitectura, naturaleza, figura humana, animales, bodegón, vehículos, paisajes, tecnología retro, personajes, gastronomía, texturas, interiores, filigranas, diseño industrial y fantasía)",
          simples: "Objetos Simples: Objetos individuales de silueta clara y volúmenes geométricos básicos (como tazas, hidrantes, auriculares, jarrones, picaportes, pinceles, candados, bombillas, llaves o herramientas simples) sin escenas complejas",
          arquitectura: "Arquitectura y Paisaje Urbano: Edificios históricos, fachadas complejas, calles y el reto de dominar la perspectiva lineal",
          naturaleza: "Naturaleza y Botánica: Hojas, flores, ramas, cortezas y patrones orgánicos para practicar curvas y fluidez",
          anatomia: "Figura Humana y Anatomía: Estudios de proporciones, gesture drawing, manos, rostros y escorzos",
          animales: "Animales y Fauna: Desde animales domésticos hasta fauna salvaje, enfocándose en la estructura ósea, pelaje y plumas",
          cotidiano: "Objetos Cotidianos y Bodegón (Still Life): Tazas, libros apilados, vajilla o herramientas para estudiar volúmenes, cilindros y esferas",
          vehiculos: "Vehículos y Maquinaria: Automóviles, bicicletas, motocicletas y piezas mecánicas complejas con superficies metálicas",
          paisajes: "Paisajes Naturales y Elementos: Montañas, ríos, formaciones rocosas, olas del mar, cielos y nubes (ideales para la atmósfera)",
          retro: "Tecnología Retro y Aparatos Clásicos: Consolas antiguas, cámaras de rollo, radios y dispositivos con formas geométricas definidas",
          personajes: "Diseño de Personajes y Estilizados: Creación de avatares, proporciones de cómic, manga o estilos de animación (concept art)",
          gastronomia: "Comida y Gastronomía: Frutas con texturas irregulares, panificados, platos elaborados y el reflejo en cubiertos o cristalería",
          texturas: "Estudios de Texturas y Superficies: Pliegues de telas y drapería, vetas de madera, cuero desgastado o superficies rugosas",
          interiores: "Interiores y Espacios Arquitectónicos: Habitaciones, muebles, distribución de elementos en el espacio y estudios de iluminación interior",
          filigranas: "Filigranas, Estampillas y Símbolos: Elementos gráficos detallados, grabados antiguos, heráldica o motivos ornamentales",
          industrial: "Diseño Industrial y Objetos Funcionales: Gadgets, utensilios de diseño ergonómico y esquemas estructurales de productos",
          fantasia: "Fantasía y Criaturas Mitológicas: Dragones, armaduras ornamentadas, criaturas fantásticas y mundos imaginarios"
        };
        const catDesc = categoryDescriptions[category] || categoryDescriptions.all;
        const avoidSample = existingNames.slice(0, 80).join(", ");

        const batchSchema = {
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  category: {
                    type: "string",
                    enum: [
                      "simples",
                      "arquitectura",
                      "naturaleza",
                      "anatomia",
                      "animales",
                      "cotidiano",
                      "vehiculos",
                      "paisajes",
                      "retro",
                      "personajes",
                      "gastronomia",
                      "texturas",
                      "interiores",
                      "filigranas",
                      "industrial",
                      "fantasia"
                    ]
                  },
                  categoryLabel: { type: "string" },
                  icon: { type: "string" },
                  intitleQuery: { type: "string" },
                  wikiCategories: { type: "array", items: { type: "string" } },
                  mustMatch: { type: "array", items: { type: "string" } },
                  aiPromptSubject: { type: "string" },
                  tip: { type: "string" }
                },
                required: ["name", "category", "categoryLabel", "icon", "intitleQuery", "wikiCategories", "mustMatch", "aiPromptSubject", "tip"]
              }
            }
          },
          required: ["items"]
        };

        const prompt = `Propón ${count} objetos físicos concretos, reales y completamente distintos entre sí para practicar dibujo de observación en: ${catDesc}.
PROHIBIDO repetir cualquiera de estos objetos: [${avoidSample}].
Devuelve JSON con la propiedad "items".`;

        const parsed = await callGeminiStructuredJSON(prompt, batchSchema);
        const rawList = Array.isArray(parsed?.items) ? parsed.items : [];
        if (rawList.length > 0) {
          return rawList.map((item, idx) => ({
            id: `gemini-batch-${Date.now()}-${idx}`,
            name: item.name,
            category: item.category || (category === "all" ? "cotidiano" : category),
            categoryLabel: item.categoryLabel || "Creado por Gemini IA ✨",
            icon: item.icon || "✨",
            wikiCategories: Array.isArray(item.wikiCategories) ? item.wikiCategories : [],
            intitleQuery: item.intitleQuery,
            mustMatch: Array.isArray(item.mustMatch) ? item.mustMatch.map((s) => String(s).toLowerCase()) : [item.intitleQuery.toLowerCase()],
            aiPromptSubject: item.aiPromptSubject || item.intitleQuery,
            tip: item.tip || "Encaja primero las proporciones generales y el eje central.",
            isAiGenerated: true
          }));
        }
      } catch (e) {
        console.warn("Gemini batch aviso, usando descubridor semántico:", e);
      }
    }

    return discoverRealSubjectsFromCommonsAndTaxa(category, existingNames, count);
  }

  async function generateNewObjectWithAI(category = "all", existingNames = []) {
    const batch = await generateBatchObjectsWithAI(category, existingNames, 4);
    if (batch && batch.length > 0) return batch[0];
    throw new Error("No se pudo generar objeto adicional.");
  }

  async function enrichCustomObjectWithAI(rawUserText) {
    const cleanInput = rawUserText.trim();

    if (getGeminiApiKey()) {
      try {
        const schema = {
          type: "object",
          properties: {
            name: { type: "string" },
            icon: { type: "string" },
            intitleQuery: { type: "string" },
            wikiCategories: { type: "array", items: { type: "string" } },
            mustMatch: { type: "array", items: { type: "string" } },
            aiPromptSubject: { type: "string" },
            tip: { type: "string" }
          },
          required: ["name", "icon", "intitleQuery", "wikiCategories", "mustMatch", "aiPromptSubject", "tip"]
        };
        const data = await callGeminiStructuredJSON(
          `Traduce este objeto de dibujo al inglés para buscar fotos reales en Pexels, Openverse y Wikimedia: "${cleanInput}"`,
          schema
        );
        if (data && data.intitleQuery) {
          return {
            id: "custom-" + Date.now(),
            name: data.name || cleanInput,
            category: "cotidiano",
            categoryLabel: "Objeto Personalizado (IA)",
            icon: data.icon || "🎨",
            wikiCategories: data.wikiCategories || [],
            intitleQuery: data.intitleQuery,
            mustMatch: (data.mustMatch || [data.intitleQuery]).map((w) => String(w).toLowerCase()),
            aiPromptSubject: data.aiPromptSubject || data.intitleQuery,
            tip: data.tip || "Encaja las formas principales y los ejes de perspectiva antes de sombrear.",
            isAiGenerated: true
          };
        }
      } catch (_) {}
    }

    let englishTerm = cleanInput;
    try {
      const esWikiUrl =
        `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(cleanInput)}&srlimit=1&format=json&origin=*`;
      const esRes = await fetch(esWikiUrl);
      const esData = await esRes.json();
      const topEsTitle = esData?.query?.search?.[0]?.title;
      if (topEsTitle) {
        const llUrl =
          `https://es.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(topEsTitle)}&prop=langlinks&lllang=en&format=json&origin=*`;
        const llRes = await fetch(llUrl);
        const llData = await llRes.json();
        const pages = Object.values(llData?.query?.pages || {});
        const enTitle = pages[0]?.langlinks?.[0]?.["*"];
        if (enTitle) {
          englishTerm = enTitle.replace(/\s*\(.*?\)\s*/g, "").trim();
        }
      }
    } catch (e) {
      console.warn("Resolución Wikipedia ES->EN aviso:", e);
    }

    const keywords = [
      ...englishTerm.toLowerCase().split(/\s+/),
      ...cleanInput.toLowerCase().split(/\s+/)
    ].filter((w) => w.length >= 3);

    return {
      id: "custom-" + Date.now(),
      name: cleanInput.charAt(0).toUpperCase() + cleanInput.slice(1),
      category: "cotidiano",
      categoryLabel: `Objeto Personalizado (${englishTerm})`,
      icon: "🎨",
      wikiCategories: [`Category:${englishTerm.replace(/\s+/g, "_")}`],
      intitleQuery: englishTerm,
      mustMatch: [...new Set(keywords)],
      aiPromptSubject: englishTerm,
      tip: `Construye primero la caja envolvente en perspectiva y el eje central de "${cleanInput}" antes de detallar.`,
      isAiGenerated: true
    };
  }

  // ==================== PROVEEDORES DE BIBLIOTECAS DE IMÁGENES ====================

  // Normaliza consultas eliminando adjetivos genéricos iniciales (ej. "wooden tennis racket" -> "tennis racket") para no perder el sustantivo principal
  function toConciseQuery(query) {
    const ADJECTIVES_REGEX = /^(wooden|vintage|antique|traditional|classic|ancient|old|retro|brass|copper|bronze|porcelain|ceramic|leather|metal|iron|cast|glass|steel|silver|golden|medieval|roman|greek|japanese|chinese|french|italian|victorian|small|large|open|closed|human|common)$/i;
    const allWords = String(query || "").trim().split(/\s+/).filter(Boolean);
    const coreWords = allWords.filter((w) => !ADJECTIVES_REGEX.test(w));
    const chosen = coreWords.length >= 1 ? coreWords : allWords;
    return chosen.length > 2 ? chosen.slice(0, 2).join(" ") : chosen.join(" ");
  }

  // 1. PEXELS API (Fotografía de estudio y producto de alta calidad)
  async function fetchFromPexels(obj, query) {
    const apiKey = getApiKeys().pexels;
    if (!apiKey) return [];

    try {
      const q = toConciseQuery(query);
      const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=18`;
      const res = await fetch(url, {
        headers: { Authorization: apiKey }
      });
      if (!res.ok) return [];
      const data = await res.json();
      return (data?.photos || []).map((p) => ({
        url: p.src?.large2x || p.src?.large || p.src?.original,
        thumb: p.src?.medium || p.src?.small,
        title: `${obj.name} · ${p.alt || `Foto de ${p.photographer || "Pexels"}`}`,
        source: p.url || p.src?.original,
        badge: "🟢 Pexels"
      })).filter((item) => Boolean(item.url));
    } catch (e) {
      console.warn("Pexels API aviso:", e);
      return [];
    }
  }

  // 2. PIXABAY API (Fotografía aislada y de objetos)
  async function fetchFromPixabay(obj, query) {
    const apiKey = getApiKeys().pixabay;
    if (!apiKey) return [];

    try {
      const q = toConciseQuery(query);
      const url = `https://pixabay.com/api/?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(q)}&image_type=photo&per_page=18&safesearch=true`;
      const res = await fetch(url);
      if (!res.ok) return [];
      const data = await res.json();
      return (data?.hits || []).map((h) => ({
        url: h.largeImageURL || h.webformatURL,
        thumb: h.webformatURL || h.previewURL,
        title: `${obj.name} · ${h.tags || "Pixabay"}`,
        source: h.pageURL || h.largeImageURL,
        badge: "🟡 Pixabay"
      })).filter((item) => Boolean(item.url));
    } catch (e) {
      console.warn("Pixabay API aviso:", e);
      return [];
    }
  }

  // 3. UNSPLASH API (Fotografía artística y de iluminación)
  async function fetchFromUnsplash(obj, query) {
    const apiKey = getApiKeys().unsplash;
    if (!apiKey) return [];

    try {
      const q = toConciseQuery(query);
      const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=18&client_id=${encodeURIComponent(apiKey)}`;
      const res = await fetch(url);
      if (!res.ok) return [];
      const data = await res.json();
      return (data?.results || []).map((u) => ({
        url: u.urls?.regular || u.urls?.full,
        thumb: u.urls?.small || u.urls?.thumb,
        title: `${obj.name} · ${u.alt_description || u.description || "Unsplash"}`,
        source: u.links?.html || u.urls?.regular,
        badge: "⚫ Unsplash"
      })).filter((item) => Boolean(item.url));
    } catch (e) {
      console.warn("Unsplash API aviso:", e);
      return [];
    }
  }

  // 4. OPENVERSE API (Flickr, StockSnap, Rawpixel, WordPress Photo Directory — SIN API KEY, máx page_size=20 anónimo)
  async function fetchFromOpenverse(obj, query, mustWords) {
    try {
      const q = toConciseQuery(query);
      const ovUrl = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(q)}&page_size=20`;
      const ovRes = await fetch(ovUrl);
      if (!ovRes.ok) return [];
      const ovData = await ovRes.json();
      const results = [];

      for (const item of ovData?.results || []) {
        if (!item.url) continue;
        const itemTitle = (item.title || "").toLowerCase();
        if (NOISE_TITLE_REGEX.test(itemTitle)) continue;

        const tagsText = Array.isArray(item.tags) ? item.tags.map((t) => t.name || "").join(" ").toLowerCase() : "";
        const combinedText = `${itemTitle} ${tagsText}`;
        const matchesKeyword = mustWords.length === 0 || mustWords.some((kw) => kw && combinedText.includes(kw));
        if (!matchesKeyword) continue;

        const providerName = item.source ? item.source.charAt(0).toUpperCase() + item.source.slice(1) : "Openverse";
        results.push({
          url: item.url,
          thumb: item.thumbnail || item.url,
          title: `${obj.name} · ${item.title || providerName}`,
          source: item.foreign_landing_url || item.url,
          badge: `📸 ${providerName}`
        });
      }
      return results;
    } catch (e) {
      console.warn("Openverse aviso:", e);
      return [];
    }
  }

  // 5. CLEVELAND MUSEUM OF ART OPEN ACCESS (Fotografía de estudio de esculturas, armaduras, instrumentos, vasijas — SIN API KEY)
  async function fetchFromClevelandMuseum(obj, query, mustWords) {
    try {
      const q = toConciseQuery(query);
      const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=${encodeURIComponent(q)}&has_image=1&limit=18`;
      const res = await fetch(url);
      if (!res.ok) return [];
      const data = await res.json();
      const results = [];

      for (const art of data?.data || []) {
        const webImg = art?.images?.web?.url;
        if (!webImg) continue;
        const title = (art.title || "").toLowerCase();
        const type = (art.type || "").toLowerCase();
        // Evitar pinturas planas o grabados cuando buscamos objetos tridimensionales, salvo que coincida exactamente con el título
        if (/print|drawing|painting|textile|tapestry|manuscript/i.test(type) && obj.category !== "anatomia") {
          continue;
        }
        const combined = `${title} ${type}`;
        const matches = mustWords.length === 0 || mustWords.some((kw) => kw && combined.includes(kw));
        if (!matches) continue;

        results.push({
          url: webImg,
          thumb: webImg,
          title: `${obj.name} · ${art.title} (${art.type || "Colección Museo"})`,
          source: art.url || webImg,
          badge: "🏛️ Cleveland Museum"
        });
      }
      return results;
    } catch (e) {
      console.warn("Cleveland Museum API aviso:", e);
      return [];
    }
  }

  // 6. INATURALIST API (Observaciones científicas verificadas de animales, plantas, hongos y conchas — SIN API KEY)
  async function fetchFromINaturalist(obj, query, mustWords) {
    try {
      const inatUrl = `https://api.inaturalist.org/v1/observations?taxon_name=${encodeURIComponent(query)}&photos=true&quality_grade=research&per_page=18`;
      const inatRes = await fetch(inatUrl);
      if (!inatRes.ok) return [];
      const inatData = await inatRes.json();
      const results = [];

      for (const obs of inatData?.results || []) {
        const photo = obs?.photos?.[0];
        if (!photo?.url) continue;
        const sciName = (obs?.taxon?.name || "").toLowerCase();
        const comName = (obs?.taxon?.preferred_common_name || "").toLowerCase();
        const matchesTaxon = mustWords.some((kw) => kw && (sciName.includes(kw) || comName.includes(kw)));
        if (!matchesTaxon) continue;

        const largeUrl = photo.url.replace("square", "large");
        const mediumUrl = photo.url.replace("square", "medium");
        const taxonLabel = obs?.taxon?.preferred_common_name || obs?.taxon?.name || obj.name;
        results.push({
          url: largeUrl,
          thumb: mediumUrl,
          title: `${obj.name} · ${taxonLabel}`,
          source: obs.uri || largeUrl,
          badge: "🌿 iNaturalist"
        });
      }
      return results;
    } catch (e) {
      console.warn("iNaturalist aviso:", e);
      return [];
    }
  }

  // 7. WIKIMEDIA COMMONS API (Categorías exactas + búsqueda ordenada por page.index — SIN API KEY)
  async function fetchFromWikimedia(obj, query, mustWords, prioritizeAngles = false) {
    const results = [];
    const seenUrls = new Set();

    const categoriesToQuery = Array.isArray(obj.wikiCategories) ? [...obj.wikiCategories] : [];
    for (const catTitle of categoriesToQuery) {
      if (results.length >= 16) break;
      try {
        const normalizedCat = catTitle.startsWith("Category:") ? catTitle : `Category:${catTitle}`;
        const url =
          `https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers` +
          `&gcmtitle=${encodeURIComponent(normalizedCat)}&gcmtype=file&gcmlimit=30` +
          `&prop=imageinfo&iiprop=url|dimensions|mime&iiurlwidth=1080&format=json&origin=*`;

        const res = await fetch(url);
        const data = await res.json();
        const pages = Object.values(data?.query?.pages || {});

        for (const page of pages) {
          const candidate = validateCommonsPage(page, obj, mustWords, true);
          if (candidate && !seenUrls.has(candidate.url)) {
            seenUrls.add(candidate.url);
            results.push(candidate);
          }
        }
      } catch (_) {}
    }

    const searchQueries = prioritizeAngles
      ? [`${query} front`, `${query} side profile`, `${query} detail closeup`, query]
      : [query, ...(obj.mustMatch || []).slice(0, 2)];

    for (const q of searchQueries) {
      if (results.length >= 20) break;
      if (!q) continue;
      try {
        const searchUrl =
          `https://commons.wikimedia.org/w/api.php?action=query&generator=search` +
          `&gsrsearch=${encodeURIComponent("filetype:bitmap " + q)}` +
          `&gsrnamespace=6&gsrlimit=30&prop=imageinfo&iiprop=url|dimensions|mime&iiurlwidth=1080&format=json&origin=*`;

        const res = await fetch(searchUrl);
        const data = await res.json();
        const pages = Object.values(data?.query?.pages || {}).sort(
          (a, b) => (a.index || 999) - (b.index || 999)
        );

        for (const page of pages) {
          const candidate = validateCommonsPage(page, obj, mustWords, false);
          if (candidate && !seenUrls.has(candidate.url)) {
            seenUrls.add(candidate.url);
            results.push(candidate);
          }
        }
      } catch (_) {}
    }

    return results;
  }

  function validateCommonsPage(page, obj, mustWords, fromTrustedCategory) {
    const info = page?.imageinfo?.[0];
    if (!info) return null;

    const mime = (info.mime || "").toLowerCase();
    if (!mime.includes("jpeg") && !mime.includes("jpg") && !mime.includes("png")) {
      return null;
    }

    const w = info.width || 0;
    const h = info.height || 0;
    if (w < 380 || h < 320) return null;

    const ratio = w / h;
    if (ratio > 2.6 || ratio < 0.38) return null;

    const cleanTitle = (page.title || "")
      .replace(/^File:/i, "")
      .replace(/\.[a-zA-Z0-9]+$/, "")
      .replace(/[_-]+/g, " ");

    if (NOISE_TITLE_REGEX.test(cleanTitle)) {
      return null;
    }

    const lowerTitle = cleanTitle.toLowerCase();
    const matchesKeyword = mustWords.length === 0 || mustWords.some((kw) => kw && lowerTitle.includes(kw));

    if (!fromTrustedCategory && !matchesKeyword) {
      return null;
    }

    const displayUrl = info.thumburl || info.url;
    if (!displayUrl) return null;

    return {
      url: displayUrl,
      thumb: displayUrl,
      title: `${obj.name} · ${cleanTitle}`,
      source: info.descriptionurl || displayUrl,
      badge: "📷 Wikimedia"
    };
  }

  // Intercala los resultados de múltiples bibliotecas ([LibA_1, LibB_1, LibC_1, LibA_2, LibB_2...]) sin duplicar URLs
  function interleaveLibraries(arraysList) {
    const merged = [];
    const seenUrls = new Set();
    const maxLen = Math.max(0, ...arraysList.map((a) => a.length));

    for (let i = 0; i < maxLen; i++) {
      for (const arr of arraysList) {
        if (i < arr.length) {
          const item = arr[i];
          if (item && item.url && !seenUrls.has(item.url)) {
            seenUrls.add(item.url);
            merged.push(item);
          }
        }
      }
    }
    return merged;
  }

  // Construye una consulta natural limpia como la que escribirías directamente en Google Imágenes
  function buildNaturalSearchQuery(obj) {
    if (!obj) return "";
    const cleanEs = String(obj.name || "")
      .replace(/\s*\(.*?\)\s*/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return cleanEs || obj.intitleQuery || "";
  }

  // 0. BÚSQUEDA WEB DIRECTA (Estilo Google Imágenes: consulta en vivo a través del servidor local o gateway CORS del navegador)
  async function fetchFromWebSearch(obj, customQuery = "") {
    const qPrimary = (customQuery || buildNaturalSearchQuery(obj)).trim();
    const qSecondary = customQuery ? "" : (obj?.intitleQuery || "").trim();
    if (!qPrimary && !qSecondary) return [];

    // 1. Intentar primero el puente local ultrarrápido (http://localhost:3000/api/web-images)
    const endpoints = [
      `http://localhost:3000/api/web-images?q=${encodeURIComponent(qPrimary)}&q_en=${encodeURIComponent(qSecondary)}`,
      `/api/web-images?q=${encodeURIComponent(qPrimary)}&q_en=${encodeURIComponent(qSecondary)}`
    ];

    for (const ep of endpoints) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 5000);
        const res = await fetch(ep, { signal: controller.signal });
        clearTimeout(timer);
        if (!res.ok) continue;
        const data = await res.json();
        if (Array.isArray(data?.results) && data.results.length > 0) {
          return data.results.map((item) => ({
            url: item.url,
            thumb: item.thumb || item.url,
            fallbackUrl: item.fallbackUrl || item.thumb || item.url,
            proxyUrl: `http://localhost:3000/api/image-proxy?url=${encodeURIComponent(item.url)}`,
            title: item.title || `${obj?.name || qPrimary}`,
            source: item.source || item.url,
            badge: item.badge || "🔎 Google / Web"
          }));
        }
      } catch (_) {}
    }

    // 2. Respaldo directo desde el navegador vía CORS gateway (funciona sin server.js cuando se abre desde Live Server / http)
    try {
      const targetUrl =
        `https://www.bing.com/images/async?q=${encodeURIComponent(qPrimary)}` +
        `&first=0&count=35&adlt=strict&qft=+filterui:photo-photo`;
      const corsRes = await fetch(`https://proxy.corsfix.com/?${targetUrl}`);
      if (corsRes.ok) {
        const html = await corsRes.text();
        const mBlocks = [...html.matchAll(/m="(\{[^"]+\})"/g)];
        const parsed = [];
        for (const match of mBlocks) {
          try {
            const jsonStr = match[1]
              .replace(/&quot;/g, '"')
              .replace(/&amp;/g, "&")
              .replace(/&#39;/g, "'");
            const d = JSON.parse(jsonStr);
            if (!d.murl && !d.turl) continue;
            parsed.push({
              url: d.murl || d.turl,
              thumb: d.turl || d.murl,
              fallbackUrl: d.turl || d.murl,
              title: String(d.t || qPrimary).replace(/[\uE000-\uF8FF]/g, "").trim(),
              source: d.purl || d.murl,
              badge: "🔎 Google / Web"
            });
          } catch (_) {}
        }
        if (parsed.length > 0) return parsed;
      }
    } catch (_) {}

    return [];
  }

  // ==================== ORQUESTADOR DE LAS 10 REFERENCIAS MULTI-BIBLIOTECA ====================
  async function getTenMatchedReferences(obj, onProgress, customQuery = "") {
    const mode = getRefSourceMode();
    const baseQuery = customQuery || obj.intitleQuery || obj.name;

    // Usar estrictamente obj.mustMatch si existe, sin contaminarlo con adjetivos genéricos como "wooden", "antique", etc.
    const mustWords = (!customQuery && obj.mustMatch && obj.mustMatch.length)
      ? obj.mustMatch.map((w) => w.toLowerCase())
      : toConciseQuery(baseQuery).toLowerCase().split(/\s+/).filter((w) => w.length >= 3);

    // MODO #1 PREDETERMINADO ("google_web"): Búsqueda Web Directa (exactamente las imágenes que aparecen al buscar en Google/Web)
    if (mode === "google_web" || Boolean(customQuery)) {
      const displayQ = customQuery || buildNaturalSearchQuery(obj);
      if (onProgress) {
        onProgress(`🔎 Buscando directamente en la Web: "${displayQ}"...`);
      }
      const webResults = await fetchFromWebSearch(obj, customQuery);
      if (webResults.length >= 10) {
        return webResults;
      }
      // Si el servidor local no estuviera encendido o devolviera menos de 10, completar con Openverse/Wikimedia
      const [ovBackup, wikiBackup] = await Promise.all([
        fetchFromOpenverse(obj, baseQuery, mustWords),
        fetchFromWikimedia(obj, baseQuery, mustWords, false)
      ]);
      return interleaveLibraries([webResults, ovBackup, wikiBackup]);
    }

    // Modo Gemini 3.1 Flash Image (si tiene Gemini API Key)
    if (mode === "gemini_ai" && getGeminiApiKey()) {
      if (onProgress) onProgress(`Generando 10 vistas con Gemini 3.1 Flash Image para "${obj.name}"...`);
      const geminiRefs = await tryGenerateGeminiImages(obj, onProgress);
      if (geminiRefs.length >= 10) return geminiRefs;
    }

    // Modo Solo Pexels (con respaldo si tiene menos de 10)
    if (mode === "pexels") {
      if (onProgress) onProgress(`Consultando biblioteca Pexels para "${obj.name}"...`);
      const pexelsList = await fetchFromPexels(obj, baseQuery);
      if (pexelsList.length >= 10) return pexelsList;
      const webBackup = await fetchFromWebSearch(obj, customQuery);
      return interleaveLibraries([pexelsList, webBackup]);
    }

    // Modo Solo Openverse (Flickr, Rawpixel, StockSnap)
    if (mode === "openverse") {
      if (onProgress) onProgress(`Consultando Openverse (Flickr, StockSnap, Rawpixel) para "${obj.name}"...`);
      const ovList = await fetchFromOpenverse(obj, baseQuery, mustWords);
      if (ovList.length >= 10) return ovList;
      const backupWiki = await fetchFromWikimedia(obj, baseQuery, mustWords, false);
      return interleaveLibraries([ovList, backupWiki]);
    }

    // Modo Solo Museos y Ciencia (Cleveland Museum + iNaturalist)
    if (mode === "museums_inat") {
      if (onProgress) onProgress(`Consultando Cleveland Museum of Art e iNaturalist para "${obj.name}"...`);
      const [cmaList, inatList, ovList] = await Promise.all([
        fetchFromClevelandMuseum(obj, baseQuery, mustWords),
        fetchFromINaturalist(obj, baseQuery, mustWords),
        fetchFromOpenverse(obj, baseQuery, mustWords)
      ]);
      const combined = interleaveLibraries([cmaList, inatList, ovList]);
      if (combined.length >= 10) return combined;
      const backupWiki = await fetchFromWikimedia(obj, baseQuery, mustWords, false);
      return interleaveLibraries([combined, backupWiki]);
    }

    // Modo Solo Wikimedia Commons
    if (mode === "wikimedia") {
      if (onProgress) onProgress(`Consultando Wikimedia Commons para "${obj.name}"...`);
      return fetchFromWikimedia(obj, baseQuery, mustWords, false);
    }

    // Modo "all_libraries": Combina Búsqueda Web Directa + Pexels + Openverse + Museos/iNat + Wikimedia
    if (onProgress) {
      onProgress(`Consultando Búsqueda Web + múltiples bibliotecas fotográficas para "${obj.name}"...`);
    }

    const isBio = obj.category === "animales" || obj.category === "naturaleza";

    const [webRes, pexelsRes, pixabayRes, unsplashRes, openverseRes, inatRes, cmaRes, wikiRes] = await Promise.all([
      fetchFromWebSearch(obj, customQuery),
      fetchFromPexels(obj, baseQuery),
      fetchFromPixabay(obj, baseQuery),
      fetchFromUnsplash(obj, baseQuery),
      fetchFromOpenverse(obj, baseQuery, mustWords),
      isBio ? fetchFromINaturalist(obj, baseQuery, mustWords) : Promise.resolve([]),
      !isBio ? fetchFromClevelandMuseum(obj, baseQuery, mustWords) : Promise.resolve([]),
      fetchFromWikimedia(obj, baseQuery, mustWords, false)
    ]);

    const activeStreams = [
      webRes,
      pexelsRes,
      unsplashRes,
      pixabayRes,
      openverseRes,
      inatRes,
      cmaRes,
      wikiRes
    ].filter((arr) => Array.isArray(arr) && arr.length > 0);

    return interleaveLibraries(activeStreams);
  }

  async function tryGenerateGeminiImages(obj, onProgress) {
    const angles = [
      "three-quarter front studio view",
      "side profile orthographic view",
      "high-angle 45 degree isometric view",
      "low-angle dramatic perspective",
      "Rembrandt chiaroscuro lighting study",
      "overhead top-down view",
      "rear three-quarter structural view",
      "backlit rim-light silhouette study",
      "close-up macro structural detail",
      "foreshortened dynamic studio angle"
    ];
    const results = [];
    for (let i = 0; i < 10; i++) {
      try {
        if (onProgress) onProgress(`Gemini 3.1 Flash Image: generando vista ${i + 1}/10...`);
        const prompt = `Studio reference photograph of ${obj.aiPromptSubject || obj.intitleQuery}, ${angles[i]}, isolated object, neutral background`;
        const dataUrl = await callGeminiImageGeneration(prompt);
        results.push({
          url: dataUrl,
          thumb: dataUrl,
          title: `${obj.name} — Vista IA #${i + 1} (${angles[i]})`,
          source: dataUrl,
          badge: "🤖 Gemini 3.1 Image"
        });
      } catch (_) {
        break;
      }
    }
    return results;
  }

  window.TrazoAI = {
    deck: new NonRepeatingDeck(),
    getApiKeys,
    setApiKeys,
    getGeminiApiKey,
    setGeminiApiKey,
    getRefSourceMode,
    setRefSourceMode,
    buildNaturalSearchQuery,
    fetchFromWebSearch,
    generateNewObjectWithAI,
    generateBatchObjectsWithAI,
    enrichCustomObjectWithAI,
    getTenMatchedReferences,
    fetchStrictlyVerifiedPhotos: getTenMatchedReferences
  };
})();
