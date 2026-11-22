// TRAZO IA — Controlador Principal (Baraja sin Repetición + IA + 10 Referencias Concordantes + Cronómetro)
(function () {
  "use strict";

  const AI = window.TrazoAI;
  const RING_CIRCUMFERENCE = 2 * Math.PI * 96;

  // Guías pedagógicas por duración
  const TIME_GUIDES = {
    30: {
      badge: "Gesto Puro (30s)",
      text: "<strong>Enfoque de 30 seg:</strong> Prohibido borrar. Captura únicamente la línea de acción, el peso y la silueta envolvente con trazos sueltos."
    },
    60: {
      badge: "Encaje Rápido (1m)",
      text: "<strong>Enfoque de 1 min:</strong> Mide proporciones generales (alto vs. ancho), ángulos principales y los grandes bloques sin entrar en detalles."
    },
    300: {
      badge: "Volumen 3D (5m)",
      text: "<strong>Enfoque de 5 min:</strong> Construye las formas geométricas básicas (cilindros, cajas, esferas), líneas de contorno y separa luz de sombra."
    },
    600: {
      badge: "Luz y Sombra (10m)",
      text: "<strong>Enfoque de 10 min:</strong> Define la anatomía o estructura secundaria y establece al menos 3 valores tonales (luz, medio tono y sombra)."
    },
    1800: {
      badge: "Estudio Completo (30m)",
      text: "<strong>Enfoque de 30 min:</strong> Estudio profundo. Refina bordes duros y suaves, sombras de oclusión, luz reflejada y texturas del material."
    }
  };

  // Rutinas guiadas para las 10 imágenes (en segundos)
  const WORKOUT_ROUTINES = {
    progressive: {
      name: "Progresiva Clásica",
      schedule: [30, 30, 30, 60, 60, 60, 300, 300, 600, 1800],
      desc: "Fotos 1-3: 30s · Fotos 4-6: 1m · Fotos 7-8: 5m · Foto 9: 10m · Foto 10: 30m."
    },
    gesture_warmup: {
      name: "Calentamiento Rápido Gesture",
      schedule: [30, 30, 30, 30, 30, 60, 60, 60, 60, 60],
      desc: "Fotos 1-5: 30s (línea de acción) · Fotos 6-10: 1 min (proporción rápida)."
    },
    block_in: {
      name: "Encaje y Construcción",
      schedule: [120, 120, 120, 120, 180, 180, 180, 180, 300, 300],
      desc: "Fotos 1-4: 2 min · Fotos 5-8: 3 min · Fotos 9-10: 5 min (volumen y ejes)."
    },
    academic_values: {
      name: "Estudio Académico de Valores",
      schedule: [120, 120, 300, 300, 300, 300, 600, 600, 600, 600],
      desc: "Fotos 1-2: 2 min (Notan) · Fotos 3-6: 5 min · Fotos 7-10: 10 min (sombreado)."
    }
  };
  const PROGRESSIVE_SCHEDULE = WORKOUT_ROUTINES.progressive.schedule;
  const FAV_STORAGE_KEY = "trazo_favorite_refs_v1";

  // Estado global
  const state = {
    selectedCategory: "all",
    currentObject: null,
    alternatives: [],

    // Las 10 referencias verificadas / IA + reserva del mismo objeto
    references: [],
    reservePool: [],
    currentRefIndex: 0,
    completedRefs: new Set(),
    viewMode: "single",

    // Filtros graduables de artista + Herramientas de Academia
    filters: {
      grayscalePct: 0,     // 0% a 100%
      contrastPct: 100,    // 50% a 350%
      brightnessPct: 100,  // 35% a 175%
      blurPx: 0,           // 0px a 45px
      posterizeLevels: 0,  // 0 (off), 2, 3, 4, 5
      thresholdActive: false,
      thresholdPct: 50,    // 10% a 90%
      edgesActive: false,
      flipH: false,
      grid: false,
      plumbActive: false,
      plumbX: 50,
      plumbY: 50,
      protractorActive: false,
      protA: { x: 30, y: 68 },
      protB: { x: 70, y: 32 },
      zoom: 1
    },

    // Superposición "Mi Dibujo vs. Referencia" (Modo Cebolla)
    overlayDrawing: {
      active: false,
      url: "",
      opacity: 55,
      scale: 100,
      blendMode: "multiply",
      offsetX: 0,
      offsetY: 0
    },

    // Modos de entrenamiento con el cronómetro
    trainingModes: {
      progressiveBlur: false,
      memoryFlash: false,
      peekingMemory: false,
      routineKey: "progressive"
    },

    // Configuración de Cuadrícula (Filas × Columnas) y Hoja de Papel (cm)
    gridConfig: {
      cols: 3,
      rows: 3,
      color: "amber",
      showDiagonals: true,
      showLabels: true,
      paperPreset: "A4",
      paperWidthCm: 21.0,
      paperHeightCm: 29.7,
      lockToPaperRatio: true,
      paperCropCover: false
    },

    // Cronómetro
    timerDuration: 300,
    timerRemaining: 300,
    timerRunning: false,
    timerIntervalId: null,
    progressiveMode: false,

    // Estadísticas
    sessionSketches: 0,
    sessionTotalSeconds: 0,

    // Audio
    audioCtx: null
  };

  // Referencias al DOM
  const els = {
    brandHomeBtn: document.getElementById("brandHomeBtn"),
    navStep1Btn: document.getElementById("navStep1Btn"),
    navStep2Btn: document.getElementById("navStep2Btn"),
    statDeckProgress: document.getElementById("statDeckProgress"),
    resetDeckBtn: document.getElementById("resetDeckBtn"),
    statSketchesCount: document.getElementById("statSketchesCount"),
    statTotalTime: document.getElementById("statTotalTime"),
    openFavoritesBtn: document.getElementById("openFavoritesBtn"),
    favRefsCount: document.getElementById("favRefsCount"),
    openAiSettingsBtn: document.getElementById("openAiSettingsBtn"),
    aiStatusLabel: document.getElementById("aiStatusLabel"),
    uploadCustomRefInput: document.getElementById("uploadCustomRefInput"),
    uploadUserDrawingInput: document.getElementById("uploadUserDrawingInput"),

    viewPicker: document.getElementById("viewPicker"),
    viewStudio: document.getElementById("viewStudio"),

    // Picker
    categoryBar: document.getElementById("categoryBar"),
    activeCategoryDesc: document.getElementById("activeCategoryDesc"),
    countAll: document.getElementById("countAll"),
    featuredObjectCard: document.getElementById("featuredObjectCard"),
    objCategoryTag: document.getElementById("objCategoryTag"),
    objAiBadge: document.getElementById("objAiBadge"),
    diceStatus: document.getElementById("diceStatus"),
    objIcon: document.getElementById("objIcon"),
    objTitle: document.getElementById("objTitle"),
    objTip: document.getElementById("objTip"),
    rollRandomBtn: document.getElementById("rollRandomBtn"),
    generateAiObjectBtn: document.getElementById("generateAiObjectBtn"),
    confirmObjectBtn: document.getElementById("confirmObjectBtn"),
    alternativesGrid: document.getElementById("alternativesGrid"),
    refreshAlternativesBtn: document.getElementById("refreshAlternativesBtn"),
    customObjectForm: document.getElementById("customObjectForm"),
    customObjectInput: document.getElementById("customObjectInput"),
    customObjectSubmitBtn: document.getElementById("customObjectSubmitBtn"),

    // Studio
    backToPickerBtn: document.getElementById("backToPickerBtn"),
    studioSubjectIcon: document.getElementById("studioSubjectIcon"),
    studioSubjectName: document.getElementById("studioSubjectName"),
    refCounterPill: document.getElementById("refCounterPill"),
    liveWebSearchForm: document.getElementById("liveWebSearchForm"),
    liveWebSearchInput: document.getElementById("liveWebSearchInput"),
    liveWebSearchBtn: document.getElementById("liveWebSearchBtn"),
    openGoogleImagesTabBtn: document.getElementById("openGoogleImagesTabBtn"),
    refSourceSelect: document.getElementById("refSourceSelect"),
    tabSingleView: document.getElementById("tabSingleView"),
    tabGridView: document.getElementById("tabGridView"),

    // Artist Toolbar & Badges
    toggleGrayscaleBtn: document.getElementById("toggleGrayscaleBtn"),
    toggleContrastBtn: document.getElementById("toggleContrastBtn"),
    toggleBlurBtn: document.getElementById("toggleBlurBtn"),
    togglePosterizeBtn: document.getElementById("togglePosterizeBtn"),
    toggleThresholdBtn: document.getElementById("toggleThresholdBtn"),
    toggleEdgesBtn: document.getElementById("toggleEdgesBtn"),
    toggleFilterPanelBtn: document.getElementById("toggleFilterPanelBtn"),
    toggleFlipBtn: document.getElementById("toggleFlipBtn"),
    togglePlumbBtn: document.getElementById("togglePlumbBtn"),
    toggleProtractorBtn: document.getElementById("toggleProtractorBtn"),
    toggleGridBtn: document.getElementById("toggleGridBtn"),
    toggleGridPanelBtn: document.getElementById("toggleGridPanelBtn"),
    uploadCustomRefBtn: document.getElementById("uploadCustomRefBtn"),
    toggleComparePanelBtn: document.getElementById("toggleComparePanelBtn"),
    toggleFavRefBtn: document.getElementById("toggleFavRefBtn"),
    badgeGrayscale: document.getElementById("badgeGrayscale"),
    badgeContrast: document.getElementById("badgeContrast"),
    badgeBlur: document.getElementById("badgeBlur"),
    badgePosterize: document.getElementById("badgePosterize"),
    badgeGridDims: document.getElementById("badgeGridDims"),
    zoomOutBtn: document.getElementById("zoomOutBtn"),
    zoomInBtn: document.getElementById("zoomInBtn"),
    zoomReadout: document.getElementById("zoomReadout"),
    replaceCurrentImgBtn: document.getElementById("replaceCurrentImgBtn"),
    fullscreenBtn: document.getElementById("fullscreenBtn"),

    // Filter Sliders Panel
    filterSlidersPanel: document.getElementById("filterSlidersPanel"),
    resetFiltersBtn: document.getElementById("resetFiltersBtn"),
    closeFilterPanelBtn: document.getElementById("closeFilterPanelBtn"),
    blurRangeInput: document.getElementById("blurRangeInput"),
    blurValueLabel: document.getElementById("blurValueLabel"),
    contrastRangeInput: document.getElementById("contrastRangeInput"),
    contrastValueLabel: document.getElementById("contrastValueLabel"),
    grayscaleRangeInput: document.getElementById("grayscaleRangeInput"),
    grayscaleValueLabel: document.getElementById("grayscaleValueLabel"),
    brightnessRangeInput: document.getElementById("brightnessRangeInput"),
    brightnessValueLabel: document.getElementById("brightnessValueLabel"),
    posterizeLevelsSelect: document.getElementById("posterizeLevelsSelect"),
    posterizeValueLabel: document.getElementById("posterizeValueLabel"),
    thresholdRangeInput: document.getElementById("thresholdRangeInput"),
    thresholdValueLabel: document.getElementById("thresholdValueLabel"),

    // Compare User Drawing Panel (Onion Skin)
    compareDrawingPanel: document.getElementById("compareDrawingPanel"),
    selectUserDrawingFileBtn: document.getElementById("selectUserDrawingFileBtn"),
    clearUserDrawingBtn: document.getElementById("clearUserDrawingBtn"),
    closeComparePanelBtn: document.getElementById("closeComparePanelBtn"),
    overlayOpacityInput: document.getElementById("overlayOpacityInput"),
    overlayOpacityLabel: document.getElementById("overlayOpacityLabel"),
    overlayScaleInput: document.getElementById("overlayScaleInput"),
    overlayScaleLabel: document.getElementById("overlayScaleLabel"),
    overlayBlendSelect: document.getElementById("overlayBlendSelect"),
    resetOverlayPosBtn: document.getElementById("resetOverlayPosBtn"),

    // Grid & Paper Size Panel
    gridPaperPanel: document.getElementById("gridPaperPanel"),
    makeSquareCellsBtn: document.getElementById("makeSquareCellsBtn"),
    closeGridPanelBtn: document.getElementById("closeGridPanelBtn"),
    gridColsInput: document.getElementById("gridColsInput"),
    colsMinusBtn: document.getElementById("colsMinusBtn"),
    colsPlusBtn: document.getElementById("colsPlusBtn"),
    gridRowsInput: document.getElementById("gridRowsInput"),
    rowsMinusBtn: document.getElementById("rowsMinusBtn"),
    rowsPlusBtn: document.getElementById("rowsPlusBtn"),
    gridColorSelect: document.getElementById("gridColorSelect"),
    gridShowDiagonalsCheck: document.getElementById("gridShowDiagonalsCheck"),
    gridShowLabelsCheck: document.getElementById("gridShowLabelsCheck"),
    paperPresetSelect: document.getElementById("paperPresetSelect"),
    paperWidthCmInput: document.getElementById("paperWidthCmInput"),
    paperHeightCmInput: document.getElementById("paperHeightCmInput"),
    swapPaperOrientationBtn: document.getElementById("swapPaperOrientationBtn"),
    lockToPaperRatioCheck: document.getElementById("lockToPaperRatioCheck"),
    paperCropCoverCheck: document.getElementById("paperCropCoverCheck"),
    paperRulerReadout: document.getElementById("paperRulerReadout"),
    paperFrameBadge: document.getElementById("paperFrameBadge"),

    // Stage, Overlays & Grid
    referenceStage: document.getElementById("referenceStage"),
    canvasViewport: document.getElementById("canvasViewport"),
    stageLoader: document.getElementById("stageLoader"),
    loaderMessage: document.getElementById("loaderMessage"),
    prevRefBtn: document.getElementById("prevRefBtn"),
    nextRefBtn: document.getElementById("nextRefBtn"),
    imageTransformWrapper: document.getElementById("imageTransformWrapper"),
    mainReferenceImg: document.getElementById("mainReferenceImg"),
    userDrawingOverlayImg: document.getElementById("userDrawingOverlayImg"),
    gridOverlay: document.getElementById("gridOverlay"),
    plumbLevelOverlay: document.getElementById("plumbLevelOverlay"),
    plumbLineV: document.getElementById("plumbLineV"),
    plumbLineH: document.getElementById("plumbLineH"),
    plumbPivotHandle: document.getElementById("plumbPivotHandle"),
    plumbCoordsBadge: document.getElementById("plumbCoordsBadge"),
    angleProtractorOverlay: document.getElementById("angleProtractorOverlay"),
    protractorRefHLine: document.getElementById("protractorRefHLine"),
    protractorRefVLine: document.getElementById("protractorRefVLine"),
    protractorArcPath: document.getElementById("protractorArcPath"),
    protractorMainLine: document.getElementById("protractorMainLine"),
    protractorHandleA: document.getElementById("protractorHandleA"),
    protractorHandleB: document.getElementById("protractorHandleB"),
    protractorReadoutBadge: document.getElementById("protractorReadoutBadge"),
    memoryVeilOverlay: document.getElementById("memoryVeilOverlay"),
    memoryVeilText: document.getElementById("memoryVeilText"),
    peekMemoryRefBtn: document.getElementById("peekMemoryRefBtn"),
    imageVerifiedBadge: document.getElementById("imageVerifiedBadge"),
    imageTitleCaption: document.getElementById("imageTitleCaption"),
    imageSourceLink: document.getElementById("imageSourceLink"),
    tenGridView: document.getElementById("tenGridView"),
    tenImagesGrid: document.getElementById("tenImagesGrid"),
    filmstripBar: document.getElementById("filmstripBar"),

    // Timer Sidebar
    timerGoalBadge: document.getElementById("timerGoalBadge"),
    customTimeToggleBtn: document.getElementById("customTimeToggleBtn"),
    customTimeRow: document.getElementById("customTimeRow"),
    customMinInput: document.getElementById("customMinInput"),
    customSecInput: document.getElementById("customSecInput"),
    applyCustomTimeBtn: document.getElementById("applyCustomTimeBtn"),
    timerRingProgress: document.getElementById("timerRingProgress"),
    timerDigits: document.getElementById("timerDigits"),
    timerSubstatus: document.getElementById("timerSubstatus"),
    timeFocusGuide: document.getElementById("timeFocusGuide"),
    timerStartPauseBtn: document.getElementById("timerStartPauseBtn"),
    timerResetBtn: document.getElementById("timerResetBtn"),
    timerCompleteNextBtn: document.getElementById("timerCompleteNextBtn"),
    autoAdvanceCheckbox: document.getElementById("autoAdvanceCheckbox"),
    soundEnabledCheckbox: document.getElementById("soundEnabledCheckbox"),
    progressiveBlurModeCheck: document.getElementById("progressiveBlurModeCheck"),
    memoryFlashModeCheck: document.getElementById("memoryFlashModeCheck"),
    workoutRoutineSelect: document.getElementById("workoutRoutineSelect"),
    startProgressiveSessionBtn: document.getElementById("startProgressiveSessionBtn"),
    sidebarObjName: document.getElementById("sidebarObjName"),
    sidebarObjTip: document.getElementById("sidebarObjTip"),

    // Modal AI & Image Libraries Settings
    aiSettingsModal: document.getElementById("aiSettingsModal"),
    closeAiSettingsBtn: document.getElementById("closeAiSettingsBtn"),
    cancelAiSettingsBtn: document.getElementById("cancelAiSettingsBtn"),
    saveAiSettingsBtn: document.getElementById("saveAiSettingsBtn"),
    pexelsApiKeyInput: document.getElementById("pexelsApiKeyInput"),
    pixabayApiKeyInput: document.getElementById("pixabayApiKeyInput"),
    unsplashApiKeyInput: document.getElementById("unsplashApiKeyInput"),
    geminiApiKeyInput: document.getElementById("geminiApiKeyInput"),
    modalRefSourceSelect: document.getElementById("modalRefSourceSelect"),

    // Toast
    toastNotification: document.getElementById("toastNotification"),
    toastIcon: document.getElementById("toastIcon"),
    toastTitle: document.getElementById("toastTitle"),
    toastBody: document.getElementById("toastBody")
  };

  // ==================== INICIALIZACIÓN ====================
  function init() {
    els.timerRingProgress.style.strokeDasharray = `${RING_CIRCUMFERENCE}`;
    els.timerRingProgress.style.strokeDashoffset = "0";

    // Sincronizar selector de modo de referencias y estado de Gemini API
    const savedMode = AI.getRefSourceMode();
    els.refSourceSelect.value = savedMode;
    els.modalRefSourceSelect.value = savedMode;
    updateAiHeaderStatus();
    updateFavCounterUI();

    // Inicializar cuadrícula dinámica, medidores y medidas de hoja
    renderDynamicGridOverlay();
    updatePlumbOverlayUI();
    updateProtractorOverlayUI();
    applyImageTransforms();

    // Sacar primer objeto sin repetir y 3 alternativas no vistas
    drawNextUniqueObject(false);
    generateAlternatives();
    updateDeckStatsUI();
    updateTimerUI();

    bindEvents();
  }

  function updateAiHeaderStatus() {
    const keys = AI.getApiKeys();
    const activeExtra = [keys.pexels && "Pexels", keys.pixabay && "Pixabay", keys.unsplash && "Unsplash", keys.gemini && "Gemini"].filter(Boolean);
    els.aiStatusLabel.textContent = activeExtra.length
      ? `4 Bases + ${activeExtra.join(" · ")}`
      : "Bibliotecas (4 Activas) + Pexels";
  }

  function updateDeckStatsUI() {
    const allObjects = AI.deck.getAllObjects();
    const allCount = allObjects.length;
    els.countAll.textContent = allCount;

    // Actualizar contadores en cada botón de categoría
    if (els.categoryBar) {
      els.categoryBar.querySelectorAll(".cat-btn").forEach((btn) => {
        const catId = btn.dataset.category;
        if (!catId || catId === "all") return;
        const catCount = allObjects.filter((o) => o.category === catId).length;
        let badge = btn.querySelector(".cat-count");
        if (!badge) {
          badge = document.createElement("span");
          badge.className = "cat-count";
          btn.appendChild(badge);
        }
        badge.textContent = catCount;
      });
    }

    const stats = AI.deck.getStats(state.selectedCategory);
    els.statDeckProgress.textContent = `${stats.seen}/${stats.total}`;
    els.diceStatus.textContent = `Sin repetir: quedan ${stats.remaining} de ${stats.total} en este mazo`;

    updateCategoryBannerUI(stats.total, allCount);
  }

  function updateCategoryBannerUI(catTotal, allCount) {
    if (!els.activeCategoryDesc) return;
    const catId = state.selectedCategory;
    if (!catId || catId === "all") {
      const catCount = Array.isArray(window.SKETCH_CATEGORIES) ? window.SKETCH_CATEGORIES.length : 15;
      els.activeCategoryDesc.innerHTML =
        `<span class="cat-desc-icon">✨</span>` +
        `<div class="cat-desc-text"><strong>Todas las Categorías (${catCount} especialidades · ${allCount} sujetos):</strong> ` +
        `Explora libremente arquitectura, botánica, figura humana, fauna, bodegón, vehículos, paisajes, tecnología retro, personajes, gastronomía, texturas, interiores, filigranas, diseño industrial y fantasía.</div>`;
      return;
    }

    const meta = (window.SKETCH_CATEGORIES || []).find((c) => c.id === catId);
    if (meta) {
      els.activeCategoryDesc.innerHTML =
        `<span class="cat-desc-icon">${meta.icon}</span>` +
        `<div class="cat-desc-text"><strong>${meta.name} (${catTotal} sujetos):</strong> ${meta.description}</div>`;
    }
  }

  let backgroundExpanding = false;

  async function autoExpandDeckInBackground() {
    if (backgroundExpanding) return;
    backgroundExpanding = true;
    try {
      const existingNames = AI.deck.getAllObjects().map((o) => o.name);
      const batch = await AI.generateBatchObjectsWithAI(state.selectedCategory, existingNames, 10);
      if (batch && batch.length > 0) {
        const added = AI.deck.addBatchUnseenAiObjects(batch);
        if (added > 0) {
          updateDeckStatsUI();
        }
      }
    } catch (e) {
      console.warn("Auto-expansión en segundo plano aviso:", e);
    } finally {
      backgroundExpanding = false;
    }
  }

  // ==================== SORTEO SIN REPETICIONES + GENERACIÓN CON IA ====================
  function drawNextUniqueObject(animate = true) {
    const nextObj = AI.deck.drawNext(state.selectedCategory, state.currentObject?.id);
    if (!nextObj) return;

    // Si quedan pocos objetos por ver en esta categoría, expandir el mazo automáticamente en segundo plano con IA
    const stats = AI.deck.getStats(state.selectedCategory);
    if (stats.remaining <= 20) {
      autoExpandDeckInBackground();
    }

    if (!animate) {
      setFeaturedObject(nextObj);
      updateDeckStatsUI();
      return;
    }

    els.featuredObjectCard.classList.add("rolling");
    setTimeout(() => {
      setFeaturedObject(nextObj);
      els.featuredObjectCard.classList.remove("rolling");
      updateDeckStatsUI();
      playTickSound(580, 0.04);
    }, 140);
  }

  function setFeaturedObject(obj) {
    state.currentObject = obj;
    els.objCategoryTag.textContent = obj.categoryLabel;
    els.objAiBadge.classList.toggle("hidden", !obj.isAiGenerated);
    els.objIcon.textContent = obj.icon || "✨";
    els.objTitle.textContent = obj.name;
    els.objTip.textContent = obj.tip;
  }

  function generateAlternatives() {
    state.alternatives = AI.deck.drawAlternatives(
      state.selectedCategory,
      state.currentObject?.id,
      3
    );

    els.alternativesGrid.innerHTML = "";
    state.alternatives.forEach((item) => {
      const btn = document.createElement("button");
      btn.className = "alt-object-card";
      btn.innerHTML = `
        <span class="alt-icon">${item.icon}</span>
        <div class="alt-info">
          <strong>${item.name}</strong>
          <span>${item.categoryLabel} · No visto</span>
        </div>
      `;
      btn.addEventListener("click", () => {
        AI.deck.markSeen(item.id);
        setFeaturedObject(item);
        updateDeckStatsUI();
        generateAlternatives();
        startStudioWithObject(item);
      });
      els.alternativesGrid.appendChild(btn);
    });
  }

  async function handleGenerateAiObject() {
    const btn = els.generateAiObjectBtn;
    const origHtml = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = "<span>⏳</span> Generando lote de nuevos objetos con IA...";
    els.featuredObjectCard.classList.add("rolling");

    try {
      const existingNames = AI.deck.getAllObjects().map((o) => o.name);
      const batch = await AI.generateBatchObjectsWithAI(state.selectedCategory, existingNames, 8);
      if (batch && batch.length > 0) {
        const firstObj = batch[0];
        const restObjs = batch.slice(1);
        AI.deck.addAiObject(firstObj, true);
        const extraAdded = AI.deck.addBatchUnseenAiObjects(restObjs);
        setFeaturedObject(firstObj);
        updateDeckStatsUI();
        generateAlternatives();
        showToast(
          `🤖 ¡+${1 + extraAdded} objetos nuevos añadidos por IA!`,
          `Mostrando "${firstObj.name}" y guardando ${extraAdded} inéditos más en tu mazo.`,
          "✨"
        );
      } else {
        const newObj = await AI.generateNewObjectWithAI(state.selectedCategory, existingNames);
        AI.deck.addAiObject(newObj, true);
        setFeaturedObject(newObj);
        updateDeckStatsUI();
        generateAlternatives();
      }
    } catch (err) {
      console.error("Error generando lote con IA:", err);
      showToast("Aviso de IA", "Sacando siguiente objeto único de la baraja de 500+ objetos.", "🎲");
      drawNextUniqueObject(false);
    } finally {
      btn.disabled = false;
      btn.innerHTML = origHtml;
      els.featuredObjectCard.classList.remove("rolling");
    }
  }

  // ==================== PASO 2: CARGAR 10 IMÁGENES DE REFERENCIA CONCORDANTES ====================
  async function startStudioWithObject(obj) {
    state.currentObject = obj;
    state.currentRefIndex = 0;
    state.completedRefs.clear();
    state.progressiveMode = false;
    els.startProgressiveSessionBtn.textContent = "⚡ Activar Rutina Progresiva (10 Sketches)";

    els.studioSubjectIcon.textContent = obj.icon || "✏️";
    els.studioSubjectName.textContent = obj.name;
    els.sidebarObjName.textContent = obj.name;
    els.sidebarObjTip.textContent = obj.tip;

    if (els.liveWebSearchInput) {
      els.liveWebSearchInput.value = AI.buildNaturalSearchQuery
        ? AI.buildNaturalSearchQuery(obj)
        : obj.name;
    }

    els.navStep2Btn.disabled = false;
    switchMainView("studio");

    pauseTimer();
    resetTimer();

    await reloadTenReferencesForCurrentObject();
  }

  async function reloadTenReferencesForCurrentObject(customQuery = "") {
    const obj = state.currentObject;
    if (!obj) return;

    const searchLabel = customQuery || obj.name;
    els.stageLoader.classList.remove("hidden");
    els.loaderMessage.textContent = `🔎 Buscando 10 imágenes en la Web para "${searchLabel}"...`;

    try {
      const allMatched = await AI.getTenMatchedReferences(
        obj,
        (msg) => {
          els.loaderMessage.textContent = msg;
        },
        customQuery
      );

      state.references = allMatched.slice(0, 10);
      state.reservePool = allMatched.slice(10);

      renderFilmstripAndGrid();
      selectReferenceImage(0);
    } catch (err) {
      console.error("Error obteniendo referencias:", err);
      els.stageLoader.classList.add("hidden");
    }
  }

  // ==================== VISOR DE REFERENCIAS Y REEMPLAZO CONCORDANTE ====================
  function selectReferenceImage(index) {
    if (!state.references.length) return;
    const safeIndex = ((index % state.references.length) + state.references.length) % state.references.length;
    state.currentRefIndex = safeIndex;

    const ref = state.references[safeIndex];
    els.stageLoader.classList.remove("hidden");
    els.loaderMessage.textContent = `Cargando referencia #${safeIndex + 1} de "${state.currentObject?.name}"...`;

    state.filters.zoom = 1;
    applyImageTransforms();

    const img = els.mainReferenceImg;
    img.onload = () => {
      els.stageLoader.classList.add("hidden");
      applyPaperAspectFrame();
    };
    img.onerror = () => {
      // Si el sitio web de origen bloquea hotlinking, usar inmediatamente la versión del CDN del buscador (fallbackUrl)
      if (ref.fallbackUrl && img.src !== ref.fallbackUrl) {
        ref.url = ref.fallbackUrl;
        img.src = ref.fallbackUrl;
        return;
      }
      replaceImageAt(safeIndex, true);
    };
    img.src = ref.url;

    els.refCounterPill.textContent = `Imagen ${safeIndex + 1} de ${state.references.length}`;
    els.imageVerifiedBadge.textContent = ref.badge || "🔎 Google / Web";
    els.imageTitleCaption.textContent = `Ref #${safeIndex + 1} · ${truncateText(ref.title, 62)}`;
    els.imageSourceLink.href = ref.source || ref.url;

    const activeRoutine = WORKOUT_ROUTINES[state.trainingModes.routineKey] || WORKOUT_ROUTINES.progressive;
    if (state.progressiveMode && activeRoutine.schedule[safeIndex]) {
      setTimerDuration(activeRoutine.schedule[safeIndex], false);
    }

    updateFavoriteButtonUI();
    updateActiveStatesInStripAndGrid();
  }

  async function replaceImageAt(index, silent = false) {
    if (state.reservePool.length > 0) {
      const replacement = state.reservePool.shift();
      state.references[index] = replacement;
      renderFilmstripAndGrid();
      selectReferenceImage(index);
      if (!silent) {
        showToast(
          "🔄 Nueva vista cargada",
          `Se cargó otra referencia verificada de "${state.currentObject?.name}".`
        );
      }
      return;
    }

    // Si se agotó la reserva inicial, recargar más fotos verificadas de Wikimedia / Openverse
    const obj = state.currentObject;
    if (!obj) return;
    try {
      const extra = await AI.fetchStrictlyVerifiedPhotos(obj, true);
      const currentUrls = new Set(state.references.map((r) => r.url));
      const fresh = extra.filter((r) => !currentUrls.has(r.url));
      if (fresh.length > 0) {
        state.references[index] = fresh[0];
        state.reservePool.push(...fresh.slice(1));
        renderFilmstripAndGrid();
        selectReferenceImage(index);
        if (!silent) {
          showToast("🔄 Nueva vista cargada", `Se cargó otro ángulo verificado de "${obj.name}".`);
        }
      } else {
        els.stageLoader.classList.add("hidden");
      }
    } catch (_) {
      els.stageLoader.classList.add("hidden");
    }
  }

  function renderFilmstripAndGrid() {
    els.filmstripBar.innerHTML = "";
    els.tenImagesGrid.innerHTML = "";

    state.references.forEach((ref, idx) => {
      const isDone = state.completedRefs.has(idx);
      const isActive = idx === state.currentRefIndex;

      // Miniatura en la tira inferior (1..10)
      const thumb = document.createElement("div");
      thumb.className = `thumb-item ${isActive ? "active" : ""}`;
      thumb.title = `${ref.title}`;
      thumb.innerHTML = `
        <img src="${ref.thumb}" alt="Ref ${idx + 1}" loading="lazy" />
        <span class="thumb-num">#${idx + 1}</span>
        ${isDone ? '<span class="thumb-check" title="Sketch completado">✓</span>' : ""}
      `;
      thumb.addEventListener("click", () => {
        selectReferenceImage(idx);
        if (state.viewMode === "grid") setStudioViewMode("single");
      });
      els.filmstripBar.appendChild(thumb);

      // Tarjeta en la vista cuadrícula de las 10 referencias
      const card = document.createElement("div");
      card.className = `grid-ref-card ${isActive ? "active" : ""}`;
      card.innerHTML = `
        <img src="${ref.url}" alt="Referencia ${idx + 1}" loading="lazy" />
        <span class="grid-ref-badge">#${idx + 1} · ${ref.badge ? ref.badge.split(" ")[0] : "🔎"}</span>
        ${isDone ? '<span class="grid-ref-done">✓ Hecho</span>' : ""}
      `;
      const cardImg = card.querySelector("img");
      if (cardImg) {
        cardImg.onerror = () => {
          const fb = ref.fallbackUrl || ref.thumb;
          if (fb && cardImg.src !== fb) {
            cardImg.src = fb;
          }
        };
      }
      card.addEventListener("click", () => {
        selectReferenceImage(idx);
        setStudioViewMode("single");
      });
      els.tenImagesGrid.appendChild(card);
    });
  }

  function updateActiveStatesInStripAndGrid() {
    const thumbs = els.filmstripBar.querySelectorAll(".thumb-item");
    thumbs.forEach((t, idx) => {
      t.classList.toggle("active", idx === state.currentRefIndex);
      const existingCheck = t.querySelector(".thumb-check");
      if (state.completedRefs.has(idx) && !existingCheck) {
        const chk = document.createElement("span");
        chk.className = "thumb-check";
        chk.textContent = "✓";
        t.appendChild(chk);
      }
    });

    const cards = els.tenImagesGrid.querySelectorAll(".grid-ref-card");
    cards.forEach((c, idx) => {
      c.classList.toggle("active", idx === state.currentRefIndex);
    });
  }

  function setStudioViewMode(mode) {
    state.viewMode = mode;
    const isSingle = mode === "single";
    els.tabSingleView.classList.toggle("active", isSingle);
    els.tabGridView.classList.toggle("active", !isSingle);
    els.referenceStage.classList.toggle("hidden", !isSingle);
    els.tenGridView.classList.toggle("hidden", isSingle);
  }

  // ==================== HERRAMIENTAS DE ARTISTA (FILTROS GRADUABLES + CUADRÍCULA Y HOJA) ====================
  const PAPER_PRESETS = {
    A4: { w: 21.0, h: 29.7, label: "A4" },
    A3: { w: 29.7, h: 42.0, label: "A3" },
    A5: { w: 14.8, h: 21.0, label: "A5" },
    letter: { w: 21.6, h: 27.9, label: "Carta" },
    square: { w: 20.0, h: 20.0, label: "Cuadrado" }
  };

  const GRID_COLORS = {
    amber: { main: "rgba(245, 158, 11, 0.85)", sub: "rgba(56, 189, 248, 0.78)", text: "#fde68a", bg: "rgba(15, 23, 42, 0.78)" },
    cyan: { main: "rgba(56, 189, 248, 0.88)", sub: "rgba(245, 158, 11, 0.78)", text: "#bae6fd", bg: "rgba(15, 23, 42, 0.78)" },
    red: { main: "rgba(244, 63, 94, 0.88)", sub: "rgba(255, 255, 255, 0.65)", text: "#fecdd3", bg: "rgba(15, 23, 42, 0.78)" },
    white: { main: "rgba(255, 255, 255, 0.88)", sub: "rgba(245, 158, 11, 0.75)", text: "#ffffff", bg: "rgba(15, 23, 42, 0.82)" },
    green: { main: "rgba(34, 197, 94, 0.88)", sub: "rgba(255, 255, 255, 0.65)", text: "#bbf7d0", bg: "rgba(15, 23, 42, 0.78)" },
    black: { main: "rgba(15, 23, 42, 0.92)", sub: "rgba(220, 38, 38, 0.75)", text: "#f8fafc", bg: "rgba(15, 23, 42, 0.85)" }
  };

  function updateSvgFilterTables() {
    const f = state.filters;
    // 1. Posterización / Mapa de Valores (2, 3, 4, 5 tonos)
    if (f.posterizeLevels >= 2) {
      const n = f.posterizeLevels;
      const vals = [];
      for (let i = 0; i < n; i++) {
        vals.push((i / (n - 1)).toFixed(3));
      }
      const tableStr = vals.join(" ");
      ["posterizeFuncR", "posterizeFuncG", "posterizeFuncB"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute("tableValues", tableStr);
      });
    }

    // 2. Silueta Pura / Umbral (Threshold 10% a 90%)
    if (f.thresholdActive) {
      const steps = 20;
      const cutoff = Math.max(1, Math.min(steps - 1, Math.round((f.thresholdPct / 100) * steps)));
      const vals = [];
      for (let i = 0; i < steps; i++) {
        vals.push(i < cutoff ? "0" : "1");
      }
      const tableStr = vals.join(" ");
      ["thresholdFuncR", "thresholdFuncG", "thresholdFuncB"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute("tableValues", tableStr);
      });
    }
  }

  function applyImageTransforms() {
    const f = state.filters;
    const img = els.mainReferenceImg;

    updateSvgFilterTables();

    // Calcular desenfoque efectivo (incluyendo el Modo "De Masas a Detalles" si el reloj está corriendo)
    let effectiveBlur = f.blurPx;
    if (state.timerRunning && state.trainingModes.progressiveBlur && state.timerDuration > 0) {
      const ratioRemaining = state.timerRemaining / state.timerDuration;
      if (ratioRemaining > 0.66) {
        effectiveBlur = Math.max(effectiveBlur, 22);
      } else if (ratioRemaining > 0.33) {
        effectiveBlur = Math.max(effectiveBlur, 9);
      }
    }

    // Aplicar cadena de filtros CSS + Filtros SVG matemáticos (Posterización, Silueta, Contornos)
    const filterParts = [];
    if (f.grayscalePct > 0) filterParts.push(`grayscale(${f.grayscalePct}%)`);
    if (f.contrastPct !== 100) filterParts.push(`contrast(${f.contrastPct}%)`);
    if (f.brightnessPct !== 100) filterParts.push(`brightness(${f.brightnessPct}%)`);
    if (effectiveBlur > 0) filterParts.push(`blur(${effectiveBlur}px)`);
    if (f.thresholdActive) {
      filterParts.push("url(#svgThresholdFilter)");
    } else if (f.edgesActive) {
      filterParts.push("url(#svgEdgeFilter)");
    } else if (f.posterizeLevels >= 2) {
      filterParts.push("url(#svgPosterizeFilter)");
    }
    img.style.filter = filterParts.length > 0 ? filterParts.join(" ") : "none";

    // Sincronizar botones y badges de la barra de herramientas
    els.toggleGrayscaleBtn.classList.toggle("active", f.grayscalePct > 0);
    els.toggleContrastBtn.classList.toggle("active", f.contrastPct !== 100 || f.brightnessPct !== 100);
    els.toggleBlurBtn.classList.toggle("active", f.blurPx > 0 || effectiveBlur > 0);
    if (els.togglePosterizeBtn) els.togglePosterizeBtn.classList.toggle("active", f.posterizeLevels >= 2);
    if (els.toggleThresholdBtn) els.toggleThresholdBtn.classList.toggle("active", f.thresholdActive);
    if (els.toggleEdgesBtn) els.toggleEdgesBtn.classList.toggle("active", f.edgesActive);
    els.toggleFlipBtn.classList.toggle("active", f.flipH);
    if (els.togglePlumbBtn) els.togglePlumbBtn.classList.toggle("active", f.plumbActive);
    if (els.toggleProtractorBtn) els.toggleProtractorBtn.classList.toggle("active", f.protractorActive);
    els.toggleGridBtn.classList.toggle("active", f.grid);

    if (els.badgeGrayscale) els.badgeGrayscale.textContent = `${f.grayscalePct}%`;
    if (els.badgeContrast) els.badgeContrast.textContent = `${f.contrastPct}%`;
    if (els.badgeBlur) els.badgeBlur.textContent = `${effectiveBlur}px`;
    if (els.badgePosterize) {
      els.badgePosterize.textContent = f.posterizeLevels >= 2 ? `${f.posterizeLevels}T` : "Off";
    }

    // Sincronizar deslizadores y etiquetas
    if (els.grayscaleRangeInput) els.grayscaleRangeInput.value = f.grayscalePct;
    if (els.grayscaleValueLabel) els.grayscaleValueLabel.textContent = `${f.grayscalePct}%`;
    if (els.contrastRangeInput) els.contrastRangeInput.value = f.contrastPct;
    if (els.contrastValueLabel) els.contrastValueLabel.textContent = `${f.contrastPct}%`;
    if (els.brightnessRangeInput) els.brightnessRangeInput.value = f.brightnessPct;
    if (els.brightnessValueLabel) els.brightnessValueLabel.textContent = `${f.brightnessPct}%`;
    if (els.blurRangeInput) els.blurRangeInput.value = f.blurPx;
    if (els.blurValueLabel) els.blurValueLabel.textContent = `${effectiveBlur} px`;
    if (els.posterizeLevelsSelect) els.posterizeLevelsSelect.value = String(f.posterizeLevels);
    if (els.posterizeValueLabel) {
      els.posterizeValueLabel.textContent =
        f.posterizeLevels >= 2 ? `${f.posterizeLevels} Tonos` : "Desactivado";
    }
    if (els.thresholdRangeInput) els.thresholdRangeInput.value = f.thresholdPct;
    if (els.thresholdValueLabel) els.thresholdValueLabel.textContent = `${f.thresholdPct}%`;

    // Mostrar/ocultar cuadrícula SVG, Plomada y Transportador de Ángulos
    els.gridOverlay.classList.toggle("visible", f.grid);
    if (els.plumbLevelOverlay) els.plumbLevelOverlay.classList.toggle("hidden", !f.plumbActive);
    if (els.angleProtractorOverlay) els.angleProtractorOverlay.classList.toggle("hidden", !f.protractorActive);

    // Aplicar superposición de "Mi Dibujo" (Modo Cebolla)
    updateUserDrawingOverlayUI();

    // Aplicar proporción de hoja de papel si la cuadrícula está activa y el ajuste a hoja está marcado
    applyPaperAspectFrame();

    // Aplicar espejo y zoom
    const scaleX = f.flipH ? -f.zoom : f.zoom;
    const scaleY = f.zoom;
    els.imageTransformWrapper.style.transform = `scale(${scaleX}, ${scaleY})`;
    els.zoomReadout.textContent = `${Math.round(f.zoom * 100)}%`;
  }

  // ==================== PLOMADA VERTICAL Y NIVEL HORIZONTAL ====================
  function updatePlumbOverlayUI() {
    if (!els.plumbLevelOverlay) return;
    const x = Math.max(2, Math.min(98, state.filters.plumbX));
    const y = Math.max(2, Math.min(98, state.filters.plumbY));
    state.filters.plumbX = x;
    state.filters.plumbY = y;

    if (els.plumbLineV) els.plumbLineV.style.left = `${x}%`;
    if (els.plumbLineH) els.plumbLineH.style.top = `${y}%`;
    if (els.plumbPivotHandle) {
      els.plumbPivotHandle.style.left = `${x}%`;
      els.plumbPivotHandle.style.top = `${y}%`;
    }
    if (els.plumbCoordsBadge) {
      els.plumbCoordsBadge.textContent = `Plomada X: ${x.toFixed(1)}% · Nivel Y: ${y.toFixed(1)}%`;
    }
  }

  // ==================== MEDIDOR DE ÁNGULOS / TRANSPORTADOR SIGHT-SIZE ====================
  function updateProtractorOverlayUI() {
    if (!els.angleProtractorOverlay) return;
    const a = state.filters.protA;
    const b = state.filters.protB;

    const ax = a.x * 10;
    const ay = a.y * 10;
    const bx = b.x * 10;
    const by = b.y * 10;

    if (els.protractorMainLine) {
      els.protractorMainLine.setAttribute("x1", ax.toFixed(1));
      els.protractorMainLine.setAttribute("y1", ay.toFixed(1));
      els.protractorMainLine.setAttribute("x2", bx.toFixed(1));
      els.protractorMainLine.setAttribute("y2", by.toFixed(1));
    }
    if (els.protractorRefHLine) {
      els.protractorRefHLine.setAttribute("x1", Math.min(ax, bx - 120).toFixed(1));
      els.protractorRefHLine.setAttribute("y1", ay.toFixed(1));
      els.protractorRefHLine.setAttribute("x2", Math.max(bx, ax + 180).toFixed(1));
      els.protractorRefHLine.setAttribute("y2", ay.toFixed(1));
    }
    if (els.protractorRefVLine) {
      els.protractorRefVLine.setAttribute("x1", ax.toFixed(1));
      els.protractorRefVLine.setAttribute("y1", Math.min(ay, by) - 60);
      els.protractorRefVLine.setAttribute("x2", ax.toFixed(1));
      els.protractorRefVLine.setAttribute("y2", Math.max(ay, by) + 60);
    }

    // Arco de ángulo en SVG
    const dx = bx - ax;
    const dy = by - ay;
    const dist = Math.hypot(dx, dy);
    const radius = Math.min(90, Math.max(35, dist * 0.35));
    const angleRad = Math.atan2(dy, dx);
    const arcEndX = ax + radius * Math.cos(angleRad);
    const arcEndY = ay + radius * Math.sin(angleRad);
    const sweepFlag = dy < 0 ? 0 : 1;
    if (els.protractorArcPath) {
      els.protractorArcPath.setAttribute(
        "d",
        `M ${ax.toFixed(1)} ${ay.toFixed(1)} L ${(ax + radius).toFixed(1)} ${ay.toFixed(1)} A ${radius.toFixed(1)} ${radius.toFixed(1)} 0 0 ${sweepFlag} ${arcEndX.toFixed(1)} ${arcEndY.toFixed(1)} Z`
      );
    }

    if (els.protractorHandleA) {
      els.protractorHandleA.style.left = `${a.x}%`;
      els.protractorHandleA.style.top = `${a.y}%`;
    }
    if (els.protractorHandleB) {
      els.protractorHandleB.style.left = `${b.x}%`;
      els.protractorHandleB.style.top = `${b.y}%`;
    }

    // Cálculo de grados respecto a la horizontal (0°..90°) y aguja de reloj
    const degFromHoriz = Math.abs((Math.atan2(-dy, dx) * 180) / Math.PI);
    const acuteHoriz = degFromHoriz > 90 ? 180 - degFromHoriz : degFromHoriz;
    const clockDeg = ((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360;
    const totalMinutes = Math.round((clockDeg / 360) * 720) % 720;
    const clockH = Math.floor(totalMinutes / 60) || 12;
    const clockM = String(Math.round((totalMinutes % 60) / 5) * 5 % 60).padStart(2, "0");
    const relLenPct = Math.round(Math.hypot(b.x - a.x, b.y - a.y));

    if (els.protractorReadoutBadge) {
      els.protractorReadoutBadge.textContent =
        `📐 Ángulo: ${acuteHoriz.toFixed(1)}° horiz (${(90 - acuteHoriz).toFixed(1)}° vert) · 🕒 Aguja: ${clockH}:${clockM} · Largo: ${relLenPct}%`;
    }
  }

  // ==================== SUPERPOSICIÓN CEBOLLA ("MI DIBUJO VS. REFERENCIA") ====================
  function updateUserDrawingOverlayUI() {
    const ov = state.overlayDrawing;
    const el = els.userDrawingOverlayImg;
    if (!el) return;

    const visible = Boolean(ov.active && ov.url);
    el.classList.toggle("hidden", !visible);
    if (els.toggleComparePanelBtn) {
      els.toggleComparePanelBtn.classList.toggle("active", visible || !els.compareDrawingPanel.classList.contains("hidden"));
    }

    if (!visible) return;
    if (el.getAttribute("src") !== ov.url) {
      el.src = ov.url;
    }
    el.style.opacity = (ov.opacity / 100).toFixed(2);
    el.style.mixBlendMode = ov.blendMode || "multiply";
    el.style.transform = `translate(${ov.offsetX}px, ${ov.offsetY}px) scale(${(ov.scale / 100).toFixed(2)})`;

    if (els.overlayOpacityInput) els.overlayOpacityInput.value = ov.opacity;
    if (els.overlayOpacityLabel) els.overlayOpacityLabel.textContent = `${ov.opacity}%`;
    if (els.overlayScaleInput) els.overlayScaleInput.value = ov.scale;
    if (els.overlayScaleLabel) els.overlayScaleLabel.textContent = `${ov.scale}%`;
    if (els.overlayBlendSelect) els.overlayBlendSelect.value = ov.blendMode;
  }

  // ==================== FAVORITOS ("MIS REFERENCIAS GUARDADAS") ====================
  function getSavedFavorites() {
    try {
      const raw = localStorage.getItem(FAV_STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch (_) {
      return [];
    }
  }

  function saveFavoritesList(list) {
    try {
      localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(list.slice(0, 120)));
    } catch (_) {}
    updateFavCounterUI();
    updateFavoriteButtonUI();
  }

  function updateFavCounterUI() {
    if (!els.favRefsCount) return;
    els.favRefsCount.textContent = String(getSavedFavorites().length);
  }

  function updateFavoriteButtonUI() {
    if (!els.toggleFavRefBtn) return;
    const currentRef = state.references[state.currentRefIndex];
    if (!currentRef) {
      els.toggleFavRefBtn.classList.remove("fav-active");
      els.toggleFavRefBtn.textContent = "☆ Favorito";
      return;
    }
    const favs = getSavedFavorites();
    const isFav = favs.some((item) => item.url === currentRef.url);
    els.toggleFavRefBtn.classList.toggle("fav-active", isFav);
    els.toggleFavRefBtn.textContent = isFav ? "⭐ Guardado" : "☆ Favorito";
  }

  function toggleFavoriteCurrentRef() {
    const currentRef = state.references[state.currentRefIndex];
    if (!currentRef) return;
    const favs = getSavedFavorites();
    const existingIdx = favs.findIndex((item) => item.url === currentRef.url);
    if (existingIdx >= 0) {
      favs.splice(existingIdx, 1);
      saveFavoritesList(favs);
      showToast("☆ Quitado de Favoritos", "La referencia se eliminó de tu colección guardada.", "☆");
    } else {
      favs.unshift({
        url: currentRef.url,
        thumb: currentRef.thumb || currentRef.url,
        fallbackUrl: currentRef.fallbackUrl || currentRef.thumb || currentRef.url,
        title: currentRef.title || state.currentObject?.name || "Referencia Favorita",
        source: currentRef.source || currentRef.url,
        badge: "⭐ Favorito Guardado",
        subjectName: state.currentObject?.name || "Favoritos"
      });
      saveFavoritesList(favs);
      showToast("⭐ Guardado en Favoritos", "Puedes abrir tus referencias favoritas en cualquier momento desde la barra superior.", "⭐");
    }
  }

  function openFavoritesSession() {
    const favs = getSavedFavorites();
    if (favs.length === 0) {
      showToast(
        "⭐ Aún no tienes favoritos",
        "Pulsa el botón '☆ Favorito' (o la tecla L) sobre cualquier foto en el Estudio para guardarla aquí.",
        "⭐"
      );
      return;
    }
    pauseTimer();
    const favObj = {
      id: "favorites-collection",
      name: `Mis Referencias Favoritas (${favs.length})`,
      category: "simples",
      categoryLabel: "Colección Personal ⭐",
      icon: "⭐",
      intitleQuery: "drawing reference",
      tip: "Practica sobre tu selección personal de referencias favoritas usando el mapa de valores, plomada o medidor de ángulos."
    };
    state.currentObject = favObj;
    state.references = favs.slice(0, 10);
    state.reservePool = favs.slice(10);
    state.completedRefs.clear();

    els.studioSubjectIcon.textContent = "⭐";
    els.studioSubjectName.textContent = favObj.name;
    els.sidebarObjName.textContent = favObj.name;
    els.sidebarObjTip.textContent = favObj.tip;
    els.navStep2Btn.disabled = false;

    switchMainView("studio");
    setStudioViewMode("single");
    renderFilmstripAndGrid();
    selectReferenceImage(0);
    showToast("⭐ Colección de Favoritos abierta", `Cargadas ${state.references.length} referencias de tu carpeta personal.`, "⭐");
  }

  // ==================== SUBIR FOTO PROPIA / PEGAR CON CTRL+V ====================
  function loadCustomFilesIntoStudio(files) {
    const imageFiles = Array.from(files || []).filter((f) => f && f.type && f.type.startsWith("image/"));
    if (imageFiles.length === 0) return;

    const customRefs = imageFiles.map((file, i) => {
      const objUrl = URL.createObjectURL(file);
      return {
        url: objUrl,
        thumb: objUrl,
        fallbackUrl: objUrl,
        title: file.name || `Foto Propia #${i + 1}`,
        source: objUrl,
        badge: "📂 Tu Foto Local"
      };
    });

    if (!state.currentObject || !els.viewStudio.classList.contains("active")) {
      const customObj = {
        id: "user-uploaded-" + Date.now(),
        name: imageFiles.length === 1 ? imageFiles[0].name.replace(/\.[^.]+$/, "") : `Mis Fotos Cargadas (${imageFiles.length})`,
        category: "simples",
        categoryLabel: "Foto Propia Cargada 📂",
        icon: "📂",
        intitleQuery: "custom reference",
        tip: "Usa el Mapa de Valores (Notan), la Cuadrícula a medida en cm o la Plomada para encajar tu propia fotografía."
      };
      state.currentObject = customObj;
      state.references = customRefs.slice(0, 10);
      state.reservePool = customRefs.slice(10);
      state.completedRefs.clear();
      els.studioSubjectIcon.textContent = "📂";
      els.studioSubjectName.textContent = customObj.name;
      els.sidebarObjName.textContent = customObj.name;
      els.sidebarObjTip.textContent = customObj.tip;
      els.navStep2Btn.disabled = false;
      switchMainView("studio");
      setStudioViewMode("single");
      renderFilmstripAndGrid();
      selectReferenceImage(0);
    } else if (customRefs.length === 1 && state.references.length > 0) {
      state.references[state.currentRefIndex] = customRefs[0];
      renderFilmstripAndGrid();
      selectReferenceImage(state.currentRefIndex);
    } else {
      state.references = customRefs.slice(0, 10);
      state.reservePool = customRefs.slice(10);
      renderFilmstripAndGrid();
      selectReferenceImage(0);
    }

    showToast(
      "📂 Foto de referencia cargada",
      `Lista para estudiar con filtros, cuadrícula en cm, plomada y medidor de ángulos.`,
      "📂"
    );
  }

  function applyPaperAspectFrame() {
    const g = state.gridConfig;
    const f = state.filters;
    const wrapper = els.imageTransformWrapper;
    const img = els.mainReferenceImg;

    const shouldLockPaper = f.grid && g.lockToPaperRatio && g.paperWidthCm > 0 && g.paperHeightCm > 0;
    wrapper.classList.toggle("paper-ratio-locked", shouldLockPaper);

    if (els.paperFrameBadge) {
      els.paperFrameBadge.classList.toggle("hidden", !shouldLockPaper);
      if (shouldLockPaper) {
        els.paperFrameBadge.textContent = `📐 Hoja ${g.paperWidthCm.toFixed(1)} × ${g.paperHeightCm.toFixed(1)} cm (${g.cols}×${g.rows})`;
      }
    }

    if (!shouldLockPaper) {
      wrapper.style.width = "";
      wrapper.style.height = "";
      img.style.objectFit = "contain";
      return;
    }

    // Calcular dimensiones en píxeles dentro del escenario respetando exactamente el ratio Ancho:Alto del papel
    const stageRect = els.canvasViewport.getBoundingClientRect();
    const maxW = Math.max(260, (stageRect.width || 680) - 36);
    const maxH = Math.max(260, Math.min((stageRect.height || 520) - 36, window.innerHeight * 0.62));
    const targetRatio = g.paperWidthCm / g.paperHeightCm;

    let frameW = maxW;
    let frameH = frameW / targetRatio;
    if (frameH > maxH) {
      frameH = maxH;
      frameW = frameH * targetRatio;
    }

    wrapper.style.width = `${Math.round(frameW)}px`;
    wrapper.style.height = `${Math.round(frameH)}px`;
    img.style.objectFit = g.paperCropCover ? "cover" : "contain";
  }

  function renderDynamicGridOverlay() {
    const g = state.gridConfig;
    const cols = Math.max(1, Math.min(30, parseInt(g.cols, 10) || 3));
    const rows = Math.max(1, Math.min(30, parseInt(g.rows, 10) || 3));
    g.cols = cols;
    g.rows = rows;

    if (els.badgeGridDims) {
      els.badgeGridDims.textContent = `${cols}×${rows}`;
    }

    const palette = GRID_COLORS[g.color] || GRID_COLORS.amber;
    const svgParts = [];

    // 1. Ejes centrales y diagonales (si están activos)
    if (g.showDiagonals) {
      svgParts.push(
        `<line x1="0" y1="0" x2="1000" y2="1000" stroke="${palette.sub}" stroke-width="1.3" stroke-dasharray="6 6" opacity="0.55" vector-effect="non-scaling-stroke" />`,
        `<line x1="1000" y1="0" x2="0" y2="1000" stroke="${palette.sub}" stroke-width="1.3" stroke-dasharray="6 6" opacity="0.55" vector-effect="non-scaling-stroke" />`,
        `<line x1="500" y1="0" x2="500" y2="1000" stroke="${palette.sub}" stroke-width="1.6" stroke-dasharray="10 5" opacity="0.75" vector-effect="non-scaling-stroke" />`,
        `<line x1="0" y1="500" x2="1000" y2="500" stroke="${palette.sub}" stroke-width="1.6" stroke-dasharray="10 5" opacity="0.75" vector-effect="non-scaling-stroke" />`
      );
    }

    // 2. Líneas verticales (Columnas)
    for (let c = 1; c < cols; c++) {
      const x = ((c / cols) * 1000).toFixed(2);
      svgParts.push(
        `<line x1="${x}" y1="0" x2="${x}" y2="1000" stroke="${palette.main}" stroke-width="1.6" vector-effect="non-scaling-stroke" />`
      );
    }

    // 3. Líneas horizontales (Filas)
    for (let r = 1; r < rows; r++) {
      const y = ((r / rows) * 1000).toFixed(2);
      svgParts.push(
        `<line x1="0" y1="${y}" x2="1000" y2="${y}" stroke="${palette.main}" stroke-width="1.6" vector-effect="non-scaling-stroke" />`
      );
    }

    // 4. Borde perimetral de la hoja
    svgParts.push(
      `<rect x="1" y="1" width="998" height="998" fill="none" stroke="${palette.main}" stroke-width="2.2" vector-effect="non-scaling-stroke" />`
    );

    // 5. Etiquetas de coordenadas (A, B, C... en columnas y 1, 2, 3... en filas)
    if (g.showLabels && cols <= 20 && rows <= 20) {
      for (let c = 0; c < cols; c++) {
        const cx = (((c + 0.5) / cols) * 1000).toFixed(1);
        const colLetter = String.fromCharCode(65 + (c % 26));
        svgParts.push(
          `<g transform="translate(${cx}, 22)">
            <rect x="-16" y="-15" width="32" height="22" rx="4" fill="${palette.bg}" />
            <text x="0" y="1" text-anchor="middle" fill="${palette.text}" font-size="15" font-family="JetBrains Mono, monospace" font-weight="700">${colLetter}</text>
          </g>`
        );
      }

      for (let r = 0; r < rows; r++) {
        const ry = (((r + 0.5) / rows) * 1000).toFixed(1);
        svgParts.push(
          `<g transform="translate(22, ${ry})">
            <rect x="-16" y="-12" width="32" height="22" rx="4" fill="${palette.bg}" />
            <text x="0" y="4" text-anchor="middle" fill="${palette.text}" font-size="15" font-family="JetBrains Mono, monospace" font-weight="700">${r + 1}</text>
          </g>`
        );
      }
    }

    els.gridOverlay.innerHTML = svgParts.join("");
    updatePaperRulerReadout();
    applyPaperAspectFrame();
  }

  function updatePaperRulerReadout() {
    if (!els.paperRulerReadout) return;
    const g = state.gridConfig;
    const w = Math.max(1, Number(g.paperWidthCm) || 21);
    const h = Math.max(1, Number(g.paperHeightCm) || 29.7);
    const cellW = w / g.cols;
    const cellH = h / g.rows;

    // Marcas acumuladas en cm para que el artista marque con la regla sin tener que multiplicar
    const xMarks = [];
    for (let c = 1; c < Math.min(g.cols, 10); c++) {
      xMarks.push(`${(cellW * c).toFixed(2)}`);
    }
    const yMarks = [];
    for (let r = 1; r < Math.min(g.rows, 10); r++) {
      yMarks.push(`${(cellH * r).toFixed(2)}`);
    }

    const xMarksText = xMarks.length ? ` (marcas en X: <strong>${xMarks.join(" · ")} cm</strong>)` : "";
    const yMarksText = yMarks.length ? ` (marcas en Y: <strong>${yMarks.join(" · ")} cm</strong>)` : "";

    els.paperRulerReadout.innerHTML =
      `📏 <strong>Guía con regla para tu hoja (${w.toFixed(1)} × ${h.toFixed(1)} cm):</strong> ` +
      `Cada celda mide <strong>${cellW.toFixed(2)} cm de ancho × ${cellH.toFixed(2)} cm de alto</strong>.<br/>` +
      `↳ Traza <strong>${g.cols} columnas</strong> cada <strong>${cellW.toFixed(2)} cm</strong>${xMarksText} y ` +
      `<strong>${g.rows} filas</strong> cada <strong>${cellH.toFixed(2)} cm</strong>${yMarksText}.`;
  }

  // ==================== CRONÓMETRO Y MODOS DE ENTRENAMIENTO ====================
  function setTimerDuration(seconds, disableProgressive = true) {
    pauseTimer();
    if (disableProgressive) {
      state.progressiveMode = false;
      els.startProgressiveSessionBtn.textContent = "⚡ Iniciar Rutina Seleccionada (10 Fotos)";
    }

    state.timerDuration = seconds;
    state.timerRemaining = seconds;

    document.querySelectorAll(".preset-time-btn").forEach((btn) => {
      const btnSec = Number(btn.dataset.seconds);
      btn.classList.toggle("active", btnSec === seconds);
    });

    const guide = TIME_GUIDES[seconds] || {
      badge: `Personalizado (${formatMMSS(seconds)})`,
      text: `<strong>Enfoque a medida (${formatMMSS(seconds)}):</strong> Distribuye tu tiempo entre observación inicial (20%), construcción (40%) y definición tonal (40%).`
    };

    const activeRoutine = WORKOUT_ROUTINES[state.trainingModes.routineKey] || WORKOUT_ROUTINES.progressive;
    els.timerGoalBadge.textContent = state.progressiveMode
      ? `${activeRoutine.name} · Foto #${state.currentRefIndex + 1}`
      : guide.badge;
    els.timeFocusGuide.innerHTML = guide.text;
    els.timerSubstatus.textContent = "Listo para empezar";

    updateTimerUI();
  }

  let peekMemoryTimeout = null;
  function triggerPeekMemory(seconds = 3) {
    state.trainingModes.peekingMemory = true;
    updateMemoryVeilUI();
    if (peekMemoryTimeout) clearTimeout(peekMemoryTimeout);
    peekMemoryTimeout = setTimeout(() => {
      state.trainingModes.peekingMemory = false;
      updateMemoryVeilUI();
    }, seconds * 1000);
  }

  function updateMemoryVeilUI() {
    if (!els.memoryVeilOverlay) return;
    if (!state.timerRunning || !state.trainingModes.memoryFlash || state.trainingModes.peekingMemory) {
      els.memoryVeilOverlay.classList.add("hidden");
      return;
    }

    const dur = state.timerDuration;
    const rem = state.timerRemaining;
    const elapsed = dur - rem;
    // Mostrar referencia los primeros min(15s, 25% de la duración) y revelarla en los últimos min(12s, 18%)
    const observeSeconds = Math.max(5, Math.min(18, Math.round(dur * 0.25)));
    const revealLastSeconds = Math.max(5, Math.min(15, Math.round(dur * 0.18)));

    const shouldHide = elapsed >= observeSeconds && rem > revealLastSeconds;
    els.memoryVeilOverlay.classList.toggle("hidden", !shouldHide);
    if (shouldHide && els.memoryVeilText) {
      els.memoryVeilText.textContent = `Dibuja de memoria lo que observaste. La imagen volverá a revelarse cuando falten ${revealLastSeconds}s para que compares tu encaje.`;
    }
  }

  function startTimer() {
    if (state.timerRunning) return;
    if (state.timerRemaining <= 0) {
      state.timerRemaining = state.timerDuration;
    }

    state.timerRunning = true;
    els.timerStartPauseBtn.innerHTML = "⏸ Pausar Cronómetro";
    els.timerSubstatus.textContent = `Dibujando Ref #${state.currentRefIndex + 1}...`;
    els.timerRingProgress.classList.add("running");
    applyImageTransforms();
    updateMemoryVeilUI();

    state.timerIntervalId = setInterval(() => {
      state.timerRemaining -= 1;
      state.sessionTotalSeconds += 1;
      updateSessionStatsUI();

      if (state.timerRemaining > 0 && state.timerRemaining <= 5) {
        playTickSound(720, 0.05);
      }

      updateTimerUI();

      if (state.timerRemaining <= 0) {
        onTimerFinished();
      }
    }, 1000);
  }

  function pauseTimer() {
    state.timerRunning = false;
    if (state.timerIntervalId) {
      clearInterval(state.timerIntervalId);
      state.timerIntervalId = null;
    }
    els.timerStartPauseBtn.innerHTML =
      state.timerRemaining < state.timerDuration && state.timerRemaining > 0
        ? "▶ Continuar Sketch"
        : "▶ Iniciar Sketch";
    els.timerRingProgress.classList.remove("running");
    if (state.timerRemaining > 0 && state.timerRemaining < state.timerDuration) {
      els.timerSubstatus.textContent = "En pausa";
    }
    applyImageTransforms();
    updateMemoryVeilUI();
  }

  function resetTimer() {
    pauseTimer();
    state.timerRemaining = state.timerDuration;
    els.timerSubstatus.textContent = "Listo para empezar";
    els.timerStartPauseBtn.innerHTML = "▶ Iniciar Sketch";
    updateTimerUI();
  }

  function onTimerFinished() {
    pauseTimer();
    playCompletionBell();

    state.completedRefs.add(state.currentRefIndex);
    state.sessionSketches += 1;
    updateSessionStatsUI();
    updateActiveStatesInStripAndGrid();

    const finishedNum = state.currentRefIndex + 1;
    const autoNext = els.autoAdvanceCheckbox.checked;

    if (autoNext && state.currentRefIndex < state.references.length - 1) {
      const nextIdx = state.currentRefIndex + 1;
      showToast(
        `🔔 ¡Sketch #${finishedNum} completado!`,
        `Avanzando automáticamente a la Referencia #${nextIdx + 1} de ${state.references.length}.`
      );
      selectReferenceImage(nextIdx);
      state.timerRemaining = state.timerDuration;
      updateTimerUI();
      setTimeout(() => {
        startTimer();
      }, 1400);
    } else if (state.currentRefIndex === state.references.length - 1 && state.completedRefs.size >= state.references.length) {
      els.timerSubstatus.textContent = "¡10/10 referencias completadas!";
      showToast(
        "🎉 ¡Sesión de 10 Sketches Completada!",
        `Has dibujado las 10 referencias de ${state.currentObject?.name}.`
      );
    } else {
      els.timerSubstatus.textContent = "¡Tiempo terminado!";
      showToast(
        `🔔 ¡Tiempo cumplido (${formatMMSS(state.timerDuration)})!`,
        `Referencia #${finishedNum} completada.`
      );
    }
  }

  function updateTimerUI() {
    els.timerDigits.textContent = formatMMSS(state.timerRemaining);
    const fraction = state.timerDuration > 0 ? state.timerRemaining / state.timerDuration : 0;
    const offset = RING_CIRCUMFERENCE * (1 - fraction);
    els.timerRingProgress.style.strokeDashoffset = `${offset}`;

    const isUrgent = state.timerRemaining > 0 && state.timerRemaining <= Math.min(10, Math.floor(state.timerDuration * 0.2));
    els.timerRingProgress.classList.toggle("urgent", isUrgent);

    if (state.timerRunning) {
      if (state.trainingModes.progressiveBlur) {
        applyImageTransforms();
        if (fraction > 0.66) {
          els.timerSubstatus.textContent = "🌫️ Fase 1/3: Grandes Masas (22px)";
        } else if (fraction > 0.33) {
          els.timerSubstatus.textContent = "🌫️ Fase 2/3: Formas Medias (9px)";
        } else {
          els.timerSubstatus.textContent = "✨ Fase 3/3: Nitidez 100% (Detalles)";
        }
      }
      if (state.trainingModes.memoryFlash) {
        updateMemoryVeilUI();
      }
    }
  }

  function updateSessionStatsUI() {
    els.statSketchesCount.textContent = state.sessionSketches;
    const mins = Math.floor(state.sessionTotalSeconds / 60);
    const secs = state.sessionTotalSeconds % 60;
    els.statTotalTime.textContent = `${mins}m ${String(secs).padStart(2, "0")}s`;
  }

  // ==================== AUDIO WEB API ====================
  function getAudioContext() {
    if (!state.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) state.audioCtx = new AudioCtx();
    }
    if (state.audioCtx && state.audioCtx.state === "suspended") {
      state.audioCtx.resume();
    }
    return state.audioCtx;
  }

  function playTickSound(freq = 660, duration = 0.04) {
    if (!els.soundEnabledCheckbox.checked) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (_) {}
  }

  function playCompletionBell() {
    if (!els.soundEnabledCheckbox.checked) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = ctx.currentTime + i * 0.09;
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.14, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0008, startTime + 0.9);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.92);
      });
    } catch (_) {}
  }

  // ==================== NAVEGACIÓN Y EVENTOS ====================
  function switchMainView(target) {
    const isPicker = target === "picker";
    const isStudio = target === "studio";

    els.viewPicker.classList.toggle("active", isPicker);
    els.viewStudio.classList.toggle("active", isStudio);

    els.navStep1Btn.classList.toggle("active", isPicker);
    els.navStep2Btn.classList.toggle("active", isStudio);

    if (isPicker) pauseTimer();
  }

  let toastTimeout = null;
  function showToast(title, body, icon = "🔔") {
    els.toastIcon.textContent = icon;
    els.toastTitle.textContent = title;
    els.toastBody.textContent = body;
    els.toastNotification.classList.remove("hidden");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      els.toastNotification.classList.add("hidden");
    }, 4200);
  }

  function formatMMSS(totalSec) {
    const s = Math.max(0, Math.floor(totalSec));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function truncateText(str, max) {
    if (!str) return "";
    return str.length > max ? str.slice(0, max - 1) + "…" : str;
  }

  function bindEvents() {
    els.brandHomeBtn.addEventListener("click", () => switchMainView("picker"));
    els.navStep1Btn.addEventListener("click", () => switchMainView("picker"));
    els.navStep2Btn.addEventListener("click", () => {
      if (!els.navStep2Btn.disabled) switchMainView("studio");
    });
    els.backToPickerBtn.addEventListener("click", () => switchMainView("picker"));

    // Reiniciar historial de objetos vistos
    els.resetDeckBtn.addEventListener("click", () => {
      AI.deck.resetHistory();
      if (state.currentObject) AI.deck.markSeen(state.currentObject.id);
      updateDeckStatsUI();
      showToast("🗂️ Baraja reiniciada", "Se ha limpiado la memoria de objetos vistos.", "↺");
    });

    // Modal de Configuración de Bibliotecas e IA
    const openSettingsModal = () => {
      const keys = AI.getApiKeys();
      if (els.pexelsApiKeyInput) els.pexelsApiKeyInput.value = keys.pexels;
      if (els.pixabayApiKeyInput) els.pixabayApiKeyInput.value = keys.pixabay;
      if (els.unsplashApiKeyInput) els.unsplashApiKeyInput.value = keys.unsplash;
      if (els.geminiApiKeyInput) els.geminiApiKeyInput.value = keys.gemini;
      els.modalRefSourceSelect.value = AI.getRefSourceMode();
      els.aiSettingsModal.classList.remove("hidden");
    };

    els.openAiSettingsBtn.addEventListener("click", openSettingsModal);
    const closeModal = () => els.aiSettingsModal.classList.add("hidden");
    els.closeAiSettingsBtn.addEventListener("click", closeModal);
    els.cancelAiSettingsBtn.addEventListener("click", closeModal);
    els.saveAiSettingsBtn.addEventListener("click", () => {
      AI.setApiKeys({
        pexels: els.pexelsApiKeyInput ? els.pexelsApiKeyInput.value : "",
        pixabay: els.pixabayApiKeyInput ? els.pixabayApiKeyInput.value : "",
        unsplash: els.unsplashApiKeyInput ? els.unsplashApiKeyInput.value : "",
        gemini: els.geminiApiKeyInput ? els.geminiApiKeyInput.value : ""
      });
      const chosenMode = els.modalRefSourceSelect.value;
      AI.setRefSourceMode(chosenMode);
      els.refSourceSelect.value = chosenMode;
      updateAiHeaderStatus();
      closeModal();
      showToast("📚 Bibliotecas guardadas", "Tus claves y preferencias de bibliotecas están activas.", "✅");
      if (els.viewStudio.classList.contains("active") && state.currentObject) {
        reloadTenReferencesForCurrentObject();
      }
    });

    // Cambiar fuente de referencias en vivo desde el estudio
    els.refSourceSelect.addEventListener("change", () => {
      const mode = els.refSourceSelect.value;
      const keys = AI.getApiKeys();
      if (mode === "pexels" && !keys.pexels) {
        showToast("🟢 Clave de Pexels requerida", "Pega tu clave gratuita de Pexels API para usar el modo exclusivo Pexels.", "🔑");
        openSettingsModal();
      }
      AI.setRefSourceMode(mode);
      els.modalRefSourceSelect.value = mode;
      const customQ = els.liveWebSearchInput ? els.liveWebSearchInput.value.trim() : "";
      reloadTenReferencesForCurrentObject(customQ);
    });

    // Buscador Web en Vivo en la barra superior del Estudio
    if (els.liveWebSearchForm) {
      els.liveWebSearchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const customQ = els.liveWebSearchInput.value.trim();
        if (!customQ) return;
        AI.setRefSourceMode("google_web");
        els.refSourceSelect.value = "google_web";
        els.modalRefSourceSelect.value = "google_web";
        reloadTenReferencesForCurrentObject(customQ);
        showToast("🔎 Búsqueda Web actualizada", `Mostrando 10 imágenes de la web para "${customQ}".`, "🔎");
      });
    }

    if (els.openGoogleImagesTabBtn) {
      els.openGoogleImagesTabBtn.addEventListener("click", () => {
        const q =
          (els.liveWebSearchInput && els.liveWebSearchInput.value.trim()) ||
          state.currentObject?.name ||
          "";
        if (!q) return;
        window.open(
          `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q)}`,
          "_blank",
          "noopener,noreferrer"
        );
      });
    }

    // Categorías
    els.categoryBar.querySelectorAll(".cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        els.categoryBar.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.selectedCategory = btn.dataset.category;
        drawNextUniqueObject(true);
        generateAlternatives();
      });
    });

    // Siguiente objeto sin repetir
    els.rollRandomBtn.addEventListener("click", () => {
      drawNextUniqueObject(true);
      generateAlternatives();
    });

    // Crear objeto inédito con IA
    els.generateAiObjectBtn.addEventListener("click", () => {
      handleGenerateAiObject();
    });

    // Confirmar objeto actual
    els.confirmObjectBtn.addEventListener("click", () => {
      if (state.currentObject) {
        startStudioWithObject(state.currentObject);
      }
    });

    els.refreshAlternativesBtn.addEventListener("click", () => {
      generateAlternatives();
    });

    // Objeto escrito por el usuario (enriquecido con IA para que las 10 referencias concuerden)
    els.customObjectForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const val = els.customObjectInput.value.trim();
      if (!val) return;

      const btn = els.customObjectSubmitBtn;
      const origText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "🤖 Analizando objeto con IA...";

      try {
        const enrichedObj = await AI.enrichCustomObjectWithAI(val);
        AI.deck.addAiObject(enrichedObj);
        els.customObjectInput.value = "";
        setFeaturedObject(enrichedObj);
        updateDeckStatsUI();
        startStudioWithObject(enrichedObj);
      } finally {
        btn.disabled = false;
        btn.textContent = origText;
      }
    });

    // Pestañas Vista Estudio vs Vista 10 Imágenes
    els.tabSingleView.addEventListener("click", () => setStudioViewMode("single"));
    els.tabGridView.addEventListener("click", () => setStudioViewMode("grid"));

    // Anterior / Siguiente referencia
    els.prevRefBtn.addEventListener("click", () => selectReferenceImage(state.currentRefIndex - 1));
    els.nextRefBtn.addEventListener("click", () => selectReferenceImage(state.currentRefIndex + 1));

    // ==================== EVENTOS DE FILTROS GRADUABLES (B/N, CONTRASTE, BRILLO, MASAS) ====================
    const openFilterPanel = () => {
      els.filterSlidersPanel.classList.remove("hidden");
      els.toggleFilterPanelBtn.classList.add("active");
    };

    els.toggleFilterPanelBtn.addEventListener("click", () => {
      const hidden = els.filterSlidersPanel.classList.toggle("hidden");
      els.toggleFilterPanelBtn.classList.toggle("active", !hidden);
    });

    els.closeFilterPanelBtn.addEventListener("click", () => {
      els.filterSlidersPanel.classList.add("hidden");
      els.toggleFilterPanelBtn.classList.remove("active");
    });

    els.toggleGrayscaleBtn.addEventListener("click", () => {
      state.filters.grayscalePct = state.filters.grayscalePct > 0 ? 0 : 100;
      openFilterPanel();
      applyImageTransforms();
    });

    els.toggleContrastBtn.addEventListener("click", () => {
      state.filters.contrastPct = state.filters.contrastPct !== 100 ? 100 : 190;
      openFilterPanel();
      applyImageTransforms();
    });

    els.toggleBlurBtn.addEventListener("click", () => {
      state.filters.blurPx = state.filters.blurPx > 0 ? 0 : 10;
      openFilterPanel();
      applyImageTransforms();
    });

    els.grayscaleRangeInput.addEventListener("input", () => {
      state.filters.grayscalePct = Number(els.grayscaleRangeInput.value);
      applyImageTransforms();
    });

    els.contrastRangeInput.addEventListener("input", () => {
      state.filters.contrastPct = Number(els.contrastRangeInput.value);
      applyImageTransforms();
    });

    els.brightnessRangeInput.addEventListener("input", () => {
      state.filters.brightnessPct = Number(els.brightnessRangeInput.value);
      applyImageTransforms();
    });

    els.blurRangeInput.addEventListener("input", () => {
      state.filters.blurPx = Number(els.blurRangeInput.value);
      applyImageTransforms();
    });

    // Posterización / Mapa de Valores (Notan 2, 3, 4, 5 tonos)
    if (els.togglePosterizeBtn) {
      els.togglePosterizeBtn.addEventListener("click", () => {
        const order = [0, 2, 3, 4, 5];
        const nextIdx = (order.indexOf(state.filters.posterizeLevels) + 1) % order.length;
        state.filters.posterizeLevels = order[nextIdx];
        if (state.filters.posterizeLevels >= 2) {
          state.filters.thresholdActive = false;
          state.filters.edgesActive = false;
          openFilterPanel();
        }
        applyImageTransforms();
      });
    }

    if (els.posterizeLevelsSelect) {
      els.posterizeLevelsSelect.addEventListener("change", () => {
        state.filters.posterizeLevels = Number(els.posterizeLevelsSelect.value) || 0;
        if (state.filters.posterizeLevels >= 2) {
          state.filters.thresholdActive = false;
          state.filters.edgesActive = false;
        }
        applyImageTransforms();
      });
    }

    // Silueta Pura (Umbral / Threshold)
    if (els.toggleThresholdBtn) {
      els.toggleThresholdBtn.addEventListener("click", () => {
        state.filters.thresholdActive = !state.filters.thresholdActive;
        if (state.filters.thresholdActive) {
          state.filters.edgesActive = false;
          openFilterPanel();
        }
        applyImageTransforms();
      });
    }

    if (els.thresholdRangeInput) {
      els.thresholdRangeInput.addEventListener("input", () => {
        state.filters.thresholdPct = Number(els.thresholdRangeInput.value) || 50;
        if (!state.filters.thresholdActive) {
          state.filters.thresholdActive = true;
          state.filters.edgesActive = false;
        }
        applyImageTransforms();
      });
    }

    // Detector de Contornos / Líneas de Fuerza
    if (els.toggleEdgesBtn) {
      els.toggleEdgesBtn.addEventListener("click", () => {
        state.filters.edgesActive = !state.filters.edgesActive;
        if (state.filters.edgesActive) {
          state.filters.thresholdActive = false;
        }
        applyImageTransforms();
      });
    }

    document.querySelectorAll(".step-nudge-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const inputEl = document.getElementById(btn.dataset.target);
        if (!inputEl) return;
        const step = Number(btn.dataset.step) || 1;
        const min = Number(inputEl.min);
        const max = Number(inputEl.max);
        const nextVal = Math.max(min, Math.min(max, +(Number(inputEl.value) + step).toFixed(2)));
        inputEl.value = nextVal;
        inputEl.dispatchEvent(new Event("input"));
      });
    });

    els.resetFiltersBtn.addEventListener("click", () => {
      state.filters.grayscalePct = 0;
      state.filters.contrastPct = 100;
      state.filters.brightnessPct = 100;
      state.filters.blurPx = 0;
      state.filters.posterizeLevels = 0;
      state.filters.thresholdActive = false;
      state.filters.thresholdPct = 50;
      state.filters.edgesActive = false;
      applyImageTransforms();
    });

    // ==================== PLOMADA VERTICAL Y NIVEL HORIZONTAL INTERACTIVOS ====================
    if (els.togglePlumbBtn) {
      els.togglePlumbBtn.addEventListener("click", () => {
        state.filters.plumbActive = !state.filters.plumbActive;
        updatePlumbOverlayUI();
        applyImageTransforms();
      });
    }

    if (els.plumbLevelOverlay) {
      let draggingPlumb = false;
      const movePlumbFromEvent = (e) => {
        const rect = els.plumbLevelOverlay.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        state.filters.plumbX = ((clientX - rect.left) / rect.width) * 100;
        state.filters.plumbY = ((clientY - rect.top) / rect.height) * 100;
        updatePlumbOverlayUI();
      };
      els.plumbLevelOverlay.addEventListener("pointerdown", (e) => {
        draggingPlumb = true;
        els.plumbLevelOverlay.setPointerCapture?.(e.pointerId);
        movePlumbFromEvent(e);
      });
      els.plumbLevelOverlay.addEventListener("pointermove", (e) => {
        if (draggingPlumb) movePlumbFromEvent(e);
      });
      els.plumbLevelOverlay.addEventListener("pointerup", () => {
        draggingPlumb = false;
      });
    }

    // ==================== MEDIDOR DE ÁNGULOS / TRANSPORTADOR SIGHT-SIZE ====================
    if (els.toggleProtractorBtn) {
      els.toggleProtractorBtn.addEventListener("click", () => {
        state.filters.protractorActive = !state.filters.protractorActive;
        updateProtractorOverlayUI();
        applyImageTransforms();
      });
    }

    const bindProtractorHandle = (handleEl, pointKey) => {
      if (!handleEl) return;
      let dragging = false;
      handleEl.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        dragging = true;
        handleEl.setPointerCapture?.(e.pointerId);
      });
      handleEl.addEventListener("pointermove", (e) => {
        if (!dragging || !els.angleProtractorOverlay) return;
        const rect = els.angleProtractorOverlay.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        state.filters[pointKey].x = Math.max(2, Math.min(98, ((e.clientX - rect.left) / rect.width) * 100));
        state.filters[pointKey].y = Math.max(2, Math.min(98, ((e.clientY - rect.top) / rect.height) * 100));
        updateProtractorOverlayUI();
      });
      handleEl.addEventListener("pointerup", () => {
        dragging = false;
      });
    };
    bindProtractorHandle(els.protractorHandleA, "protA");
    bindProtractorHandle(els.protractorHandleB, "protB");

    // ==================== SUBIR FOTO PROPIA / PEGAR CON CTRL+V / FAVORITOS ====================
    if (els.uploadCustomRefBtn && els.uploadCustomRefInput) {
      els.uploadCustomRefBtn.addEventListener("click", () => {
        els.uploadCustomRefInput.click();
      });
      els.uploadCustomRefInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files.length > 0) {
          loadCustomFilesIntoStudio(e.target.files);
          e.target.value = "";
        }
      });
    }

    // Pegar imagen directamente desde el portapapeles con Ctrl+V
    window.addEventListener("paste", (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      const imageFiles = [];
      for (const item of items) {
        if (item.type && item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (file) imageFiles.push(file);
        }
      }
      if (imageFiles.length > 0) {
        loadCustomFilesIntoStudio(imageFiles);
      }
    });

    // Arrastrar y soltar imagen sobre el escenario
    if (els.referenceStage) {
      els.referenceStage.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      els.referenceStage.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer?.files?.length) {
          loadCustomFilesIntoStudio(e.dataTransfer.files);
        }
      });
    }

    if (els.toggleFavRefBtn) {
      els.toggleFavRefBtn.addEventListener("click", () => {
        toggleFavoriteCurrentRef();
      });
    }
    if (els.openFavoritesBtn) {
      els.openFavoritesBtn.addEventListener("click", () => {
        openFavoritesSession();
      });
    }

    // ==================== COMPARADOR CEBOLLA ("MI DIBUJO VS. REFERENCIA") ====================
    if (els.toggleComparePanelBtn && els.compareDrawingPanel) {
      els.toggleComparePanelBtn.addEventListener("click", () => {
        const hidden = els.compareDrawingPanel.classList.toggle("hidden");
        updateUserDrawingOverlayUI();
        if (!hidden && !state.overlayDrawing.url && els.uploadUserDrawingInput) {
          els.uploadUserDrawingInput.click();
        }
      });
    }
    if (els.closeComparePanelBtn) {
      els.closeComparePanelBtn.addEventListener("click", () => {
        els.compareDrawingPanel.classList.add("hidden");
        updateUserDrawingOverlayUI();
      });
    }
    if (els.selectUserDrawingFileBtn && els.uploadUserDrawingInput) {
      els.selectUserDrawingFileBtn.addEventListener("click", () => {
        els.uploadUserDrawingInput.click();
      });
      els.uploadUserDrawingInput.addEventListener("change", (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        state.overlayDrawing.url = URL.createObjectURL(file);
        state.overlayDrawing.active = true;
        state.overlayDrawing.offsetX = 0;
        state.overlayDrawing.offsetY = 0;
        els.compareDrawingPanel.classList.remove("hidden");
        updateUserDrawingOverlayUI();
        showToast("👁️ Dibujo superpuesto", "Ajusta la opacidad o arrástralo para comparar proporciones con la referencia.", "👁️");
        e.target.value = "";
      });
    }
    if (els.clearUserDrawingBtn) {
      els.clearUserDrawingBtn.addEventListener("click", () => {
        state.overlayDrawing.active = false;
        state.overlayDrawing.url = "";
        updateUserDrawingOverlayUI();
      });
    }
    if (els.overlayOpacityInput) {
      els.overlayOpacityInput.addEventListener("input", () => {
        state.overlayDrawing.opacity = Number(els.overlayOpacityInput.value);
        updateUserDrawingOverlayUI();
      });
    }
    if (els.overlayScaleInput) {
      els.overlayScaleInput.addEventListener("input", () => {
        state.overlayDrawing.scale = Number(els.overlayScaleInput.value);
        updateUserDrawingOverlayUI();
      });
    }
    if (els.overlayBlendSelect) {
      els.overlayBlendSelect.addEventListener("change", () => {
        state.overlayDrawing.blendMode = els.overlayBlendSelect.value;
        updateUserDrawingOverlayUI();
      });
    }
    if (els.resetOverlayPosBtn) {
      els.resetOverlayPosBtn.addEventListener("click", () => {
        state.overlayDrawing.offsetX = 0;
        state.overlayDrawing.offsetY = 0;
        state.overlayDrawing.scale = 100;
        updateUserDrawingOverlayUI();
      });
    }
    if (els.userDrawingOverlayImg) {
      let draggingOverlay = false;
      let startX = 0;
      let startY = 0;
      els.userDrawingOverlayImg.addEventListener("pointerdown", (e) => {
        draggingOverlay = true;
        startX = e.clientX - state.overlayDrawing.offsetX;
        startY = e.clientY - state.overlayDrawing.offsetY;
        els.userDrawingOverlayImg.setPointerCapture?.(e.pointerId);
      });
      els.userDrawingOverlayImg.addEventListener("pointermove", (e) => {
        if (!draggingOverlay) return;
        state.overlayDrawing.offsetX = Math.round(e.clientX - startX);
        state.overlayDrawing.offsetY = Math.round(e.clientY - startY);
        updateUserDrawingOverlayUI();
      });
      els.userDrawingOverlayImg.addEventListener("pointerup", () => {
        draggingOverlay = false;
      });
    }

    // ==================== EVENTOS DE CUADRÍCULA (FILAS × COLUMNAS) Y TAMAÑO DE HOJA ====================
    const openGridPanel = () => {
      els.gridPaperPanel.classList.remove("hidden");
      els.toggleGridPanelBtn.classList.add("active");
    };

    els.toggleGridBtn.addEventListener("click", () => {
      state.filters.grid = !state.filters.grid;
      if (state.filters.grid) openGridPanel();
      applyImageTransforms();
    });

    els.toggleGridPanelBtn.addEventListener("click", () => {
      const hidden = els.gridPaperPanel.classList.toggle("hidden");
      els.toggleGridPanelBtn.classList.toggle("active", !hidden);
      if (!hidden && !state.filters.grid) {
        state.filters.grid = true;
        applyImageTransforms();
      }
    });

    els.closeGridPanelBtn.addEventListener("click", () => {
      els.gridPaperPanel.classList.add("hidden");
      els.toggleGridPanelBtn.classList.remove("active");
    });

    const syncColsRows = (colsVal, rowsVal) => {
      state.gridConfig.cols = Math.max(1, Math.min(30, parseInt(colsVal, 10) || 3));
      state.gridConfig.rows = Math.max(1, Math.min(30, parseInt(rowsVal, 10) || 3));
      els.gridColsInput.value = state.gridConfig.cols;
      els.gridRowsInput.value = state.gridConfig.rows;
      if (!state.filters.grid) state.filters.grid = true;
      renderDynamicGridOverlay();
      applyImageTransforms();
    };

    els.gridColsInput.addEventListener("input", () => syncColsRows(els.gridColsInput.value, state.gridConfig.rows));
    els.gridRowsInput.addEventListener("input", () => syncColsRows(state.gridConfig.cols, els.gridRowsInput.value));
    els.colsMinusBtn.addEventListener("click", () => syncColsRows(state.gridConfig.cols - 1, state.gridConfig.rows));
    els.colsPlusBtn.addEventListener("click", () => syncColsRows(state.gridConfig.cols + 1, state.gridConfig.rows));
    els.rowsMinusBtn.addEventListener("click", () => syncColsRows(state.gridConfig.cols, state.gridConfig.rows - 1));
    els.rowsPlusBtn.addEventListener("click", () => syncColsRows(state.gridConfig.cols, state.gridConfig.rows + 1));

    // Ajustar automáticamente el número de filas para que las celdas sean lo más cuadradas posible en tu hoja física
    els.makeSquareCellsBtn.addEventListener("click", () => {
      const g = state.gridConfig;
      const cellW = g.paperWidthCm / g.cols;
      const idealRows = Math.max(1, Math.min(30, Math.round(g.paperHeightCm / cellW)));
      syncColsRows(g.cols, idealRows);
      showToast(
        "⊞ Celdas cuadradas ajustadas",
        `Con ${g.cols} columnas en tu hoja de ${g.paperWidthCm}×${g.paperHeightCm} cm, se ajustaron ${idealRows} filas (${(g.paperWidthCm / g.cols).toFixed(2)} × ${(g.paperHeightCm / idealRows).toFixed(2)} cm por celda).`,
        "📐"
      );
    });

    els.gridColorSelect.addEventListener("change", () => {
      state.gridConfig.color = els.gridColorSelect.value;
      renderDynamicGridOverlay();
    });

    els.gridShowDiagonalsCheck.addEventListener("change", () => {
      state.gridConfig.showDiagonals = els.gridShowDiagonalsCheck.checked;
      renderDynamicGridOverlay();
    });

    els.gridShowLabelsCheck.addEventListener("change", () => {
      state.gridConfig.showLabels = els.gridShowLabelsCheck.checked;
      renderDynamicGridOverlay();
    });

    els.paperPresetSelect.addEventListener("change", () => {
      const presetKey = els.paperPresetSelect.value;
      state.gridConfig.paperPreset = presetKey;
      const preset = PAPER_PRESETS[presetKey];
      if (preset) {
        state.gridConfig.paperWidthCm = preset.w;
        state.gridConfig.paperHeightCm = preset.h;
        els.paperWidthCmInput.value = preset.w.toFixed(1);
        els.paperHeightCmInput.value = preset.h.toFixed(1);
      }
      if (!state.filters.grid) state.filters.grid = true;
      renderDynamicGridOverlay();
      applyImageTransforms();
    });

    const onCustomCmChange = () => {
      const w = Math.max(2, Math.min(200, parseFloat(els.paperWidthCmInput.value) || 21.0));
      const h = Math.max(2, Math.min(200, parseFloat(els.paperHeightCmInput.value) || 29.7));
      state.gridConfig.paperWidthCm = w;
      state.gridConfig.paperHeightCm = h;
      els.paperPresetSelect.value = "custom";
      state.gridConfig.paperPreset = "custom";
      if (!state.filters.grid) state.filters.grid = true;
      renderDynamicGridOverlay();
      applyImageTransforms();
    };

    els.paperWidthCmInput.addEventListener("input", onCustomCmChange);
    els.paperHeightCmInput.addEventListener("input", onCustomCmChange);

    els.swapPaperOrientationBtn.addEventListener("click", () => {
      const prevW = state.gridConfig.paperWidthCm;
      const prevH = state.gridConfig.paperHeightCm;
      state.gridConfig.paperWidthCm = prevH;
      state.gridConfig.paperHeightCm = prevW;
      els.paperWidthCmInput.value = prevH.toFixed(1);
      els.paperHeightCmInput.value = prevW.toFixed(1);

      // Intercambiar también columnas y filas para mantener la proporción de las celdas al girar la hoja
      const prevCols = state.gridConfig.cols;
      const prevRows = state.gridConfig.rows;
      syncColsRows(prevRows, prevCols);
    });

    els.lockToPaperRatioCheck.addEventListener("change", () => {
      state.gridConfig.lockToPaperRatio = els.lockToPaperRatioCheck.checked;
      applyImageTransforms();
    });

    els.paperCropCoverCheck.addEventListener("change", () => {
      state.gridConfig.paperCropCover = els.paperCropCoverCheck.checked;
      applyImageTransforms();
    });

    window.addEventListener("resize", () => {
      if (state.filters.grid && state.gridConfig.lockToPaperRatio) {
        applyPaperAspectFrame();
      }
    });

    els.toggleFlipBtn.addEventListener("click", () => {
      state.filters.flipH = !state.filters.flipH;
      applyImageTransforms();
    });
    els.zoomInBtn.addEventListener("click", () => {
      state.filters.zoom = Math.min(2.5, +(state.filters.zoom + 0.2).toFixed(2));
      applyImageTransforms();
    });
    els.zoomOutBtn.addEventListener("click", () => {
      state.filters.zoom = Math.max(0.6, +(state.filters.zoom - 0.2).toFixed(2));
      applyImageTransforms();
    });
    els.replaceCurrentImgBtn.addEventListener("click", () => {
      replaceImageAt(state.currentRefIndex, false);
    });
    els.fullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        els.referenceStage.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    });

    // Botones de tiempo del cronómetro
    document.querySelectorAll(".preset-time-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const raw = btn.dataset.seconds;
        if (raw === "custom") {
          els.customTimeRow.classList.toggle("hidden");
          return;
        }
        els.customTimeRow.classList.add("hidden");
        setTimerDuration(Number(raw), true);
      });
    });

    els.applyCustomTimeBtn.addEventListener("click", () => {
      const mins = Math.max(0, parseInt(els.customMinInput.value, 10) || 0);
      const secs = Math.max(0, parseInt(els.customSecInput.value, 10) || 0);
      const total = Math.max(5, mins * 60 + secs);
      els.customTimeRow.classList.add("hidden");
      setTimerDuration(total, true);
    });

    // Controles del cronómetro
    els.timerStartPauseBtn.addEventListener("click", () => {
      state.timerRunning ? pauseTimer() : startTimer();
    });

    els.timerResetBtn.addEventListener("click", () => {
      resetTimer();
    });

    els.timerCompleteNextBtn.addEventListener("click", () => {
      state.completedRefs.add(state.currentRefIndex);
      state.sessionSketches += 1;
      updateSessionStatsUI();
      selectReferenceImage(state.currentRefIndex + 1);
      resetTimer();
    });

    // Modos de entrenamiento durante el reloj (De Masas a Detalles y Memoria Flash)
    if (els.progressiveBlurModeCheck) {
      els.progressiveBlurModeCheck.addEventListener("change", () => {
        state.trainingModes.progressiveBlur = els.progressiveBlurModeCheck.checked;
        applyImageTransforms();
        if (state.trainingModes.progressiveBlur) {
          showToast(
            "🌫️ Modo 'De Masas a Detalles' activo",
            "Al iniciar el reloj la imagen empezará a 22px de desenfoque, bajará a 9px a mitad de tiempo y quedará nítida al final.",
            "🌫️"
          );
        }
      });
    }

    if (els.memoryFlashModeCheck) {
      els.memoryFlashModeCheck.addEventListener("change", () => {
        state.trainingModes.memoryFlash = els.memoryFlashModeCheck.checked;
        updateMemoryVeilUI();
        if (state.trainingModes.memoryFlash) {
          showToast(
            "🧠 Modo 'Memoria Visual' activo",
            "Al iniciar el reloj observarás la imagen unos segundos, luego se ocultará para dibujar de memoria y se revelará al final.",
            "🧠"
          );
        }
      });
    }

    if (els.peekMemoryRefBtn) {
      els.peekMemoryRefBtn.addEventListener("click", () => {
        triggerPeekMemory(3);
      });
    }

    if (els.workoutRoutineSelect) {
      els.workoutRoutineSelect.addEventListener("change", () => {
        state.trainingModes.routineKey = els.workoutRoutineSelect.value || "progressive";
      });
    }

    // Rutinas guiadas en las 10 imágenes
    els.startProgressiveSessionBtn.addEventListener("click", () => {
      const rKey = (els.workoutRoutineSelect && els.workoutRoutineSelect.value) || "progressive";
      state.trainingModes.routineKey = rKey;
      const routine = WORKOUT_ROUTINES[rKey] || WORKOUT_ROUTINES.progressive;
      state.progressiveMode = true;
      els.autoAdvanceCheckbox.checked = true;
      selectReferenceImage(0);
      setTimerDuration(routine.schedule[0], false);
      els.startProgressiveSessionBtn.textContent = `✅ ${routine.name} Activa (Foto 1/10 · ${formatMMSS(routine.schedule[0])})`;
      showToast(`🔥 Rutina Activada: ${routine.name}`, routine.desc, "⚡");
    });

    // Atajos de teclado completos en el Estudio
    window.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
      if (!els.viewStudio.classList.contains("active")) return;

      const key = e.key.toLowerCase();
      if (e.code === "Space") {
        e.preventDefault();
        state.timerRunning ? pauseTimer() : startTimer();
      } else if (e.code === "ArrowRight") {
        selectReferenceImage(state.currentRefIndex + 1);
      } else if (e.code === "ArrowLeft") {
        selectReferenceImage(state.currentRefIndex - 1);
      } else if (key === "g") {
        state.filters.grayscalePct = state.filters.grayscalePct > 0 ? 0 : 100;
        applyImageTransforms();
      } else if (key === "v") {
        state.filters.contrastPct = state.filters.contrastPct !== 100 ? 100 : 190;
        applyImageTransforms();
      } else if (key === "b") {
        state.filters.blurPx = state.filters.blurPx > 0 ? 0 : 10;
        applyImageTransforms();
      } else if (key === "n") {
        const order = [0, 2, 3, 4, 5];
        const nextIdx = (order.indexOf(state.filters.posterizeLevels) + 1) % order.length;
        state.filters.posterizeLevels = order[nextIdx];
        if (state.filters.posterizeLevels >= 2) {
          state.filters.thresholdActive = false;
          state.filters.edgesActive = false;
        }
        applyImageTransforms();
      } else if (key === "s") {
        state.filters.thresholdActive = !state.filters.thresholdActive;
        if (state.filters.thresholdActive) state.filters.edgesActive = false;
        applyImageTransforms();
      } else if (key === "e") {
        state.filters.edgesActive = !state.filters.edgesActive;
        if (state.filters.edgesActive) state.filters.thresholdActive = false;
        applyImageTransforms();
      } else if (key === "p") {
        state.filters.plumbActive = !state.filters.plumbActive;
        updatePlumbOverlayUI();
        applyImageTransforms();
      } else if (key === "a") {
        state.filters.protractorActive = !state.filters.protractorActive;
        updateProtractorOverlayUI();
        applyImageTransforms();
      } else if (key === "f") {
        state.filters.flipH = !state.filters.flipH;
        applyImageTransforms();
      } else if (key === "m") {
        state.filters.grid = !state.filters.grid;
        applyImageTransforms();
      } else if (key === "h") {
        triggerPeekMemory(3);
      } else if (key === "l") {
        toggleFavoriteCurrentRef();
      } else if (key === "r") {
        resetTimer();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
