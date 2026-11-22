// Catálogo Curado de Objetos y Categorías para Sketching (831 sujetos únicos en 16 categorías + Auto-Expansión IA)
window.SKETCH_CATEGORIES = [
  {
    "id": "simples",
    "name": "Objetos Simples",
    "shortName": "Objetos Simples",
    "icon": "🖌️",
    "description": "Más de 170 objetos individuales de silueta clara y volúmenes básicos (tazas, hidrantes, auriculares, jarrones, picaportes, pinceles, herramientas, etc.) ideales para encaje rápido y estudio de formas puras."
  },
  {
    "id": "arquitectura",
    "name": "Arquitectura y Paisaje Urbano",
    "shortName": "Arquitectura y Urbano",
    "icon": "🏛️",
    "description": "Edificios históricos, fachadas complejas, calles y el reto de dominar la perspectiva lineal."
  },
  {
    "id": "naturaleza",
    "name": "Naturaleza y Botánica",
    "shortName": "Naturaleza y Botánica",
    "icon": "🌿",
    "description": "Hojas, flores, ramas, cortezas y patrones orgánicos (excelente para practicar curvas y fluidez)."
  },
  {
    "id": "anatomia",
    "name": "Figura Humana y Anatomía",
    "shortName": "Figura y Anatomía",
    "icon": "🖐️",
    "description": "Estudios de proporciones, gesture drawing (dibujo gestual rápido), manos, rostros y escorzos."
  },
  {
    "id": "animales",
    "name": "Animales y Fauna",
    "shortName": "Animales y Fauna",
    "icon": "🦉",
    "description": "Desde animales domésticos hasta fauna salvaje, enfocándose en la estructura ósea, pelaje y plumas."
  },
  {
    "id": "cotidiano",
    "name": "Objetos Cotidianos y Bodegón (Still Life)",
    "shortName": "Objetos y Bodegón",
    "icon": "☕",
    "description": "Tazas, libros apilados, vajilla o herramientas para estudiar volúmenes, cilindros y esferas."
  },
  {
    "id": "vehiculos",
    "name": "Vehículos y Maquinaria",
    "shortName": "Vehículos y Maquinaria",
    "icon": "🏎️",
    "description": "Automóviles, bicicletas, motocicletas y piezas mecánicas complejas con superficies metálicas."
  },
  {
    "id": "paisajes",
    "name": "Paisajes Naturales y Elementos",
    "shortName": "Paisajes y Elementos",
    "icon": "🏔️",
    "description": "Montañas, ríos, formaciones rocosas, olas del mar, cielos y nubes (ideales para la atmósfera)."
  },
  {
    "id": "retro",
    "name": "Tecnología Retro y Aparatos Clásicos",
    "shortName": "Tecnología Retro",
    "icon": "📻",
    "description": "Consolas antiguas, cámaras de rollo, radios y dispositivos con formas geométricas definidas."
  },
  {
    "id": "personajes",
    "name": "Diseño de Personajes y Estilizados",
    "shortName": "Diseño de Personajes",
    "icon": "🎭",
    "description": "Creación de avatares, proporciones de cómic, manga o estilos de animación (concept art)."
  },
  {
    "id": "gastronomia",
    "name": "Comida y Gastronomía",
    "shortName": "Comida y Gastronomía",
    "icon": "🥐",
    "description": "Frutas con texturas irregulares, panificados, platos elaborados y el reflejo en cubiertos o cristalería."
  },
  {
    "id": "texturas",
    "name": "Estudios de Texturas y Superficies",
    "shortName": "Texturas y Superficies",
    "icon": "🧶",
    "description": "Pliegues de telas y drapería, vetas de madera, cuero desgastado o superficies rugosas."
  },
  {
    "id": "interiores",
    "name": "Interiores y Espacios Arquitectónicos",
    "shortName": "Interiores y Espacios",
    "icon": "🛋️",
    "description": "Habitaciones, muebles, distribución de elementos en el espacio y estudios de iluminación interior."
  },
  {
    "id": "filigranas",
    "name": "Filigranas, Estampillas y Símbolos",
    "shortName": "Filigranas y Símbolos",
    "icon": "⚜️",
    "description": "Elementos gráficos detallados, grabados antiguos, heráldica o motivos ornamentales."
  },
  {
    "id": "industrial",
    "name": "Diseño Industrial y Objetos Funcionales",
    "shortName": "Diseño Industrial",
    "icon": "📐",
    "description": "Gadgets, utensilios de diseño ergonómico y esquemas estructurales de productos."
  },
  {
    "id": "fantasia",
    "name": "Fantasía y Criaturas Mitológicas",
    "shortName": "Fantasía y Mitología",
    "icon": "🐉",
    "description": "Dragones, armaduras ornamentadas, criaturas fantásticas y mundos imaginarios."
  }
];

window.SKETCH_OBJECTS = [
  {
    "id": "simple-mug",
    "name": "Taza de Cerámica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "☕",
    "wikiCategories": [],
    "intitleQuery": "ceramic coffee mug",
    "mustMatch": [
      "ceramic",
      "coffee",
      "mug"
    ],
    "aiPromptSubject": "ceramic coffee mug",
    "tip": "Traza primero el cilindro vertical con dos elipses (boca y base) y luego añade el asa en perspectiva."
  },
  {
    "id": "simple-fire-hydrant",
    "name": "Hidrante de Calle",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🚒",
    "wikiCategories": [],
    "intitleQuery": "red fire hydrant",
    "mustMatch": [
      "red",
      "fire",
      "hydrant"
    ],
    "aiPromptSubject": "red fire hydrant",
    "tip": "Descompón el hidrante en un cilindro central coronado por una semiesfera y tres cilindros menores para las bocas laterales."
  },
  {
    "id": "simple-headphones",
    "name": "Auriculares de Diadema",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎧",
    "wikiCategories": [],
    "intitleQuery": "over ear headphones",
    "mustMatch": [
      "over",
      "ear",
      "headphones"
    ],
    "aiPromptSubject": "over ear headphones",
    "tip": "Dibuja el arco superior como una cinta curva en 3D y alinea ambas copas ovaladas sobre el mismo eje."
  },
  {
    "id": "simple-ceramic-vase",
    "name": "Jarrón de Cerámica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🏺",
    "wikiCategories": [],
    "intitleQuery": "ceramic vase",
    "mustMatch": [
      "ceramic",
      "vase"
    ],
    "aiPromptSubject": "ceramic vase",
    "tip": "Traza un eje de simetría central y marca el ancho máximo del cuerpo, el estrechamiento del cuello y la elipse de la boca."
  },
  {
    "id": "simple-doorknob",
    "name": "Picaporte y Manija de Puerta",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🚪",
    "wikiCategories": [],
    "intitleQuery": "brass doorknob handle",
    "mustMatch": [
      "brass",
      "doorknob",
      "handle"
    ],
    "aiPromptSubject": "brass doorknob handle",
    "tip": "Alinea el rosetón circular pegado al plano de la puerta con el cuello cilíndrico y el pomo o palanca en escorzo."
  },
  {
    "id": "simple-paintbrush",
    "name": "Pincel de Artista",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🖌️",
    "wikiCategories": [],
    "intitleQuery": "artist paintbrush",
    "mustMatch": [
      "artist",
      "paintbrush"
    ],
    "aiPromptSubject": "artist paintbrush",
    "tip": "Divide el largo en tres secciones: mango cónico de madera, virola metálica cilíndrica y mechón de cerdas."
  },
  {
    "id": "simple-teacup-saucer",
    "name": "Taza de Té con Platillo",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍵",
    "wikiCategories": [],
    "intitleQuery": "teacup and saucer",
    "mustMatch": [
      "teacup",
      "and",
      "saucer"
    ],
    "aiPromptSubject": "teacup and saucer",
    "tip": "Asegura que las elipses concéntricas del platillo compartan el mismo eje vertical que la taza."
  },
  {
    "id": "simple-clay-pitcher",
    "name": "Jarra de Barro con Pico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🏺",
    "wikiCategories": [],
    "intitleQuery": "terracotta pitcher jug",
    "mustMatch": [
      "terracotta",
      "pitcher",
      "jug"
    ],
    "aiPromptSubject": "terracotta pitcher jug",
    "tip": "Relaciona la dirección del pico vertedor con el lado opuesto donde nace el asa."
  },
  {
    "id": "simple-enamel-mug",
    "name": "Jarro Enlozado de Camping",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "☕",
    "wikiCategories": [],
    "intitleQuery": "enamel camping mug",
    "mustMatch": [
      "enamel",
      "camping",
      "mug"
    ],
    "aiPromptSubject": "enamel camping mug",
    "tip": "Un cilindro corto y ancho con reborde superior redondeado y asa de chapa doblada."
  },
  {
    "id": "simple-glass-tumbler",
    "name": "Vaso de Vidrio Facetado",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥃",
    "wikiCategories": [],
    "intitleQuery": "faceted glass tumbler",
    "mustMatch": [
      "faceted",
      "glass",
      "tumbler"
    ],
    "aiPromptSubject": "faceted glass tumbler",
    "tip": "Un cono truncado invertido con facetas planas en la mitad inferior y boca circular."
  },
  {
    "id": "simple-wine-goblet",
    "name": "Copa de Vino",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍷",
    "wikiCategories": [],
    "intitleQuery": "empty wine glass",
    "mustMatch": [
      "empty",
      "wine",
      "glass"
    ],
    "aiPromptSubject": "empty wine glass",
    "tip": "Alinea el cáliz ovoide, el tallo cilíndrico muy delgado y la elipse ancha del pie sobre un eje vertical estricto."
  },
  {
    "id": "simple-ceramic-bowl",
    "name": "Cuenco o Bol de Cerámica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥣",
    "wikiCategories": [],
    "intitleQuery": "ceramic soup bowl",
    "mustMatch": [
      "ceramic",
      "soup",
      "bowl"
    ],
    "aiPromptSubject": "ceramic soup bowl",
    "tip": "Una semiesfera asentada sobre un pequeño anillo cilíndrico de base; cuida el espesor del borde."
  },
  {
    "id": "simple-soup-tureen",
    "name": "Sopera con Tapa y Dos Asas",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍲",
    "wikiCategories": [],
    "intitleQuery": "ceramic soup tureen",
    "mustMatch": [
      "ceramic",
      "soup",
      "tureen"
    ],
    "aiPromptSubject": "ceramic soup tureen",
    "tip": "Volumen esférico achatado con dos asas simétricas y tapa abovedada con pomo central."
  },
  {
    "id": "simple-teapot-round",
    "name": "Tetera Redonda de Porcelana",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🫖",
    "wikiCategories": [],
    "intitleQuery": "round porcelain teapot",
    "mustMatch": [
      "round",
      "porcelain",
      "teapot"
    ],
    "aiPromptSubject": "round porcelain teapot",
    "tip": "Parte de una esfera central y equilibra visualmente la curva en S del pico con la C del asa."
  },
  {
    "id": "simple-milk-jug",
    "name": "Lechera Pequeña de Cerámica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥛",
    "wikiCategories": [],
    "intitleQuery": "small ceramic milk jug",
    "mustMatch": [
      "small",
      "ceramic",
      "milk"
    ],
    "aiPromptSubject": "small ceramic milk jug",
    "tip": "Cilindro abombado en la base que se abre en un pico vertedor suave en el borde superior."
  },
  {
    "id": "simple-amphora-two-handles",
    "name": "Ánfora Clásica de Dos Asas",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🏺",
    "wikiCategories": [],
    "intitleQuery": "terracotta amphora",
    "mustMatch": [
      "terracotta",
      "amphora"
    ],
    "aiPromptSubject": "terracotta amphora",
    "tip": "Cuerpo ovoide alargado que se estrecha hacia el pie y dos asas simétricas que unen cuello y hombros."
  },
  {
    "id": "simple-gourd-bottle",
    "name": "Vasija Calabaza de Doble Bulbo",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🏺",
    "wikiCategories": [],
    "intitleQuery": "double gourd vase",
    "mustMatch": [
      "double",
      "gourd",
      "vase"
    ],
    "aiPromptSubject": "double gourd vase",
    "tip": "Dos esferas superpuestas (la inferior más grande que la superior) unidas por una cintura cóncava."
  },
  {
    "id": "simple-mason-jar",
    "name": "Frasco de Vidrio con Tapa Roscada",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🫙",
    "wikiCategories": [],
    "intitleQuery": "glass mason jar",
    "mustMatch": [
      "glass",
      "mason",
      "jar"
    ],
    "aiPromptSubject": "glass mason jar",
    "tip": "Prisma de esquinas muy redondeadas coronado por un cuello cilíndrico con anillos de rosca."
  },
  {
    "id": "simple-corked-vial",
    "name": "Botellita de Boticario con Corcho",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧪",
    "wikiCategories": [],
    "intitleQuery": "corked glass bottle",
    "mustMatch": [
      "corked",
      "glass",
      "bottle"
    ],
    "aiPromptSubject": "corked glass bottle",
    "tip": "Cilindro de vidrio transparente con hombros marcados y un cono truncado de corcho asomando."
  },
  {
    "id": "simple-olive-oil-cruet",
    "name": "Aceitera con Pico Vertedor",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🫒",
    "wikiCategories": [],
    "intitleQuery": "olive oil dispenser bottle",
    "mustMatch": [
      "olive",
      "oil",
      "dispenser"
    ],
    "aiPromptSubject": "olive oil dispenser bottle",
    "tip": "Botella troncocónica o cilíndrica rematada por un tubo metálico delgado e inclinado."
  },
  {
    "id": "simple-gravy-boat",
    "name": "Salsera de Mesa",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥣",
    "wikiCategories": [],
    "intitleQuery": "porcelain gravy boat",
    "mustMatch": [
      "porcelain",
      "gravy",
      "boat"
    ],
    "aiPromptSubject": "porcelain gravy boat",
    "tip": "Forma de barca asimétrica con pico bajo extendido hacia adelante y asa elevada atrás."
  },
  {
    "id": "simple-butter-dish",
    "name": "Mantequera con Campana",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧈",
    "wikiCategories": [],
    "intitleQuery": "covered butter dish",
    "mustMatch": [
      "covered",
      "butter",
      "dish"
    ],
    "aiPromptSubject": "covered butter dish",
    "tip": "Bandeja rectangular plana cubierta por un prisma o cúpula con pomo superior."
  },
  {
    "id": "simple-sugar-bowl",
    "name": "Azucarero con Tapa",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍚",
    "wikiCategories": [],
    "intitleQuery": "covered sugar bowl",
    "mustMatch": [
      "covered",
      "sugar",
      "bowl"
    ],
    "aiPromptSubject": "covered sugar bowl",
    "tip": "Pequeño recipiente esférico con muesca para la cucharita y tapa abovedada."
  },
  {
    "id": "simple-thermos-flask",
    "name": "Termo de Acero Inoxidable",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧴",
    "wikiCategories": [],
    "intitleQuery": "stainless steel thermos",
    "mustMatch": [
      "stainless",
      "steel",
      "thermos"
    ],
    "aiPromptSubject": "stainless steel thermos",
    "tip": "Cilindro limpio de acero con transición cónica en el hombro y tapa cilíndrica que sirve de vaso."
  },
  {
    "id": "simple-canteen-flask",
    "name": "Cantimplora Militar o de Montaña",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍶",
    "wikiCategories": [],
    "intitleQuery": "metal water canteen",
    "mustMatch": [
      "metal",
      "water",
      "canteen"
    ],
    "aiPromptSubject": "metal water canteen",
    "tip": "Volumen ovalado y achatado en sección transversal con cuello roscado corto en la cima."
  },
  {
    "id": "simple-spoon-fork",
    "name": "Cuchara y Tenedor",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥄",
    "wikiCategories": [],
    "intitleQuery": "metal spoon",
    "mustMatch": [
      "metal",
      "spoon"
    ],
    "aiPromptSubject": "metal spoon",
    "tip": "Estudia la doble curvatura cóncava de la cuchara y cómo se invierte el reflejo dentro del cuenco."
  },
  {
    "id": "simple-chef-knife",
    "name": "Cuchillo de Cocina",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔪",
    "wikiCategories": [],
    "intitleQuery": "kitchen chef knife",
    "mustMatch": [
      "kitchen",
      "chef",
      "knife"
    ],
    "aiPromptSubject": "kitchen chef knife",
    "tip": "Contrasta el bloque ergonómico del mango con el plano triangular largo y delgado de la hoja."
  },
  {
    "id": "simple-wooden-ladle",
    "name": "Cucharón de Sopa",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥄",
    "wikiCategories": [],
    "intitleQuery": "soup ladle",
    "mustMatch": [
      "soup",
      "ladle"
    ],
    "aiPromptSubject": "soup ladle",
    "tip": "Una semiesfera profunda unida en ángulo obtuso a un mango largo y delgado."
  },
  {
    "id": "simple-balloon-whisk",
    "name": "Batidor de Alambre",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥚",
    "wikiCategories": [],
    "intitleQuery": "kitchen wire whisk",
    "mustMatch": [
      "kitchen",
      "wire",
      "whisk"
    ],
    "aiPromptSubject": "kitchen wire whisk",
    "tip": "Encaja todos los lazos de alambre como un único volumen piriforme (forma de gota) antes de trazar cada alambre."
  },
  {
    "id": "simple-rolling-pin",
    "name": "Palo de Amasar",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥖",
    "wikiCategories": [],
    "intitleQuery": "wooden rolling pin",
    "mustMatch": [
      "wooden",
      "rolling",
      "pin"
    ],
    "aiPromptSubject": "wooden rolling pin",
    "tip": "Un cilindro central largo con dos mangos menores que comparten exactamente el mismo eje."
  },
  {
    "id": "simple-mortar-pestle",
    "name": "Mortero con Mano",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥣",
    "wikiCategories": [],
    "intitleQuery": "stone mortar and pestle",
    "mustMatch": [
      "stone",
      "mortar",
      "and"
    ],
    "aiPromptSubject": "stone mortar and pestle",
    "tip": "Dibuja el cuenco de paredes gruesas y apoya la mano cilíndrica en diagonal saliendo del interior."
  },
  {
    "id": "simple-honey-dipper",
    "name": "Cuchara Mielera de Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍯",
    "wikiCategories": [],
    "intitleQuery": "wooden honey dipper",
    "mustMatch": [
      "wooden",
      "honey",
      "dipper"
    ],
    "aiPromptSubject": "wooden honey dipper",
    "tip": "Una serie de discos paralelos torneados sobre el mismo eje de madera."
  },
  {
    "id": "simple-salt-shaker",
    "name": "Salero de Vidrio",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧂",
    "wikiCategories": [],
    "intitleQuery": "glass salt shaker",
    "mustMatch": [
      "glass",
      "salt",
      "shaker"
    ],
    "aiPromptSubject": "glass salt shaker",
    "tip": "Cuerpo facetado o cilíndrico de vidrio coronado por una cúpula metálica perforada."
  },
  {
    "id": "simple-pepper-mill",
    "name": "Molinillo de Pimienta Torneado",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧂",
    "wikiCategories": [],
    "intitleQuery": "wooden pepper mill",
    "mustMatch": [
      "wooden",
      "pepper",
      "mill"
    ],
    "aiPromptSubject": "wooden pepper mill",
    "tip": "Sucesión de esferas, cilindros y escocias torneadas sobre un único eje vertical de revolución."
  },
  {
    "id": "simple-box-grater",
    "name": "Rallador de Cuatro Caras",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧀",
    "wikiCategories": [],
    "intitleQuery": "metalag box grater",
    "mustMatch": [
      "metalag",
      "box",
      "grater"
    ],
    "aiPromptSubject": "metalag box grater",
    "tip": "Una pirámide truncada de base rectangular con asa arqueada en la cima."
  },
  {
    "id": "simple-citrus-reamer",
    "name": "Exprimidor Manual de Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍋",
    "wikiCategories": [],
    "intitleQuery": "wooden citrus reamer",
    "mustMatch": [
      "wooden",
      "citrus",
      "reamer"
    ],
    "aiPromptSubject": "wooden citrus reamer",
    "tip": "Un cono apuntado con estrías profundas unido a un mango torneado sobre el mismo eje."
  },
  {
    "id": "simple-garlic-press",
    "name": "Prensa de Ajos Metálica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧄",
    "wikiCategories": [],
    "intitleQuery": "metal garlic press",
    "mustMatch": [
      "metal",
      "garlic",
      "press"
    ],
    "aiPromptSubject": "metal garlic press",
    "tip": "Dos brazos articulados que cierran un émbolo dentro de una cámara cilíndrica perforada."
  },
  {
    "id": "simple-ice-cream-scoop",
    "name": "Cuchara para Helado",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍨",
    "wikiCategories": [],
    "intitleQuery": "ice cream scoop",
    "mustMatch": [
      "ice",
      "cream",
      "scoop"
    ],
    "aiPromptSubject": "ice cream scoop",
    "tip": "Semiesfera metálica perfecta unida a un mango robusto con gatillo lateral."
  },
  {
    "id": "simple-pizza-cutter",
    "name": "Cortador de Pizza Circular",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍕",
    "wikiCategories": [],
    "intitleQuery": "pizza cutter wheel",
    "mustMatch": [
      "pizza",
      "cutter",
      "wheel"
    ],
    "aiPromptSubject": "pizza cutter wheel",
    "tip": "Un disco metálico completamente plano unido mediante una horquilla a un mango cilíndrico."
  },
  {
    "id": "simple-vegetable-peeler",
    "name": "Pelapapas en Y",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥔",
    "wikiCategories": [],
    "intitleQuery": "y shaped vegetable peeler",
    "mustMatch": [
      "shaped",
      "vegetable",
      "peeler"
    ],
    "aiPromptSubject": "y shaped vegetable peeler",
    "tip": "Horquilla simétrica en forma de Y que sostiene una hoja basculante horizontal en el extremo."
  },
  {
    "id": "simple-corkscrew",
    "name": "Sacacorchos Simple en T",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍾",
    "wikiCategories": [],
    "intitleQuery": "vintage t corkscrew",
    "mustMatch": [
      "vintage",
      "corkscrew"
    ],
    "aiPromptSubject": "vintage t corkscrew",
    "tip": "Un cilindro transversal de madera atravesado perpendicularmente por la espiral metálica."
  },
  {
    "id": "simple-bottle-opener",
    "name": "Destapador de Botellas Plano",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍺",
    "wikiCategories": [],
    "intitleQuery": "flat metal bottle opener",
    "mustMatch": [
      "flat",
      "metal",
      "bottle"
    ],
    "aiPromptSubject": "flat metal bottle opener",
    "tip": "Lámina metálica troquelada de espesor uniforme vista en escorzo."
  },
  {
    "id": "simple-kitchen-spatula",
    "name": "Espátula Ranurada",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍳",
    "wikiCategories": [],
    "intitleQuery": "slotted kitchen spatula",
    "mustMatch": [
      "slotted",
      "kitchen",
      "spatula"
    ],
    "aiPromptSubject": "slotted kitchen spatula",
    "tip": "Plano trapecial delgado que quiebra su ángulo para unirse a la varilla y al mango."
  },
  {
    "id": "simple-kitchen-funnel",
    "name": "Embudo Cónico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔻",
    "wikiCategories": [],
    "intitleQuery": "metal kitchen funnel",
    "mustMatch": [
      "metal",
      "kitchen",
      "funnel"
    ],
    "aiPromptSubject": "metal kitchen funnel",
    "tip": "La unión geométrica más pura entre un cono ancho abierto y un tubo cilíndrico estrecho."
  },
  {
    "id": "simple-colander-bowl",
    "name": "Colador Metálico con Dos Asas",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥣",
    "wikiCategories": [],
    "intitleQuery": "metal kitchen colander",
    "mustMatch": [
      "metal",
      "kitchen",
      "colander"
    ],
    "aiPromptSubject": "metal kitchen colander",
    "tip": "Semiesfera perforada sobre una base troncocónica con dos asas de alambre en los extremos."
  },
  {
    "id": "simple-cutting-board",
    "name": "Tabla de Picar de Madera con Mango",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪵",
    "wikiCategories": [],
    "intitleQuery": "wooden cutting board handle",
    "mustMatch": [
      "wooden",
      "cutting",
      "board"
    ],
    "aiPromptSubject": "wooden cutting board handle",
    "tip": "Prisma chato de madera en perspectiva con agujero circular para colgar en el mango."
  },
  {
    "id": "simple-cast-iron-skillet",
    "name": "Sartén de Hierro Fundido",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍳",
    "wikiCategories": [],
    "intitleQuery": "cast iron skillet",
    "mustMatch": [
      "cast",
      "iron",
      "skillet"
    ],
    "aiPromptSubject": "cast iron skillet",
    "tip": "Cilindro muy bajo con paredes ligeramente abiertas, dos picos vertedores laterales y mango largo."
  },
  {
    "id": "simple-saucepan-lid",
    "name": "Cacerola con Mango y Tapa",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍲",
    "wikiCategories": [],
    "intitleQuery": "stainless steel saucepan",
    "mustMatch": [
      "stainless",
      "steel",
      "saucepan"
    ],
    "aiPromptSubject": "stainless steel saucepan",
    "tip": "Cilindro recto con tapa abovedada y mango largo que se proyecta en perspectiva."
  },
  {
    "id": "simple-muffin-tin",
    "name": "Molde Individual o Flanera Acanalada",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍮",
    "wikiCategories": [],
    "intitleQuery": "ceramic ramekin dish",
    "mustMatch": [
      "ceramic",
      "ramekin",
      "dish"
    ],
    "aiPromptSubject": "ceramic ramekin dish",
    "tip": "Cilindro bajo de porcelana blanca con estrías verticales regulares alrededor de la pared exterior."
  },
  {
    "id": "simple-eggcup",
    "name": "Huevera con Huevo",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥚",
    "wikiCategories": [],
    "intitleQuery": "boiled egg in egg cup",
    "mustMatch": [
      "boiled",
      "egg",
      "egg"
    ],
    "aiPromptSubject": "boiled egg in egg cup",
    "tip": "Excelente ejercicio de formas ovoides y cáliz de revolución sobre un mismo eje vertical."
  },
  {
    "id": "simple-hammer",
    "name": "Martillo de Carpintero",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔨",
    "wikiCategories": [],
    "intitleQuery": "claw hammer",
    "mustMatch": [
      "claw",
      "hammer"
    ],
    "aiPromptSubject": "claw hammer",
    "tip": "Cruza el eje largo del mango de madera con el eje perpendicular de la cabeza metálica y las uñas curvas."
  },
  {
    "id": "simple-rubber-mallet",
    "name": "Maza de Goma o Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔨",
    "wikiCategories": [],
    "intitleQuery": "rubber mallet hammer",
    "mustMatch": [
      "rubber",
      "mallet",
      "hammer"
    ],
    "aiPromptSubject": "rubber mallet hammer",
    "tip": "Un cilindro grueso y pesado atravesado perpendicularmente por el mango de madera."
  },
  {
    "id": "simple-wrench",
    "name": "Llave Inglesa Fija",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔧",
    "wikiCategories": [],
    "intitleQuery": "open end wrench",
    "mustMatch": [
      "open",
      "end",
      "wrench"
    ],
    "aiPromptSubject": "open end wrench",
    "tip": "Un cuerpo plano alargado con cabezas en ángulo de 15 grados en ambos extremos."
  },
  {
    "id": "simple-adjustable-wrench",
    "name": "Llave Francesa Ajustable",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔧",
    "wikiCategories": [],
    "intitleQuery": "adjustable crescent wrench",
    "mustMatch": [
      "adjustable",
      "crescent",
      "wrench"
    ],
    "aiPromptSubject": "adjustable crescent wrench",
    "tip": "Cabeza robusta con mordaza móvil accionada por un cilindro sinfín roscado."
  },
  {
    "id": "simple-pipe-wrench",
    "name": "Llave Stilson para Caños",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔧",
    "wikiCategories": [],
    "intitleQuery": "heavy pipe wrench",
    "mustMatch": [
      "heavy",
      "pipe",
      "wrench"
    ],
    "aiPromptSubject": "heavy pipe wrench",
    "tip": "Dos piezas dentadas paralelas unidas por una tuerca anular estriada."
  },
  {
    "id": "simple-screwdriver",
    "name": "Destornillador",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪛",
    "wikiCategories": [],
    "intitleQuery": "screwdriver tool",
    "mustMatch": [
      "screwdriver",
      "tool"
    ],
    "aiPromptSubject": "screwdriver tool",
    "tip": "Alinea el mango grueso estriado con la varilla metálica delgada y la punta plana."
  },
  {
    "id": "simple-pliers",
    "name": "Alicate o Pinza Universal",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔧",
    "wikiCategories": [],
    "intitleQuery": "metal pliers tool",
    "mustMatch": [
      "metal",
      "pliers",
      "tool"
    ],
    "aiPromptSubject": "metal pliers tool",
    "tip": "Dos brazos curvos que se cruzan en el eje articulado formando las mordazas cortas y los mangos largos."
  },
  {
    "id": "simple-needle-nose-pliers",
    "name": "Pinza de Punta Larga",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔧",
    "wikiCategories": [],
    "intitleQuery": "needle nose pliers",
    "mustMatch": [
      "needle",
      "nose",
      "pliers"
    ],
    "aiPromptSubject": "needle nose pliers",
    "tip": "Mordazas que forman un cono largo y esbelto partido al medio por el plano de cierre."
  },
  {
    "id": "simple-c-clamp",
    "name": "Sargento o Prensa en C",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🗜️",
    "wikiCategories": [],
    "intitleQuery": "metal c clamp",
    "mustMatch": [
      "metal",
      "clamp"
    ],
    "aiPromptSubject": "metal c clamp",
    "tip": "Un marco rígido en forma de C atravesado por un tornillo largo con manija transversal."
  },
  {
    "id": "simple-wood-chisel",
    "name": "Formón de Carpintero",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪚",
    "wikiCategories": [],
    "intitleQuery": "woodworking chisel",
    "mustMatch": [
      "woodworking",
      "chisel"
    ],
    "aiPromptSubject": "woodworking chisel",
    "tip": "Mango torneado con aro metálico unido a una hoja plana con bisel frontal a 25 grados."
  },
  {
    "id": "simple-hand-saw",
    "name": "Serrucho de Mano",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪚",
    "wikiCategories": [],
    "intitleQuery": "carpenter hand saw",
    "mustMatch": [
      "carpenter",
      "hand",
      "saw"
    ],
    "aiPromptSubject": "carpenter hand saw",
    "tip": "Hoja trapecial larga y flexible encajada en un mango cerrado de madera ergonómico."
  },
  {
    "id": "simple-hacksaw",
    "name": "Arco de Sierra para Metal",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪚",
    "wikiCategories": [],
    "intitleQuery": "metal hacksaw",
    "mustMatch": [
      "metal",
      "hacksaw"
    ],
    "aiPromptSubject": "metal hacksaw",
    "tip": "Marco rectangular en U que tensa una hoja muy fina entre el mango y la mariposa delantera."
  },
  {
    "id": "simple-paint-roller",
    "name": "Rodillo de Pintura",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🖌️",
    "wikiCategories": [],
    "intitleQuery": "paint roller brush",
    "mustMatch": [
      "paint",
      "roller",
      "brush"
    ],
    "aiPromptSubject": "paint roller brush",
    "tip": "Un cilindro afelpado conectado mediante una varilla doblada en ángulos rectos al mango de agarre."
  },
  {
    "id": "simple-putty-knife",
    "name": "Espátula de Albañil o Masilla",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🛠️",
    "wikiCategories": [],
    "intitleQuery": "metal putty knife",
    "mustMatch": [
      "metal",
      "putty",
      "knife"
    ],
    "aiPromptSubject": "metal putty knife",
    "tip": "Hoja trapecial plana que se estrecha hacia la virola y el mango corto."
  },
  {
    "id": "simple-masonry-trowel",
    "name": "Cuchara o Llana de Albañil",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧱",
    "wikiCategories": [],
    "intitleQuery": "bricklayer trowel",
    "mustMatch": [
      "bricklayer",
      "trowel"
    ],
    "aiPromptSubject": "bricklayer trowel",
    "tip": "Hoja triangular plana con un cuello en Z que eleva el eje del mango de madera."
  },
  {
    "id": "simple-tape-measure",
    "name": "Cinta Métrica Enrollable",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📏",
    "wikiCategories": [],
    "intitleQuery": "retractable tape measure",
    "mustMatch": [
      "retractable",
      "tape",
      "measure"
    ],
    "aiPromptSubject": "retractable tape measure",
    "tip": "Caja cuadrada con la esquina superior redondeada y gancho metálico en L en la salida."
  },
  {
    "id": "simple-spirit-level",
    "name": "Nivel de Burbuja",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📏",
    "wikiCategories": [],
    "intitleQuery": "carpenter spirit level",
    "mustMatch": [
      "carpenter",
      "spirit",
      "level"
    ],
    "aiPromptSubject": "carpenter spirit level",
    "tip": "Viga prismática larga con ventanillas rectangulares y tubos cilíndricos con burbuja."
  },
  {
    "id": "simple-plumb-bob",
    "name": "Plomada de Bronce",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔻",
    "wikiCategories": [],
    "intitleQuery": "brass plumb bob",
    "mustMatch": [
      "brass",
      "plumb",
      "bob"
    ],
    "aiPromptSubject": "brass plumb bob",
    "tip": "Un cono invertido pesado y perfectamente simétrico colgado de un cordel central."
  },
  {
    "id": "simple-oil-can",
    "name": "Aceitera de Taller con Pico Largo",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🛢️",
    "wikiCategories": [],
    "intitleQuery": "vintage thumb oiler can",
    "mustMatch": [
      "vintage",
      "thumb",
      "oiler"
    ],
    "aiPromptSubject": "vintage thumb oiler can",
    "tip": "Base semiesférica flexible coronada por un tubo cónico muy largo y delgado."
  },
  {
    "id": "simple-padlock",
    "name": "Candado Metálico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔒",
    "wikiCategories": [],
    "intitleQuery": "brass padlock",
    "mustMatch": [
      "brass",
      "padlock"
    ],
    "aiPromptSubject": "brass padlock",
    "tip": "Un bloque rectangular sólido en la base unido a un arco cilíndrico en forma de U."
  },
  {
    "id": "simple-combination-lock",
    "name": "Candado de Combinación Circular",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔓",
    "wikiCategories": [],
    "intitleQuery": "round combination padlock",
    "mustMatch": [
      "round",
      "combination",
      "padlock"
    ],
    "aiPromptSubject": "round combination padlock",
    "tip": "Cilindro chato con dial giratorio frontal numerado y arco superior."
  },
  {
    "id": "simple-door-hinge",
    "name": "Bisagra Metálica de Libro",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🚪",
    "wikiCategories": [],
    "intitleQuery": "metal door hinge",
    "mustMatch": [
      "metal",
      "door",
      "hinge"
    ],
    "aiPromptSubject": "metal door hinge",
    "tip": "Dos placas rectangulares con agujeros avellanados unidas por un cilindro articulado central."
  },
  {
    "id": "simple-sliding-bolt",
    "name": "Pasador o Cerrojo de Puerta",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🚪",
    "wikiCategories": [],
    "intitleQuery": "metal barrel bolt latch",
    "mustMatch": [
      "metal",
      "barrel",
      "bolt"
    ],
    "aiPromptSubject": "metal barrel bolt latch",
    "tip": "Cilindro deslizante con manija corta contenido por abrazaderas sobre una placa base."
  },
  {
    "id": "simple-pulley-block",
    "name": "Polea o Roldana con Gancho",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "⚙️",
    "wikiCategories": [],
    "intitleQuery": "metal pulley block hook",
    "mustMatch": [
      "metal",
      "pulley",
      "block"
    ],
    "aiPromptSubject": "metal pulley block hook",
    "tip": "Rueda acanalada encerrada en una horquilla ovalada que remata en un gancho curvo."
  },
  {
    "id": "simple-spring-coil",
    "name": "Resorte Espiral de Acero",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🌀",
    "wikiCategories": [],
    "intitleQuery": "metal coil spring",
    "mustMatch": [
      "metal",
      "coil",
      "spring"
    ],
    "aiPromptSubject": "metal coil spring",
    "tip": "Dibuja primero el cilindro envolvente y guía la hélice mediante elipses equidistantes."
  },
  {
    "id": "simple-hex-nut-bolt",
    "name": "Tornillo Hexagonal con Tuerca",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔩",
    "wikiCategories": [],
    "intitleQuery": "hex bolt and nut",
    "mustMatch": [
      "hex",
      "bolt",
      "and"
    ],
    "aiPromptSubject": "hex bolt and nut",
    "tip": "Prisma hexagonal chato para la cabeza y la tuerca atravesados por el cilindro roscado."
  },
  {
    "id": "simple-wing-nut",
    "name": "Tuerca Mariposa",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔩",
    "wikiCategories": [],
    "intitleQuery": "metal wing nut",
    "mustMatch": [
      "metal",
      "wing",
      "nut"
    ],
    "aiPromptSubject": "metal wing nut",
    "tip": "Anillo central roscado del que nacen dos aletas planas simétricas inclinadas."
  },
  {
    "id": "simple-carabiner",
    "name": "Mosquetón de Escalada",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧗",
    "wikiCategories": [],
    "intitleQuery": "climbing carabiner clip",
    "mustMatch": [
      "climbing",
      "carabiner",
      "clip"
    ],
    "aiPromptSubject": "climbing carabiner clip",
    "tip": "Anillo trapecial asimétrico de sección cilíndrica con cierre recto lateral."
  },
  {
    "id": "simple-horseshoe",
    "name": "Herradura de Hierro",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧲",
    "wikiCategories": [],
    "intitleQuery": "iron horseshoe",
    "mustMatch": [
      "iron",
      "horseshoe"
    ],
    "aiPromptSubject": "iron horseshoe",
    "tip": "Arco en forma de U de sección rectangular con muescas para los clavos."
  },
  {
    "id": "simple-anvil",
    "name": "Yunque de Herrero",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "⚒️",
    "wikiCategories": [],
    "intitleQuery": "blacksmith iron anvil",
    "mustMatch": [
      "blacksmith",
      "iron",
      "anvil"
    ],
    "aiPromptSubject": "blacksmith iron anvil",
    "tip": "Bloque central macizo con mesa plana superior, base escalonada y cuerno cónico lateral."
  },
  {
    "id": "simple-palette-knife",
    "name": "Espátula de Pintor",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎨",
    "wikiCategories": [],
    "intitleQuery": "artist palette knife",
    "mustMatch": [
      "artist",
      "palette",
      "knife"
    ],
    "aiPromptSubject": "artist palette knife",
    "tip": "Observa el quiebre en escalón del cuello metálico que separa el mango de madera de la hoja en rombo."
  },
  {
    "id": "simple-wooden-mannequin",
    "name": "Maniquí Articulado de Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧍",
    "wikiCategories": [],
    "intitleQuery": "wooden artist mannequin",
    "mustMatch": [
      "wooden",
      "artist",
      "mannequin"
    ],
    "aiPromptSubject": "wooden artist mannequin",
    "tip": "El ejercicio clásico de cilindros, esferas para las articulaciones y cajas para tórax y pelvis."
  },
  {
    "id": "simple-paint-tube",
    "name": "Pomo de Pintura al Óleo",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎨",
    "wikiCategories": [],
    "intitleQuery": "oil paint tube",
    "mustMatch": [
      "oil",
      "paint",
      "tube"
    ],
    "aiPromptSubject": "oil paint tube",
    "tip": "Un cilindro que se aplasta gradualmente hasta convertirse en una línea recta plegada en la base."
  },
  {
    "id": "simple-wooden-palette",
    "name": "Paleta de Pintor de Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎨",
    "wikiCategories": [],
    "intitleQuery": "wooden artist palette",
    "mustMatch": [
      "wooden",
      "artist",
      "palette"
    ],
    "aiPromptSubject": "wooden artist palette",
    "tip": "Plano ovalado en escorzo con recorte curvo lateral y agujero elíptico para el pulgar."
  },
  {
    "id": "simple-scissors",
    "name": "Tijeras Metálicas",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "✂️",
    "wikiCategories": [],
    "intitleQuery": "metal scissors",
    "mustMatch": [
      "metal",
      "scissors"
    ],
    "aiPromptSubject": "metal scissors",
    "tip": "Ubica primero el tornillo central de pivote y proyecta desde ahí las dos hojas y los anillos."
  },
  {
    "id": "simple-pencil-sharpener",
    "name": "Sacapuntas Metálico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "✏️",
    "wikiCategories": [],
    "intitleQuery": "metal pencil sharpener",
    "mustMatch": [
      "metal",
      "pencil",
      "sharpener"
    ],
    "aiPromptSubject": "metal pencil sharpener",
    "tip": "Una cuña prismática simple con una ranura cónica y una cuchilla atornillada."
  },
  {
    "id": "simple-fountain-pen",
    "name": "Pluma Estilográfica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🖋️",
    "wikiCategories": [],
    "intitleQuery": "fountain pen",
    "mustMatch": [
      "fountain",
      "pen"
    ],
    "aiPromptSubject": "fountain pen",
    "tip": "Cuida el ahusamiento del cuerpo cilíndrico y la geometría triangular plana del plumín."
  },
  {
    "id": "simple-ink-bottle",
    "name": "Tintero de Cristal",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🫙",
    "wikiCategories": [],
    "intitleQuery": "glass ink bottle",
    "mustMatch": [
      "glass",
      "ink",
      "bottle"
    ],
    "aiPromptSubject": "glass ink bottle",
    "tip": "Un prisma o cubo de vidrio grueso rematado por una tapa cilíndrica estriada."
  },
  {
    "id": "simple-feathered-quill",
    "name": "Pluma de Ave para Caligrafía",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪶",
    "wikiCategories": [],
    "intitleQuery": "feather quill pen",
    "mustMatch": [
      "feather",
      "quill",
      "pen"
    ],
    "aiPromptSubject": "feather quill pen",
    "tip": "Eje curvo largo (raquis) que sostiene el plano suave de las barbas."
  },
  {
    "id": "simple-wax-seal-stamp",
    "name": "Sello de Lacre con Mango de Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "✉️",
    "wikiCategories": [],
    "intitleQuery": "brass wax seal stamp",
    "mustMatch": [
      "brass",
      "wax",
      "seal"
    ],
    "aiPromptSubject": "brass wax seal stamp",
    "tip": "Disco plano de bronce en la base unido a un mango torneado en forma de pera."
  },
  {
    "id": "simple-paper-clip-binder",
    "name": "Broche Aprisionador (Binder Clip)",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📎",
    "wikiCategories": [],
    "intitleQuery": "black metal binder clip",
    "mustMatch": [
      "black",
      "metal",
      "binder"
    ],
    "aiPromptSubject": "black metal binder clip",
    "tip": "Un prisma triangular de chapa negra con dos brazos de alambre cromado arqueados."
  },
  {
    "id": "simple-clothespin",
    "name": "Broche o Pinza de Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📎",
    "wikiCategories": [],
    "intitleQuery": "wooden clothespin",
    "mustMatch": [
      "wooden",
      "clothespin"
    ],
    "aiPromptSubject": "wooden clothespin",
    "tip": "Dos cuñas simétricas de madera unidas en el centro por el resorte metálico."
  },
  {
    "id": "simple-desk-stapler",
    "name": "Abrochadora o Grapadora",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📎",
    "wikiCategories": [],
    "intitleQuery": "office desk stapler",
    "mustMatch": [
      "office",
      "desk",
      "stapler"
    ],
    "aiPromptSubject": "office desk stapler",
    "tip": "Dos prismas alargados articulados en el extremo posterior sobre una base con yunque."
  },
  {
    "id": "simple-tape-dispenser",
    "name": "Porta Cinta Adhesiva de Escritorio",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎗️",
    "wikiCategories": [],
    "intitleQuery": "desk tape dispenser",
    "mustMatch": [
      "desk",
      "tape",
      "dispenser"
    ],
    "aiPromptSubject": "desk tape dispenser",
    "tip": "Cuerpo pesado de perfil ondulado que aloja el cilindro del rollo en el centro."
  },
  {
    "id": "simple-hole-punch",
    "name": "Perforadora de Papel de Dos Agujeros",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🕳️",
    "wikiCategories": [],
    "intitleQuery": "two hole paper punch",
    "mustMatch": [
      "two",
      "hole",
      "paper"
    ],
    "aiPromptSubject": "two hole paper punch",
    "tip": "Base rectangular plana con palanca superior arqueada que acciona dos cilindros."
  },
  {
    "id": "simple-rubber-stamp",
    "name": "Sello de Goma de Oficina",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🏷️",
    "wikiCategories": [],
    "intitleQuery": "wooden rubber stamp",
    "mustMatch": [
      "wooden",
      "rubber",
      "stamp"
    ],
    "aiPromptSubject": "wooden rubber stamp",
    "tip": "Bloque rectangular de madera en la base con un pomo esférico o cilíndrico vertical."
  },
  {
    "id": "simple-magnifying-glass",
    "name": "Lupa con Mango",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔍",
    "wikiCategories": [],
    "intitleQuery": "handheld magnifying glass",
    "mustMatch": [
      "handheld",
      "magnifying",
      "glass"
    ],
    "aiPromptSubject": "handheld magnifying glass",
    "tip": "Un aro circular en escorzo (elipse con espesor) unido a un mango cilíndrico torneado."
  },
  {
    "id": "simple-drafting-compass",
    "name": "Compás de Precisión Metálico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📐",
    "wikiCategories": [],
    "intitleQuery": "metal drafting compass",
    "mustMatch": [
      "metal",
      "drafting",
      "compass"
    ],
    "aiPromptSubject": "metal drafting compass",
    "tip": "Dos patas simétricas que nacen de una bisagra cilíndrica superior y se abren en V."
  },
  {
    "id": "simple-desk-bell",
    "name": "Timbre de Mostrador",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🛎️",
    "wikiCategories": [],
    "intitleQuery": "reception desk bell",
    "mustMatch": [
      "reception",
      "desk",
      "bell"
    ],
    "aiPromptSubject": "reception desk bell",
    "tip": "Una semiesfera metálica brillante asentada sobre una base circular negra con botón superior."
  },
  {
    "id": "simple-hourglass",
    "name": "Reloj de Arena",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "⏳",
    "wikiCategories": [],
    "intitleQuery": "glass hourglass",
    "mustMatch": [
      "glass",
      "hourglass"
    ],
    "aiPromptSubject": "glass hourglass",
    "tip": "Dos conos de vidrio opuestos unidos por un estrangulamiento central y enmarcados por dos bases."
  },
  {
    "id": "simple-globe-stand",
    "name": "Globo Terráqueo de Escritorio",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🌍",
    "wikiCategories": [],
    "intitleQuery": "desk world globe",
    "mustMatch": [
      "desk",
      "world",
      "globe"
    ],
    "aiPromptSubject": "desk world globe",
    "tip": "Una esfera perfecta inclinada a 23 grados sostenida por un arco meridiano semicircular."
  },
  {
    "id": "simple-closed-book",
    "name": "Libro de Tapa Dura Cerrado",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📕",
    "wikiCategories": [],
    "intitleQuery": "hardcover book",
    "mustMatch": [
      "hardcover",
      "book"
    ],
    "aiPromptSubject": "hardcover book",
    "tip": "Un prisma rectangular en perspectiva con lomo curvo y el bloque cóncavo de las hojas."
  },
  {
    "id": "simple-scroll-parchment",
    "name": "Pergamino Enrollado",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📜",
    "wikiCategories": [],
    "intitleQuery": "rolled parchment scroll",
    "mustMatch": [
      "rolled",
      "parchment",
      "scroll"
    ],
    "aiPromptSubject": "rolled parchment scroll",
    "tip": "Dos cilindros paralelos en los extremos unidos por una lámina curva de papel."
  },
  {
    "id": "simple-pencil-cup",
    "name": "Cubilete Portalápices con Lápices",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "✏️",
    "wikiCategories": [],
    "intitleQuery": "pencil holder cup",
    "mustMatch": [
      "pencil",
      "holder",
      "cup"
    ],
    "aiPromptSubject": "pencil holder cup",
    "tip": "Cilindro vertical del que sobresalen múltiples cilindros delgados inclinados en distintas direcciones."
  },
  {
    "id": "simple-eraser-block",
    "name": "Goma de Borrar con Faja de Cartón",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧼",
    "wikiCategories": [],
    "intitleQuery": "rubber pencil eraser",
    "mustMatch": [
      "rubber",
      "pencil",
      "eraser"
    ],
    "aiPromptSubject": "rubber pencil eraser",
    "tip": "Dos prismas rectangulares concéntricos: la faja exterior y el bloque de goma biselado."
  },
  {
    "id": "simple-lightbulb",
    "name": "Bombilla Clásica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "💡",
    "wikiCategories": [],
    "intitleQuery": "incandescent light bulb",
    "mustMatch": [
      "incandescent",
      "light",
      "bulb"
    ],
    "aiPromptSubject": "incandescent light bulb",
    "tip": "Combina una esfera de cristal que se estrecha hacia un cilindro roscado metálico en la base."
  },
  {
    "id": "simple-flashlight",
    "name": "Linterna de Mano",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔦",
    "wikiCategories": [],
    "intitleQuery": "handheld flashlight",
    "mustMatch": [
      "handheld",
      "flashlight"
    ],
    "aiPromptSubject": "handheld flashlight",
    "tip": "Un cilindro largo de agarre que se ensancha mediante un cono truncado hacia el lente frontal."
  },
  {
    "id": "simple-candle-holder",
    "name": "Vela en Palmatoria",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🕯️",
    "wikiCategories": [],
    "intitleQuery": "wax candle in holder",
    "mustMatch": [
      "wax",
      "candle",
      "holder"
    ],
    "aiPromptSubject": "wax candle in holder",
    "tip": "Contrasta la verticalidad cilíndrica de la vela con el platillo base y su asa anular."
  },
  {
    "id": "simple-oil-lamp",
    "name": "Quinque o Lámpara de Querosén",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪔",
    "wikiCategories": [],
    "intitleQuery": "vintage kerosene oil lamp",
    "mustMatch": [
      "vintage",
      "kerosene",
      "oil"
    ],
    "aiPromptSubject": "vintage kerosene oil lamp",
    "tip": "Depósito cilíndrico inferior coronado por una tulipa de vidrio abombada en la base y estrecha arriba."
  },
  {
    "id": "simple-camping-lantern",
    "name": "Farol de Tormenta Metálico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🏮",
    "wikiCategories": [],
    "intitleQuery": "metal hurricane lantern",
    "mustMatch": [
      "metal",
      "hurricane",
      "lantern"
    ],
    "aiPromptSubject": "metal hurricane lantern",
    "tip": "Estructura simétrica con tanque inferior, globo central de vidrio y dos tubos protectores laterales."
  },
  {
    "id": "simple-desk-lamp-cone",
    "name": "Lámpara de Escritorio con Pantalla Cónica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🛋️",
    "wikiCategories": [],
    "intitleQuery": "cone shade desk lamp",
    "mustMatch": [
      "cone",
      "shade",
      "desk"
    ],
    "aiPromptSubject": "cone shade desk lamp",
    "tip": "Base circular pesada, brazo curvo y pantalla en forma de cono truncado inclinado."
  },
  {
    "id": "simple-key",
    "name": "Llave Antigua",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔑",
    "wikiCategories": [],
    "intitleQuery": "vintage metal key",
    "mustMatch": [
      "vintage",
      "metal",
      "key"
    ],
    "aiPromptSubject": "vintage metal key",
    "tip": "Alinea el anillo ornamental, la caña cilíndrica larga y el paletón dentado en el extremo."
  },
  {
    "id": "simple-hand-bell",
    "name": "Campana de Mano",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔔",
    "wikiCategories": [],
    "intitleQuery": "brass hand bell",
    "mustMatch": [
      "brass",
      "hand",
      "bell"
    ],
    "aiPromptSubject": "brass hand bell",
    "tip": "Combina la cúpula acampanada de latón con el mango torneado de madera."
  },
  {
    "id": "simple-watering-can",
    "name": "Regadera de Jardín",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪴",
    "wikiCategories": [],
    "intitleQuery": "metal watering can",
    "mustMatch": [
      "metal",
      "watering",
      "can"
    ],
    "aiPromptSubject": "metal watering can",
    "tip": "Un cuerpo cilíndrico principal conectado a un tubo largo en diagonal rematado por la alcachofa cónica."
  },
  {
    "id": "simple-flower-pot",
    "name": "Maceta de Terracota",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪴",
    "wikiCategories": [],
    "intitleQuery": "terracotta flower pot",
    "mustMatch": [
      "terracotta",
      "flower",
      "pot"
    ],
    "aiPromptSubject": "terracotta flower pot",
    "tip": "Un cono truncado invertido con un reborde cilíndrico más ancho en la parte superior."
  },
  {
    "id": "simple-garden-trowel",
    "name": "Palita de Jardinería",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🌱",
    "wikiCategories": [],
    "intitleQuery": "hand garden trowel",
    "mustMatch": [
      "hand",
      "garden",
      "trowel"
    ],
    "aiPromptSubject": "hand garden trowel",
    "tip": "Cuchara metálica cóncava en punta unida por un cuello curvo al mango de madera."
  },
  {
    "id": "simple-birdhouse",
    "name": "Casita de Pájaros de Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🏠",
    "wikiCategories": [],
    "intitleQuery": "wooden birdhouse",
    "mustMatch": [
      "wooden",
      "birdhouse"
    ],
    "aiPromptSubject": "wooden birdhouse",
    "tip": "Un prisma vertical con techo a dos aguas, entrada circular frontal y pequeño posadero cilíndrico."
  },
  {
    "id": "simple-mailbox",
    "name": "Buzón de Correo",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📫",
    "wikiCategories": [],
    "intitleQuery": "classic street mailbox",
    "mustMatch": [
      "classic",
      "street",
      "mailbox"
    ],
    "aiPromptSubject": "classic street mailbox",
    "tip": "Un prisma vertical o bóveda semicilíndrica con ranura frontal y banderilla lateral."
  },
  {
    "id": "simple-traffic-cone",
    "name": "Cono de Tráfico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🚧",
    "wikiCategories": [],
    "intitleQuery": "orange traffic cone",
    "mustMatch": [
      "orange",
      "traffic",
      "cone"
    ],
    "aiPromptSubject": "orange traffic cone",
    "tip": "Un cono largo y esbelto asentado sobre una base cuadrada plana en perspectiva."
  },
  {
    "id": "simple-fire-extinguisher",
    "name": "Matafuegos o Extintor",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧯",
    "wikiCategories": [],
    "intitleQuery": "red fire extinguisher",
    "mustMatch": [
      "red",
      "fire",
      "extinguisher"
    ],
    "aiPromptSubject": "red fire extinguisher",
    "tip": "Un cilindro rojo con cúpula redondeada, válvula superior de gatillo y manguera curva lateral."
  },
  {
    "id": "simple-street-bollard",
    "name": "Bolardo de Hierro Fundido",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🚧",
    "wikiCategories": [],
    "intitleQuery": "cast iron street bollard",
    "mustMatch": [
      "cast",
      "iron",
      "street"
    ],
    "aiPromptSubject": "cast iron street bollard",
    "tip": "Columna corta y robusta con anillos decorativos en relieve y remate semiesférico."
  },
  {
    "id": "simple-trash-bin",
    "name": "Tacho de Basura Metálico Acanalado",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🗑️",
    "wikiCategories": [],
    "intitleQuery": "metal garbage can lid",
    "mustMatch": [
      "metal",
      "garbage",
      "can"
    ],
    "aiPromptSubject": "metal garbage can lid",
    "tip": "Cilindro con estrías verticales, dos asas laterales y tapa cónica baja con manija central."
  },
  {
    "id": "simple-wooden-bucket",
    "name": "Balde de Madera con Aros de Hierro",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪣",
    "wikiCategories": [],
    "intitleQuery": "wooden bucket metal bands",
    "mustMatch": [
      "wooden",
      "bucket",
      "metal"
    ],
    "aiPromptSubject": "wooden bucket metal bands",
    "tip": "Cono truncado formado por duelas verticales abrazadas por elipses metálicas."
  },
  {
    "id": "simple-wine-barrel",
    "name": "Barril o Tonel de Roble",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🛢️",
    "wikiCategories": [],
    "intitleQuery": "wooden oak barrel",
    "mustMatch": [
      "wooden",
      "oak",
      "barrel"
    ],
    "aiPromptSubject": "wooden oak barrel",
    "tip": "Cilindro abombado en el centro (doble curvatura) ceñido por aros metálicos."
  },
  {
    "id": "simple-bellows",
    "name": "Fuelle de Chimenea",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🔥",
    "wikiCategories": [],
    "intitleQuery": "fireplace wooden bellows",
    "mustMatch": [
      "fireplace",
      "wooden",
      "bellows"
    ],
    "aiPromptSubject": "fireplace wooden bellows",
    "tip": "Dos paletas en forma de lágrima unidas por un acordeón de cuero plegado y boquilla cónica."
  },
  {
    "id": "simple-clothes-iron",
    "name": "Plancha Antigua de Hierro Fundido",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥌",
    "wikiCategories": [],
    "intitleQuery": "antique cast iron sad iron",
    "mustMatch": [
      "antique",
      "cast",
      "iron"
    ],
    "aiPromptSubject": "antique cast iron sad iron",
    "tip": "Base triangular maciza en forma de proa con una gruesa manija arqueada superior."
  },
  {
    "id": "simple-soap-dispenser",
    "name": "Dispensador de Jabón con Bomba",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧴",
    "wikiCategories": [],
    "intitleQuery": "ceramic soap dispenser",
    "mustMatch": [
      "ceramic",
      "soap",
      "dispenser"
    ],
    "aiPromptSubject": "ceramic soap dispenser",
    "tip": "Cuerpo cilíndrico u ovoide coronado por un cabezal dosificador con pico horizontal."
  },
  {
    "id": "simple-perfume-flacon",
    "name": "Frasco de Perfume Geométrico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧴",
    "wikiCategories": [],
    "intitleQuery": "glass perfume bottle",
    "mustMatch": [
      "glass",
      "perfume",
      "bottle"
    ],
    "aiPromptSubject": "glass perfume bottle",
    "tip": "Un bloque prismático de vidrio transparente con espesor interno visible y atomizador cilíndrico."
  },
  {
    "id": "simple-shaving-brush",
    "name": "Brocha de Afeitar",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪒",
    "wikiCategories": [],
    "intitleQuery": "traditional shaving brush",
    "mustMatch": [
      "traditional",
      "shaving",
      "brush"
    ],
    "aiPromptSubject": "traditional shaving brush",
    "tip": "Mango corto torneado con cintura ergonómica y penacho semiesférico denso de cerdas."
  },
  {
    "id": "simple-safety-razor",
    "name": "Maquinilla de Afeitar Clásica Metálica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪒",
    "wikiCategories": [],
    "intitleQuery": "double edge safety razor",
    "mustMatch": [
      "double",
      "edge",
      "safety"
    ],
    "aiPromptSubject": "double edge safety razor",
    "tip": "Mango cilíndrico moleteado unido perpendicularmente a un cabezal curvo simétrico."
  },
  {
    "id": "simple-eyeglasses",
    "name": "Gafas de Lectura",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "👓",
    "wikiCategories": [],
    "intitleQuery": "reading eyeglasses",
    "mustMatch": [
      "reading",
      "eyeglasses"
    ],
    "aiPromptSubject": "reading eyeglasses",
    "tip": "Traza una caja en perspectiva para alinear ambos aros del marco y proyectar las patillas."
  },
  {
    "id": "simple-baseball-cap",
    "name": "Gorra con Visera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧢",
    "wikiCategories": [],
    "intitleQuery": "baseball cap",
    "mustMatch": [
      "baseball",
      "cap"
    ],
    "aiPromptSubject": "baseball cap",
    "tip": "Una semiesfera dividida en gajos que se proyecta hacia adelante en el plano curvo de la visera."
  },
  {
    "id": "simple-bowler-hat",
    "name": "Sombrero Bombín o Fedora",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎩",
    "wikiCategories": [],
    "intitleQuery": "classic bowler hat",
    "mustMatch": [
      "classic",
      "bowler",
      "hat"
    ],
    "aiPromptSubject": "classic bowler hat",
    "tip": "Cúpula ovalada rodeada por la elipse alabeada del ala."
  },
  {
    "id": "simple-sneaker-shoe",
    "name": "Zapatilla de Lona",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "👟",
    "wikiCategories": [],
    "intitleQuery": "canvas sneaker shoe",
    "mustMatch": [
      "canvas",
      "sneaker",
      "shoe"
    ],
    "aiPromptSubject": "canvas sneaker shoe",
    "tip": "Construye primero la suela plana en perspectiva y levanta sobre ella la puntera de goma y el empeine."
  },
  {
    "id": "simple-ankle-boot",
    "name": "Bota de Cuero",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🥾",
    "wikiCategories": [],
    "intitleQuery": "leather ankle boot",
    "mustMatch": [
      "leather",
      "ankle",
      "boot"
    ],
    "aiPromptSubject": "leather ankle boot",
    "tip": "Diferencia el cilindro vertical de la caña del volumen adelantado de la puntera y el tacón."
  },
  {
    "id": "simple-wooden-clog",
    "name": "Zueco de Madera Tallado",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "👞",
    "wikiCategories": [],
    "intitleQuery": "traditional wooden clog",
    "mustMatch": [
      "traditional",
      "wooden",
      "clog"
    ],
    "aiPromptSubject": "traditional wooden clog",
    "tip": "Volumen escultórico de una sola pieza con punta elevada y abertura elíptica."
  },
  {
    "id": "simple-umbrella",
    "name": "Paraguas Clásico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "☂️",
    "wikiCategories": [],
    "intitleQuery": "classic umbrella",
    "mustMatch": [
      "classic",
      "umbrella"
    ],
    "aiPromptSubject": "classic umbrella",
    "tip": "Estudia el mango curvo en J o la tensión de los gajos triangulares entre las varillas."
  },
  {
    "id": "simple-backpack",
    "name": "Mochila Simple",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎒",
    "wikiCategories": [],
    "intitleQuery": "canvas backpack",
    "mustMatch": [
      "canvas",
      "backpack"
    ],
    "aiPromptSubject": "canvas backpack",
    "tip": "Un bloque prismático con bordes redondeados, bolsillo frontal saliente y pliegues de tensión."
  },
  {
    "id": "simple-leather-briefcase",
    "name": "Maletín Rígido con Manija",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "💼",
    "wikiCategories": [],
    "intitleQuery": "vintage leather briefcase",
    "mustMatch": [
      "vintage",
      "leather",
      "briefcase"
    ],
    "aiPromptSubject": "vintage leather briefcase",
    "tip": "Prisma rectangular estrecho con esquinas reforzadas, dos hebillas frontales y asa central."
  },
  {
    "id": "simple-pocket-compass",
    "name": "Brújula de Bolsillo",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧭",
    "wikiCategories": [],
    "intitleQuery": "brass pocket compass",
    "mustMatch": [
      "brass",
      "pocket",
      "compass"
    ],
    "aiPromptSubject": "brass pocket compass",
    "tip": "Una caja cilíndrica chata con tapa articulada y aguja central."
  },
  {
    "id": "simple-pocket-watch",
    "name": "Reloj de Bolsillo con Corona",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "⏱️",
    "wikiCategories": [],
    "intitleQuery": "vintage pocket watch",
    "mustMatch": [
      "vintage",
      "pocket",
      "watch"
    ],
    "aiPromptSubject": "vintage pocket watch",
    "tip": "Disco lenticular metálico rematado en la cima por el cuello de la corona y la argolla."
  },
  {
    "id": "simple-computer-mouse",
    "name": "Ratón de Computadora (Mouse)",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🖱️",
    "wikiCategories": [],
    "intitleQuery": "computer mouse",
    "mustMatch": [
      "computer",
      "mouse"
    ],
    "aiPromptSubject": "computer mouse",
    "tip": "Una forma ergonómica abovedada continua con una línea divisoria central y rueda cilíndrica."
  },
  {
    "id": "simple-earbuds-case",
    "name": "Auriculares Inalámbricos con Estuche",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎧",
    "wikiCategories": [],
    "intitleQuery": "wireless earbuds case",
    "mustMatch": [
      "wireless",
      "earbuds",
      "case"
    ],
    "aiPromptSubject": "wireless earbuds case",
    "tip": "Cajas de esquinas muy redondeadas (cápsulas) combinadas con pequeños cilindros angulados."
  },
  {
    "id": "simple-chess-knight",
    "name": "Pieza de Ajedrez (Caballo o Rey)",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "♟️",
    "wikiCategories": [],
    "intitleQuery": "wooden chess piece",
    "mustMatch": [
      "wooden",
      "chess",
      "piece"
    ],
    "aiPromptSubject": "wooden chess piece",
    "tip": "Combina una base torneada de revolución con la silueta tallada superior."
  },
  {
    "id": "simple-dice-pair",
    "name": "Dados Cúbicos",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎲",
    "wikiCategories": [],
    "intitleQuery": "six sided dice",
    "mustMatch": [
      "six",
      "sided",
      "dice"
    ],
    "aiPromptSubject": "six sided dice",
    "tip": "Practica cubos en perspectiva de dos puntos con esquinas biseladas y puntos en escorzo."
  },
  {
    "id": "simple-rubiks-cube",
    "name": "Cubo de Rubik",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧊",
    "wikiCategories": [],
    "intitleQuery": "rubiks cube",
    "mustMatch": [
      "rubiks",
      "cube"
    ],
    "aiPromptSubject": "rubiks cube",
    "tip": "Un cubo principal subdividido en 3x3x3 cubos menores; ideal para practicar líneas paralelas en fuga."
  },
  {
    "id": "simple-spinning-top",
    "name": "Trompo o Peonza de Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪀",
    "wikiCategories": [],
    "intitleQuery": "wooden spinning top toy",
    "mustMatch": [
      "wooden",
      "spinning",
      "top"
    ],
    "aiPromptSubject": "wooden spinning top toy",
    "tip": "Cuerpo cónico piriforme torneado con punta metálica inferior y cordel."
  },
  {
    "id": "simple-yo-yo",
    "name": "Yo-Yo de Madera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪀",
    "wikiCategories": [],
    "intitleQuery": "wooden yoyo toy",
    "mustMatch": [
      "wooden",
      "yoyo",
      "toy"
    ],
    "aiPromptSubject": "wooden yoyo toy",
    "tip": "Dos discos gruesos abombados separados por una estrecha ranura central donde se enrolla el hilo."
  },
  {
    "id": "simple-bowling-pin",
    "name": "Bolo de Boliche",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎳",
    "wikiCategories": [],
    "intitleQuery": "white bowling pin",
    "mustMatch": [
      "white",
      "bowling",
      "pin"
    ],
    "aiPromptSubject": "white bowling pin",
    "tip": "Excelente estudio de curvas continuas cóncavas y convexas alrededor de un eje de simetría."
  },
  {
    "id": "simple-kettlebell",
    "name": "Pesa Rusa (Kettlebell)",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🏋️",
    "wikiCategories": [],
    "intitleQuery": "cast iron kettlebell",
    "mustMatch": [
      "cast",
      "iron",
      "kettlebell"
    ],
    "aiPromptSubject": "cast iron kettlebell",
    "tip": "Una esfera de hierro fundido con base plana y un asa gruesa arqueada en la parte superior."
  },
  {
    "id": "simple-hex-dumbbell",
    "name": "Mancuerna Hexagonal",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🏋️",
    "wikiCategories": [],
    "intitleQuery": "hex dumbbell weight",
    "mustMatch": [
      "hex",
      "dumbbell",
      "weight"
    ],
    "aiPromptSubject": "hex dumbbell weight",
    "tip": "Dos prismas hexagonales pesados unidos en el centro por una barra cilíndrica estriada."
  },
  {
    "id": "simple-whistle",
    "name": "Silbato Metálico",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "📯",
    "wikiCategories": [],
    "intitleQuery": "metal referee whistle",
    "mustMatch": [
      "metal",
      "referee",
      "whistle"
    ],
    "aiPromptSubject": "metal referee whistle",
    "tip": "Un cilindro corto unido tangencialmente a una boquilla prismática plana con argolla."
  },
  {
    "id": "simple-harmonica",
    "name": "Armónica",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎵",
    "wikiCategories": [],
    "intitleQuery": "blues harmonica",
    "mustMatch": [
      "blues",
      "harmonica"
    ],
    "aiPromptSubject": "blues harmonica",
    "tip": "Un prisma rectangular alargado con hilera de celdas cuadradas en el frente y cubiertas biseladas."
  },
  {
    "id": "simple-metronome",
    "name": "Metrónomo Piramidal",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎼",
    "wikiCategories": [],
    "intitleQuery": "wooden pyramid metronome",
    "mustMatch": [
      "wooden",
      "pyramid",
      "metronome"
    ],
    "aiPromptSubject": "wooden pyramid metronome",
    "tip": "Una pirámide truncada de madera con escala frontal y varilla pendular con contrapeso."
  },
  {
    "id": "simple-tuning-fork",
    "name": "Diapasón Acústico en U",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🎵",
    "wikiCategories": [],
    "intitleQuery": "metal tuning fork",
    "mustMatch": [
      "metal",
      "tuning",
      "fork"
    ],
    "aiPromptSubject": "metal tuning fork",
    "tip": "Horquilla metálica simétrica de sección cuadrada que nace de un vástago cilíndrico."
  },
  {
    "id": "simple-maraca",
    "name": "Maraca de Madera Pintada",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🪇",
    "wikiCategories": [],
    "intitleQuery": "wooden maraca percussion",
    "mustMatch": [
      "wooden",
      "maraca",
      "percussion"
    ],
    "aiPromptSubject": "wooden maraca percussion",
    "tip": "Esfera u ovoide hueco unido a un mango cilíndrico torneado."
  },
  {
    "id": "simple-apple",
    "name": "Manzana",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍎",
    "wikiCategories": [],
    "intitleQuery": "red apple fruit",
    "mustMatch": [
      "red",
      "apple",
      "fruit"
    ],
    "aiPromptSubject": "red apple fruit",
    "tip": "Modela el volumen esférico ligeramente achatado hacia la base y marca la hendidura superior del tallo."
  },
  {
    "id": "simple-pear",
    "name": "Pera",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🍐",
    "wikiCategories": [],
    "intitleQuery": "pear fruit",
    "mustMatch": [
      "pear",
      "fruit"
    ],
    "aiPromptSubject": "pear fruit",
    "tip": "Une una esfera menor superior con una esfera mayor inferior mediante curvas cóncavas y convexas suaves."
  },
  {
    "id": "simple-bell-pepper",
    "name": "Morrón o Pimiento",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🫑",
    "wikiCategories": [],
    "intitleQuery": "bell pepper",
    "mustMatch": [
      "bell",
      "pepper"
    ],
    "aiPromptSubject": "bell pepper",
    "tip": "Observa los grandes lóbulos redondeados que convergen hacia el tallo curvo superior."
  },
  {
    "id": "simple-garlic-bulb",
    "name": "Cabeza de Ajo",
    "category": "simples",
    "categoryLabel": "Objetos Simples",
    "icon": "🧄",
    "wikiCategories": [],
    "intitleQuery": "garlic bulb",
    "mustMatch": [
      "garlic",
      "bulb"
    ],
    "aiPromptSubject": "garlic bulb",
    "tip": "Envuelve los dientes abultados dentro de una forma global semiesférica con cuello seco."
  },
  {
    "id": "moka-pot",
    "name": "Cafetera Italiana (Moka)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "☕",
    "wikiCategories": [
      "Category:Moka_Express",
      "Category:Moka_pots"
    ],
    "intitleQuery": "moka pot",
    "mustMatch": [
      "moka",
      "bialetti",
      "caffettiera",
      "espresso"
    ],
    "aiPromptSubject": "moka pot isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cafetera Italiana (Moka)\"."
  },
  {
    "id": "french-press",
    "name": "Prensa Francesa de Café",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "☕",
    "wikiCategories": [
      "Category:French_presses"
    ],
    "intitleQuery": "french press coffee",
    "mustMatch": [
      "french press",
      "cafetiere",
      "plunger",
      "bodum"
    ],
    "aiPromptSubject": "french press coffee isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Prensa Francesa de Café\"."
  },
  {
    "id": "chemex-coffeemaker",
    "name": "Cafetera Chemex de Vidrio con Collar de Madera",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "☕",
    "wikiCategories": [
      "Category:Chemex"
    ],
    "intitleQuery": "Chemex coffeemaker",
    "mustMatch": [
      "chemex",
      "coffeemaker",
      "pour-over"
    ],
    "aiPromptSubject": "Chemex coffeemaker isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cafetera Chemex de Vidrio con Collar de Madera\"."
  },
  {
    "id": "coffee-grinder",
    "name": "Molinillo de Café Manual Antiguo",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "⚙️",
    "wikiCategories": [
      "Category:Coffee_grinders"
    ],
    "intitleQuery": "coffee grinder",
    "mustMatch": [
      "grinder",
      "mill",
      "kaffeemühle",
      "moulin"
    ],
    "aiPromptSubject": "coffee grinder isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Molinillo de Café Manual Antiguo\"."
  },
  {
    "id": "teapot-tetsubin",
    "name": "Tetera de Hierro Japonés (Tetsubin)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🫖",
    "wikiCategories": [
      "Category:Tetsubin"
    ],
    "intitleQuery": "tetsubin teapot",
    "mustMatch": [
      "tetsubin",
      "teapot",
      "kettle",
      "cast iron"
    ],
    "aiPromptSubject": "tetsubin teapot isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tetera de Hierro Japonés (Tetsubin)\"."
  },
  {
    "id": "porcelain-teapot",
    "name": "Tetera de Porcelana Clásica",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🫖",
    "wikiCategories": [
      "Category:Porcelain_teapots",
      "Category:Teapots"
    ],
    "intitleQuery": "porcelain teapot",
    "mustMatch": [
      "teapot",
      "porcelain",
      "ceramic",
      "théière",
      "teekanne"
    ],
    "aiPromptSubject": "porcelain teapot isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tetera de Porcelana Clásica\"."
  },
  {
    "id": "whistling-kettle",
    "name": "Pava o Hervidor Metálico con Silbato",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🫖",
    "wikiCategories": [
      "Category:Kettles"
    ],
    "intitleQuery": "tea kettle whistling",
    "mustMatch": [
      "kettle",
      "teakettle",
      "wasserkocher",
      "bouilloire"
    ],
    "aiPromptSubject": "tea kettle whistling isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pava o Hervidor Metálico con Silbato\"."
  },
  {
    "id": "samovar",
    "name": "Samovar Ruso de Metal",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🏺",
    "wikiCategories": [
      "Category:Samovars"
    ],
    "intitleQuery": "samovar",
    "mustMatch": [
      "samovar",
      "urn",
      "tea"
    ],
    "aiPromptSubject": "samovar isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Samovar Ruso de Metal\"."
  },
  {
    "id": "soda-siphon",
    "name": "Sifón de Soda Antiguo",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍾",
    "wikiCategories": [
      "Category:Soda_syphons"
    ],
    "intitleQuery": "soda siphon",
    "mustMatch": [
      "siphon",
      "syphon",
      "selters",
      "soda"
    ],
    "aiPromptSubject": "soda siphon isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sifón de Soda Antiguo\"."
  },
  {
    "id": "wing-corkscrew",
    "name": "Sacacorchos de Alas Mecánico",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍾",
    "wikiCategories": [
      "Category:Corkscrews"
    ],
    "intitleQuery": "wing corkscrew",
    "mustMatch": [
      "corkscrew",
      "tire-bouchon",
      "korkenzieher",
      "opener"
    ],
    "aiPromptSubject": "wing corkscrew isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sacacorchos de Alas Mecánico\"."
  },
  {
    "id": "waiter-corkscrew",
    "name": "Sacacorchos de Sumiller de Dos Tiempos",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍷",
    "wikiCategories": [
      "Category:Corkscrews"
    ],
    "intitleQuery": "waiter corkscrew",
    "mustMatch": [
      "corkscrew",
      "sommelier",
      "waiter",
      "opener"
    ],
    "aiPromptSubject": "waiter corkscrew isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sacacorchos de Sumiller de Dos Tiempos\"."
  },
  {
    "id": "can-opener",
    "name": "Abrelatas Mecánico de Rueda Dentada",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥫",
    "wikiCategories": [
      "Category:Can_openers"
    ],
    "intitleQuery": "can opener",
    "mustMatch": [
      "opener",
      "dosenöffner",
      "ouvre-boîtes"
    ],
    "aiPromptSubject": "can opener isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Abrelatas Mecánico de Rueda Dentada\"."
  },
  {
    "id": "mortar-pestle",
    "name": "Mortero de Piedra o Bronce",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥣",
    "wikiCategories": [
      "Category:Mortars_and_pestles"
    ],
    "intitleQuery": "mortar pestle",
    "mustMatch": [
      "mortar",
      "pestle",
      "mörser",
      "mortier",
      "molcajete"
    ],
    "aiPromptSubject": "mortar pestle isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mortero de Piedra o Bronce\"."
  },
  {
    "id": "kitchen-scale",
    "name": "Balanza de Cocina Mecánica Antigua",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "⚖️",
    "wikiCategories": [
      "Category:Kitchen_scales",
      "Category:Weighing_scales"
    ],
    "intitleQuery": "vintage kitchen scale",
    "mustMatch": [
      "scale",
      "balance",
      "waage",
      "weighing"
    ],
    "aiPromptSubject": "vintage kitchen scale isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Balanza de Cocina Mecánica Antigua\"."
  },
  {
    "id": "mason-jar",
    "name": "Tarro de Vidrio con Cierre Hermético de Alambre",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🫙",
    "wikiCategories": [
      "Category:Mason_jars",
      "Category:Weck_jars"
    ],
    "intitleQuery": "mason jar",
    "mustMatch": [
      "jar",
      "mason",
      "kilner",
      "weck",
      "glass"
    ],
    "aiPromptSubject": "mason jar isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tarro de Vidrio con Cierre Hermético de Alambre\"."
  },
  {
    "id": "crystal-decanter",
    "name": "Decantador de Cristal Tallado",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍷",
    "wikiCategories": [
      "Category:Decanters"
    ],
    "intitleQuery": "crystal decanter",
    "mustMatch": [
      "decanter",
      "carafe",
      "crystal",
      "glass"
    ],
    "aiPromptSubject": "crystal decanter isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Decantador de Cristal Tallado\"."
  },
  {
    "id": "wine-goblet",
    "name": "Copa de Vino de Cristal",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍷",
    "wikiCategories": [
      "Category:Wine_glasses"
    ],
    "intitleQuery": "wine glass goblet",
    "mustMatch": [
      "wine glass",
      "goblet",
      "stemware",
      "chalice",
      "verre"
    ],
    "aiPromptSubject": "wine glass goblet isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Copa de Vino de Cristal\"."
  },
  {
    "id": "beer-stein",
    "name": "Jarra de Cerveza Alemana con Tapa de Peltre",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍺",
    "wikiCategories": [
      "Category:Beer_steins"
    ],
    "intitleQuery": "beer stein",
    "mustMatch": [
      "stein",
      "mug",
      "tankard",
      "krug",
      "humpen"
    ],
    "aiPromptSubject": "beer stein isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Jarra de Cerveza Alemana con Tapa de Peltre\"."
  },
  {
    "id": "thermos-flask",
    "name": "Termo Metálico Cilíndrico con Taza",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍼",
    "wikiCategories": [
      "Category:Vacuum_flasks"
    ],
    "intitleQuery": "vacuum flask thermos",
    "mustMatch": [
      "thermos",
      "vacuum flask",
      "isolierkanne"
    ],
    "aiPromptSubject": "vacuum flask thermos isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Termo Metálico Cilíndrico con Taza\"."
  },
  {
    "id": "chef-knife",
    "name": "Cuchillo de Chef de Hoja Ancha",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🔪",
    "wikiCategories": [
      "Category:Kitchen_knives"
    ],
    "intitleQuery": "chef knife kitchen",
    "mustMatch": [
      "knife",
      "blade",
      "messer",
      "couteau"
    ],
    "aiPromptSubject": "chef knife kitchen isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cuchillo de Chef de Hoja Ancha\"."
  },
  {
    "id": "meat-cleaver",
    "name": "Hacha de Carnicero (Chopper)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🔪",
    "wikiCategories": [
      "Category:Cleavers"
    ],
    "intitleQuery": "meat cleaver",
    "mustMatch": [
      "cleaver",
      "butcher",
      "knife",
      "beil"
    ],
    "aiPromptSubject": "meat cleaver isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hacha de Carnicero (Chopper)\"."
  },
  {
    "id": "box-grater",
    "name": "Rallador Metálico de Cuatro Caras",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🧀",
    "wikiCategories": [
      "Category:Graters"
    ],
    "intitleQuery": "box grater",
    "mustMatch": [
      "grater",
      "reibe",
      "râpe"
    ],
    "aiPromptSubject": "box grater isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rallador Metálico de Cuatro Caras\"."
  },
  {
    "id": "rotary-eggbeater",
    "name": "Batidor Manual de Manivela y Engranajes",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥚",
    "wikiCategories": [
      "Category:Egg_beaters"
    ],
    "intitleQuery": "rotary egg beater",
    "mustMatch": [
      "beater",
      "whisk",
      "mixer",
      "hand mixer"
    ],
    "aiPromptSubject": "rotary egg beater isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Batidor Manual de Manivela y Engranajes\"."
  },
  {
    "id": "balloon-whisk",
    "name": "Batidor de Varillas de Acero (Globo)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥄",
    "wikiCategories": [
      "Category:Whisks"
    ],
    "intitleQuery": "balloon whisk",
    "mustMatch": [
      "whisk",
      "schneebesen",
      "fouet"
    ],
    "aiPromptSubject": "balloon whisk isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Batidor de Varillas de Acero (Globo)\"."
  },
  {
    "id": "colander-strainer",
    "name": "Colador Metálico Perforado con Dos Asas",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥣",
    "wikiCategories": [
      "Category:Colanders"
    ],
    "intitleQuery": "metal colander",
    "mustMatch": [
      "colander",
      "strainer",
      "sieve",
      "sieb",
      "passoire"
    ],
    "aiPromptSubject": "metal colander isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Colador Metálico Perforado con Dos Asas\"."
  },
  {
    "id": "citrus-juicer",
    "name": "Exprimidor de Cítricos de Vidrio o Metal",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍋",
    "wikiCategories": [
      "Category:Lemon_squeezers"
    ],
    "intitleQuery": "lemon squeezer juicer",
    "mustMatch": [
      "squeezer",
      "juicer",
      "reac",
      "zitronenpresse",
      "presse-agrumes"
    ],
    "aiPromptSubject": "lemon squeezer juicer isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Exprimidor de Cítricos de Vidrio o Metal\"."
  },
  {
    "id": "garlic-press",
    "name": "Prensa de Ajos Metálica de Palanca",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🧄",
    "wikiCategories": [
      "Category:Garlic_presses"
    ],
    "intitleQuery": "garlic press",
    "mustMatch": [
      "garlic press",
      "knoblauchpresse",
      "presse-ail"
    ],
    "aiPromptSubject": "garlic press isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Prensa de Ajos Metálica de Palanca\"."
  },
  {
    "id": "pasta-machine",
    "name": "Máquina Manual de Hacer Pasta con Manivela",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍝",
    "wikiCategories": [
      "Category:Pasta_machines"
    ],
    "intitleQuery": "pasta maker machine",
    "mustMatch": [
      "pasta machine",
      "imperia",
      "marcato",
      "nudelmaschine"
    ],
    "aiPromptSubject": "pasta maker machine isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Máquina Manual de Hacer Pasta con Manivela\"."
  },
  {
    "id": "meat-mincer",
    "name": "Picadora de Carne Manual de Hierro Fundido",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "⚙️",
    "wikiCategories": [
      "Category:Meat_grinders"
    ],
    "intitleQuery": "meat grinder manual",
    "mustMatch": [
      "meat grinder",
      "mincer",
      "fleischwolf",
      "hachoir"
    ],
    "aiPromptSubject": "meat grinder manual isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Picadora de Carne Manual de Hierro Fundido\"."
  },
  {
    "id": "cast-iron-skillet",
    "name": "Sartén de Hierro Fundido con Dos Picos",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍳",
    "wikiCategories": [
      "Category:Cast-iron_skillets"
    ],
    "intitleQuery": "cast iron skillet",
    "mustMatch": [
      "skillet",
      "cast iron",
      "frying pan",
      "pfanne"
    ],
    "aiPromptSubject": "cast iron skillet isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sartén de Hierro Fundido con Dos Picos\"."
  },
  {
    "id": "dutch-oven-pot",
    "name": "Cazuela Cocotte de Hierro Esmaltado",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🍲",
    "wikiCategories": [
      "Category:Dutch_ovens"
    ],
    "intitleQuery": "dutch oven pot",
    "mustMatch": [
      "dutch oven",
      "cocotte",
      "le creuset",
      "casserole"
    ],
    "aiPromptSubject": "dutch oven pot isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cazuela Cocotte de Hierro Esmaltado\"."
  },
  {
    "id": "waffle-iron",
    "name": "Gofrera Antigua de Hierro Fundido",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🧇",
    "wikiCategories": [
      "Category:Waffle_irons"
    ],
    "intitleQuery": "cast iron waffle iron",
    "mustMatch": [
      "waffle iron",
      "waffeleisen",
      "gaufrier"
    ],
    "aiPromptSubject": "cast iron waffle iron isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gofrera Antigua de Hierro Fundido\"."
  },
  {
    "id": "wooden-pepper-mill",
    "name": "Molinillo de Pimienta Torneado (Peugeot)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🧂",
    "wikiCategories": [
      "Category:Pepper_mills"
    ],
    "intitleQuery": "pepper mill grinder",
    "mustMatch": [
      "pepper mill",
      "grinder",
      "pfeffermühle",
      "moulin à poivre"
    ],
    "aiPromptSubject": "pepper mill grinder isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Molinillo de Pimienta Torneado (Peugeot)\"."
  },
  {
    "id": "oil-cruet",
    "name": "Aceitera o Vinagrera de Vidrio o Cobre",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🫒",
    "wikiCategories": [
      "Category:Cruets"
    ],
    "intitleQuery": "oil cruet bottle",
    "mustMatch": [
      "cruet",
      "oil bottle",
      "essig",
      "vinaigrier"
    ],
    "aiPromptSubject": "oil cruet bottle isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Aceitera o Vinagrera de Vidrio o Cobre\"."
  },
  {
    "id": "tailor-scissors",
    "name": "Tijeras de Sastre de Metal",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "✂️",
    "wikiCategories": [
      "Category:Scissors"
    ],
    "intitleQuery": "tailor scissors",
    "mustMatch": [
      "scissor",
      "shears",
      "ciseaux",
      "schere"
    ],
    "aiPromptSubject": "tailor scissors isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tijeras de Sastre de Metal\"."
  },
  {
    "id": "embroidery-scissors",
    "name": "Tijeras de Bordar en Forma de Cigüeña",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "✂️",
    "wikiCategories": [
      "Category:Embroidery_scissors",
      "Category:Scissors"
    ],
    "intitleQuery": "stork embroidery scissors",
    "mustMatch": [
      "scissors",
      "stork",
      "embroidery",
      "ciseaux"
    ],
    "aiPromptSubject": "stork embroidery scissors isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tijeras de Bordar en Forma de Cigüeña\"."
  },
  {
    "id": "vintage-sewing-machine",
    "name": "Máquina de Coser Antigua (Singer)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🧵",
    "wikiCategories": [
      "Category:Sewing_machines",
      "Category:Singer_sewing_machines"
    ],
    "intitleQuery": "vintage sewing machine",
    "mustMatch": [
      "sewing machine",
      "singer",
      "nähmaschine",
      "machine à coudre"
    ],
    "aiPromptSubject": "vintage sewing machine isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Máquina de Coser Antigua (Singer)\"."
  },
  {
    "id": "wooden-spools-thimble",
    "name": "Carretes de Hilo de Madera y Dedal Metálico",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🧵",
    "wikiCategories": [
      "Category:Thimbles",
      "Category:Spools"
    ],
    "intitleQuery": "wooden thread spool thimble",
    "mustMatch": [
      "thimble",
      "spool",
      "bobbin",
      "fingerhut",
      "dé à coudre"
    ],
    "aiPromptSubject": "wooden thread spool thimble isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Carretes de Hilo de Madera y Dedal Metálico\"."
  },
  {
    "id": "pincushion-tomato",
    "name": "Acerico o Alfiletero con Alfileres y Agujas",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🪡",
    "wikiCategories": [
      "Category:Pincushions"
    ],
    "intitleQuery": "pincushion needles",
    "mustMatch": [
      "pincushion",
      "needles",
      "pins",
      "nadelkissen"
    ],
    "aiPromptSubject": "pincushion needles isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Acerico o Alfiletero con Alfileres y Agujas\"."
  },
  {
    "id": "charcoal-iron",
    "name": "Plancha Antigua de Carbón con Chimenea",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥌",
    "wikiCategories": [
      "Category:Charcoal_irons",
      "Category:Flat_irons"
    ],
    "intitleQuery": "charcoal sad iron",
    "mustMatch": [
      "iron",
      "flatiron",
      "bügeleisen",
      "fer à repasser"
    ],
    "aiPromptSubject": "charcoal sad iron isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Plancha Antigua de Carbón con Chimenea\"."
  },
  {
    "id": "clothespin-wooden",
    "name": "Pinza de Ropa de Madera con Resorte",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "📎",
    "wikiCategories": [
      "Category:Clothespins"
    ],
    "intitleQuery": "wooden clothespin",
    "mustMatch": [
      "clothespin",
      "clothes peg",
      "wäscheklammer",
      "pince à linge"
    ],
    "aiPromptSubject": "wooden clothespin isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pinza de Ropa de Madera con Resorte\"."
  },
  {
    "id": "antique-padlock",
    "name": "Candado Antiguo de Hierro",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🔐",
    "wikiCategories": [
      "Category:Padlocks"
    ],
    "intitleQuery": "antique padlock",
    "mustMatch": [
      "padlock",
      "lock",
      "vorhängeschloss",
      "cadenas"
    ],
    "aiPromptSubject": "antique padlock isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Candado Antiguo de Hierro\"."
  },
  {
    "id": "combination-lock",
    "name": "Candado de Combinación de Dial Giratorio",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🔒",
    "wikiCategories": [
      "Category:Combination_locks"
    ],
    "intitleQuery": "combination padlock dial",
    "mustMatch": [
      "combination lock",
      "padlock",
      "master lock",
      "zahlenschloss"
    ],
    "aiPromptSubject": "combination padlock dial isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Candado de Combinación de Dial Giratorio\"."
  },
  {
    "id": "skeleton-keys",
    "name": "Manojo de Llaves Antiguas de Forja",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🗝️",
    "wikiCategories": [
      "Category:Keys"
    ],
    "intitleQuery": "skeleton keys",
    "mustMatch": [
      "key",
      "skeleton key",
      "schlüssel",
      "clé"
    ],
    "aiPromptSubject": "skeleton keys isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Manojo de Llaves Antiguas de Forja\"."
  },
  {
    "id": "anglepoise-lamp",
    "name": "Lámpara Articulada de Arquitecto (Anglepoise)",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "💡",
    "wikiCategories": [
      "Category:Anglepoise_lamps",
      "Category:Desk_lamps"
    ],
    "intitleQuery": "anglepoise desk lamp",
    "mustMatch": [
      "lamp",
      "anglepoise",
      "luxo",
      "desk lamp"
    ],
    "aiPromptSubject": "anglepoise desk lamp isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lámpara Articulada de Arquitecto (Anglepoise)\"."
  },
  {
    "id": "bankers-lamp",
    "name": "Lámpara de Banquero con Pantalla Verde (Emeralite)",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "💡",
    "wikiCategories": [
      "Category:Banker's_lamps",
      "Category:Emeralite"
    ],
    "intitleQuery": "banker lamp green",
    "mustMatch": [
      "banker",
      "emeralite",
      "lamp",
      "green shade"
    ],
    "aiPromptSubject": "banker lamp green isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lámpara de Banquero con Pantalla Verde (Emeralite)\"."
  },
  {
    "id": "tiffanys-lamp",
    "name": "Lámpara de Vitral Emplomado (Estilo Tiffany)",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🏮",
    "wikiCategories": [
      "Category:Tiffany_lamps"
    ],
    "intitleQuery": "Tiffany lamp stained glass",
    "mustMatch": [
      "tiffany lamp",
      "stained glass",
      "lamp"
    ],
    "aiPromptSubject": "Tiffany lamp stained glass isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lámpara de Vitral Emplomado (Estilo Tiffany)\"."
  },
  {
    "id": "kerosene-lamp",
    "name": "Quinqué o Lámpara de Queroseno con Tubo de Cristal",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🪔",
    "wikiCategories": [
      "Category:Kerosene_lamps"
    ],
    "intitleQuery": "kerosene lamp",
    "mustMatch": [
      "lamp",
      "kerosene",
      "oil lamp",
      "petroleumlampe"
    ],
    "aiPromptSubject": "kerosene lamp isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Quinqué o Lámpara de Queroseno con Tubo de Cristal\"."
  },
  {
    "id": "storm-lantern",
    "name": "Farol de Tormenta (Feuerhand)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🏮",
    "wikiCategories": [
      "Category:Hurricane_lanterns",
      "Category:Kerosene_lanterns"
    ],
    "intitleQuery": "hurricane lantern",
    "mustMatch": [
      "lantern",
      "feuerhand",
      "hurricane",
      "storm lantern",
      "laterne"
    ],
    "aiPromptSubject": "hurricane lantern isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Farol de Tormenta (Feuerhand)\"."
  },
  {
    "id": "carbide-miner-lamp",
    "name": "Lámpara de Carburo de Minero en Latón",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🔦",
    "wikiCategories": [
      "Category:Carbide_lamps"
    ],
    "intitleQuery": "carbide lamp miner",
    "mustMatch": [
      "carbide lamp",
      "karbidlampe",
      "miner lamp",
      "acetylene"
    ],
    "aiPromptSubject": "carbide lamp miner isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lámpara de Carburo de Minero en Latón\"."
  },
  {
    "id": "brass-candlestick",
    "name": "Palmatoria de Bronce con Vela Consumida",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🕯️",
    "wikiCategories": [
      "Category:Candlesticks"
    ],
    "intitleQuery": "brass candlestick",
    "mustMatch": [
      "candlestick",
      "candleholder",
      "kerzenständer",
      "bougeoir"
    ],
    "aiPromptSubject": "brass candlestick isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Palmatoria de Bronce con Vela Consumida\"."
  },
  {
    "id": "candelabrum-branches",
    "name": "Candelabro de Tres o Cinco Brazos",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🕯️",
    "wikiCategories": [
      "Category:Candelabra"
    ],
    "intitleQuery": "candelabrum",
    "mustMatch": [
      "candelabra",
      "candelabrum",
      "leuchter",
      "candélabre"
    ],
    "aiPromptSubject": "candelabrum isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Candelabro de Tres o Cinco Brazos\"."
  },
  {
    "id": "edison-lightbulb",
    "name": "Bombilla Incandescente con Casquillo de Rosca",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "💡",
    "wikiCategories": [
      "Category:Incandescent_light_bulbs"
    ],
    "intitleQuery": "incandescent light bulb",
    "mustMatch": [
      "light bulb",
      "filament",
      "glühbirne",
      "ampoule"
    ],
    "aiPromptSubject": "incandescent light bulb isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bombilla Incandescente con Casquillo de Rosca\"."
  },
  {
    "id": "retro-desk-fan",
    "name": "Ventilador Metálico de Escritorio (Jaula de Alambre)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🌀",
    "wikiCategories": [
      "Category:Electric_fans"
    ],
    "intitleQuery": "vintage desk fan",
    "mustMatch": [
      "fan",
      "ventilator",
      "ventilateur",
      "desk fan"
    ],
    "aiPromptSubject": "vintage desk fan isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ventilador Metálico de Escritorio (Jaula de Alambre)\"."
  },
  {
    "id": "rotary-telephone",
    "name": "Teléfono Clásico de Disco en Baquelita",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "☎️",
    "wikiCategories": [
      "Category:Rotary_dial_telephones"
    ],
    "intitleQuery": "rotary dial telephone",
    "mustMatch": [
      "telephone",
      "rotary",
      "phone",
      "telefon",
      "téléphone"
    ],
    "aiPromptSubject": "rotary dial telephone isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Teléfono Clásico de Disco en Baquelita\"."
  },
  {
    "id": "candlestick-phone",
    "name": "Teléfono Antiguo de Candelero (Años 20)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "☎️",
    "wikiCategories": [
      "Category:Candlestick_telephones"
    ],
    "intitleQuery": "candlestick telephone",
    "mustMatch": [
      "candlestick telephone",
      "telephone",
      "phone"
    ],
    "aiPromptSubject": "candlestick telephone isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Teléfono Antiguo de Candelero (Años 20)\"."
  },
  {
    "id": "wall-crank-phone",
    "name": "Teléfono de Pared Antiguo de Madera con Manivela",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "☎️",
    "wikiCategories": [
      "Category:Wall_telephones"
    ],
    "intitleQuery": "antique wooden wall telephone",
    "mustMatch": [
      "telephone",
      "wall telephone",
      "bell",
      "magneto"
    ],
    "aiPromptSubject": "antique wooden wall telephone isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Teléfono de Pared Antiguo de Madera con Manivela\"."
  },
  {
    "id": "slr-camera",
    "name": "Cámara Fotográfica Réflex 35mm (SLR)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📷",
    "wikiCategories": [
      "Category:SLR_cameras"
    ],
    "intitleQuery": "SLR film camera",
    "mustMatch": [
      "camera",
      "slr",
      "nikon",
      "canon",
      "pentax",
      "minolta",
      "zenit",
      "olympus"
    ],
    "aiPromptSubject": "SLR film camera isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cámara Fotográfica Réflex 35mm (SLR)\"."
  },
  {
    "id": "tlr-camera",
    "name": "Cámara de Doble Objetivo (Rolleiflex TLR)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📷",
    "wikiCategories": [
      "Category:Twin-lens_reflex_cameras",
      "Category:Rolleiflex"
    ],
    "intitleQuery": "Twin-lens reflex camera",
    "mustMatch": [
      "rolleiflex",
      "tlr",
      "camera",
      "twin-lens"
    ],
    "aiPromptSubject": "Twin-lens reflex camera isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cámara de Doble Objetivo (Rolleiflex TLR)\"."
  },
  {
    "id": "folding-bellows-camera",
    "name": "Cámara Antigua de Fuelle Plegable",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📷",
    "wikiCategories": [
      "Category:Folding_cameras"
    ],
    "intitleQuery": "folding bellows camera",
    "mustMatch": [
      "camera",
      "bellows",
      "kodak",
      "zeiss ikon",
      "folding"
    ],
    "aiPromptSubject": "folding bellows camera isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cámara Antigua de Fuelle Plegable\"."
  },
  {
    "id": "large-format-view-camera",
    "name": "Cámara de Placas de Gran Formato sobre Trípode",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📸",
    "wikiCategories": [
      "Category:View_cameras",
      "Category:Large_format_cameras"
    ],
    "intitleQuery": "large format view camera",
    "mustMatch": [
      "view camera",
      "large format",
      "bellows",
      "linhof",
      "graflex"
    ],
    "aiPromptSubject": "large format view camera isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cámara de Placas de Gran Formato sobre Trípode\"."
  },
  {
    "id": "polaroid-camera",
    "name": "Cámara Instantánea Clásica (Polaroid)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📸",
    "wikiCategories": [
      "Category:Polaroid_cameras"
    ],
    "intitleQuery": "Polaroid instant camera",
    "mustMatch": [
      "polaroid",
      "instant camera",
      "sx-70",
      "land camera"
    ],
    "aiPromptSubject": "Polaroid instant camera isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cámara Instantánea Clásica (Polaroid)\"."
  },
  {
    "id": "super8-movie-camera",
    "name": "Cámara de Cine Super 8 con Empuñadura",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🎥",
    "wikiCategories": [
      "Category:Movie_cameras",
      "Category:8_mm_movie_cameras"
    ],
    "intitleQuery": "Super 8 movie camera",
    "mustMatch": [
      "movie camera",
      "bolex",
      "super 8",
      "film camera",
      "kamera"
    ],
    "aiPromptSubject": "Super 8 movie camera isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cámara de Cine Super 8 con Empuñadura\"."
  },
  {
    "id": "film-projector",
    "name": "Proyector de Cine Antiguo de Bobinas",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📽️",
    "wikiCategories": [
      "Category:Film_projectors"
    ],
    "intitleQuery": "8mm film projector",
    "mustMatch": [
      "projector",
      "film",
      "cine",
      "projektor",
      "projecteur"
    ],
    "aiPromptSubject": "8mm film projector isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Proyector de Cine Antiguo de Bobinas\"."
  },
  {
    "id": "magic-lantern-projector",
    "name": "Linterna Mágica de Latón con Chimenea",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📽️",
    "wikiCategories": [
      "Category:Magic_lanterns"
    ],
    "intitleQuery": "magic lantern",
    "mustMatch": [
      "magic lantern",
      "laterna magica",
      "lanterne magique"
    ],
    "aiPromptSubject": "magic lantern isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Linterna Mágica de Latón con Chimenea\"."
  },
  {
    "id": "field-binoculars",
    "name": "Prismáticos de Campo Clásicos",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🔭",
    "wikiCategories": [
      "Category:Binoculars"
    ],
    "intitleQuery": "binoculars",
    "mustMatch": [
      "binoculars",
      "fernglas",
      "jumelles",
      "zeiss"
    ],
    "aiPromptSubject": "binoculars isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Prismáticos de Campo Clásicos\"."
  },
  {
    "id": "opera-glasses",
    "name": "Gemelos de Teatro de Nácar y Latón",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🎭",
    "wikiCategories": [
      "Category:Opera_glasses"
    ],
    "intitleQuery": "opera glasses",
    "mustMatch": [
      "opera glasses",
      "binoculars",
      "lorgnette",
      "opernstecher"
    ],
    "aiPromptSubject": "opera glasses isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gemelos de Teatro de Nácar y Latón\"."
  },
  {
    "id": "magnifying-glass",
    "name": "Lupa de Lectura con Marco de Latón y Mango",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🔍",
    "wikiCategories": [
      "Category:Magnifying_glasses"
    ],
    "intitleQuery": "magnifying glass",
    "mustMatch": [
      "magnifying glass",
      "lupe",
      "loupe",
      "magnifier"
    ],
    "aiPromptSubject": "magnifying glass isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lupa de Lectura con Marco de Latón y Mango\"."
  },
  {
    "id": "vintage-eyeglasses",
    "name": "Gafas de Montura Redonda o Pince-Nez",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "👓",
    "wikiCategories": [
      "Category:Eyeglasses",
      "Category:Pince-nez"
    ],
    "intitleQuery": "pince-nez eyeglasses",
    "mustMatch": [
      "glasses",
      "eyeglasses",
      "spectacles",
      "pince-nez",
      "brille"
    ],
    "aiPromptSubject": "pince-nez eyeglasses isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gafas de Montura Redonda o Pince-Nez\"."
  },
  {
    "id": "aviator-goggles",
    "name": "Gafas de Aviador o Motorista Clásicas de Cuero",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥽",
    "wikiCategories": [
      "Category:Goggles"
    ],
    "intitleQuery": "aviator goggles vintage",
    "mustMatch": [
      "goggles",
      "aviator",
      "pilot",
      "schutzbrille"
    ],
    "aiPromptSubject": "aviator goggles vintage isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gafas de Aviador o Motorista Clásicas de Cuero\"."
  },
  {
    "id": "pocket-watch",
    "name": "Reloj de Bolsillo Abierto con Cadena (Savonnette)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "⏱️",
    "wikiCategories": [
      "Category:Pocket_watches"
    ],
    "intitleQuery": "pocket watch",
    "mustMatch": [
      "pocket watch",
      "taschenuhr",
      "montre à gousset",
      "watch"
    ],
    "aiPromptSubject": "pocket watch isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Reloj de Bolsillo Abierto con Cadena (Savonnette)\"."
  },
  {
    "id": "wristwatch-mechanical",
    "name": "Reloj de Pulsera Mecánico (Cronógrafo)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "⌚",
    "wikiCategories": [
      "Category:Wristwatches",
      "Category:Mechanical_watches"
    ],
    "intitleQuery": "mechanical wristwatch",
    "mustMatch": [
      "wristwatch",
      "watch",
      "chronograph",
      "seiko",
      "omega"
    ],
    "aiPromptSubject": "mechanical wristwatch isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Reloj de Pulsera Mecánico (Cronógrafo)\"."
  },
  {
    "id": "twin-bell-alarm-clock",
    "name": "Reloj Despertador de Doble Campana",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "⏰",
    "wikiCategories": [
      "Category:Alarm_clocks"
    ],
    "intitleQuery": "twin bell alarm clock",
    "mustMatch": [
      "alarm clock",
      "wecker",
      "réveil",
      "clock"
    ],
    "aiPromptSubject": "twin bell alarm clock isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Reloj Despertador de Doble Campana\"."
  },
  {
    "id": "cuckoo-clock",
    "name": "Reloj de Cuco Tallado en Madera con Pesas de Piña",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🕰️",
    "wikiCategories": [
      "Category:Cuckoo_clocks"
    ],
    "intitleQuery": "cuckoo clock",
    "mustMatch": [
      "cuckoo clock",
      "kuckucksuhr",
      "horloge à coucou"
    ],
    "aiPromptSubject": "cuckoo clock isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Reloj de Cuco Tallado en Madera con Pesas de Piña\"."
  },
  {
    "id": "mantel-carriage-clock",
    "name": "Reloj de Sobremesa o de Carruaje en Latón y Cristal",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🕰️",
    "wikiCategories": [
      "Category:Carriage_clocks",
      "Category:Mantel_clocks"
    ],
    "intitleQuery": "carriage clock mantel clock",
    "mustMatch": [
      "carriage clock",
      "mantel clock",
      "pendule",
      "uhr"
    ],
    "aiPromptSubject": "carriage clock mantel clock isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Reloj de Sobremesa o de Carruaje en Latón y Cristal\"."
  },
  {
    "id": "hourglass-sand",
    "name": "Reloj de Arena de Madera y Latón",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "⏳",
    "wikiCategories": [
      "Category:Hourglasses"
    ],
    "intitleQuery": "hourglass sandglass",
    "mustMatch": [
      "hourglass",
      "sandglass",
      "sanduhr",
      "sablier"
    ],
    "aiPromptSubject": "hourglass sandglass isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Reloj de Arena de Madera y Latón\"."
  },
  {
    "id": "fountain-pen-ink",
    "name": "Pluma Estilográfica con Plumín de Oro",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🖋️",
    "wikiCategories": [
      "Category:Fountain_pens"
    ],
    "intitleQuery": "fountain pen nib",
    "mustMatch": [
      "fountain pen",
      "nib",
      "füllhalter",
      "stylo",
      "pelikan"
    ],
    "aiPromptSubject": "fountain pen nib isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pluma Estilográfica con Plumín de Oro\"."
  },
  {
    "id": "glass-inkwell",
    "name": "Tintero Antiguo de Vidrio Tallado y Bronce",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🖋️",
    "wikiCategories": [
      "Category:Inkwells"
    ],
    "intitleQuery": "antique inkwell glass",
    "mustMatch": [
      "inkwell",
      "tintenfass",
      "encrier",
      "ink"
    ],
    "aiPromptSubject": "antique inkwell glass isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tintero Antiguo de Vidrio Tallado y Bronce\"."
  },
  {
    "id": "wax-seal-stamp",
    "name": "Sello de Lacrar con Mango Torneado",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "✉️",
    "wikiCategories": [
      "Category:Seal_stamps",
      "Category:Sealing_wax"
    ],
    "intitleQuery": "sealing wax stamp",
    "mustMatch": [
      "seal",
      "sealing wax",
      "petschaft",
      "cachet"
    ],
    "aiPromptSubject": "sealing wax stamp isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sello de Lacrar con Mango Torneado\"."
  },
  {
    "id": "drafting-compass",
    "name": "Compás de Precisión de Dibujo Técnico",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "📐",
    "wikiCategories": [
      "Category:Compasses_(drafting)"
    ],
    "intitleQuery": "drafting compass",
    "mustMatch": [
      "compass",
      "dividers",
      "zirkel",
      "compas"
    ],
    "aiPromptSubject": "drafting compass isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Compás de Precisión de Dibujo Técnico\"."
  },
  {
    "id": "manual-pencil-sharpener",
    "name": "Sacapuntas Mecánico de Escritorio con Manivela",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "✏️",
    "wikiCategories": [
      "Category:Pencil_sharpeners"
    ],
    "intitleQuery": "mechanical pencil sharpener",
    "mustMatch": [
      "sharpener",
      "pencil sharpener",
      "spitzer",
      "taille-crayon"
    ],
    "aiPromptSubject": "mechanical pencil sharpener isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sacapuntas Mecánico de Escritorio con Manivela\"."
  },
  {
    "id": "vintage-stapler",
    "name": "Engrapadora Metálica Clásica de Escritorio",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "📎",
    "wikiCategories": [
      "Category:Staplers"
    ],
    "intitleQuery": "desktop stapler metal",
    "mustMatch": [
      "stapler",
      "hefter",
      "agrafeuse",
      "swingline"
    ],
    "aiPromptSubject": "desktop stapler metal isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Engrapadora Metálica Clásica de Escritorio\"."
  },
  {
    "id": "hole-punch-office",
    "name": "Perforadora de Papel Metálica de Dos Punzones",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🕳️",
    "wikiCategories": [
      "Category:Hole_punchers"
    ],
    "intitleQuery": "hole puncher office",
    "mustMatch": [
      "hole punch",
      "locher",
      "perforateur"
    ],
    "aiPromptSubject": "hole puncher office isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Perforadora de Papel Metálica de Dos Punzones\"."
  },
  {
    "id": "desk-bell-hotel",
    "name": "Timbre de Recepción de Mostrador en Latón",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🛎️",
    "wikiCategories": [
      "Category:Call_bells",
      "Category:Bells"
    ],
    "intitleQuery": "call bell desk bell",
    "mustMatch": [
      "bell",
      "call bell",
      "desk bell",
      "rezeption"
    ],
    "aiPromptSubject": "call bell desk bell isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Timbre de Recepción de Mostrador en Latón\"."
  },
  {
    "id": "briar-pipe",
    "name": "Pipa de Madera de Brezo Curva (Sherlock)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🪈",
    "wikiCategories": [
      "Category:Tobacco_pipes"
    ],
    "intitleQuery": "briar tobacco pipe",
    "mustMatch": [
      "pipe",
      "briar",
      "meerschaum",
      "pfeife"
    ],
    "aiPromptSubject": "briar tobacco pipe isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pipa de Madera de Brezo Curva (Sherlock)\"."
  },
  {
    "id": "zippo-lighter",
    "name": "Encendedor Metálico de Gasolina con Tapa Abierta",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🔥",
    "wikiCategories": [
      "Category:Zippo_lighters",
      "Category:Lighters"
    ],
    "intitleQuery": "Zippo lighter",
    "mustMatch": [
      "zippo",
      "lighter",
      "feuerzeug",
      "briquet"
    ],
    "aiPromptSubject": "Zippo lighter isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Encendedor Metálico de Gasolina con Tapa Abierta\"."
  },
  {
    "id": "swiss-army-knife",
    "name": "Navaja Suiza Multiusos con Hojas Desplegadas",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🔪",
    "wikiCategories": [
      "Category:Swiss_Army_knives"
    ],
    "intitleQuery": "Swiss Army knife",
    "mustMatch": [
      "swiss army",
      "victorinox",
      "wenger",
      "pocket knife"
    ],
    "aiPromptSubject": "Swiss Army knife isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Navaja Suiza Multiusos con Hojas Desplegadas\"."
  },
  {
    "id": "straight-razor",
    "name": "Navaja de Barbero Clásica Plegable",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🪒",
    "wikiCategories": [
      "Category:Straight_razors"
    ],
    "intitleQuery": "straight razor barber",
    "mustMatch": [
      "straight razor",
      "rasiermesser",
      "rasoir",
      "cut-throat"
    ],
    "aiPromptSubject": "straight razor barber isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Navaja de Barbero Clásica Plegable\"."
  },
  {
    "id": "safety-razor-double-edge",
    "name": "Maquinilla de Afeitar Clásica de Doble Filo (Metal)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🪒",
    "wikiCategories": [
      "Category:Safety_razors"
    ],
    "intitleQuery": "safety razor metal",
    "mustMatch": [
      "safety razor",
      "gillette",
      "merkur",
      "rasierhobel"
    ],
    "aiPromptSubject": "safety razor metal isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Maquinilla de Afeitar Clásica de Doble Filo (Metal)\"."
  },
  {
    "id": "shaving-brush-badger",
    "name": "Brocha de Afeitar y Jabonera",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🪥",
    "wikiCategories": [
      "Category:Shaving_brushes"
    ],
    "intitleQuery": "shaving brush",
    "mustMatch": [
      "shaving brush",
      "rasierpinsel",
      "blaireau"
    ],
    "aiPromptSubject": "shaving brush isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Brocha de Afeitar y Jabonera\"."
  },
  {
    "id": "perfume-atomizer-bulb",
    "name": "Frasco de Perfume Antiguo con Pera Pulverizadora",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🧴",
    "wikiCategories": [
      "Category:Perfume_bottles",
      "Category:Atomizers"
    ],
    "intitleQuery": "perfume atomizer bottle",
    "mustMatch": [
      "perfume bottle",
      "atomizer",
      "flacon",
      "parfüm"
    ],
    "aiPromptSubject": "perfume atomizer bottle isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Frasco de Perfume Antiguo con Pera Pulverizadora\"."
  },
  {
    "id": "vintage-tube-radio",
    "name": "Radio Antigua de Madera o Baquelita (Años 40)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📻",
    "wikiCategories": [
      "Category:Vacuum_tube_radios",
      "Category:Vintage_radios"
    ],
    "intitleQuery": "vintage tube radio",
    "mustMatch": [
      "radio",
      "philips",
      "telefunken",
      "grundig",
      "bakelite"
    ],
    "aiPromptSubject": "vintage tube radio isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Radio Antigua de Madera o Baquelita (Años 40)\"."
  },
  {
    "id": "transistor-pocket-radio",
    "name": "Radio Portátil de Transistores con Antena Telescópica",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📻",
    "wikiCategories": [
      "Category:Transistor_radios"
    ],
    "intitleQuery": "transistor radio vintage",
    "mustMatch": [
      "transistor radio",
      "sony",
      "braun",
      "radio"
    ],
    "aiPromptSubject": "transistor radio vintage isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Radio Portátil de Transistores con Antena Telescópica\"."
  },
  {
    "id": "vinyl-turntable",
    "name": "Tocadiscos de Vinilo y Brazo Fonocaptor",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "💿",
    "wikiCategories": [
      "Category:Turntables",
      "Category:Record_players"
    ],
    "intitleQuery": "turntable phonograph",
    "mustMatch": [
      "turntable",
      "record player",
      "technics",
      "phonograph"
    ],
    "aiPromptSubject": "turntable phonograph isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tocadiscos de Vinilo y Brazo Fonocaptor\"."
  },
  {
    "id": "reel-to-reel-recorder",
    "name": "Magnetófono de Bobina Abierta (Reel-to-Reel)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📼",
    "wikiCategories": [
      "Category:Reel-to-reel_tape_recorders"
    ],
    "intitleQuery": "reel to reel tape recorder",
    "mustMatch": [
      "reel-to-reel",
      "revox",
      "akai",
      "nagra",
      "tonbandgerät"
    ],
    "aiPromptSubject": "reel to reel tape recorder isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Magnetófono de Bobina Abierta (Reel-to-Reel)\"."
  },
  {
    "id": "walkman-cassette",
    "name": "Reproductor de Cassette Portátil (Walkman) y Cinta",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📼",
    "wikiCategories": [
      "Category:Walkman",
      "Category:Compact_Cassette_players"
    ],
    "intitleQuery": "Walkman cassette player",
    "mustMatch": [
      "walkman",
      "cassette",
      "tape player",
      "sony"
    ],
    "aiPromptSubject": "Walkman cassette player isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Reproductor de Cassette Portátil (Walkman) y Cinta\"."
  },
  {
    "id": "studio-headphones",
    "name": "Auriculares de Diadema de Estudio",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🎧",
    "wikiCategories": [
      "Category:Headphones"
    ],
    "intitleQuery": "over ear headphones",
    "mustMatch": [
      "headphone",
      "headset",
      "sennheiser",
      "beyerdynamic",
      "akg"
    ],
    "aiPromptSubject": "over ear headphones isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Auriculares de Diadema de Estudio\"."
  },
  {
    "id": "vintage-microphone",
    "name": "Micrófono Clásico de Estudio con Rejilla Cromada",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🎙️",
    "wikiCategories": [
      "Category:Microphones"
    ],
    "intitleQuery": "vintage microphone Shure",
    "mustMatch": [
      "microphone",
      "shure",
      "ribbon microphone",
      "mikrofon"
    ],
    "aiPromptSubject": "vintage microphone Shure isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Micrófono Clásico de Estudio con Rejilla Cromada\"."
  },
  {
    "id": "retro-joystick-arcade",
    "name": "Joystick Clásico de Videojuegos (Atari / Arcade)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🕹️",
    "wikiCategories": [
      "Category:Joysticks"
    ],
    "intitleQuery": "Atari joystick arcade",
    "mustMatch": [
      "joystick",
      "atari",
      "competition pro",
      "arcade"
    ],
    "aiPromptSubject": "Atari joystick arcade isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Joystick Clásico de Videojuegos (Atari / Arcade)\"."
  },
  {
    "id": "thonet-chair",
    "name": "Silla de Madera Curvada (Thonet N.º 14)",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🪑",
    "wikiCategories": [
      "Category:Thonet_chairs",
      "Category:Bentwood_chairs"
    ],
    "intitleQuery": "Thonet chair wooden",
    "mustMatch": [
      "chair",
      "thonet",
      "bentwood",
      "stuhl",
      "chaise"
    ],
    "aiPromptSubject": "Thonet chair wooden isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Silla de Madera Curvada (Thonet N.º 14)\"."
  },
  {
    "id": "Windsor-armchair",
    "name": "Sillón Windsor con Respaldo de Varillas Torneadas",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🪑",
    "wikiCategories": [
      "Category:Windsor_chairs"
    ],
    "intitleQuery": "Windsor chair wooden",
    "mustMatch": [
      "windsor chair",
      "chair",
      "armchair"
    ],
    "aiPromptSubject": "Windsor chair wooden isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sillón Windsor con Respaldo de Varillas Torneadas\"."
  },
  {
    "id": "workshop-stool",
    "name": "Taburete de Taller con Husillo de Rosca",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🪑",
    "wikiCategories": [
      "Category:Stools"
    ],
    "intitleQuery": "wooden stool",
    "mustMatch": [
      "stool",
      "tabouret",
      "hocker",
      "seat"
    ],
    "aiPromptSubject": "wooden stool isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Taburete de Taller con Husillo de Rosca\"."
  },
  {
    "id": "rocking-chair",
    "name": "Mecedora de Madera Tradicional",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🪑",
    "wikiCategories": [
      "Category:Rocking_chairs"
    ],
    "intitleQuery": "rocking chair",
    "mustMatch": [
      "rocking chair",
      "schaukelstuhl",
      "fauteuil à bascule"
    ],
    "aiPromptSubject": "rocking chair isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mecedora de Madera Tradicional\"."
  },
  {
    "id": "steamer-trunk",
    "name": "Baúl de Viaje Antiguo con Herrajes de Latón y Madera",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🧳",
    "wikiCategories": [
      "Category:Trunks_(luggage)"
    ],
    "intitleQuery": "steamer trunk antique",
    "mustMatch": [
      "trunk",
      "chest",
      "steamer trunk",
      "koffer",
      "malle"
    ],
    "aiPromptSubject": "steamer trunk antique isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Baúl de Viaje Antiguo con Herrajes de Latón y Madera\"."
  },
  {
    "id": "vintage-suitcase",
    "name": "Maleta Antigua de Cuero con Correas",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🧳",
    "wikiCategories": [
      "Category:Suitcases"
    ],
    "intitleQuery": "vintage leather suitcase",
    "mustMatch": [
      "suitcase",
      "luggage",
      "valise",
      "koffer"
    ],
    "aiPromptSubject": "vintage leather suitcase isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Maleta Antigua de Cuero con Correas\"."
  },
  {
    "id": "doctors-bag-leather",
    "name": "Maletín Médico Antiguo de Cuero (Gladstone)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "💼",
    "wikiCategories": [
      "Category:Gladstone_bags",
      "Category:Medical_bags"
    ],
    "intitleQuery": "Gladstone bag doctor bag",
    "mustMatch": [
      "doctor bag",
      "gladstone",
      "medical bag",
      "leather bag"
    ],
    "aiPromptSubject": "Gladstone bag doctor bag isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Maletín Médico Antiguo de Cuero (Gladstone)\"."
  },
  {
    "id": "canvas-backpack",
    "name": "Mochila de Lona y Hebillas de Cuero",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🎒",
    "wikiCategories": [
      "Category:Backpacks"
    ],
    "intitleQuery": "backpack rucksack",
    "mustMatch": [
      "backpack",
      "rucksack",
      "knapsack",
      "sac à dos"
    ],
    "aiPromptSubject": "backpack rucksack isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mochila de Lona y Hebillas de Cuero\"."
  },
  {
    "id": "fedora-hat",
    "name": "Sombrero Fedora o Borsalino de Fieltro",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🎩",
    "wikiCategories": [
      "Category:Fedora_(hat)"
    ],
    "intitleQuery": "fedora hat",
    "mustMatch": [
      "fedora",
      "hat",
      "borsalino",
      "trilby",
      "hut",
      "chapeau"
    ],
    "aiPromptSubject": "fedora hat isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sombrero Fedora o Borsalino de Fieltro\"."
  },
  {
    "id": "bowler-top-hat",
    "name": "Bombín o Sombrero de Copa Clásico",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🎩",
    "wikiCategories": [
      "Category:Bowler_hats",
      "Category:Top_hats"
    ],
    "intitleQuery": "bowler hat top hat",
    "mustMatch": [
      "bowler hat",
      "top hat",
      "melone",
      "zylinder",
      "chapeau melon"
    ],
    "aiPromptSubject": "bowler hat top hat isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bombín o Sombrero de Copa Clásico\"."
  },
  {
    "id": "pith-helmet",
    "name": "Salacot de Explorador (Casco Colonial de Corcho)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🪖",
    "wikiCategories": [
      "Category:Pith_helmets"
    ],
    "intitleQuery": "pith helmet",
    "mustMatch": [
      "pith helmet",
      "safari",
      "tropenhelm",
      "casque colonial"
    ],
    "aiPromptSubject": "pith helmet isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Salacot de Explorador (Casco Colonial de Corcho)\"."
  },
  {
    "id": "canvas-sneaker",
    "name": "Zapatilla Deportiva de Lona (Converse)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "👟",
    "wikiCategories": [
      "Category:Converse_shoes",
      "Category:Sneakers_(footwear)"
    ],
    "intitleQuery": "Converse sneaker shoe",
    "mustMatch": [
      "sneaker",
      "converse",
      "all star",
      "shoe",
      "trainer"
    ],
    "aiPromptSubject": "Converse sneaker shoe isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Zapatilla Deportiva de Lona (Converse)\"."
  },
  {
    "id": "work-boots",
    "name": "Botas de Montaña o Trabajo con Cordones",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥾",
    "wikiCategories": [
      "Category:Leather_boots",
      "Category:Work_boots"
    ],
    "intitleQuery": "leather work boots",
    "mustMatch": [
      "boot",
      "leather boot",
      "dr. martens",
      "stiefel",
      "botte"
    ],
    "aiPromptSubject": "leather work boots isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Botas de Montaña o Trabajo con Cordones\"."
  },
  {
    "id": "cowboy-boots",
    "name": "Botas Vaqueras de Cuero con Caña Bordada y Espuelas",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "👢",
    "wikiCategories": [
      "Category:Cowboy_boots"
    ],
    "intitleQuery": "cowboy boots",
    "mustMatch": [
      "cowboy boot",
      "western boot",
      "boot"
    ],
    "aiPromptSubject": "cowboy boots isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Botas Vaqueras de Cuero con Caña Bordada y Espuelas\"."
  },
  {
    "id": "wooden-clogs-sabots",
    "name": "Zuecos Tradicionales Tallados en Madera (Klompen)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "👞",
    "wikiCategories": [
      "Category:Clompen",
      "Category:Clogs"
    ],
    "intitleQuery": "wooden clogs klompen",
    "mustMatch": [
      "clog",
      "klompen",
      "sabot",
      "wooden shoe",
      "holzschuh"
    ],
    "aiPromptSubject": "wooden clogs klompen isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Zuecos Tradicionales Tallados en Madera (Klompen)\"."
  },
  {
    "id": "oxford-dress-shoe",
    "name": "Zapato Oxford de Cuero con Horma de Madera",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "👞",
    "wikiCategories": [
      "Category:Oxford_shoes"
    ],
    "intitleQuery": "Oxford leather shoe",
    "mustMatch": [
      "shoe",
      "oxford",
      "brogue",
      "derby",
      "schuh"
    ],
    "aiPromptSubject": "Oxford leather shoe isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Zapato Oxford de Cuero con Horma de Madera\"."
  },
  {
    "id": "high-heel-stiletto",
    "name": "Zapato de Tacón Alto (Estudio de Curva y Arco)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "👠",
    "wikiCategories": [
      "Category:High-heeled_shoes"
    ],
    "intitleQuery": "high-heeled shoe stiletto",
    "mustMatch": [
      "high heel",
      "stiletto",
      "pump",
      "shoe",
      "escarpin"
    ],
    "aiPromptSubject": "high-heeled shoe stiletto isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Zapato de Tacón Alto (Estudio de Curva y Arco)\"."
  },
  {
    "id": "roller-skate",
    "name": "Patín Clásico de Cuatro Ruedas (Quad)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🛼",
    "wikiCategories": [
      "Category:Roller_skates"
    ],
    "intitleQuery": "quad roller skate",
    "mustMatch": [
      "roller skate",
      "skate",
      "rollschuh",
      "patin"
    ],
    "aiPromptSubject": "quad roller skate isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Patín Clásico de Cuatro Ruedas (Quad)\"."
  },
  {
    "id": "ice-skate",
    "name": "Patín de Hielo con Cuchilla de Acero",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "⛸️",
    "wikiCategories": [
      "Category:Ice_skates"
    ],
    "intitleQuery": "figure skate ice skate",
    "mustMatch": [
      "ice skate",
      "schlittschuh",
      "patin à glace"
    ],
    "aiPromptSubject": "figure skate ice skate isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Patín de Hielo con Cuchilla de Acero\"."
  },
  {
    "id": "snowshoe-woven",
    "name": "Raqueta de Nieve Tradicional de Madera y Cuero Trenzado",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🎾",
    "wikiCategories": [
      "Category:Snowshoes"
    ],
    "intitleQuery": "traditional snowshoe wooden",
    "mustMatch": [
      "snowshoe",
      "schneeschuh",
      "raquette à neige"
    ],
    "aiPromptSubject": "traditional snowshoe wooden isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Raqueta de Nieve Tradicional de Madera y Cuero Trenzado\"."
  },
  {
    "id": "baseball-glove",
    "name": "Guante de Béisbol de Cuero Cosido",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥎",
    "wikiCategories": [
      "Category:Baseball_gloves"
    ],
    "intitleQuery": "baseball glove mitt",
    "mustMatch": [
      "baseball glove",
      "mitt",
      "baseball"
    ],
    "aiPromptSubject": "baseball glove mitt isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Guante de Béisbol de Cuero Cosido\"."
  },
  {
    "id": "boxing-gloves",
    "name": "Par de Guantes de Boxeo de Cuero",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🥊",
    "wikiCategories": [
      "Category:Boxing_gloves"
    ],
    "intitleQuery": "boxing gloves",
    "mustMatch": [
      "boxing glove",
      "boxing",
      "boxhandschuh"
    ],
    "aiPromptSubject": "boxing gloves isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Par de Guantes de Boxeo de Cuero\"."
  },
  {
    "id": "wooden-tennis-racket",
    "name": "Raqueta de Tenis Antigua de Madera con Prensa",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🎾",
    "wikiCategories": [
      "Category:Tennis_rackets"
    ],
    "intitleQuery": "wooden tennis racket",
    "mustMatch": [
      "tennis racket",
      "racquet",
      "tennisschläger",
      "raquette"
    ],
    "aiPromptSubject": "wooden tennis racket isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Raqueta de Tenis Antigua de Madera con Prensa\"."
  },
  {
    "id": "equestrian-saddle",
    "name": "Silla de Montar de Cuero con Estribos",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🐎",
    "wikiCategories": [
      "Category:Saddles"
    ],
    "intitleQuery": "horse saddle leather",
    "mustMatch": [
      "saddle",
      "sattel",
      "selle",
      "equestrian"
    ],
    "aiPromptSubject": "horse saddle leather isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Silla de Montar de Cuero con Estribos\"."
  },
  {
    "id": "wooden-chess-pieces",
    "name": "Piezas de Ajedrez Talladas (Caballo y Rey)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "♟️",
    "wikiCategories": [
      "Category:Chess_pieces"
    ],
    "intitleQuery": "chess pieces Staunton",
    "mustMatch": [
      "chess",
      "knight",
      "staunton",
      "schach",
      "échecs"
    ],
    "aiPromptSubject": "chess pieces Staunton isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Piezas de Ajedrez Talladas (Caballo y Rey)\"."
  },
  {
    "id": "spinning-top-wooden",
    "name": "Trompo o Peonza de Madera con Cuerda",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🪀",
    "wikiCategories": [
      "Category:Spinning_tops"
    ],
    "intitleQuery": "wooden spinning top",
    "mustMatch": [
      "spinning top",
      "kreisel",
      "toupie",
      "trompo"
    ],
    "aiPromptSubject": "wooden spinning top isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Trompo o Peonza de Madera con Cuerda\"."
  },
  {
    "id": "rocking-horse-wooden",
    "name": "Caballito Balancín Antiguo de Madera Tallada",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🎠",
    "wikiCategories": [
      "Category:Rocking_horses"
    ],
    "intitleQuery": "wooden rocking horse",
    "mustMatch": [
      "rocking horse",
      "schaukelpferd",
      "cheval à bascule"
    ],
    "aiPromptSubject": "wooden rocking horse isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caballito Balancín Antiguo de Madera Tallada\"."
  },
  {
    "id": "matryoshka-dolls",
    "name": "Muñecas Rusas Matrioskas Abiertas en Hilera",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🪆",
    "wikiCategories": [
      "Category:Matryoshka_dolls"
    ],
    "intitleQuery": "Matryoshka dolls",
    "mustMatch": [
      "matryoshka",
      "nesting doll",
      "babushka",
      "matrjoschka"
    ],
    "aiPromptSubject": "Matryoshka dolls isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Muñecas Rusas Matrioskas Abiertas en Hilera\"."
  },
  {
    "id": "terrestrial-globe",
    "name": "Globo Terráqueo Antiguo con Meridiano de Latón",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🌍",
    "wikiCategories": [
      "Category:Terrestrial_globes"
    ],
    "intitleQuery": "terrestrial globe antique",
    "mustMatch": [
      "globe",
      "terrestrial globe",
      "globus"
    ],
    "aiPromptSubject": "terrestrial globe antique isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Globo Terráqueo Antiguo con Meridiano de Latón\"."
  },
  {
    "id": "venetian-mask",
    "name": "Máscara Veneciana con Nariz Larga (Dottore / Bauta)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "🎭",
    "wikiCategories": [
      "Category:Venetian_masks"
    ],
    "intitleQuery": "Venetian carnival mask",
    "mustMatch": [
      "mask",
      "venetian",
      "carnival",
      "maschera",
      "masque"
    ],
    "aiPromptSubject": "Venetian carnival mask isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Máscara Veneciana con Nariz Larga (Dottore / Bauta)\"."
  },
  {
    "id": "japanese-noh-mask",
    "name": "Máscara Japonesa Tallada en Madera (Teatro Noh / Hannya)",
    "category": "cotidiano",
    "categoryLabel": "Objetos Cotidianos y Bodegón (Still Life)",
    "icon": "👹",
    "wikiCategories": [
      "Category:Noh_masks"
    ],
    "intitleQuery": "Noh mask Japan",
    "mustMatch": [
      "noh mask",
      "hannya",
      "mask",
      "japan"
    ],
    "aiPromptSubject": "Noh mask Japan isolated studio reference object",
    "tip": "Diseño y volumen: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Máscara Japonesa Tallada en Madera (Teatro Noh / Hannya)\"."
  },
  {
    "id": "human-skull-front",
    "name": "Cráneo Humano (Vista Frontal y 3/4)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "💀",
    "wikiCategories": [
      "Category:Human_skulls"
    ],
    "intitleQuery": "human skull",
    "mustMatch": [
      "skull",
      "cranium",
      "crâne",
      "schädel",
      "cranio"
    ],
    "aiPromptSubject": "human skull isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cráneo Humano (Vista Frontal y 3/4)\"."
  },
  {
    "id": "human-skull-profile",
    "name": "Cráneo Humano en Perfil Lateral",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "💀",
    "wikiCategories": [
      "Category:Human_skulls"
    ],
    "intitleQuery": "human skull lateral",
    "mustMatch": [
      "skull",
      "lateral",
      "profile",
      "cranium",
      "schädel"
    ],
    "aiPromptSubject": "human skull lateral isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cráneo Humano en Perfil Lateral\"."
  },
  {
    "id": "human-skull-base",
    "name": "Base del Cráneo y Maxilar Superior (Vista Inferior)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "💀",
    "wikiCategories": [
      "Category:Base_of_skull",
      "Category:Human_skulls"
    ],
    "intitleQuery": "base of human skull",
    "mustMatch": [
      "skull",
      "foramen",
      "maxilla",
      "cranium"
    ],
    "aiPromptSubject": "base of human skull isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Base del Cráneo y Maxilar Superior (Vista Inferior)\"."
  },
  {
    "id": "human-mandible",
    "name": "Mandíbula Humana Aislada (Maxilar Inferior)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦷",
    "wikiCategories": [
      "Category:Human_mandibles"
    ],
    "intitleQuery": "human mandible bone",
    "mustMatch": [
      "mandible",
      "jaw",
      "unterkiefer",
      "mandibule"
    ],
    "aiPromptSubject": "human mandible bone isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mandíbula Humana Aislada (Maxilar Inferior)\"."
  },
  {
    "id": "cervical-vertebrae",
    "name": "Vértebras Cervicales (Atlas y Axis)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦴",
    "wikiCategories": [
      "Category:Cervical_vertebrae",
      "Category:Atlas_(anatomy)"
    ],
    "intitleQuery": "atlas axis cervical vertebra",
    "mustMatch": [
      "vertebra",
      "atlas",
      "axis",
      "cervical",
      "bone"
    ],
    "aiPromptSubject": "atlas axis cervical vertebra isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Vértebras Cervicales (Atlas y Axis)\"."
  },
  {
    "id": "human-spine",
    "name": "Columna Vertebral Humana Completa (Curvas en S)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦴",
    "wikiCategories": [
      "Category:Human_vertebral_column"
    ],
    "intitleQuery": "vertebral column human",
    "mustMatch": [
      "spine",
      "vertebra",
      "vertebral",
      "wirbelsäule"
    ],
    "aiPromptSubject": "vertebral column human isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Columna Vertebral Humana Completa (Curvas en S)\"."
  },
  {
    "id": "human-ribcage",
    "name": "Caja Torácica y Esternón (Esqueleto)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦴",
    "wikiCategories": [
      "Category:Human_rib_cage"
    ],
    "intitleQuery": "human rib cage skeleton",
    "mustMatch": [
      "rib",
      "thorax",
      "sternum",
      "skeleton",
      "ribcage",
      "brustkorb"
    ],
    "aiPromptSubject": "human rib cage skeleton isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caja Torácica y Esternón (Esqueleto)\"."
  },
  {
    "id": "clavicle-scapula",
    "name": "Escápula (Omóplato) y Clavícula Humana",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦴",
    "wikiCategories": [
      "Category:Human_scapula",
      "Category:Clavicle"
    ],
    "intitleQuery": "human scapula bone",
    "mustMatch": [
      "scapula",
      "clavicle",
      "shoulder blade",
      "omoplate"
    ],
    "aiPromptSubject": "human scapula bone isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Escápula (Omóplato) y Clavícula Humana\"."
  },
  {
    "id": "humerus-elbow-joint",
    "name": "Húmero y Articulación Ósea del Codo",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦴",
    "wikiCategories": [
      "Category:Humerus"
    ],
    "intitleQuery": "humerus bone elbow",
    "mustMatch": [
      "humerus",
      "ulna",
      "radius",
      "elbow",
      "bone"
    ],
    "aiPromptSubject": "humerus bone elbow isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Húmero y Articulación Ósea del Codo\"."
  },
  {
    "id": "hand-skeleton",
    "name": "Esqueleto de la Mano Humana (Carpo y Falanges)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦴",
    "wikiCategories": [
      "Category:Bones_of_the_human_hand"
    ],
    "intitleQuery": "human hand bones skeleton",
    "mustMatch": [
      "hand",
      "carpal",
      "metacarpal",
      "phalanges",
      "skeleton",
      "bone"
    ],
    "aiPromptSubject": "human hand bones skeleton isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Esqueleto de la Mano Humana (Carpo y Falanges)\"."
  },
  {
    "id": "human-pelvis",
    "name": "Pelvis Ósea Humana (Ilion, Isquion y Sacro)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦴",
    "wikiCategories": [
      "Category:Human_pelvis"
    ],
    "intitleQuery": "human pelvis bone",
    "mustMatch": [
      "pelvis",
      "iliac",
      "sacrum",
      "becken",
      "bassin"
    ],
    "aiPromptSubject": "human pelvis bone isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pelvis Ósea Humana (Ilion, Isquion y Sacro)\"."
  },
  {
    "id": "femur-knee-patella",
    "name": "Fémur y Articulación de la Rodilla",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦴",
    "wikiCategories": [
      "Category:Femur"
    ],
    "intitleQuery": "human femur bone",
    "mustMatch": [
      "femur",
      "patella",
      "tibia",
      "bone"
    ],
    "aiPromptSubject": "human femur bone isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Fémur y Articulación de la Rodilla\"."
  },
  {
    "id": "foot-skeleton",
    "name": "Esqueleto del Pie Humano (Tarso y Arco Plantar)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦴",
    "wikiCategories": [
      "Category:Bones_of_the_human_foot"
    ],
    "intitleQuery": "human foot bones",
    "mustMatch": [
      "foot",
      "tarsus",
      "calcaneus",
      "talus",
      "skeleton",
      "bone"
    ],
    "aiPromptSubject": "human foot bones isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Esqueleto del Pie Humano (Tarso y Arco Plantar)\"."
  },
  {
    "id": "human-eye-macro",
    "name": "Ojo Humano, Párpados y Cejas en Primer Plano",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "👁️",
    "wikiCategories": [
      "Category:Human_eyes"
    ],
    "intitleQuery": "human eye closeup",
    "mustMatch": [
      "eye",
      "iris",
      "eyelid",
      "auge",
      "oeil"
    ],
    "aiPromptSubject": "human eye closeup isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ojo Humano, Párpados y Cejas en Primer Plano\"."
  },
  {
    "id": "human-nose-study",
    "name": "Nariz Humana (Puente, Cartílagos y Fosas)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "👃",
    "wikiCategories": [
      "Category:Human_noses"
    ],
    "intitleQuery": "human nose face",
    "mustMatch": [
      "nose",
      "nostril",
      "nez",
      "nase"
    ],
    "aiPromptSubject": "human nose face isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Nariz Humana (Puente, Cartílagos y Fosas)\"."
  },
  {
    "id": "human-mouth-lips",
    "name": "Labios y Boca Humana (Estudio de Volumen)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "👄",
    "wikiCategories": [
      "Category:Human_lips"
    ],
    "intitleQuery": "human lips mouth",
    "mustMatch": [
      "lips",
      "mouth",
      "smile",
      "lippen",
      "lèvres"
    ],
    "aiPromptSubject": "human lips mouth isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Labios y Boca Humana (Estudio de Volumen)\"."
  },
  {
    "id": "human-ear-study",
    "name": "Oreja Humana (Hélix, Antihélix, Trago y Lóbulo)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "👂",
    "wikiCategories": [
      "Category:Human_ears"
    ],
    "intitleQuery": "human ear closeup",
    "mustMatch": [
      "ear",
      "pinna",
      "auricle",
      "ohr",
      "oreille"
    ],
    "aiPromptSubject": "human ear closeup isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Oreja Humana (Hélix, Antihélix, Trago y Lóbulo)\"."
  },
  {
    "id": "neck-sternocleidomastoid",
    "name": "Cuello Humano y Clavículas (Esternocleidomastoideo)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🧑",
    "wikiCategories": [
      "Category:Human_necks"
    ],
    "intitleQuery": "human neck anatomy",
    "mustMatch": [
      "neck",
      "throat",
      "clavicle",
      "hals",
      "cou"
    ],
    "aiPromptSubject": "human neck anatomy isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cuello Humano y Clavículas (Esternocleidomastoideo)\"."
  },
  {
    "id": "hand-open-palm",
    "name": "Mano Humana Abierta y Extendida",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🖐️",
    "wikiCategories": [
      "Category:Human_hands"
    ],
    "intitleQuery": "open human hand",
    "mustMatch": [
      "hand",
      "palm",
      "fingers",
      "main",
      "mano"
    ],
    "aiPromptSubject": "open human hand isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mano Humana Abierta y Extendida\"."
  },
  {
    "id": "hand-clenched-fist",
    "name": "Puño Cerrado en Tensión o Escorzo",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "✊",
    "wikiCategories": [
      "Category:Fists"
    ],
    "intitleQuery": "clenched fist hand",
    "mustMatch": [
      "fist",
      "hand",
      "punch",
      "faust",
      "poing"
    ],
    "aiPromptSubject": "clenched fist hand isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Puño Cerrado en Tensión o Escorzo\"."
  },
  {
    "id": "hand-pointing-gesture",
    "name": "Mano Apuntando con el Dedo Índice",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "☝️",
    "wikiCategories": [
      "Category:Pointing_(gesture)",
      "Category:Human_hands"
    ],
    "intitleQuery": "pointing hand finger",
    "mustMatch": [
      "pointing",
      "finger",
      "hand",
      "index finger"
    ],
    "aiPromptSubject": "pointing hand finger isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mano Apuntando con el Dedo Índice\"."
  },
  {
    "id": "hand-holding-pen",
    "name": "Mano Sosteniendo una Pluma o Pincel",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "✍️",
    "wikiCategories": [
      "Category:Writing_by_hand",
      "Category:Human_hands"
    ],
    "intitleQuery": "hand holding pen writing",
    "mustMatch": [
      "hand",
      "writing",
      "pen",
      "pencil",
      "drawing"
    ],
    "aiPromptSubject": "hand holding pen writing isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mano Sosteniendo una Pluma o Pincel\"."
  },
  {
    "id": "hand-holding-sphere",
    "name": "Mano Sosteniendo una Fruta o Esfera",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🖐️",
    "wikiCategories": [
      "Category:Human_hands"
    ],
    "intitleQuery": "hand holding apple ball",
    "mustMatch": [
      "hand",
      "holding",
      "apple",
      "sphere",
      "ball"
    ],
    "aiPromptSubject": "hand holding apple ball isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mano Sosteniendo una Fruta o Esfera\"."
  },
  {
    "id": "intertwined-hands",
    "name": "Dos Manos Entrelazadas o en Oración",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🙏",
    "wikiCategories": [
      "Category:Praying_hands"
    ],
    "intitleQuery": "clasped hands praying",
    "mustMatch": [
      "hands",
      "clasped",
      "praying",
      "folded hands"
    ],
    "aiPromptSubject": "clasped hands praying isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Dos Manos Entrelazadas o en Oración\"."
  },
  {
    "id": "elderly-hands-veins",
    "name": "Manos Envejecidas con Tendones y Venas Marcadas",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🤲",
    "wikiCategories": [
      "Category:Human_hands"
    ],
    "intitleQuery": "old human hands wrinkles",
    "mustMatch": [
      "old hand",
      "wrinkled",
      "elderly",
      "hands"
    ],
    "aiPromptSubject": "old human hands wrinkles isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Manos Envejecidas con Tendones y Venas Marcadas\"."
  },
  {
    "id": "wooden-mannequin-figure",
    "name": "Maniquí Articulado de Madera (Figura Completa)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🧍",
    "wikiCategories": [
      "Category:Lay_figures"
    ],
    "intitleQuery": "wooden lay figure mannequin",
    "mustMatch": [
      "lay figure",
      "mannequin",
      "manikin",
      "gliederpuppe"
    ],
    "aiPromptSubject": "wooden lay figure mannequin isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Maniquí Articulado de Madera (Figura Completa)\"."
  },
  {
    "id": "wooden-mannequin-hand",
    "name": "Mano Articulada de Madera para Dibujo",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🖐️",
    "wikiCategories": [
      "Category:Lay_figures"
    ],
    "intitleQuery": "wooden mannequin hand",
    "mustMatch": [
      "wooden hand",
      "mannequin",
      "lay figure"
    ],
    "aiPromptSubject": "wooden mannequin hand isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mano Articulada de Madera para Dibujo\"."
  },
  {
    "id": "bare-human-feet",
    "name": "Pies Humanos Descalzos en Apoyo",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦶",
    "wikiCategories": [
      "Category:Human_feet",
      "Category:Barefoot"
    ],
    "intitleQuery": "barefoot human feet",
    "mustMatch": [
      "foot",
      "feet",
      "barefoot",
      "toes",
      "heel",
      "ankle",
      "pied",
      "fuß"
    ],
    "aiPromptSubject": "barefoot human feet isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pies Humanos Descalzos en Apoyo\"."
  },
  {
    "id": "muscular-male-back",
    "name": "Espalda Muscular (Trapecio, Escápulas y Dorsal)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "💪",
    "wikiCategories": [
      "Category:Human_backs"
    ],
    "intitleQuery": "human back muscles",
    "mustMatch": [
      "back",
      "torso",
      "muscles",
      "shoulder",
      "rücken",
      "dos"
    ],
    "aiPromptSubject": "human back muscles isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Espalda Muscular (Trapecio, Escápulas y Dorsal)\"."
  },
  {
    "id": "flexed-arm-biceps",
    "name": "Brazo y Antebrazo en Flexión Muscular",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "💪",
    "wikiCategories": [
      "Category:Human_arms",
      "Category:Biceps"
    ],
    "intitleQuery": "human arm biceps forearm",
    "mustMatch": [
      "arm",
      "biceps",
      "forearm",
      "muscle",
      "elbow"
    ],
    "aiPromptSubject": "human arm biceps forearm isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Brazo y Antebrazo en Flexión Muscular\"."
  },
  {
    "id": "roman-marble-bust",
    "name": "Busto Retrato Romano de Mármol",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🗿",
    "wikiCategories": [
      "Category:Ancient_Roman_portrait_busts"
    ],
    "intitleQuery": "Roman marble portrait bust",
    "mustMatch": [
      "bust",
      "roman",
      "marble",
      "emperor",
      "portrait",
      "buste"
    ],
    "aiPromptSubject": "Roman marble portrait bust isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Busto Retrato Romano de Mármol\"."
  },
  {
    "id": "bust-of-marcus-aurelius",
    "name": "Busto de Marco Aurelio (Mármol y Barba Rizada)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🗿",
    "wikiCategories": [
      "Category:Busts_of_Marcus_Aurelius"
    ],
    "intitleQuery": "Marcus Aurelius bust",
    "mustMatch": [
      "marcus aurelius",
      "bust",
      "marble",
      "roman"
    ],
    "aiPromptSubject": "Marcus Aurelius bust isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Busto de Marco Aurelio (Mármol y Barba Rizada)\"."
  },
  {
    "id": "bust-of-julius-caesar",
    "name": "Busto de Julio César o Augusto (Planos Faciales)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🗿",
    "wikiCategories": [
      "Category:Busts_of_Augustus",
      "Category:Busts_of_Julius_Caesar"
    ],
    "intitleQuery": "Augustus Julius Caesar bust",
    "mustMatch": [
      "augustus",
      "caesar",
      "bust",
      "marble",
      "roman"
    ],
    "aiPromptSubject": "Augustus Julius Caesar bust isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Busto de Julio César o Augusto (Planos Faciales)\"."
  },
  {
    "id": "greek-bearded-bust",
    "name": "Busto Griego de Homero o Zeus",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🗿",
    "wikiCategories": [
      "Category:Busts_of_Homer",
      "Category:Busts_of_Zeus"
    ],
    "intitleQuery": "Bust of Homer Zeus",
    "mustMatch": [
      "homer",
      "zeus",
      "socrates",
      "bust",
      "greek",
      "marble"
    ],
    "aiPromptSubject": "Bust of Homer Zeus isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Busto Griego de Homero o Zeus\"."
  },
  {
    "id": "bust-of-nefertiti",
    "name": "Busto de Nefertiti (Simetría y Cuello Esbelto)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "👑",
    "wikiCategories": [
      "Category:Nefertiti_bust"
    ],
    "intitleQuery": "Nefertiti bust",
    "mustMatch": [
      "nefertiti",
      "bust",
      "amarna"
    ],
    "aiPromptSubject": "Nefertiti bust isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Busto de Nefertiti (Simetría y Cuello Esbelto)\"."
  },
  {
    "id": "david-michelangelo-head",
    "name": "Cabeza del David de Miguel Ángel (Ceño y Mirada)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🗿",
    "wikiCategories": [
      "Category:Michelangelo's_David"
    ],
    "intitleQuery": "Michelangelo David head",
    "mustMatch": [
      "david",
      "michelangelo",
      "marble",
      "statue"
    ],
    "aiPromptSubject": "Michelangelo David head isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cabeza del David de Miguel Ángel (Ceño y Mirada)\"."
  },
  {
    "id": "belvedere-torso",
    "name": "Torso del Belvedere (Torsión Muscular en Mármol)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🏛️",
    "wikiCategories": [
      "Category:Belvedere_Torso"
    ],
    "intitleQuery": "Belvedere Torso",
    "mustMatch": [
      "belvedere torso",
      "torso",
      "marble",
      "sculpture"
    ],
    "aiPromptSubject": "Belvedere Torso isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Torso del Belvedere (Torsión Muscular en Mármol)\"."
  },
  {
    "id": "farnese-hercules",
    "name": "Hércules Farnesio (Hipertrofia y Apoyo Clásico)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🏛️",
    "wikiCategories": [
      "Category:Farnese_Hercules"
    ],
    "intitleQuery": "Farnese Hercules",
    "mustMatch": [
      "hercules",
      "farnese",
      "statue",
      "marble",
      "sculpture"
    ],
    "aiPromptSubject": "Farnese Hercules isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hércules Farnesio (Hipertrofia y Apoyo Clásico)\"."
  },
  {
    "id": "discobolus-myron",
    "name": "El Discóbolo de Mirón (Arco de Tensión Dinámica)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🥏",
    "wikiCategories": [
      "Category:Discobolus"
    ],
    "intitleQuery": "Discobolus statue",
    "mustMatch": [
      "discobolus",
      "myron",
      "discus",
      "statue",
      "sculpture"
    ],
    "aiPromptSubject": "Discobolus statue isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"El Discóbolo de Mirón (Arco de Tensión Dinámica)\"."
  },
  {
    "id": "doryphoros-contrapposto",
    "name": "El Doríforo de Policleto (Canon y Contrapposto)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🏛️",
    "wikiCategories": [
      "Category:Doryphoros"
    ],
    "intitleQuery": "Doryphoros statue",
    "mustMatch": [
      "doryphoros",
      "polykleitos",
      "contrapposto",
      "statue"
    ],
    "aiPromptSubject": "Doryphoros statue isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"El Doríforo de Policleto (Canon y Contrapposto)\"."
  },
  {
    "id": "venus-de-milo",
    "name": "Venus de Milo (Torsión Helicoidal y Paños)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🏛️",
    "wikiCategories": [
      "Category:Venus_de_Milo"
    ],
    "intitleQuery": "Venus de Milo",
    "mustMatch": [
      "venus de milo",
      "aphrodite",
      "marble",
      "statue"
    ],
    "aiPromptSubject": "Venus de Milo isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Venus de Milo (Torsión Helicoidal y Paños)\"."
  },
  {
    "id": "winged-victory-samothrace",
    "name": "Victoria Alada de Samotracia (Paños al Viento)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🪽",
    "wikiCategories": [
      "Category:Winged_Victory_of_Samothrace"
    ],
    "intitleQuery": "Winged Victory of Samothrace",
    "mustMatch": [
      "samothrace",
      "nike",
      "victory",
      "statue",
      "drapery"
    ],
    "aiPromptSubject": "Winged Victory of Samothrace isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Victoria Alada de Samotracia (Paños al Viento)\"."
  },
  {
    "id": "laocoon-sculpture",
    "name": "Grupo del Laocoonte (Expresión y Tensión Anatómica)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🐍",
    "wikiCategories": [
      "Category:Laocoön_group"
    ],
    "intitleQuery": "Laocoon group sculpture",
    "mustMatch": [
      "laocoon",
      "laocoön",
      "statue",
      "marble",
      "vatican"
    ],
    "aiPromptSubject": "Laocoon group sculpture isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Grupo del Laocoonte (Expresión y Tensión Anatómica)\"."
  },
  {
    "id": "bernini-apollo-daphne",
    "name": "Escultura Barroca de Bernini (Movimiento y Textura)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🗿",
    "wikiCategories": [
      "Category:Sculptures_by_Gian_Lorenzo_Bernini"
    ],
    "intitleQuery": "Gian Lorenzo Bernini marble sculpture",
    "mustMatch": [
      "bernini",
      "marble",
      "apollo",
      "proserpina",
      "david",
      "statue"
    ],
    "aiPromptSubject": "Gian Lorenzo Bernini marble sculpture isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Escultura Barroca de Bernini (Movimiento y Textura)\"."
  },
  {
    "id": "rodin-the-thinker",
    "name": "El Pensador de Auguste Rodin (Bronce)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🗿",
    "wikiCategories": [
      "Category:The_Thinker"
    ],
    "intitleQuery": "The Thinker Rodin",
    "mustMatch": [
      "thinker",
      "penseur",
      "rodin",
      "bronze",
      "sculpture"
    ],
    "aiPromptSubject": "The Thinker Rodin isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"El Pensador de Auguste Rodin (Bronce)\"."
  },
  {
    "id": "rodin-burghers-hands",
    "name": "Esculturas de Manos de Auguste Rodin",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🖐️",
    "wikiCategories": [
      "Category:Sculptures_by_Auguste_Rodin"
    ],
    "intitleQuery": "Rodin hands sculpture",
    "mustMatch": [
      "rodin",
      "hand",
      "cathedral",
      "bronze",
      "sculpture"
    ],
    "aiPromptSubject": "Rodin hands sculpture isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Esculturas de Manos de Auguste Rodin\"."
  },
  {
    "id": "ecorche-houdon",
    "name": "Écorché de Houdon (Anatomía sin Piel)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "💪",
    "wikiCategories": [
      "Category:Écorché"
    ],
    "intitleQuery": "Houdon ecorche anatomy",
    "mustMatch": [
      "ecorche",
      "écorché",
      "houdon",
      "anatomy",
      "muscle"
    ],
    "aiPromptSubject": "Houdon ecorche anatomy isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Écorché de Houdon (Anatomía sin Piel)\"."
  },
  {
    "id": "gargoyle-statue-face",
    "name": "Cabeza Escultórica Expresiva (Mascarón de Piedra)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🎭",
    "wikiCategories": [
      "Category:Mascarons"
    ],
    "intitleQuery": "mascaron stone face sculpture",
    "mustMatch": [
      "mascaron",
      "sculpture",
      "stone",
      "face",
      "relief"
    ],
    "aiPromptSubject": "mascaron stone face sculpture isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cabeza Escultórica Expresiva (Mascarón de Piedra)\"."
  },
  {
    "id": "veiled-marble-sculpture",
    "name": "Escultura de Mármol con Velo Transparente (Corradini / Strazza)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🗿",
    "wikiCategories": [
      "Category:Veiled_faces_in_sculpture"
    ],
    "intitleQuery": "Veiled Christ Veiled Virgin marble",
    "mustMatch": [
      "veiled",
      "marble",
      "strazza",
      "corradini",
      "monti",
      "sculpture"
    ],
    "aiPromptSubject": "Veiled Christ Veiled Virgin marble isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Escultura de Mármol con Velo Transparente (Corradini / Strazza)\"."
  },
  {
    "id": "caryatid-column-statue",
    "name": "Cariátide Clásica (Figura con Túnica de Pliegues Verticales)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🏛️",
    "wikiCategories": [
      "Category:Caryatids"
    ],
    "intitleQuery": "Caryatid statue",
    "mustMatch": [
      "caryatid",
      "erechtheion",
      "statue",
      "column",
      "drapery"
    ],
    "aiPromptSubject": "Caryatid statue isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cariátide Clásica (Figura con Túnica de Pliegues Verticales)\"."
  },
  {
    "id": "sphinx-sculpture",
    "name": "Esfinge Escultórica en Piedra o Mármol",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🦁",
    "wikiCategories": [
      "Category:Sphinxes"
    ],
    "intitleQuery": "Sphinx sculpture stone",
    "mustMatch": [
      "sphinx",
      "statue",
      "sculpture",
      "stone"
    ],
    "aiPromptSubject": "Sphinx sculpture stone isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Esfinge Escultórica en Piedra o Mármol\"."
  },
  {
    "id": "centaur-sculpture",
    "name": "Centauro Escultórico (Anatomía Humana y Equina)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🏹",
    "wikiCategories": [
      "Category:Sculptures_of_centaurs"
    ],
    "intitleQuery": "Centaur sculpture marble",
    "mustMatch": [
      "centaur",
      "furietti",
      "borghese",
      "sculpture",
      "statue"
    ],
    "aiPromptSubject": "Centaur sculpture marble isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Centauro Escultórico (Anatomía Humana y Equina)\"."
  },
  {
    "id": "ballet-dancer-jump",
    "name": "Bailarina de Ballet en Salto o Arabesque",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🩰",
    "wikiCategories": [
      "Category:Ballet_leaps",
      "Category:Ballet_dancers_in_action"
    ],
    "intitleQuery": "ballet dancer leap arabesque",
    "mustMatch": [
      "ballet",
      "dancer",
      "ballerina",
      "leap",
      "arabesque"
    ],
    "aiPromptSubject": "ballet dancer leap arabesque isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bailarina de Ballet en Salto o Arabesque\"."
  },
  {
    "id": "ballet-pointe-shoes-feet",
    "name": "Pies de Bailarina en Puntas de Ballet con Cintas",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🩰",
    "wikiCategories": [
      "Category:Pointe_shoes"
    ],
    "intitleQuery": "pointe shoes ballet feet",
    "mustMatch": [
      "pointe",
      "ballet",
      "shoes",
      "feet",
      "ballerina"
    ],
    "aiPromptSubject": "pointe shoes ballet feet isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pies de Bailarina en Puntas de Ballet con Cintas\"."
  },
  {
    "id": "gymnast-rings-pommel",
    "name": "Gimnasta en Anillas o Equilibrio (Tensión Muscular)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🤸",
    "wikiCategories": [
      "Category:Still_rings",
      "Category:Pommel_horse"
    ],
    "intitleQuery": "artistic gymnastics rings",
    "mustMatch": [
      "gymnast",
      "gymnastics",
      "rings",
      "muscle",
      "athlete"
    ],
    "aiPromptSubject": "artistic gymnastics rings isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gimnasta en Anillas o Equilibrio (Tensión Muscular)\"."
  },
  {
    "id": "pole-vaulter-high-jump",
    "name": "Atleta en Salto con Pértiga o Salto de Altura (Arco Corporal)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🏃",
    "wikiCategories": [
      "Category:Pole_vault"
    ],
    "intitleQuery": "pole vault athlete",
    "mustMatch": [
      "pole vault",
      "athlete",
      "jump",
      "stabhochsprung"
    ],
    "aiPromptSubject": "pole vault athlete isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Atleta en Salto con Pértiga o Salto de Altura (Arco Corporal)\"."
  },
  {
    "id": "hurdler-sprinter",
    "name": "Velocista o Corredor de Vallas en Zancada",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🏃",
    "wikiCategories": [
      "Category:Hurdling"
    ],
    "intitleQuery": "hurdling athlete track",
    "mustMatch": [
      "hurdles",
      "hurdling",
      "sprinter",
      "runner",
      "athlete"
    ],
    "aiPromptSubject": "hurdling athlete track isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Velocista o Corredor de Vallas en Zancada\"."
  },
  {
    "id": "discus-javelin-thrower",
    "name": "Lanzador de Disco o Jabalina en Torsión",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🥏",
    "wikiCategories": [
      "Category:Discus_throw",
      "Category:Javelin_throw"
    ],
    "intitleQuery": "discus throw athlete",
    "mustMatch": [
      "discus",
      "javelin",
      "throw",
      "athlete"
    ],
    "aiPromptSubject": "discus throw athlete isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lanzador de Disco o Jabalina en Torsión\"."
  },
  {
    "id": "archer-drawing-bow",
    "name": "Arquero Tensando el Arco (Alineación de Hombros y Brazos)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🏹",
    "wikiCategories": [
      "Category:Archery"
    ],
    "intitleQuery": "archery bow athlete",
    "mustMatch": [
      "archery",
      "archer",
      "bow",
      "arrow",
      "bogenschießen"
    ],
    "aiPromptSubject": "archery bow athlete isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Arquero Tensando el Arco (Alineación de Hombros y Brazos)\"."
  },
  {
    "id": "fencer-lunge",
    "name": "Esgrimista en Fondo (Línea de Ataque)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🤺",
    "wikiCategories": [
      "Category:Fencing"
    ],
    "intitleQuery": "fencing lunge athlete",
    "mustMatch": [
      "fencing",
      "fencer",
      "foil",
      "epee",
      "sabre",
      "escrime"
    ],
    "aiPromptSubject": "fencing lunge athlete isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Esgrimista en Fondo (Línea de Ataque)\"."
  },
  {
    "id": "figure-skater-spin",
    "name": "Patinador Artístico sobre Hielo en Giro o Pirueta",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "⛸️",
    "wikiCategories": [
      "Category:Figure_skating_spins",
      "Category:Figure_skating"
    ],
    "intitleQuery": "figure skating spin",
    "mustMatch": [
      "figure skating",
      "skater",
      "ice",
      "spin",
      "biellmann"
    ],
    "aiPromptSubject": "figure skating spin isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Patinador Artístico sobre Hielo en Giro o Pirueta\"."
  },
  {
    "id": "martial-arts-kick",
    "name": "Artista Marcial en Patada Alta o Postura de Guardia",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🥋",
    "wikiCategories": [
      "Category:Taekwondo",
      "Category:Karate"
    ],
    "intitleQuery": "taekwondo karate kick",
    "mustMatch": [
      "taekwondo",
      "karate",
      "kick",
      "martial arts"
    ],
    "aiPromptSubject": "taekwondo karate kick isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Artista Marcial en Patada Alta o Postura de Guardia\"."
  },
  {
    "id": "chiaroscuro-portrait",
    "name": "Retrato con Iluminación de Claroscuro (Rembrandt)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🧑",
    "wikiCategories": [
      "Category:Chiaroscuro_portraits",
      "Category:Low-key_portraits"
    ],
    "intitleQuery": "chiaroscuro portrait face",
    "mustMatch": [
      "portrait",
      "chiaroscuro",
      "rembrandt",
      "face"
    ],
    "aiPromptSubject": "chiaroscuro portrait face isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Retrato con Iluminación de Claroscuro (Rembrandt)\"."
  },
  {
    "id": "profile-portrait",
    "name": "Retrato Humano en Perfil Puro",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🗣️",
    "wikiCategories": [
      "Category:Profile_portraits"
    ],
    "intitleQuery": "profile portrait face",
    "mustMatch": [
      "profile",
      "portrait",
      "side view",
      "face"
    ],
    "aiPromptSubject": "profile portrait face isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Retrato Humano en Perfil Puro\"."
  },
  {
    "id": "elderly-portrait",
    "name": "Retrato de Rostro con Arrugas Profundas",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🧓",
    "wikiCategories": [
      "Category:Portraits_of_old_people"
    ],
    "intitleQuery": "elderly portrait face wrinkles",
    "mustMatch": [
      "elderly",
      "old man",
      "old woman",
      "wrinkles",
      "portrait"
    ],
    "aiPromptSubject": "elderly portrait face wrinkles isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Retrato de Rostro con Arrugas Profundas\"."
  },
  {
    "id": "laughing-expression-portrait",
    "name": "Rostro Humano Riendo (Expresión Facial y Pómulos)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "😄",
    "wikiCategories": [
      "Category:Laughing_people"
    ],
    "intitleQuery": "laughing face portrait",
    "mustMatch": [
      "laughing",
      "smile",
      "portrait",
      "face",
      "expression"
    ],
    "aiPromptSubject": "laughing face portrait isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rostro Humano Riendo (Expresión Facial y Pómulos)\"."
  },
  {
    "id": "academic-drapery",
    "name": "Estudio Académico de Pliegues de Tela y Paños",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🧣",
    "wikiCategories": [
      "Category:Drapery_in_sculpture",
      "Category:Drapery_studies"
    ],
    "intitleQuery": "drapery folds study cloth",
    "mustMatch": [
      "drapery",
      "folds",
      "cloth",
      "fabric",
      "statue"
    ],
    "aiPromptSubject": "drapery folds study cloth isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Estudio Académico de Pliegues de Tela y Paños\"."
  },
  {
    "id": "hooded-cloak-figure",
    "name": "Figura con Capa y Capucha (Pliegues Cónicos)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🧥",
    "wikiCategories": [
      "Category:Cloaks",
      "Category:Pleurants"
    ],
    "intitleQuery": "hooded cloak statue monk",
    "mustMatch": [
      "cloak",
      "hood",
      "monk",
      "pleurant",
      "drapery",
      "statue"
    ],
    "aiPromptSubject": "hooded cloak statue monk isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Figura con Capa y Capucha (Pliegues Cónicos)\"."
  },
  {
    "id": "medieval-gauntlet",
    "name": "Guantelete Articulado de Armadura (Mano de Acero)",
    "category": "anatomia",
    "categoryLabel": "Figura Humana y Anatomía",
    "icon": "🧤",
    "wikiCategories": [
      "Category:Gauntlets_(armour)"
    ],
    "intitleQuery": "gauntlet armor steel",
    "mustMatch": [
      "gauntlet",
      "armour",
      "armor",
      "glove",
      "steel"
    ],
    "aiPromptSubject": "gauntlet armor steel isolated studio reference object",
    "tip": "Anatomía y estructura: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Guantelete Articulado de Armadura (Mano de Acero)\"."
  },
  {
    "id": "cat-sitting",
    "name": "Gato Doméstico (Felis catus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐈",
    "wikiCategories": [
      "Category:Cats_sitting",
      "Category:Cats_standing"
    ],
    "intitleQuery": "Felis silvestris catus",
    "mustMatch": [
      "cat",
      "felis",
      "kitten",
      "tabby",
      "chat",
      "katze"
    ],
    "aiPromptSubject": "Felis silvestris catus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gato Doméstico (Felis catus)\"."
  },
  {
    "id": "maine-coon-cat",
    "name": "Gato Maine Coon o Persa de Pelo Largo",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐈",
    "wikiCategories": [
      "Category:Maine_Coon_cats"
    ],
    "intitleQuery": "Maine Coon cat",
    "mustMatch": [
      "maine coon",
      "cat",
      "felis"
    ],
    "aiPromptSubject": "Maine Coon cat isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gato Maine Coon o Persa de Pelo Largo\"."
  },
  {
    "id": "sphynx-hairless-cat",
    "name": "Gato Sphynx (Anatomía Felina sin Pelaje)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐈",
    "wikiCategories": [
      "Category:Sphynx_cats"
    ],
    "intitleQuery": "Sphynx cat",
    "mustMatch": [
      "sphynx",
      "hairless cat",
      "cat"
    ],
    "aiPromptSubject": "Sphynx cat isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gato Sphynx (Anatomía Felina sin Pelaje)\"."
  },
  {
    "id": "german-shepherd",
    "name": "Perro Pastor Alemán",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐕",
    "wikiCategories": [
      "Category:German_Shepherd_Dogs"
    ],
    "intitleQuery": "German Shepherd dog",
    "mustMatch": [
      "shepherd",
      "dog",
      "canis",
      "hund"
    ],
    "aiPromptSubject": "German Shepherd dog isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Perro Pastor Alemán\"."
  },
  {
    "id": "greyhound-dog",
    "name": "Galgo (Anatomía Aerodinámica en Carrera o Reposo)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐕",
    "wikiCategories": [
      "Category:Greyhounds"
    ],
    "intitleQuery": "Greyhound dog",
    "mustMatch": [
      "greyhound",
      "whippet",
      "sighthound",
      "dog"
    ],
    "aiPromptSubject": "Greyhound dog isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Galgo (Anatomía Aerodinámica en Carrera o Reposo)\"."
  },
  {
    "id": "english-bulldog",
    "name": "Bulldog o Carlino (Pug) con Pliegues Faciales",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐶",
    "wikiCategories": [
      "Category:English_Bulldogs",
      "Category:Pugs"
    ],
    "intitleQuery": "Bulldog Pug dog",
    "mustMatch": [
      "bulldog",
      "pug",
      "mops",
      "dog"
    ],
    "aiPromptSubject": "Bulldog Pug dog isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bulldog o Carlino (Pug) con Pliegues Faciales\"."
  },
  {
    "id": "dachshund-dog",
    "name": "Perro Teckel / Dachshund (Proporción Larga y Patas Cortas)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🌭",
    "wikiCategories": [
      "Category:Dachshunds"
    ],
    "intitleQuery": "Dachshund dog",
    "mustMatch": [
      "dachshund",
      "teckel",
      "dackel",
      "dog"
    ],
    "aiPromptSubject": "Dachshund dog isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Perro Teckel / Dachshund (Proporción Larga y Patas Cortas)\"."
  },
  {
    "id": "husky-malamute",
    "name": "Husky Siberiano o Malamute de Alaska",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐺",
    "wikiCategories": [
      "Category:Siberian_Huskies"
    ],
    "intitleQuery": "Siberian Husky",
    "mustMatch": [
      "husky",
      "malamute",
      "dog"
    ],
    "aiPromptSubject": "Siberian Husky isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Husky Siberiano o Malamute de Alaska\"."
  },
  {
    "id": "arabian-horse",
    "name": "Caballo Árabe o Pura Sangre",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐎",
    "wikiCategories": [
      "Category:Arabian_horses",
      "Category:Horses_standing"
    ],
    "intitleQuery": "Equus caballus",
    "mustMatch": [
      "horse",
      "equus",
      "stallion",
      "mare",
      "cheval",
      "pferd"
    ],
    "aiPromptSubject": "Equus caballus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caballo Árabe o Pura Sangre\"."
  },
  {
    "id": "clydesdale-draft-horse",
    "name": "Caballo Percherón o Shire de Tiro Pesado",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐴",
    "wikiCategories": [
      "Category:Shire_horses",
      "Category:Clydesdale_horses"
    ],
    "intitleQuery": "Shire horse Clydesdale",
    "mustMatch": [
      "shire",
      "clydesdale",
      "percheron",
      "draft horse",
      "horse"
    ],
    "aiPromptSubject": "Shire horse Clydesdale isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caballo Percherón o Shire de Tiro Pesado\"."
  },
  {
    "id": "plains-zebra",
    "name": "Cebra de Llanura (Equus quagga)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦓",
    "wikiCategories": [
      "Category:Equus_quagga"
    ],
    "intitleQuery": "Equus quagga",
    "mustMatch": [
      "zebra",
      "equus",
      "zèbre"
    ],
    "aiPromptSubject": "Equus quagga isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cebra de Llanura (Equus quagga)\"."
  },
  {
    "id": "donkey-burro",
    "name": "Burro o Asno (Equus asinus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🫏",
    "wikiCategories": [
      "Category:Donkeys"
    ],
    "intitleQuery": "Equus asinus donkey",
    "mustMatch": [
      "donkey",
      "equus asinus",
      "ass",
      "esel",
      "âne"
    ],
    "aiPromptSubject": "Equus asinus donkey isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Burro o Asno (Equus asinus)\"."
  },
  {
    "id": "giraffe",
    "name": "Jirafa (Giraffa camelopardalis)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦒",
    "wikiCategories": [
      "Category:Giraffa_camelopardalis"
    ],
    "intitleQuery": "Giraffa camelopardalis",
    "mustMatch": [
      "giraffe",
      "giraffa",
      "girafe"
    ],
    "aiPromptSubject": "Giraffa camelopardalis isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Jirafa (Giraffa camelopardalis)\"."
  },
  {
    "id": "okapi-animal",
    "name": "Okapi (Okapia johnstoni)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦌",
    "wikiCategories": [
      "Category:Okapia_johnstoni"
    ],
    "intitleQuery": "Okapia johnstoni",
    "mustMatch": [
      "okapi",
      "okapia"
    ],
    "aiPromptSubject": "Okapia johnstoni isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Okapi (Okapia johnstoni)\"."
  },
  {
    "id": "african-elephant",
    "name": "Elefante Africano (Loxodonta africana)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐘",
    "wikiCategories": [
      "Category:Loxodonta_africana"
    ],
    "intitleQuery": "Loxodonta africana",
    "mustMatch": [
      "elephant",
      "loxodonta",
      "tusker",
      "éléphant",
      "elefant"
    ],
    "aiPromptSubject": "Loxodonta africana isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Elefante Africano (Loxodonta africana)\"."
  },
  {
    "id": "asian-elephant",
    "name": "Elefante Asiático (Elephas maximus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐘",
    "wikiCategories": [
      "Category:Elephas_maximus"
    ],
    "intitleQuery": "Elephas maximus",
    "mustMatch": [
      "elephas",
      "elephant",
      "asian elephant"
    ],
    "aiPromptSubject": "Elephas maximus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Elefante Asiático (Elephas maximus)\"."
  },
  {
    "id": "white-rhinoceros",
    "name": "Rinoceronte Blanco (Ceratotherium simum)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦏",
    "wikiCategories": [
      "Category:Ceratotherium_simum"
    ],
    "intitleQuery": "Ceratotherium simum",
    "mustMatch": [
      "rhinoceros",
      "rhino",
      "ceratotherium",
      "nashorn"
    ],
    "aiPromptSubject": "Ceratotherium simum isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rinoceronte Blanco (Ceratotherium simum)\"."
  },
  {
    "id": "indian-rhinoceros",
    "name": "Rinoceronte Indio de Un Cuerno (Placas como Armadura)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦏",
    "wikiCategories": [
      "Category:Rhinoceros_unicornis"
    ],
    "intitleQuery": "Rhinoceros unicornis",
    "mustMatch": [
      "rhinoceros unicornis",
      "indian rhinoceros",
      "rhino"
    ],
    "aiPromptSubject": "Rhinoceros unicornis isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rinoceronte Indio de Un Cuerno (Placas como Armadura)\"."
  },
  {
    "id": "hippopotamus",
    "name": "Hipopótamo Común (Hippopotamus amphibius)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦛",
    "wikiCategories": [
      "Category:Hippopotamus_amphibius"
    ],
    "intitleQuery": "Hippopotamus amphibius",
    "mustMatch": [
      "hippopotamus",
      "hippo",
      "flusspferd"
    ],
    "aiPromptSubject": "Hippopotamus amphibius isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hipopótamo Común (Hippopotamus amphibius)\"."
  },
  {
    "id": "male-lion",
    "name": "León Africano (Panthera leo)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦁",
    "wikiCategories": [
      "Category:Panthera_leo"
    ],
    "intitleQuery": "Panthera leo",
    "mustMatch": [
      "lion",
      "panthera leo",
      "löwe"
    ],
    "aiPromptSubject": "Panthera leo isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"León Africano (Panthera leo)\"."
  },
  {
    "id": "bengal-tiger",
    "name": "Tigre de Bengala o Siberiano (Panthera tigris)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐅",
    "wikiCategories": [
      "Category:Panthera_tigris"
    ],
    "intitleQuery": "Panthera tigris",
    "mustMatch": [
      "tiger",
      "panthera tigris",
      "tigre"
    ],
    "aiPromptSubject": "Panthera tigris isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tigre de Bengala o Siberiano (Panthera tigris)\"."
  },
  {
    "id": "leopard-jaguar",
    "name": "Leopardo o Jaguar (Panthera pardus / onca)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐆",
    "wikiCategories": [
      "Category:Panthera_pardus",
      "Category:Panthera_onca"
    ],
    "intitleQuery": "Panthera pardus Panthera onca",
    "mustMatch": [
      "leopard",
      "jaguar",
      "panthera"
    ],
    "aiPromptSubject": "Panthera pardus Panthera onca isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Leopardo o Jaguar (Panthera pardus / onca)\"."
  },
  {
    "id": "snow-leopard",
    "name": "Leopardo de las Nieves (Panthera uncia)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐆",
    "wikiCategories": [
      "Category:Panthera_uncia"
    ],
    "intitleQuery": "Panthera uncia",
    "mustMatch": [
      "snow leopard",
      "panthera uncia",
      "irbis"
    ],
    "aiPromptSubject": "Panthera uncia isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Leopardo de las Nieves (Panthera uncia)\"."
  },
  {
    "id": "cheetah",
    "name": "Guepardo (Acinonyx jubatus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐆",
    "wikiCategories": [
      "Category:Acinonyx_jubatus"
    ],
    "intitleQuery": "Acinonyx jubatus",
    "mustMatch": [
      "cheetah",
      "acinonyx",
      "gepard",
      "guépard"
    ],
    "aiPromptSubject": "Acinonyx jubatus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Guepardo (Acinonyx jubatus)\"."
  },
  {
    "id": "eurasian-lynx",
    "name": "Lince Boreal o Ibérico (Pinceles en las Orejas)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐈",
    "wikiCategories": [
      "Category:Lynx_lynx",
      "Category:Lynx_pardinus"
    ],
    "intitleQuery": "Lynx lynx caracal",
    "mustMatch": [
      "lynx",
      "luchs",
      "caracal"
    ],
    "aiPromptSubject": "Lynx lynx caracal isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lince Boreal o Ibérico (Pinceles en las Orejas)\"."
  },
  {
    "id": "gray-wolf",
    "name": "Lobo Gris (Canis lupus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐺",
    "wikiCategories": [
      "Category:Canis_lupus"
    ],
    "intitleQuery": "Canis lupus",
    "mustMatch": [
      "wolf",
      "canis lupus",
      "loup"
    ],
    "aiPromptSubject": "Canis lupus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lobo Gris (Canis lupus)\"."
  },
  {
    "id": "red-fox",
    "name": "Zorro Rojo (Vulpes vulpes)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦊",
    "wikiCategories": [
      "Category:Vulpes_vulpes"
    ],
    "intitleQuery": "Vulpes vulpes",
    "mustMatch": [
      "fox",
      "vulpes",
      "renard",
      "fuchs"
    ],
    "aiPromptSubject": "Vulpes vulpes isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Zorro Rojo (Vulpes vulpes)\"."
  },
  {
    "id": "fennec-fox",
    "name": "Zorro Fénec del Desierto (Grandes Pabellones Auditivos)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦊",
    "wikiCategories": [
      "Category:Vulpes_zerda"
    ],
    "intitleQuery": "Vulpes zerda",
    "mustMatch": [
      "fennec",
      "vulpes zerda",
      "fox"
    ],
    "aiPromptSubject": "Vulpes zerda isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Zorro Fénec del Desierto (Grandes Pabellones Auditivos)\"."
  },
  {
    "id": "spotted-hyena",
    "name": "Hiena Manchada (Crocuta crocuta)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐕",
    "wikiCategories": [
      "Category:Crocuta_crocuta"
    ],
    "intitleQuery": "Crocuta crocuta",
    "mustMatch": [
      "hyena",
      "crocuta",
      "hyäne"
    ],
    "aiPromptSubject": "Crocuta crocuta isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hiena Manchada (Crocuta crocuta)\"."
  },
  {
    "id": "meerkat-suricate",
    "name": "Suricata Erguida (Suricata suricatta)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦦",
    "wikiCategories": [
      "Category:Suricata_suricatta"
    ],
    "intitleQuery": "Suricata suricatta",
    "mustMatch": [
      "meerkat",
      "suricata",
      "erdmännchen"
    ],
    "aiPromptSubject": "Suricata suricatta isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Suricata Erguida (Suricata suricatta)\"."
  },
  {
    "id": "brown-bear",
    "name": "Oso Pardo o Grizzly (Ursus arctos)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐻",
    "wikiCategories": [
      "Category:Ursus_arctos"
    ],
    "intitleQuery": "Ursus arctos",
    "mustMatch": [
      "bear",
      "ursus",
      "grizzly",
      "bär",
      "ours"
    ],
    "aiPromptSubject": "Ursus arctos isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Oso Pardo o Grizzly (Ursus arctos)\"."
  },
  {
    "id": "polar-bear",
    "name": "Oso Polar (Ursus maritimus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐻‍❄️",
    "wikiCategories": [
      "Category:Ursus_maritimus"
    ],
    "intitleQuery": "Ursus maritimus",
    "mustMatch": [
      "polar bear",
      "ursus maritimus",
      "eisbär"
    ],
    "aiPromptSubject": "Ursus maritimus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Oso Polar (Ursus maritimus)\"."
  },
  {
    "id": "giant-panda",
    "name": "Panda Gigante (Ailuropoda melanoleuca)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐼",
    "wikiCategories": [
      "Category:Ailuropoda_melanoleuca"
    ],
    "intitleQuery": "Ailuropoda melanoleuca",
    "mustMatch": [
      "panda",
      "ailuropoda"
    ],
    "aiPromptSubject": "Ailuropoda melanoleuca isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Panda Gigante (Ailuropoda melanoleuca)\"."
  },
  {
    "id": "red-panda",
    "name": "Panda Rojo (Ailurus fulgens)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦊",
    "wikiCategories": [
      "Category:Ailurus_fulgens"
    ],
    "intitleQuery": "Ailurus fulgens",
    "mustMatch": [
      "red panda",
      "ailurus"
    ],
    "aiPromptSubject": "Ailurus fulgens isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Panda Rojo (Ailurus fulgens)\"."
  },
  {
    "id": "koala-bear",
    "name": "Koala en Rama de Eucalipto (Phascolarctos cinereus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐨",
    "wikiCategories": [
      "Category:Phascolarctos_cinereus"
    ],
    "intitleQuery": "Phascolarctos cinereus",
    "mustMatch": [
      "koala",
      "phascolarctos"
    ],
    "aiPromptSubject": "Phascolarctos cinereus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Koala en Rama de Eucalipto (Phascolarctos cinereus)\"."
  },
  {
    "id": "red-kangaroo",
    "name": "Canguro Rojo (Osphranter rufus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦘",
    "wikiCategories": [
      "Category:Macropus_rufus"
    ],
    "intitleQuery": "Osphranter rufus",
    "mustMatch": [
      "kangaroo",
      "macropus",
      "osphranter",
      "känguru"
    ],
    "aiPromptSubject": "Osphranter rufus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Canguro Rojo (Osphranter rufus)\"."
  },
  {
    "id": "red-deer-stag",
    "name": "Ciervo Común con Cornamenta (Cervus elaphus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦌",
    "wikiCategories": [
      "Category:Cervus_elaphus"
    ],
    "intitleQuery": "Cervus elaphus",
    "mustMatch": [
      "deer",
      "stag",
      "cervus",
      "hirsch",
      "cerf"
    ],
    "aiPromptSubject": "Cervus elaphus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ciervo Común con Cornamenta (Cervus elaphus)\"."
  },
  {
    "id": "moose-alces",
    "name": "Alce con Astas Palmeadas (Alces alces)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🫎",
    "wikiCategories": [
      "Category:Alces_alces"
    ],
    "intitleQuery": "Alces alces",
    "mustMatch": [
      "moose",
      "elk",
      "alces",
      "elch"
    ],
    "aiPromptSubject": "Alces alces isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Alce con Astas Palmeadas (Alces alces)\"."
  },
  {
    "id": "reindeer-caribou",
    "name": "Reno o Caribú (Rangifer tarandus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦌",
    "wikiCategories": [
      "Category:Rangifer_tarandus"
    ],
    "intitleQuery": "Rangifer tarandus",
    "mustMatch": [
      "reindeer",
      "caribou",
      "rangifer",
      "rentier"
    ],
    "aiPromptSubject": "Rangifer tarandus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Reno o Caribú (Rangifer tarandus)\"."
  },
  {
    "id": "alpine-ibex",
    "name": "Cabra Montés o Íbice Alpino (Capra ibex)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐐",
    "wikiCategories": [
      "Category:Capra_ibex"
    ],
    "intitleQuery": "Capra ibex",
    "mustMatch": [
      "ibex",
      "capra",
      "steinbock",
      "bouquetin"
    ],
    "aiPromptSubject": "Capra ibex isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cabra Montés o Íbice Alpino (Capra ibex)\"."
  },
  {
    "id": "bighorn-ram",
    "name": "Carnero o Muflón con Cuernos en Espiral (Ovis)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐏",
    "wikiCategories": [
      "Category:Ovis_canadensis",
      "Category:Ovis_orientalis_musimon"
    ],
    "intitleQuery": "Ovis canadensis Ovis orientalis",
    "mustMatch": [
      "ram",
      "ovis",
      "mouflon",
      "bighorn",
      "sheep"
    ],
    "aiPromptSubject": "Ovis canadensis Ovis orientalis isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Carnero o Muflón con Cuernos en Espiral (Ovis)\"."
  },
  {
    "id": "gemsbok-oryx",
    "name": "Órix del Cabo con Cuernos Rectos Largos (Oryx gazella)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦌",
    "wikiCategories": [
      "Category:Oryx_gazella"
    ],
    "intitleQuery": "Oryx gazella",
    "mustMatch": [
      "oryx",
      "gemsbok",
      "antelope"
    ],
    "aiPromptSubject": "Oryx gazella isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Órix del Cabo con Cuernos Rectos Largos (Oryx gazella)\"."
  },
  {
    "id": "greater-kudu",
    "name": "Gran Kudú con Cuernos Helicoidales (Tragelaphus strepsiceros)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦌",
    "wikiCategories": [
      "Category:Tragelaphus_strepsiceros"
    ],
    "intitleQuery": "Tragelaphus strepsiceros",
    "mustMatch": [
      "kudu",
      "tragelaphus",
      "antelope"
    ],
    "aiPromptSubject": "Tragelaphus strepsiceros isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gran Kudú con Cuernos Helicoidales (Tragelaphus strepsiceros)\"."
  },
  {
    "id": "american-bison",
    "name": "Bisonte Americano (Bison bison)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦬",
    "wikiCategories": [
      "Category:Bison_bison"
    ],
    "intitleQuery": "Bison bison",
    "mustMatch": [
      "bison",
      "buffalo"
    ],
    "aiPromptSubject": "Bison bison isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bisonte Americano (Bison bison)\"."
  },
  {
    "id": "highland-cattle",
    "name": "Toro Escocés de las Tierras Altas (Pelaje Largo y Cuernos)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐂",
    "wikiCategories": [
      "Category:Highland_cattle"
    ],
    "intitleQuery": "Highland cattle",
    "mustMatch": [
      "highland cattle",
      "cattle",
      "cow",
      "bull"
    ],
    "aiPromptSubject": "Highland cattle isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Toro Escocés de las Tierras Altas (Pelaje Largo y Cuernos)\"."
  },
  {
    "id": "wild-boar-warthog",
    "name": "Jabalí o Facóquero con Colmillos (Sus scrofa / Phacochoerus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐗",
    "wikiCategories": [
      "Category:Sus_scrofa",
      "Category:Phacochoerus_africanus"
    ],
    "intitleQuery": "Sus scrofa Phacochoerus",
    "mustMatch": [
      "boar",
      "sus scrofa",
      "warthog",
      "phacochoerus",
      "wildschwein",
      "sanglier"
    ],
    "aiPromptSubject": "Sus scrofa Phacochoerus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Jabalí o Facóquero con Colmillos (Sus scrofa / Phacochoerus)\"."
  },
  {
    "id": "bactrian-camel",
    "name": "Camello Bactriano de Dos Jorobas (Camelus bactrianus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐫",
    "wikiCategories": [
      "Category:Camelus_bactrianus"
    ],
    "intitleQuery": "Camelus bactrianus",
    "mustMatch": [
      "camel",
      "camelus",
      "kamel",
      "chameau"
    ],
    "aiPromptSubject": "Camelus bactrianus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Camello Bactriano de Dos Jorobas (Camelus bactrianus)\"."
  },
  {
    "id": "llama-alpaca",
    "name": "Llama o Alpaca Andina (Lama glama)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦙",
    "wikiCategories": [
      "Category:Lama_glama",
      "Category:Vicugna_pacos"
    ],
    "intitleQuery": "Lama glama Vicugna pacos",
    "mustMatch": [
      "llama",
      "alpaca",
      "lama glama"
    ],
    "aiPromptSubject": "Lama glama Vicugna pacos isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Llama o Alpaca Andina (Lama glama)\"."
  },
  {
    "id": "tapir-animal",
    "name": "Tapir con Trompa Prensil Corta (Tapirus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐗",
    "wikiCategories": [
      "Category:Tapirus_terrestris",
      "Category:Tapirus_bairdii"
    ],
    "intitleQuery": "Tapirus terrestris",
    "mustMatch": [
      "tapir",
      "tapirus"
    ],
    "aiPromptSubject": "Tapirus terrestris isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tapir con Trompa Prensil Corta (Tapirus)\"."
  },
  {
    "id": "giant-anteater",
    "name": "Oso Hormiguero Gigante (Myrmecophaga tridactyla)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐜",
    "wikiCategories": [
      "Category:Myrmecophaga_tridactyla"
    ],
    "intitleQuery": "Myrmecophaga tridactyla",
    "mustMatch": [
      "anteater",
      "myrmecophaga",
      "ameisenbär",
      "tamanoir"
    ],
    "aiPromptSubject": "Myrmecophaga tridactyla isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Oso Hormiguero Gigante (Myrmecophaga tridactyla)\"."
  },
  {
    "id": "aardvark-animal",
    "name": "Oricteropo o Cerdo Hormiguero (Orycteropus afer)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐽",
    "wikiCategories": [
      "Category:Orycteropus_afer"
    ],
    "intitleQuery": "Orycteropus afer",
    "mustMatch": [
      "aardvark",
      "orycteropus"
    ],
    "aiPromptSubject": "Orycteropus afer isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Oricteropo o Cerdo Hormiguero (Orycteropus afer)\"."
  },
  {
    "id": "nine-banded-armadillo",
    "name": "Armadillo con Caparazón de Bandas (Dasypus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦔",
    "wikiCategories": [
      "Category:Dasypus_novemcinctus",
      "Category:Tolypeutes_matacus"
    ],
    "intitleQuery": "Dasypus novemcinctus Tolypeutes",
    "mustMatch": [
      "armadillo",
      "dasypus",
      "tolypeutes",
      "gürteltier",
      "tatou"
    ],
    "aiPromptSubject": "Dasypus novemcinctus Tolypeutes isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Armadillo con Caparazón de Bandas (Dasypus)\"."
  },
  {
    "id": "three-toed-sloth",
    "name": "Perezoso de Tres Dedos (Bradypus variegatus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦥",
    "wikiCategories": [
      "Category:Bradypus_variegatus"
    ],
    "intitleQuery": "Bradypus variegatus",
    "mustMatch": [
      "sloth",
      "bradypus",
      "faultier",
      "paresseux"
    ],
    "aiPromptSubject": "Bradypus variegatus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Perezoso de Tres Dedos (Bradypus variegatus)\"."
  },
  {
    "id": "red-squirrel",
    "name": "Ardilla Roja con Cola Esponjosa (Sciurus vulgaris)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐿️",
    "wikiCategories": [
      "Category:Sciurus_vulgaris"
    ],
    "intitleQuery": "Sciurus vulgaris",
    "mustMatch": [
      "squirrel",
      "sciurus",
      "eichhörnchen",
      "écureuil"
    ],
    "aiPromptSubject": "Sciurus vulgaris isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ardilla Roja con Cola Esponjosa (Sciurus vulgaris)\"."
  },
  {
    "id": "european-hedgehog",
    "name": "Erizo Europeo (Erinaceus europaeus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦔",
    "wikiCategories": [
      "Category:Erinaceus_europaeus"
    ],
    "intitleQuery": "Erinaceus europaeus",
    "mustMatch": [
      "hedgehog",
      "erinaceus",
      "igel",
      "hérisson"
    ],
    "aiPromptSubject": "Erinaceus europaeus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Erizo Europeo (Erinaceus europaeus)\"."
  },
  {
    "id": "crested-porcupine",
    "name": "Puercoespín Crestado con Largas Púas (Hystrix cristata)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦔",
    "wikiCategories": [
      "Category:Hystrix_cristata"
    ],
    "intitleQuery": "Hystrix cristata",
    "mustMatch": [
      "porcupine",
      "hystrix",
      "stachelschwein",
      "porc-épic"
    ],
    "aiPromptSubject": "Hystrix cristata isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Puercoespín Crestado con Largas Púas (Hystrix cristata)\"."
  },
  {
    "id": "platypus-animal",
    "name": "Ornitorrinco (Ornithorhynchus anatinus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦆",
    "wikiCategories": [
      "Category:Ornithorhynchus_anatinus"
    ],
    "intitleQuery": "Ornithorhynchus anatinus",
    "mustMatch": [
      "platypus",
      "ornithorhynchus",
      "schnabeltier"
    ],
    "aiPromptSubject": "Ornithorhynchus anatinus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ornitorrinco (Ornithorhynchus anatinus)\"."
  },
  {
    "id": "fruit-bat-flying-fox",
    "name": "Zorro Volador o Murciélago (Pteropus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦇",
    "wikiCategories": [
      "Category:Pteropus"
    ],
    "intitleQuery": "Pteropus vampyrus",
    "mustMatch": [
      "pteropus",
      "flying fox",
      "bat",
      "flughund",
      "chauve-souris"
    ],
    "aiPromptSubject": "Pteropus vampyrus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Zorro Volador o Murciélago (Pteropus)\"."
  },
  {
    "id": "silverback-gorilla",
    "name": "Gorila (Gorilla beringei / gorilla)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦍",
    "wikiCategories": [
      "Category:Gorilla_gorilla",
      "Category:Gorilla_beringei"
    ],
    "intitleQuery": "Gorilla gorilla",
    "mustMatch": [
      "gorilla",
      "primate",
      "ape"
    ],
    "aiPromptSubject": "Gorilla gorilla isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gorila (Gorilla beringei / gorilla)\"."
  },
  {
    "id": "chimpanzee",
    "name": "Chimpancé Común (Pan troglodytes)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐒",
    "wikiCategories": [
      "Category:Pan_troglodytes"
    ],
    "intitleQuery": "Pan troglodytes",
    "mustMatch": [
      "chimpanzee",
      "pan troglodytes",
      "schimpanse"
    ],
    "aiPromptSubject": "Pan troglodytes isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Chimpancé Común (Pan troglodytes)\"."
  },
  {
    "id": "orangutan",
    "name": "Orangután de Borneo o Sumatra (Pongo)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦧",
    "wikiCategories": [
      "Category:Pongo_pygmaeus",
      "Category:Pongo_abelii"
    ],
    "intitleQuery": "Pongo pygmaeus",
    "mustMatch": [
      "orangutan",
      "pongo"
    ],
    "aiPromptSubject": "Pongo pygmaeus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Orangután de Borneo o Sumatra (Pongo)\"."
  },
  {
    "id": "mandrill-baboon",
    "name": "Mandril con Rostro Acanalado (Mandrillus sphinx)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐒",
    "wikiCategories": [
      "Category:Mandrillus_sphinx"
    ],
    "intitleQuery": "Mandrillus sphinx",
    "mustMatch": [
      "mandrill",
      "mandrillus",
      "baboon"
    ],
    "aiPromptSubject": "Mandrillus sphinx isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mandril con Rostro Acanalado (Mandrillus sphinx)\"."
  },
  {
    "id": "proboscis-monkey",
    "name": "Mono Narigudo de Borneo (Nasalis larvatus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐒",
    "wikiCategories": [
      "Category:Nasalis_larvatus"
    ],
    "intitleQuery": "Nasalis larvatus",
    "mustMatch": [
      "nasalis",
      "proboscis monkey"
    ],
    "aiPromptSubject": "Nasalis larvatus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mono Narigudo de Borneo (Nasalis larvatus)\"."
  },
  {
    "id": "ring-tailed-lemur",
    "name": "Lémur de Cola Anillada (Lemur catta)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐒",
    "wikiCategories": [
      "Category:Lemur_catta"
    ],
    "intitleQuery": "Lemur catta",
    "mustMatch": [
      "lemur",
      "lemur catta",
      "maki"
    ],
    "aiPromptSubject": "Lemur catta isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lémur de Cola Anillada (Lemur catta)\"."
  },
  {
    "id": "harbor-seal-sea-lion",
    "name": "León Marino o Foca (Zalophus / Phoca)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦭",
    "wikiCategories": [
      "Category:Zalophus_californianus",
      "Category:Phoca_vitulina"
    ],
    "intitleQuery": "Zalophus californianus Phoca vitulina",
    "mustMatch": [
      "sea lion",
      "zalophus",
      "seal",
      "phoca",
      "seelöwe",
      "otarie"
    ],
    "aiPromptSubject": "Zalophus californianus Phoca vitulina isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"León Marino o Foca (Zalophus / Phoca)\"."
  },
  {
    "id": "walrus-odobenus",
    "name": "Morsa con Largos Colmillos (Odobenus rosmarus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦭",
    "wikiCategories": [
      "Category:Odobenus_rosmarus"
    ],
    "intitleQuery": "Odobenus rosmarus",
    "mustMatch": [
      "walrus",
      "odobenus",
      "walross",
      "morse"
    ],
    "aiPromptSubject": "Odobenus rosmarus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Morsa con Largos Colmillos (Odobenus rosmarus)\"."
  },
  {
    "id": "bottlenose-dolphin",
    "name": "Delfín Mular (Tursiops truncatus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐬",
    "wikiCategories": [
      "Category:Tursiops_truncatus"
    ],
    "intitleQuery": "Tursiops truncatus",
    "mustMatch": [
      "dolphin",
      "tursiops",
      "delfin",
      "dauphin"
    ],
    "aiPromptSubject": "Tursiops truncatus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Delfín Mular (Tursiops truncatus)\"."
  },
  {
    "id": "orca-killer-whale",
    "name": "Orca (Orcinus orca)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐋",
    "wikiCategories": [
      "Category:Orcinus_orca"
    ],
    "intitleQuery": "Orcinus orca",
    "mustMatch": [
      "orca",
      "orcinus",
      "killer whale",
      "schwertwal"
    ],
    "aiPromptSubject": "Orcinus orca isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Orca (Orcinus orca)\"."
  },
  {
    "id": "humpback-whale",
    "name": "Ballena Jorobada con Largas Aletas Pectorales (Megaptera)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐋",
    "wikiCategories": [
      "Category:Megaptera_novaeangliae"
    ],
    "intitleQuery": "Megaptera novaeangliae",
    "mustMatch": [
      "humpback whale",
      "megaptera",
      "buckelwal",
      "baleine"
    ],
    "aiPromptSubject": "Megaptera novaeangliae isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ballena Jorobada con Largas Aletas Pectorales (Megaptera)\"."
  },
  {
    "id": "eurasian-eagle-owl",
    "name": "Búho Real (Bubo bubo)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦉",
    "wikiCategories": [
      "Category:Bubo_bubo"
    ],
    "intitleQuery": "Bubo bubo",
    "mustMatch": [
      "owl",
      "bubo",
      "hibou",
      "uhu",
      "eule"
    ],
    "aiPromptSubject": "Bubo bubo isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Búho Real (Bubo bubo)\"."
  },
  {
    "id": "barn-owl",
    "name": "Lechuza Común de Disco Facial Cordiforme (Tyto alba)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦉",
    "wikiCategories": [
      "Category:Tyto_alba"
    ],
    "intitleQuery": "Tyto alba",
    "mustMatch": [
      "barn owl",
      "tyto alba",
      "schleiereule",
      "effraie"
    ],
    "aiPromptSubject": "Tyto alba isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lechuza Común de Disco Facial Cordiforme (Tyto alba)\"."
  },
  {
    "id": "snowy-owl",
    "name": "Búho Nival Blanco (Bubo scandiacus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦉",
    "wikiCategories": [
      "Category:Bubo_scandiacus"
    ],
    "intitleQuery": "Bubo scandiacus",
    "mustMatch": [
      "snowy owl",
      "bubo scandiacus",
      "nyctea",
      "schneeeule"
    ],
    "aiPromptSubject": "Bubo scandiacus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Búho Nival Blanco (Bubo scandiacus)\"."
  },
  {
    "id": "golden-eagle",
    "name": "Águila Real (Aquila chrysaetos)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦅",
    "wikiCategories": [
      "Category:Aquila_chrysaetos"
    ],
    "intitleQuery": "Aquila chrysaetos",
    "mustMatch": [
      "golden eagle",
      "aquila chrysaetos",
      "steinadler",
      "aigle"
    ],
    "aiPromptSubject": "Aquila chrysaetos isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Águila Real (Aquila chrysaetos)\"."
  },
  {
    "id": "bald-eagle",
    "name": "Águila Calva Americana (Haliaeetus leucocephalus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦅",
    "wikiCategories": [
      "Category:Haliaeetus_leucocephalus"
    ],
    "intitleQuery": "Haliaeetus leucocephalus",
    "mustMatch": [
      "bald eagle",
      "haliaeetus",
      "weißkopfseeadler"
    ],
    "aiPromptSubject": "Haliaeetus leucocephalus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Águila Calva Americana (Haliaeetus leucocephalus)\"."
  },
  {
    "id": "harpy-eagle",
    "name": "Águila Harpía con Doble Cresta (Harpia harpyja)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦅",
    "wikiCategories": [
      "Category:Harpia_harpyja"
    ],
    "intitleQuery": "Harpia harpyja",
    "mustMatch": [
      "harpy eagle",
      "harpia harpyja"
    ],
    "aiPromptSubject": "Harpia harpyja isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Águila Harpía con Doble Cresta (Harpia harpyja)\"."
  },
  {
    "id": "peregrine-falcon",
    "name": "Halcón Peregrino (Falco peregrinus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦅",
    "wikiCategories": [
      "Category:Falco_peregrinus"
    ],
    "intitleQuery": "Falco peregrinus",
    "mustMatch": [
      "falcon",
      "falco peregrinus",
      "wanderfalke",
      "faucon"
    ],
    "aiPromptSubject": "Falco peregrinus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Halcón Peregrino (Falco peregrinus)\"."
  },
  {
    "id": "secretarybird",
    "name": "Ave Secretario de Patas Largas y Cresta (Sagittarius serpentarius)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦅",
    "wikiCategories": [
      "Category:Sagittarius_serpentarius"
    ],
    "intitleQuery": "Sagittarius serpentarius",
    "mustMatch": [
      "secretarybird",
      "sagittarius serpentarius"
    ],
    "aiPromptSubject": "Sagittarius serpentarius isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ave Secretario de Patas Largas y Cresta (Sagittarius serpentarius)\"."
  },
  {
    "id": "griffon-vulture",
    "name": "Buitre Leonado o Cóndor Andino (Gyps fulvus / Vultur gryphus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦅",
    "wikiCategories": [
      "Category:Gyps_fulvus",
      "Category:Vultur_gryphus"
    ],
    "intitleQuery": "Gyps fulvus Vultur gryphus",
    "mustMatch": [
      "vulture",
      "gyps",
      "condor",
      "vultur",
      "geier",
      "vautour"
    ],
    "aiPromptSubject": "Gyps fulvus Vultur gryphus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Buitre Leonado o Cóndor Andino (Gyps fulvus / Vultur gryphus)\"."
  },
  {
    "id": "common-raven",
    "name": "Cuervo Común (Corvus corax)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐦‍⬛",
    "wikiCategories": [
      "Category:Corvus_corax"
    ],
    "intitleQuery": "Corvus corax",
    "mustMatch": [
      "raven",
      "corvus corax",
      "kolkrabe",
      "grand corbeau"
    ],
    "aiPromptSubject": "Corvus corax isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cuervo Común (Corvus corax)\"."
  },
  {
    "id": "eurasian-magpie",
    "name": "Urraca Común (Pica pica)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐦",
    "wikiCategories": [
      "Category:Pica_pica"
    ],
    "intitleQuery": "Pica pica",
    "mustMatch": [
      "magpie",
      "pica pica",
      "elster",
      "pie bavarde"
    ],
    "aiPromptSubject": "Pica pica isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Urraca Común (Pica pica)\"."
  },
  {
    "id": "common-kingfisher",
    "name": "Martín Pescador Común (Alcedo atthis)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐦",
    "wikiCategories": [
      "Category:Alcedo_atthis"
    ],
    "intitleQuery": "Alcedo atthis",
    "mustMatch": [
      "kingfisher",
      "alcedo atthis",
      "eisvogel",
      "martin-pêcheur"
    ],
    "aiPromptSubject": "Alcedo atthis isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Martín Pescador Común (Alcedo atthis)\"."
  },
  {
    "id": "european-bee-eater",
    "name": "Abejaruco Europeo (Merops apiaster)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐦",
    "wikiCategories": [
      "Category:Merops_apiaster"
    ],
    "intitleQuery": "Merops apiaster",
    "mustMatch": [
      "bee-eater",
      "merops apiaster",
      "bienenfresser",
      "guêpier"
    ],
    "aiPromptSubject": "Merops apiaster isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Abejaruco Europeo (Merops apiaster)\"."
  },
  {
    "id": "eurasian-hoopoe",
    "name": "Abubilla con Cresta en Abanico (Upupa epops)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐦",
    "wikiCategories": [
      "Category:Upupa_epops"
    ],
    "intitleQuery": "Upupa epops",
    "mustMatch": [
      "hoopoe",
      "upupa epops",
      "wiedehopf",
      "huppe"
    ],
    "aiPromptSubject": "Upupa epops isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Abubilla con Cresta en Abanico (Upupa epops)\"."
  },
  {
    "id": "toco-toucan",
    "name": "Tucán Toco (Ramphastos toco)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦜",
    "wikiCategories": [
      "Category:Ramphastos_toco"
    ],
    "intitleQuery": "Ramphastos toco",
    "mustMatch": [
      "toucan",
      "ramphastos",
      "tukan"
    ],
    "aiPromptSubject": "Ramphastos toco isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tucán Toco (Ramphastos toco)\"."
  },
  {
    "id": "hornbill-buceros",
    "name": "Cálao Bicorne con Casco sobre el Pico (Buceros bicornis)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦜",
    "wikiCategories": [
      "Category:Buceros_bicornis"
    ],
    "intitleQuery": "Buceros bicornis",
    "mustMatch": [
      "hornbill",
      "buceros",
      "nashornvogel",
      "calao"
    ],
    "aiPromptSubject": "Buceros bicornis isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cálao Bicorne con Casco sobre el Pico (Buceros bicornis)\"."
  },
  {
    "id": "scarlet-macaw",
    "name": "Guacamayo Rojo (Ara macao)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦜",
    "wikiCategories": [
      "Category:Ara_macao"
    ],
    "intitleQuery": "Ara macao",
    "mustMatch": [
      "macaw",
      "ara macao",
      "parrot",
      "papagei"
    ],
    "aiPromptSubject": "Ara macao isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Guacamayo Rojo (Ara macao)\"."
  },
  {
    "id": "sulphur-crested-cockatoo",
    "name": "Cacatúa de Cresta Amarilla (Cacatua galerita)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦜",
    "wikiCategories": [
      "Category:Cacatua_galerita"
    ],
    "intitleQuery": "Cacatua galerita",
    "mustMatch": [
      "cockatoo",
      "cacatua",
      "kakadu",
      "cacatoès"
    ],
    "aiPromptSubject": "Cacatua galerita isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cacatúa de Cresta Amarilla (Cacatua galerita)\"."
  },
  {
    "id": "greater-flamingo",
    "name": "Flamenco Rosado (Phoenicopterus roseus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦩",
    "wikiCategories": [
      "Category:Phoenicopterus_roseus"
    ],
    "intitleQuery": "Phoenicopterus roseus",
    "mustMatch": [
      "flamingo",
      "phoenicopterus",
      "flamant"
    ],
    "aiPromptSubject": "Phoenicopterus roseus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Flamenco Rosado (Phoenicopterus roseus)\"."
  },
  {
    "id": "grey-heron",
    "name": "Garza Real (Ardea cinerea)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦢",
    "wikiCategories": [
      "Category:Ardea_cinerea"
    ],
    "intitleQuery": "Ardea cinerea",
    "mustMatch": [
      "heron",
      "ardea cinerea",
      "graureiher",
      "héron"
    ],
    "aiPromptSubject": "Ardea cinerea isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Garza Real (Ardea cinerea)\"."
  },
  {
    "id": "white-stork",
    "name": "Cigüeña Blanca (Ciconia ciconia)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦢",
    "wikiCategories": [
      "Category:Ciconia_ciconia"
    ],
    "intitleQuery": "Ciconia ciconia",
    "mustMatch": [
      "stork",
      "ciconia",
      "weißstorch",
      "cigogne"
    ],
    "aiPromptSubject": "Ciconia ciconia isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cigüeña Blanca (Ciconia ciconia)\"."
  },
  {
    "id": "shoebill-balaeniceps",
    "name": "Picozapato Africano (Balaeniceps rex)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦤",
    "wikiCategories": [
      "Category:Balaeniceps_rex"
    ],
    "intitleQuery": "Balaeniceps rex",
    "mustMatch": [
      "shoebill",
      "balaeniceps",
      "schuhschnabel",
      "bec-en-sabot"
    ],
    "aiPromptSubject": "Balaeniceps rex isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Picozapato Africano (Balaeniceps rex)\"."
  },
  {
    "id": "great-white-pelican",
    "name": "Pelícano (Pelecanus onocrotalus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦤",
    "wikiCategories": [
      "Category:Pelecanus_onocrotalus"
    ],
    "intitleQuery": "Pelecanus onocrotalus",
    "mustMatch": [
      "pelican",
      "pelecanus",
      "pelikan",
      "pélican"
    ],
    "aiPromptSubject": "Pelecanus onocrotalus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pelícano (Pelecanus onocrotalus)\"."
  },
  {
    "id": "mute-swan",
    "name": "Cisne Vulgar (Cygnus olor)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦢",
    "wikiCategories": [
      "Category:Cygnus_olor"
    ],
    "intitleQuery": "Cygnus olor",
    "mustMatch": [
      "swan",
      "cygnus olor",
      "höckerschwan",
      "cygne"
    ],
    "aiPromptSubject": "Cygnus olor isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cisne Vulgar (Cygnus olor)\"."
  },
  {
    "id": "mandarin-duck",
    "name": "Pato Mandarín (Aix galericulata)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦆",
    "wikiCategories": [
      "Category:Aix_galericulata"
    ],
    "intitleQuery": "Aix galericulata",
    "mustMatch": [
      "mandarin duck",
      "aix galericulata",
      "mandarinente"
    ],
    "aiPromptSubject": "Aix galericulata isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pato Mandarín (Aix galericulata)\"."
  },
  {
    "id": "indian-peafowl",
    "name": "Pavo Real (Pavo cristatus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦚",
    "wikiCategories": [
      "Category:Pavo_cristatus"
    ],
    "intitleQuery": "Pavo cristatus",
    "mustMatch": [
      "peacock",
      "peafowl",
      "pavo cristatus",
      "pfau",
      "paon"
    ],
    "aiPromptSubject": "Pavo cristatus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pavo Real (Pavo cristatus)\"."
  },
  {
    "id": "rooster-gallus",
    "name": "Gallo Doméstico con Cresta y Hoces Caudales (Gallus gallus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐓",
    "wikiCategories": [
      "Category:Roosters"
    ],
    "intitleQuery": "Gallus gallus domesticus rooster",
    "mustMatch": [
      "rooster",
      "cock",
      "cockerel",
      "gallus",
      "hahn",
      "coq"
    ],
    "aiPromptSubject": "Gallus gallus domesticus rooster isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gallo Doméstico con Cresta y Hoces Caudales (Gallus gallus)\"."
  },
  {
    "id": "hummingbird-flight",
    "name": "Colibrí en Vuelo (Trochilidae)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐦",
    "wikiCategories": [
      "Category:Trochilidae"
    ],
    "intitleQuery": "Trochilidae hummingbird",
    "mustMatch": [
      "hummingbird",
      "colibri",
      "kolibri",
      "trochilidae"
    ],
    "aiPromptSubject": "Trochilidae hummingbird isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Colibrí en Vuelo (Trochilidae)\"."
  },
  {
    "id": "emperor-penguin",
    "name": "Pingüino Rey o Emperador (Aptenodytes)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐧",
    "wikiCategories": [
      "Category:Aptenodytes_patagonicus",
      "Category:Aptenodytes_forsteri"
    ],
    "intitleQuery": "Aptenodytes patagonicus",
    "mustMatch": [
      "penguin",
      "aptenodytes",
      "pinguin",
      "manchot"
    ],
    "aiPromptSubject": "Aptenodytes patagonicus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pingüino Rey o Emperador (Aptenodytes)\"."
  },
  {
    "id": "atlantic-puffin",
    "name": "Frailecillo Atlántico (Fratercula arctica)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐧",
    "wikiCategories": [
      "Category:Fratercula_arctica"
    ],
    "intitleQuery": "Fratercula arctica",
    "mustMatch": [
      "puffin",
      "fratercula",
      "papageitaucher",
      "macareux"
    ],
    "aiPromptSubject": "Fratercula arctica isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Frailecillo Atlántico (Fratercula arctica)\"."
  },
  {
    "id": "common-ostrich",
    "name": "Avestruz Común (Struthio camelus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦤",
    "wikiCategories": [
      "Category:Struthio_camelus"
    ],
    "intitleQuery": "Struthio camelus",
    "mustMatch": [
      "ostrich",
      "struthio camelus",
      "strauß",
      "autruche"
    ],
    "aiPromptSubject": "Struthio camelus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Avestruz Común (Struthio camelus)\"."
  },
  {
    "id": "southern-cassowary",
    "name": "Casuario con Casco Córneo (Casuarius casuarius)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦤",
    "wikiCategories": [
      "Category:Casuarius_casuarius"
    ],
    "intitleQuery": "Casuarius casuarius",
    "mustMatch": [
      "cassowary",
      "casuarius",
      "kasuar"
    ],
    "aiPromptSubject": "Casuarius casuarius isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Casuario con Casco Córneo (Casuarius casuarius)\"."
  },
  {
    "id": "veiled-chameleon",
    "name": "Camaleón Velado (Chamaeleo calyptratus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦎",
    "wikiCategories": [
      "Category:Chamaeleo_calyptratus"
    ],
    "intitleQuery": "Chamaeleo calyptratus",
    "mustMatch": [
      "chameleon",
      "chamaeleo",
      "chamäleon",
      "caméléon"
    ],
    "aiPromptSubject": "Chamaeleo calyptratus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Camaleón Velado (Chamaeleo calyptratus)\"."
  },
  {
    "id": "green-iguana",
    "name": "Iguana Verde (Iguana iguana)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦎",
    "wikiCategories": [
      "Category:Iguana_iguana"
    ],
    "intitleQuery": "Iguana iguana",
    "mustMatch": [
      "iguana",
      "lizard",
      "reptile"
    ],
    "aiPromptSubject": "Iguana iguana isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Iguana Verde (Iguana iguana)\"."
  },
  {
    "id": "frilled-neck-lizard",
    "name": "Clamidosaurio con Collar Desplegado (Chlamydosaurus kingii)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦎",
    "wikiCategories": [
      "Category:Chlamydosaurus_kingii"
    ],
    "intitleQuery": "Chlamydosaurus kingii",
    "mustMatch": [
      "chlamydosaurus",
      "frilled lizard"
    ],
    "aiPromptSubject": "Chlamydosaurus kingii isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Clamidosaurio con Collar Desplegado (Chlamydosaurus kingii)\"."
  },
  {
    "id": "komodo-dragon",
    "name": "Dragón de Komodo (Varanus komodoensis)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦎",
    "wikiCategories": [
      "Category:Varanus_komodoensis"
    ],
    "intitleQuery": "Varanus komodoensis",
    "mustMatch": [
      "komodo dragon",
      "varanus komodoensis",
      "waran"
    ],
    "aiPromptSubject": "Varanus komodoensis isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Dragón de Komodo (Varanus komodoensis)\"."
  },
  {
    "id": "nile-crocodile",
    "name": "Cocodrilo del Nilo (Crocodylus niloticus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐊",
    "wikiCategories": [
      "Category:Crocodylus_niloticus"
    ],
    "intitleQuery": "Crocodylus niloticus",
    "mustMatch": [
      "crocodile",
      "crocodylus",
      "krokodil"
    ],
    "aiPromptSubject": "Crocodylus niloticus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cocodrilo del Nilo (Crocodylus niloticus)\"."
  },
  {
    "id": "green-sea-turtle",
    "name": "Tortuga Marina Verde (Chelonia mydas)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐢",
    "wikiCategories": [
      "Category:Chelonia_mydas"
    ],
    "intitleQuery": "Chelonia mydas",
    "mustMatch": [
      "sea turtle",
      "chelonia mydas",
      "schildkröte",
      "tortue"
    ],
    "aiPromptSubject": "Chelonia mydas isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tortuga Marina Verde (Chelonia mydas)\"."
  },
  {
    "id": "galapagos-tortoise",
    "name": "Tortuga Gigante de Galápagos (Chelonoidis nigra)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐢",
    "wikiCategories": [
      "Category:Chelonoidis_nigra"
    ],
    "intitleQuery": "Chelonoidis nigra",
    "mustMatch": [
      "tortoise",
      "chelonoidis",
      "galapagos"
    ],
    "aiPromptSubject": "Chelonoidis nigra isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tortuga Gigante de Galápagos (Chelonoidis nigra)\"."
  },
  {
    "id": "king-cobra-snake",
    "name": "Cobra con Capucha Desplegada (Naja naja / Ophiophagus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐍",
    "wikiCategories": [
      "Category:Naja_naja",
      "Category:Ophiophagus_hannah"
    ],
    "intitleQuery": "Naja naja cobra",
    "mustMatch": [
      "cobra",
      "naja",
      "ophiophagus",
      "snake"
    ],
    "aiPromptSubject": "Naja naja cobra isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cobra con Capucha Desplegada (Naja naja / Ophiophagus)\"."
  },
  {
    "id": "green-tree-python",
    "name": "Pitón Arborícola Verde Enrollada en Rama (Morelia viridis)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐍",
    "wikiCategories": [
      "Category:Morelia_viridis"
    ],
    "intitleQuery": "Morelia viridis",
    "mustMatch": [
      "morelia viridis",
      "green tree python",
      "python"
    ],
    "aiPromptSubject": "Morelia viridis isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pitón Arborícola Verde Enrollada en Rama (Morelia viridis)\"."
  },
  {
    "id": "red-eyed-tree-frog",
    "name": "Rana Arbórea de Ojos Rojos (Agalychnis callidryas)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐸",
    "wikiCategories": [
      "Category:Agalychnis_callidryas"
    ],
    "intitleQuery": "Agalychnis callidryas",
    "mustMatch": [
      "frog",
      "agalychnis",
      "tree frog"
    ],
    "aiPromptSubject": "Agalychnis callidryas isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rana Arbórea de Ojos Rojos (Agalychnis callidryas)\"."
  },
  {
    "id": "fire-salamander",
    "name": "Salamandra Común Negra y Amarilla (Salamandra salamandra)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦎",
    "wikiCategories": [
      "Category:Salamandra_salamandra"
    ],
    "intitleQuery": "Salamandra salamandra",
    "mustMatch": [
      "salamander",
      "salamandra",
      "feuersalamander"
    ],
    "aiPromptSubject": "Salamandra salamandra isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Salamandra Común Negra y Amarilla (Salamandra salamandra)\"."
  },
  {
    "id": "axolotl-ambystoma",
    "name": "Ajolote Mexicano con Branquias Externas (Ambystoma mexicanum)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦎",
    "wikiCategories": [
      "Category:Ambystoma_mexicanum"
    ],
    "intitleQuery": "Ambystoma mexicanum",
    "mustMatch": [
      "axolotl",
      "ambystoma mexicanum"
    ],
    "aiPromptSubject": "Ambystoma mexicanum isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ajolote Mexicano con Branquias Externas (Ambystoma mexicanum)\"."
  },
  {
    "id": "great-white-shark",
    "name": "Tiburón Blanco o Tiburón Martillo (Carcharodon / Sphyrna)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦈",
    "wikiCategories": [
      "Category:Carcharodon_carcharias",
      "Category:Sphyrnidae"
    ],
    "intitleQuery": "Carcharodon carcharias Sphyrna",
    "mustMatch": [
      "shark",
      "carcharodon",
      "sphyrna",
      "hammerhead",
      "hai",
      "requin"
    ],
    "aiPromptSubject": "Carcharodon carcharias Sphyrna isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tiburón Blanco o Tiburón Martillo (Carcharodon / Sphyrna)\"."
  },
  {
    "id": "manta-ray",
    "name": "Mantarraya Nadando (Mobula birostris)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐟",
    "wikiCategories": [
      "Category:Mobula_birostris"
    ],
    "intitleQuery": "Mobula birostris Manta",
    "mustMatch": [
      "manta ray",
      "mobula",
      "manta"
    ],
    "aiPromptSubject": "Mobula birostris Manta isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mantarraya Nadando (Mobula birostris)\"."
  },
  {
    "id": "seahorse",
    "name": "Caballito de Mar (Hippocampus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐠",
    "wikiCategories": [
      "Category:Hippocampus"
    ],
    "intitleQuery": "Hippocampus seahorse",
    "mustMatch": [
      "seahorse",
      "hippocampus",
      "seepferdchen",
      "hippocampe"
    ],
    "aiPromptSubject": "Hippocampus seahorse isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caballito de Mar (Hippocampus)\"."
  },
  {
    "id": "lionfish",
    "name": "Pez León (Pterois volitans)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐠",
    "wikiCategories": [
      "Category:Pterois_volitans"
    ],
    "intitleQuery": "Pterois volitans",
    "mustMatch": [
      "lionfish",
      "pterois",
      "rotfeuerfisch"
    ],
    "aiPromptSubject": "Pterois volitans isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pez León (Pterois volitans)\"."
  },
  {
    "id": "koi-carp",
    "name": "Carpa Koi Japonesa (Cyprinus rubrofuscus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐟",
    "wikiCategories": [
      "Category:Koi"
    ],
    "intitleQuery": "Cyprinus rubrofuscus koi",
    "mustMatch": [
      "koi",
      "carp",
      "cyprinus"
    ],
    "aiPromptSubject": "Cyprinus rubrofuscus koi isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Carpa Koi Japonesa (Cyprinus rubrofuscus)\"."
  },
  {
    "id": "common-octopus",
    "name": "Pulpo Común (Octopus vulgaris)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐙",
    "wikiCategories": [
      "Category:Octopus_vulgaris"
    ],
    "intitleQuery": "Octopus vulgaris",
    "mustMatch": [
      "octopus",
      "cephalopod",
      "pieuvre",
      "krake"
    ],
    "aiPromptSubject": "Octopus vulgaris isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pulpo Común (Octopus vulgaris)\"."
  },
  {
    "id": "common-cuttlefish",
    "name": "Sepia o Jibia (Sepia officinalis)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦑",
    "wikiCategories": [
      "Category:Sepia_officinalis"
    ],
    "intitleQuery": "Sepia officinalis",
    "mustMatch": [
      "cuttlefish",
      "sepia officinalis",
      "seiche"
    ],
    "aiPromptSubject": "Sepia officinalis isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sepia o Jibia (Sepia officinalis)\"."
  },
  {
    "id": "moon-jellyfish",
    "name": "Medusa (Chrysaora / Aurelia)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🪼",
    "wikiCategories": [
      "Category:Chrysaora",
      "Category:Aurelia_aurita"
    ],
    "intitleQuery": "Chrysaora jellyfish",
    "mustMatch": [
      "jellyfish",
      "chrysaora",
      "aurelia",
      "medusa",
      "qualle",
      "méduse"
    ],
    "aiPromptSubject": "Chrysaora jellyfish isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Medusa (Chrysaora / Aurelia)\"."
  },
  {
    "id": "edible-crab",
    "name": "Buey de Mar o Cangrejo (Cancer pagurus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦀",
    "wikiCategories": [
      "Category:Cancer_pagurus"
    ],
    "intitleQuery": "Cancer pagurus",
    "mustMatch": [
      "crab",
      "cancer pagurus",
      "taschenkrebs",
      "tourteau"
    ],
    "aiPromptSubject": "Cancer pagurus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Buey de Mar o Cangrejo (Cancer pagurus)\"."
  },
  {
    "id": "hermit-crab",
    "name": "Cangrejo Ermitaño en Caracola (Paguroidea)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐚",
    "wikiCategories": [
      "Category:Pagurus_bernhardus",
      "Category:Coenobita"
    ],
    "intitleQuery": "Pagurus bernhardus Coenobita",
    "mustMatch": [
      "hermit crab",
      "pagurus",
      "coenobita",
      "einsiedlerkrebs"
    ],
    "aiPromptSubject": "Pagurus bernhardus Coenobita isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cangrejo Ermitaño en Caracola (Paguroidea)\"."
  },
  {
    "id": "european-lobster",
    "name": "Bogavante con Grandes Pinzas (Homarus gammarus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦞",
    "wikiCategories": [
      "Category:Homarus_gammarus"
    ],
    "intitleQuery": "Homarus gammarus",
    "mustMatch": [
      "lobster",
      "homarus",
      "hummer",
      "homard"
    ],
    "aiPromptSubject": "Homarus gammarus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bogavante con Grandes Pinzas (Homarus gammarus)\"."
  },
  {
    "id": "peacock-mantis-shrimp",
    "name": "Camarón Mantis (Odontodactylus scyllarus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦐",
    "wikiCategories": [
      "Category:Odontodactylus_scyllarus"
    ],
    "intitleQuery": "Odontodactylus scyllarus",
    "mustMatch": [
      "mantis shrimp",
      "odontodactylus",
      "fangschreckenkrebs"
    ],
    "aiPromptSubject": "Odontodactylus scyllarus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Camarón Mantis (Odontodactylus scyllarus)\"."
  },
  {
    "id": "rhinoceros-beetle",
    "name": "Escarabajo Rinoceronte o Hércules (Dynastes)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🪲",
    "wikiCategories": [
      "Category:Dynastes_hercules",
      "Category:Oryctes_nasicornis"
    ],
    "intitleQuery": "Dynastes hercules Oryctes nasicornis",
    "mustMatch": [
      "dynastes",
      "oryctes",
      "rhinoceros beetle",
      "hercules beetle",
      "käfer"
    ],
    "aiPromptSubject": "Dynastes hercules Oryctes nasicornis isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Escarabajo Rinoceronte o Hércules (Dynastes)\"."
  },
  {
    "id": "stag-beetle",
    "name": "Ciervo Volante con Mandíbulas (Lucanus cervus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🪲",
    "wikiCategories": [
      "Category:Lucanus_cervus"
    ],
    "intitleQuery": "Lucanus cervus",
    "mustMatch": [
      "lucanus cervus",
      "stag beetle",
      "hirschkäfer",
      "lucane"
    ],
    "aiPromptSubject": "Lucanus cervus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ciervo Volante con Mandíbulas (Lucanus cervus)\"."
  },
  {
    "id": "praying-mantis",
    "name": "Mantis Religiosa (Mantis religiosa)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦗",
    "wikiCategories": [
      "Category:Mantis_religiosa"
    ],
    "intitleQuery": "Mantis religiosa",
    "mustMatch": [
      "mantis religiosa",
      "praying mantis",
      "gottesanbeterin",
      "mante"
    ],
    "aiPromptSubject": "Mantis religiosa isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mantis Religiosa (Mantis religiosa)\"."
  },
  {
    "id": "dragonfly-macro",
    "name": "Libélula (Anisoptera / Libellula)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "蜻",
    "wikiCategories": [
      "Category:Libellula_depressa",
      "Category:Aeshna_cyanea"
    ],
    "intitleQuery": "Libellula depressa Aeshna",
    "mustMatch": [
      "dragonfly",
      "libellula",
      "aeshna",
      "libelle"
    ],
    "aiPromptSubject": "Libellula depressa Aeshna isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Libélula (Anisoptera / Libellula)\"."
  },
  {
    "id": "monarch-butterfly",
    "name": "Mariposa Monarca (Danaus plexippus)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦋",
    "wikiCategories": [
      "Category:Danaus_plexippus"
    ],
    "intitleQuery": "Danaus plexippus",
    "mustMatch": [
      "danaus plexippus",
      "monarch butterfly"
    ],
    "aiPromptSubject": "Danaus plexippus isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mariposa Monarca (Danaus plexippus)\"."
  },
  {
    "id": "luna-moth-atlas",
    "name": "Mariposa Nocturna Luna o Atlas (Actias luna / Attacus atlas)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦋",
    "wikiCategories": [
      "Category:Actias_luna",
      "Category:Attacus_atlas"
    ],
    "intitleQuery": "Actias luna Attacus atlas",
    "mustMatch": [
      "actias luna",
      "attacus atlas",
      "luna moth",
      "atlas moth"
    ],
    "aiPromptSubject": "Actias luna Attacus atlas isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mariposa Nocturna Luna o Atlas (Actias luna / Attacus atlas)\"."
  },
  {
    "id": "honeybee-macro",
    "name": "Abeja Melífera en Macro (Apis mellifera)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐝",
    "wikiCategories": [
      "Category:Apis_mellifera"
    ],
    "intitleQuery": "Apis mellifera",
    "mustMatch": [
      "apis mellifera",
      "honey bee",
      "honigbiene",
      "abeille"
    ],
    "aiPromptSubject": "Apis mellifera isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Abeja Melífera en Macro (Apis mellifera)\"."
  },
  {
    "id": "emperor-scorpion",
    "name": "Escorpión Emperador (Pandinus imperator)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🦂",
    "wikiCategories": [
      "Category:Pandinus_imperator"
    ],
    "intitleQuery": "Pandinus imperator",
    "mustMatch": [
      "pandinus imperator",
      "scorpion",
      "skorpion"
    ],
    "aiPromptSubject": "Pandinus imperator isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Escorpión Emperador (Pandinus imperator)\"."
  },
  {
    "id": "mexican-redknee-tarantula",
    "name": "Tarántula de Rodillas Rojas (Brachypelma hamorii)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🕷️",
    "wikiCategories": [
      "Category:Brachypelma_hamorii",
      "Category:Brachypelma_smithi"
    ],
    "intitleQuery": "Brachypelma hamorii smithi",
    "mustMatch": [
      "brachypelma",
      "tarantula",
      "vogelspinne",
      "mygale"
    ],
    "aiPromptSubject": "Brachypelma hamorii smithi isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tarántula de Rodillas Rojas (Brachypelma hamorii)\"."
  },
  {
    "id": "roman-snail",
    "name": "Caracol Romano con Concha Espiral (Helix pomatia)",
    "category": "animales",
    "categoryLabel": "Animales y Fauna",
    "icon": "🐌",
    "wikiCategories": [
      "Category:Helix_pomatia"
    ],
    "intitleQuery": "Helix pomatia",
    "mustMatch": [
      "helix pomatia",
      "snail",
      "weinbergschnecke",
      "escargot"
    ],
    "aiPromptSubject": "Helix pomatia isolated studio reference object",
    "tip": "Anatomía y gesto animal: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caracol Romano con Concha Espiral (Helix pomatia)\"."
  },
  {
    "id": "bonsai-pine",
    "name": "Árbol Bonsái en Maceta",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪴",
    "wikiCategories": [
      "Category:Bonsai"
    ],
    "intitleQuery": "bonsai tree",
    "mustMatch": [
      "bonsai",
      "penjing"
    ],
    "aiPromptSubject": "bonsai tree isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Árbol Bonsái en Maceta\"."
  },
  {
    "id": "ancient-olive-trunk",
    "name": "Tronco Nergudo de Olivo Milenario",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌳",
    "wikiCategories": [
      "Category:Ancient_olive_trees"
    ],
    "intitleQuery": "ancient olive tree trunk",
    "mustMatch": [
      "olive",
      "trunk",
      "olea",
      "olivenbaum",
      "olivier"
    ],
    "aiPromptSubject": "ancient olive tree trunk isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tronco Nergudo de Olivo Milenario\"."
  },
  {
    "id": "baobab-tree",
    "name": "Árbol Baobab Africano (Adansonia digitata)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌳",
    "wikiCategories": [
      "Category:Adansonia_digitata"
    ],
    "intitleQuery": "Adansonia digitata",
    "mustMatch": [
      "baobab",
      "adansonia"
    ],
    "aiPromptSubject": "Adansonia digitata isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Árbol Baobab Africano (Adansonia digitata)\"."
  },
  {
    "id": "banyan-aerial-roots",
    "name": "Raíces Aéreas Entrelazadas de Ficus / Banyan",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌳",
    "wikiCategories": [
      "Category:Banyan_trees",
      "Category:Aerial_roots"
    ],
    "intitleQuery": "Ficus benghalensis roots",
    "mustMatch": [
      "banyan",
      "ficus",
      "aerial roots",
      "roots"
    ],
    "aiPromptSubject": "Ficus benghalensis roots isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Raíces Aéreas Entrelazadas de Ficus / Banyan\"."
  },
  {
    "id": "dragon-blood-tree",
    "name": "Árbol Sangre de Dragón de Socotra (Dracaena cinnabari)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌳",
    "wikiCategories": [
      "Category:Dracaena_cinnabari"
    ],
    "intitleQuery": "Dracaena cinnabari",
    "mustMatch": [
      "dracaena cinnabari",
      "dragon blood tree"
    ],
    "aiPromptSubject": "Dracaena cinnabari isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Árbol Sangre de Dragón de Socotra (Dracaena cinnabari)\"."
  },
  {
    "id": "amanita-mushroom",
    "name": "Seta Amanita muscaria (Sombrero, Láminas y Anillo)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🍄",
    "wikiCategories": [
      "Category:Amanita_muscaria"
    ],
    "intitleQuery": "Amanita muscaria",
    "mustMatch": [
      "amanita muscaria",
      "fly agaric",
      "fliegenpilz"
    ],
    "aiPromptSubject": "Amanita muscaria isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Seta Amanita muscaria (Sombrero, Láminas y Anillo)\"."
  },
  {
    "id": "boletus-porcini",
    "name": "Hongo Boletus edulis (Tallo Bulbo y Poros)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🍄",
    "wikiCategories": [
      "Category:Boletus_edulis"
    ],
    "intitleQuery": "Boletus edulis",
    "mustMatch": [
      "boletus edulis",
      "cep",
      "porcini",
      "steinpilz"
    ],
    "aiPromptSubject": "Boletus edulis isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hongo Boletus edulis (Tallo Bulbo y Poros)\"."
  },
  {
    "id": "morel-mushroom",
    "name": "Hongo Colmenilla con Sombrero Alveolado (Morchella)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🍄",
    "wikiCategories": [
      "Category:Morchella_esculenta"
    ],
    "intitleQuery": "Morchella esculenta",
    "mustMatch": [
      "morchella",
      "morel",
      "morchel",
      "morille"
    ],
    "aiPromptSubject": "Morchella esculenta isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hongo Colmenilla con Sombrero Alveolado (Morchella)\"."
  },
  {
    "id": "chanterelle-mushroom",
    "name": "Seta Rebozuelo con Pliegues Decurrentes (Cantharellus cibarius)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🍄",
    "wikiCategories": [
      "Category:Cantharellus_cibarius"
    ],
    "intitleQuery": "Cantharellus cibarius",
    "mustMatch": [
      "cantharellus",
      "chanterelle",
      "pfifferling",
      "girolle"
    ],
    "aiPromptSubject": "Cantharellus cibarius isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Seta Rebozuelo con Pliegues Decurrentes (Cantharellus cibarius)\"."
  },
  {
    "id": "bracket-polypore-fungi",
    "name": "Hongos Yesqueros en Repisa sobre Tronco (Fomes / Trametes)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🍄",
    "wikiCategories": [
      "Category:Trametes_versicolor",
      "Category:Fomes_fomentarius"
    ],
    "intitleQuery": "Trametes versicolor Fomes fomentarius",
    "mustMatch": [
      "trametes",
      "fomes",
      "polypore",
      "bracket fungus"
    ],
    "aiPromptSubject": "Trametes versicolor Fomes fomentarius isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hongos Yesqueros en Repisa sobre Tronco (Fomes / Trametes)\"."
  },
  {
    "id": "nautilus-shell",
    "name": "Concha de Nautilus (Entera o en Corte Espiral)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🐚",
    "wikiCategories": [
      "Category:Nautilus_shells"
    ],
    "intitleQuery": "Nautilus shell",
    "mustMatch": [
      "nautilus",
      "shell",
      "chambered nautilus"
    ],
    "aiPromptSubject": "Nautilus shell isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Concha de Nautilus (Entera o en Corte Espiral)\"."
  },
  {
    "id": "murex-shell",
    "name": "Caracola Marina Espinosa (Bolinus / Chicoreus Murex)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🐚",
    "wikiCategories": [
      "Category:Muricidae_shells",
      "Category:Bolinus_brandaris"
    ],
    "intitleQuery": "Murex shell Bolinus",
    "mustMatch": [
      "murex",
      "bolinus",
      "chicoreus",
      "shell",
      "muricidae"
    ],
    "aiPromptSubject": "Murex shell Bolinus isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caracola Marina Espinosa (Bolinus / Chicoreus Murex)\"."
  },
  {
    "id": "conch-strombus-shell",
    "name": "Caracola Reina o Tritón (Strombus / Charonia)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🐚",
    "wikiCategories": [
      "Category:Charonia_tritonis",
      "Category:Aliger_gigas"
    ],
    "intitleQuery": "Charonia tritonis Strombus gigas",
    "mustMatch": [
      "charonia",
      "strombus",
      "aliger",
      "conch",
      "triton",
      "shell"
    ],
    "aiPromptSubject": "Charonia tritonis Strombus gigas isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caracola Reina o Tritón (Strombus / Charonia)\"."
  },
  {
    "id": "scallop-pecten-shell",
    "name": "Concha de Vieira Estriada (Pecten jacobaeus)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🐚",
    "wikiCategories": [
      "Category:Pecten_jacobaeus",
      "Category:Pectinidae_shells"
    ],
    "intitleQuery": "Pecten jacobaeus shell",
    "mustMatch": [
      "pecten",
      "scallop",
      "shell",
      "jakobsmuschel",
      "coquille"
    ],
    "aiPromptSubject": "Pecten jacobaeus shell isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Concha de Vieira Estriada (Pecten jacobaeus)\"."
  },
  {
    "id": "cowrie-cypraea-shell",
    "name": "Concha de Porcelana o Cauri (Cypraea tigris)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🐚",
    "wikiCategories": [
      "Category:Cypraea_tigris",
      "Category:Cypraeidae_shells"
    ],
    "intitleQuery": "Cypraea tigris shell",
    "mustMatch": [
      "cypraea",
      "cowrie",
      "cowry",
      "shell"
    ],
    "aiPromptSubject": "Cypraea tigris shell isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Concha de Porcelana o Cauri (Cypraea tigris)\"."
  },
  {
    "id": "giant-clam-tridacna",
    "name": "Almeja Gigante con Bordes Ondulados (Tridacna gigas)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🐚",
    "wikiCategories": [
      "Category:Tridacna_gigas"
    ],
    "intitleQuery": "Tridacna gigas shell",
    "mustMatch": [
      "tridacna",
      "giant clam",
      "shell"
    ],
    "aiPromptSubject": "Tridacna gigas shell isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Almeja Gigante con Bordes Ondulados (Tridacna gigas)\"."
  },
  {
    "id": "sea-urchin-test",
    "name": "Caparazón Calcáreo Simétrico de Erizo de Mar (Echinoidea)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🟣",
    "wikiCategories": [
      "Category:Sea_urchin_tests"
    ],
    "intitleQuery": "sea urchin test shell",
    "mustMatch": [
      "sea urchin",
      "test",
      "echinoidea",
      "seeigel",
      "oursin"
    ],
    "aiPromptSubject": "sea urchin test shell isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caparazón Calcáreo Simétrico de Erizo de Mar (Echinoidea)\"."
  },
  {
    "id": "starfish-asterias",
    "name": "Estrella de Mar de Cinco Brazos (Asteroidea)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "⭐",
    "wikiCategories": [
      "Category:Asterias_rubens",
      "Category:Oreaster_reticulatus"
    ],
    "intitleQuery": "Asterias rubens Oreaster",
    "mustMatch": [
      "starfish",
      "asterias",
      "oreaster",
      "seestern",
      "étoile de mer"
    ],
    "aiPromptSubject": "Asterias rubens Oreaster isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Estrella de Mar de Cinco Brazos (Asteroidea)\"."
  },
  {
    "id": "brain-coral",
    "name": "Coral Cerebro (Diploria labyrinthiformis)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪸",
    "wikiCategories": [
      "Category:Diploria_labyrinthiformis",
      "Category:Brain_corals"
    ],
    "intitleQuery": "Diploria labyrinthiformis",
    "mustMatch": [
      "diploria",
      "brain coral",
      "coral",
      "hirnkoralle"
    ],
    "aiPromptSubject": "Diploria labyrinthiformis isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Coral Cerebro (Diploria labyrinthiformis)\"."
  },
  {
    "id": "echeveria-succulent",
    "name": "Roseta de Suculenta (Echeveria elegans)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌵",
    "wikiCategories": [
      "Category:Echeveria_elegans",
      "Category:Echeveria"
    ],
    "intitleQuery": "Echeveria elegans",
    "mustMatch": [
      "echeveria",
      "succulent",
      "rosette"
    ],
    "aiPromptSubject": "Echeveria elegans isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Roseta de Suculenta (Echeveria elegans)\"."
  },
  {
    "id": "aloe-vera-plant",
    "name": "Planta de Aloe Vera (Hojas Carnosas Dentadas)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪴",
    "wikiCategories": [
      "Category:Aloe_vera"
    ],
    "intitleQuery": "Aloe vera",
    "mustMatch": [
      "aloe vera",
      "aloe"
    ],
    "aiPromptSubject": "Aloe vera isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Planta de Aloe Vera (Hojas Carnosas Dentadas)\"."
  },
  {
    "id": "agave-americana",
    "name": "Agave Azul en Roseta Espinosa (Agave americana)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌵",
    "wikiCategories": [
      "Category:Agave_americana"
    ],
    "intitleQuery": "Agave americana",
    "mustMatch": [
      "agave",
      "maguey",
      "century plant"
    ],
    "aiPromptSubject": "Agave americana isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Agave Azul en Roseta Espinosa (Agave americana)\"."
  },
  {
    "id": "barrel-cactus",
    "name": "Cactus Asiento de Suegra Esférico (Kroenleinia grusonii)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌵",
    "wikiCategories": [
      "Category:Echinocactus_grusonii"
    ],
    "intitleQuery": "Echinocactus grusonii",
    "mustMatch": [
      "echinocactus",
      "grusonii",
      "barrel cactus",
      "schwiegermutterstuhl"
    ],
    "aiPromptSubject": "Echinocactus grusonii isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cactus Asiento de Suegra Esférico (Kroenleinia grusonii)\"."
  },
  {
    "id": "prickly-pear-opuntia",
    "name": "Cactus Chumbera o Nopal (Opuntia ficus-indica)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌵",
    "wikiCategories": [
      "Category:Opuntia_ficus-indica"
    ],
    "intitleQuery": "Opuntia ficus-indica",
    "mustMatch": [
      "opuntia",
      "prickly pear",
      "nopal",
      "feigenkaktus"
    ],
    "aiPromptSubject": "Opuntia ficus-indica isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cactus Chumbera o Nopal (Opuntia ficus-indica)\"."
  },
  {
    "id": "saguaro-cactus",
    "name": "Cactus Saguaro Columnar con Brazos (Carnegiea gigantea)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌵",
    "wikiCategories": [
      "Category:Carnegiea_gigantea"
    ],
    "intitleQuery": "Carnegiea gigantea",
    "mustMatch": [
      "carnegiea",
      "saguaro",
      "cactus"
    ],
    "aiPromptSubject": "Carnegiea gigantea isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cactus Saguaro Columnar con Brazos (Carnegiea gigantea)\"."
  },
  {
    "id": "living-stones-lithops",
    "name": "Plantas Piedra (Lithops)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪨",
    "wikiCategories": [
      "Category:Lithops"
    ],
    "intitleQuery": "Lithops",
    "mustMatch": [
      "lithops",
      "living stones"
    ],
    "aiPromptSubject": "Lithops isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Plantas Piedra (Lithops)\"."
  },
  {
    "id": "pine-cone-open",
    "name": "Piña de Pino Abierta (Cono de Pinus)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌲",
    "wikiCategories": [
      "Category:Pine_cones"
    ],
    "intitleQuery": "pine cone Pinus",
    "mustMatch": [
      "pine cone",
      "pinus",
      "zapfen",
      "cône"
    ],
    "aiPromptSubject": "pine cone Pinus isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Piña de Pino Abierta (Cono de Pinus)\"."
  },
  {
    "id": "oak-acorns-leaf",
    "name": "Bellotas con Cúpula y Hoja de Roble (Quercus robur)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌰",
    "wikiCategories": [
      "Category:Acorns"
    ],
    "intitleQuery": "Quercus robur acorn",
    "mustMatch": [
      "acorn",
      "quercus",
      "oak",
      "eichel",
      "gland"
    ],
    "aiPromptSubject": "Quercus robur acorn isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bellotas con Cúpula y Hoja de Roble (Quercus robur)\"."
  },
  {
    "id": "sweet-chestnut-burr",
    "name": "Castañas en su Erizo Espinoso Abierto (Castanea sativa)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌰",
    "wikiCategories": [
      "Category:Castanea_sativa_fruits"
    ],
    "intitleQuery": "Castanea sativa fruit",
    "mustMatch": [
      "castanea",
      "chestnut",
      "kastanie",
      "châtaigne"
    ],
    "aiPromptSubject": "Castanea sativa fruit isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Castañas en su Erizo Espinoso Abierto (Castanea sativa)\"."
  },
  {
    "id": "walnut-shell-half",
    "name": "Nuez con Cáscara Rugosa Abierta a la Mitad (Juglans regia)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🥜",
    "wikiCategories": [
      "Category:Walnuts"
    ],
    "intitleQuery": "Juglans regia walnut",
    "mustMatch": [
      "walnut",
      "juglans",
      "walnuss",
      "noix"
    ],
    "aiPromptSubject": "Juglans regia walnut isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Nuez con Cáscara Rugosa Abierta a la Mitad (Juglans regia)\"."
  },
  {
    "id": "lotus-seed-pod",
    "name": "Cápsula de Semillas de Loto (Nelumbo nucifera)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪷",
    "wikiCategories": [
      "Category:Nelumbo_nucifera_fruits"
    ],
    "intitleQuery": "Nelumbo nucifera seed pod",
    "mustMatch": [
      "nelumbo",
      "lotus",
      "seed pod",
      "seedhead"
    ],
    "aiPromptSubject": "Nelumbo nucifera seed pod isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cápsula de Semillas de Loto (Nelumbo nucifera)\"."
  },
  {
    "id": "poppy-seed-capsule",
    "name": "Cápsula Coronada de Amapola (Papaver somniferum)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌱",
    "wikiCategories": [
      "Category:Papaver_somniferum_capsules"
    ],
    "intitleQuery": "Papaver somniferum capsule",
    "mustMatch": [
      "papaver",
      "poppy",
      "capsule",
      "seedhead",
      "mohnkapsel"
    ],
    "aiPromptSubject": "Papaver somniferum capsule isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cápsula Coronada de Amapola (Papaver somniferum)\"."
  },
  {
    "id": "dandelion-clock-seedhead",
    "name": "Esfera de Semillas de Diente de León (Taraxacum)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌼",
    "wikiCategories": [
      "Category:Taraxacum_seedheads"
    ],
    "intitleQuery": "Taraxacum seedhead",
    "mustMatch": [
      "taraxacum",
      "dandelion",
      "pusteblume",
      "pissenlit"
    ],
    "aiPromptSubject": "Taraxacum seedhead isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Esfera de Semillas de Diente de León (Taraxacum)\"."
  },
  {
    "id": "physalis-chinese-lantern",
    "name": "Alquejenje o Farolillo Chino (Physalis alkekengi)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🏮",
    "wikiCategories": [
      "Category:Physalis_alkekengi"
    ],
    "intitleQuery": "Physalis alkekengi",
    "mustMatch": [
      "physalis",
      "alkekengi",
      "lampionblume",
      "amour-en-cage"
    ],
    "aiPromptSubject": "Physalis alkekengi isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Alquejenje o Farolillo Chino (Physalis alkekengi)\"."
  },
  {
    "id": "phalaenopsis-orchid",
    "name": "Flor de Orquídea (Phalaenopsis)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌺",
    "wikiCategories": [
      "Category:Phalaenopsis"
    ],
    "intitleQuery": "Phalaenopsis flower",
    "mustMatch": [
      "orchid",
      "phalaenopsis",
      "orchidee",
      "orchidée"
    ],
    "aiPromptSubject": "Phalaenopsis flower isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Flor de Orquídea (Phalaenopsis)\"."
  },
  {
    "id": "cattleya-slipper-orchid",
    "name": "Orquídea Zapatito de Dama (Paphiopedilum / Cypripedium)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌺",
    "wikiCategories": [
      "Category:Paphiopedilum",
      "Category:Cypripedium_calceolus"
    ],
    "intitleQuery": "Paphiopedilum Cypripedium",
    "mustMatch": [
      "paphiopedilum",
      "cypripedium",
      "slipper orchid",
      "frauenschuh"
    ],
    "aiPromptSubject": "Paphiopedilum Cypripedium isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Orquídea Zapatito de Dama (Paphiopedilum / Cypripedium)\"."
  },
  {
    "id": "rose-flower-bloom",
    "name": "Rosa Abierta en Capas de Pétalos (Rosa)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌹",
    "wikiCategories": [
      "Category:Roses_close-ups"
    ],
    "intitleQuery": "Rosa flower closeup",
    "mustMatch": [
      "rose",
      "rosa",
      "petals",
      "bloom"
    ],
    "aiPromptSubject": "Rosa flower closeup isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rosa Abierta en Capas de Pétalos (Rosa)\"."
  },
  {
    "id": "sunflower-head",
    "name": "Girasol (Helianthus annuus)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌻",
    "wikiCategories": [
      "Category:Helianthus_annuus_flowers"
    ],
    "intitleQuery": "Helianthus annuus flower",
    "mustMatch": [
      "sunflower",
      "helianthus",
      "sonnenblume",
      "tournesol"
    ],
    "aiPromptSubject": "Helianthus annuus flower isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Girasol (Helianthus annuus)\"."
  },
  {
    "id": "sacred-lotus-flower",
    "name": "Flor de Loto Sagrado (Nelumbo nucifera)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪷",
    "wikiCategories": [
      "Category:Nelumbo_nucifera_flowers"
    ],
    "intitleQuery": "Nelumbo nucifera flower",
    "mustMatch": [
      "nelumbo",
      "lotus flower",
      "lotus"
    ],
    "aiPromptSubject": "Nelumbo nucifera flower isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Flor de Loto Sagrado (Nelumbo nucifera)\"."
  },
  {
    "id": "water-lily-nymphaea",
    "name": "Nenúfar Flotante (Nymphaea alba)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪷",
    "wikiCategories": [
      "Category:Nymphaea_alba"
    ],
    "intitleQuery": "Nymphaea alba flower",
    "mustMatch": [
      "nymphaea",
      "water lily",
      "seerose",
      "nénuphar"
    ],
    "aiPromptSubject": "Nymphaea alba flower isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Nenúfar Flotante (Nymphaea alba)\"."
  },
  {
    "id": "bird-of-paradise-flower",
    "name": "Flor Ave del Paraíso (Strelitzia reginae)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌺",
    "wikiCategories": [
      "Category:Strelitzia_reginae"
    ],
    "intitleQuery": "Strelitzia reginae",
    "mustMatch": [
      "strelitzia",
      "bird of paradise"
    ],
    "aiPromptSubject": "Strelitzia reginae isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Flor Ave del Paraíso (Strelitzia reginae)\"."
  },
  {
    "id": "passion-flower",
    "name": "Flor de la Pasión (Passiflora caerulea)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌸",
    "wikiCategories": [
      "Category:Passiflora_caerulea"
    ],
    "intitleQuery": "Passiflora caerulea",
    "mustMatch": [
      "passiflora",
      "passion flower",
      "passionsblume"
    ],
    "aiPromptSubject": "Passiflora caerulea isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Flor de la Pasión (Passiflora caerulea)\"."
  },
  {
    "id": "protea-king-flower",
    "name": "Protea Rey Sudafricana (Protea cynaroides)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌺",
    "wikiCategories": [
      "Category:Protea_cynaroides"
    ],
    "intitleQuery": "Protea cynaroides",
    "mustMatch": [
      "protea",
      "cynaroides",
      "king protea"
    ],
    "aiPromptSubject": "Protea cynaroides isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Protea Rey Sudafricana (Protea cynaroides)\"."
  },
  {
    "id": "calla-lily-zantedeschia",
    "name": "Cala o Alcatraz (Espata en Espiral de Zantedeschia)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌷",
    "wikiCategories": [
      "Category:Zantedeschia_aethiopica"
    ],
    "intitleQuery": "Zantedeschia aethiopica",
    "mustMatch": [
      "zantedeschia",
      "calla lily",
      "arum"
    ],
    "aiPromptSubject": "Zantedeschia aethiopica isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cala o Alcatraz (Espata en Espiral de Zantedeschia)\"."
  },
  {
    "id": "bearded-iris-flower",
    "name": "Lirio o Iris Barbado con Pétalos Caídos y Erguidos",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "⚜️",
    "wikiCategories": [
      "Category:Iris_germanica"
    ],
    "intitleQuery": "Iris germanica flower",
    "mustMatch": [
      "iris germanica",
      "iris",
      "schwertlilie"
    ],
    "aiPromptSubject": "Iris germanica flower isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Lirio o Iris Barbado con Pétalos Caídos y Erguidos\"."
  },
  {
    "id": "hibiscus-flower",
    "name": "Flor de Hibisco con Pistilo Sobresaliente (Hibiscus rosa-sinensis)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌺",
    "wikiCategories": [
      "Category:Hibiscus_rosa-sinensis"
    ],
    "intitleQuery": "Hibiscus rosa-sinensis",
    "mustMatch": [
      "hibiscus",
      "hibiskus"
    ],
    "aiPromptSubject": "Hibiscus rosa-sinensis isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Flor de Hibisco con Pistilo Sobresaliente (Hibiscus rosa-sinensis)\"."
  },
  {
    "id": "thistle-flower-spiny",
    "name": "Flor de Cardo Espinoso (Onopordum / Cirsium)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌿",
    "wikiCategories": [
      "Category:Onopordum_acanthium",
      "Category:Cirsium_vulgare"
    ],
    "intitleQuery": "Onopordum acanthium Cirsium",
    "mustMatch": [
      "thistle",
      "onopordum",
      "cirsium",
      "carduus",
      "distel",
      "chardon"
    ],
    "aiPromptSubject": "Onopordum acanthium Cirsium isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Flor de Cardo Espinoso (Onopordum / Cirsium)\"."
  },
  {
    "id": "venus-flytrap",
    "name": "Venus Atrapamoscas (Dionaea muscipula)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪴",
    "wikiCategories": [
      "Category:Dionaea_muscipula"
    ],
    "intitleQuery": "Dionaea muscipula",
    "mustMatch": [
      "dionaea",
      "venus flytrap",
      "fliegenfalle"
    ],
    "aiPromptSubject": "Dionaea muscipula isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Venus Atrapamoscas (Dionaea muscipula)\"."
  },
  {
    "id": "nepenthes-pitcher-plant",
    "name": "Planta Jarra Carnívora Colgante (Nepenthes)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪴",
    "wikiCategories": [
      "Category:Nepenthes"
    ],
    "intitleQuery": "Nepenthes pitcher",
    "mustMatch": [
      "nepenthes",
      "pitcher plant",
      "kannenpflanze"
    ],
    "aiPromptSubject": "Nepenthes pitcher isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Planta Jarra Carnívora Colgante (Nepenthes)\"."
  },
  {
    "id": "sarracenia-trumpet-pitcher",
    "name": "Planta Trompeta Carnívora (Sarracenia purpurea / flava)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪴",
    "wikiCategories": [
      "Category:Sarracenia_flava",
      "Category:Sarracenia_purpurea"
    ],
    "intitleQuery": "Sarracenia flava purpurea",
    "mustMatch": [
      "sarracenia",
      "pitcher plant",
      "schlauchpflanze"
    ],
    "aiPromptSubject": "Sarracenia flava purpurea isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Planta Trompeta Carnívora (Sarracenia purpurea / flava)\"."
  },
  {
    "id": "monstera-leaf",
    "name": "Hoja Fenestrada de Monstera Deliciosa",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌿",
    "wikiCategories": [
      "Category:Monstera_deliciosa"
    ],
    "intitleQuery": "Monstera deliciosa leaf",
    "mustMatch": [
      "monstera",
      "leaf",
      "blatt",
      "feuille"
    ],
    "aiPromptSubject": "Monstera deliciosa leaf isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hoja Fenestrada de Monstera Deliciosa\"."
  },
  {
    "id": "fiddlehead-fern",
    "name": "Fronda de Helecho Desenrollándose en Espiral",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🌿",
    "wikiCategories": [
      "Category:Fiddlehead_ferns"
    ],
    "intitleQuery": "fiddlehead fern",
    "mustMatch": [
      "fiddlehead",
      "fern",
      "frond",
      "crosier",
      "farn"
    ],
    "aiPromptSubject": "fiddlehead fern isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Fronda de Helecho Desenrollándose en Espiral\"."
  },
  {
    "id": "ginkgo-biloba-leaves",
    "name": "Hojas en Abanico de Ginkgo Biloba",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🍂",
    "wikiCategories": [
      "Category:Ginkgo_biloba_leaves"
    ],
    "intitleQuery": "Ginkgo biloba leaf",
    "mustMatch": [
      "ginkgo",
      "ginkgo biloba",
      "leaf"
    ],
    "aiPromptSubject": "Ginkgo biloba leaf isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hojas en Abanico de Ginkgo Biloba\"."
  },
  {
    "id": "japanese-maple-leaf",
    "name": "Hoja Palmeada de Arce Japonés (Acer palmatum)",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🍁",
    "wikiCategories": [
      "Category:Acer_palmatum_leaves"
    ],
    "intitleQuery": "Acer palmatum leaf",
    "mustMatch": [
      "acer palmatum",
      "maple leaf",
      "ahornblatt"
    ],
    "aiPromptSubject": "Acer palmatum leaf isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hoja Palmeada de Arce Japonés (Acer palmatum)\"."
  },
  {
    "id": "artichoke-globe",
    "name": "Alcachofa (Cynara scolymus)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🥬",
    "wikiCategories": [
      "Category:Cynara_scolymus"
    ],
    "intitleQuery": "Cynara scolymus",
    "mustMatch": [
      "artichoke",
      "cynara",
      "artischocke",
      "artichaut"
    ],
    "aiPromptSubject": "Cynara scolymus isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Alcachofa (Cynara scolymus)\"."
  },
  {
    "id": "romanesco-broccoli",
    "name": "Romanesco (Espiral Fractal de Fibonacci)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🥦",
    "wikiCategories": [
      "Category:Romanesco_broccoli"
    ],
    "intitleQuery": "Romanesco broccoli",
    "mustMatch": [
      "romanesco",
      "fractal",
      "brassica"
    ],
    "aiPromptSubject": "Romanesco broccoli isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Romanesco (Espiral Fractal de Fibonacci)\"."
  },
  {
    "id": "open-pomegranate",
    "name": "Granada Abierta con Granos (Punica granatum)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍎",
    "wikiCategories": [
      "Category:Pomegranates"
    ],
    "intitleQuery": "Punica granatum fruit",
    "mustMatch": [
      "pomegranate",
      "punica",
      "granatapfel",
      "grenade"
    ],
    "aiPromptSubject": "Punica granatum fruit isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Granada Abierta con Granos (Punica granatum)\"."
  },
  {
    "id": "sliced-fig-fruit",
    "name": "Higo Fresco Entero y Cortado a la Mitad (Ficus carica)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🫐",
    "wikiCategories": [
      "Category:Figs"
    ],
    "intitleQuery": "Ficus carica fig fruit",
    "mustMatch": [
      "fig",
      "ficus carica",
      "feige",
      "figue"
    ],
    "aiPromptSubject": "Ficus carica fig fruit isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Higo Fresco Entero y Cortado a la Mitad (Ficus carica)\"."
  },
  {
    "id": "pineapple-ananas",
    "name": "Piña Tropical con Corona de Hojas (Ananas comosus)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍍",
    "wikiCategories": [
      "Category:Pineapples"
    ],
    "intitleQuery": "Ananas comosus fruit",
    "mustMatch": [
      "pineapple",
      "ananas"
    ],
    "aiPromptSubject": "Ananas comosus fruit isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Piña Tropical con Corona de Hojas (Ananas comosus)\"."
  },
  {
    "id": "dragon-fruit-pitaya",
    "name": "Pitahaya o Fruta del Dragón con Brácteas Curvas",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🐉",
    "wikiCategories": [
      "Category:Pitaya"
    ],
    "intitleQuery": "pitaya dragon fruit",
    "mustMatch": [
      "pitaya",
      "pitahaya",
      "dragon fruit",
      "hylocereus"
    ],
    "aiPromptSubject": "pitaya dragon fruit isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pitahaya o Fruta del Dragón con Brácteas Curvas\"."
  },
  {
    "id": "starfruit-carambola",
    "name": "Carambola o Fruta Estrella (Averrhoa carambola)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "⭐",
    "wikiCategories": [
      "Category:Carambola"
    ],
    "intitleQuery": "Averrhoa carambola fruit",
    "mustMatch": [
      "carambola",
      "starfruit",
      "averrhoa",
      "sternfrucht"
    ],
    "aiPromptSubject": "Averrhoa carambola fruit isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Carambola o Fruta Estrella (Averrhoa carambola)\"."
  },
  {
    "id": "ribbed-pumpkin-gourd",
    "name": "Calabaza Acostillada con Pedúnculo Retorcido (Cucurbita)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🎃",
    "wikiCategories": [
      "Category:Pumpkins",
      "Category:Gourds"
    ],
    "intitleQuery": "Cucurbita pepo pumpkin gourd",
    "mustMatch": [
      "pumpkin",
      "gourd",
      "squash",
      "cucurbita",
      "kürbis",
      "citrouille"
    ],
    "aiPromptSubject": "Cucurbita pepo pumpkin gourd isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Calabaza Acostillada con Pedúnculo Retorcido (Cucurbita)\"."
  },
  {
    "id": "bell-pepper-sliced",
    "name": "Pimiento Morrón Entero y en Corte Transversal",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🫑",
    "wikiCategories": [
      "Category:Bell_peppers"
    ],
    "intitleQuery": "Capsicum annuum bell pepper",
    "mustMatch": [
      "bell pepper",
      "capsicum",
      "paprika",
      "poivron"
    ],
    "aiPromptSubject": "Capsicum annuum bell pepper isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pimiento Morrón Entero y en Corte Transversal\"."
  },
  {
    "id": "garlic-bulb",
    "name": "Cabeza de Ajo con Dientes y Pieles (Allium sativum)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🧄",
    "wikiCategories": [
      "Category:Garlic_bulbs"
    ],
    "intitleQuery": "Allium sativum bulb",
    "mustMatch": [
      "garlic",
      "allium sativum",
      "knoblauch",
      "ail"
    ],
    "aiPromptSubject": "Allium sativum bulb isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cabeza de Ajo con Dientes y Pieles (Allium sativum)\"."
  },
  {
    "id": "ginger-rhizome",
    "name": "Rizoma Nudoso de Jengibre (Zingiber officinale)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🫚",
    "wikiCategories": [
      "Category:Ginger"
    ],
    "intitleQuery": "ginger rhizome root",
    "mustMatch": [
      "ginger",
      "zingiber",
      "rhizome",
      "ingwer",
      "gingembre"
    ],
    "aiPromptSubject": "ginger rhizome root isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rizoma Nudoso de Jengibre (Zingiber officinale)\"."
  },
  {
    "id": "quartz-crystal-cluster",
    "name": "Drusa de Cristales Hexagonales de Cuarzo Hialino",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "💎",
    "wikiCategories": [
      "Category:Quartz_crystals"
    ],
    "intitleQuery": "quartz crystal cluster",
    "mustMatch": [
      "quartz",
      "crystal",
      "mineral",
      "quarzkristall",
      "cuarzo"
    ],
    "aiPromptSubject": "quartz crystal cluster isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Drusa de Cristales Hexagonales de Cuarzo Hialino\"."
  },
  {
    "id": "amethyst-geode",
    "name": "Geoda de Amatista Abierta",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🔮",
    "wikiCategories": [
      "Category:Amethyst"
    ],
    "intitleQuery": "amethyst geode crystal",
    "mustMatch": [
      "amethyst",
      "geode",
      "crystal",
      "mineral"
    ],
    "aiPromptSubject": "amethyst geode crystal isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Geoda de Amatista Abierta\"."
  },
  {
    "id": "pyrite-cubic-crystals",
    "name": "Pirita Cúbica Metálica Natural",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🪨",
    "wikiCategories": [
      "Category:Pyrite"
    ],
    "intitleQuery": "pyrite cubic crystal",
    "mustMatch": [
      "pyrite",
      "crystal",
      "cube",
      "mineral"
    ],
    "aiPromptSubject": "pyrite cubic crystal isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pirita Cúbica Metálica Natural\"."
  },
  {
    "id": "desert-rose-gypsum",
    "name": "Rosa del Desierto (Cristales Lenticulares de Yeso o Barita)",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🏜️",
    "wikiCategories": [
      "Category:Desert_roses"
    ],
    "intitleQuery": "desert rose crystal gypsum",
    "mustMatch": [
      "desert rose",
      "gypsum",
      "baryte",
      "sandrose"
    ],
    "aiPromptSubject": "desert rose crystal gypsum isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rosa del Desierto (Cristales Lenticulares de Yeso o Barita)\"."
  },
  {
    "id": "bismuth-hopper-crystal",
    "name": "Cristal Escalonado de Bismuto (Geometría Laberíntica)",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "💎",
    "wikiCategories": [
      "Category:Bismuth_crystals"
    ],
    "intitleQuery": "bismuth crystal hopper",
    "mustMatch": [
      "bismuth",
      "crystal",
      "hopper"
    ],
    "aiPromptSubject": "bismuth crystal hopper isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cristal Escalonado de Bismuto (Geometría Laberíntica)\"."
  },
  {
    "id": "ammonite-fossil",
    "name": "Fósil de Ammonites en Espiral",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🐚",
    "wikiCategories": [
      "Category:Ammonoidea_fossils",
      "Category:Ammonites"
    ],
    "intitleQuery": "Ammonoidea fossil",
    "mustMatch": [
      "ammonite",
      "ammonoidea",
      "fossil"
    ],
    "aiPromptSubject": "Ammonoidea fossil isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Fósil de Ammonites en Espiral\"."
  },
  {
    "id": "trilobite-fossil",
    "name": "Fósil Segmentado de Trilobites",
    "category": "naturaleza",
    "categoryLabel": "Naturaleza y Botánica",
    "icon": "🪨",
    "wikiCategories": [
      "Category:Trilobita_fossils"
    ],
    "intitleQuery": "Trilobita fossil",
    "mustMatch": [
      "trilobite",
      "trilobita",
      "fossil"
    ],
    "aiPromptSubject": "Trilobita fossil isolated studio reference object",
    "tip": "Botánica y formas orgánicas: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Fósil Segmentado de Trilobites\"."
  },
  {
    "id": "violin-instrument",
    "name": "Violín Clásico (Voluta y Efes)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎻",
    "wikiCategories": [
      "Category:Violins"
    ],
    "intitleQuery": "violin instrument",
    "mustMatch": [
      "violin",
      "stradivari",
      "fiddle",
      "geige",
      "violon"
    ],
    "aiPromptSubject": "violin instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Violín Clásico (Voluta y Efes)\"."
  },
  {
    "id": "cello-instrument",
    "name": "Violonchelo con Pica y Arco",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎻",
    "wikiCategories": [
      "Category:Cellos"
    ],
    "intitleQuery": "cello violoncello",
    "mustMatch": [
      "cello",
      "violoncello",
      "violoncelle"
    ],
    "aiPromptSubject": "cello violoncello isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Violonchelo con Pica y Arco\"."
  },
  {
    "id": "acoustic-guitar",
    "name": "Guitarra Clásica o Acústica",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎸",
    "wikiCategories": [
      "Category:Classical_guitars",
      "Category:Acoustic_guitars"
    ],
    "intitleQuery": "classical guitar acoustic",
    "mustMatch": [
      "guitar",
      "gitarre",
      "guitare"
    ],
    "aiPromptSubject": "classical guitar acoustic isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Guitarra Clásica o Acústica\"."
  },
  {
    "id": "electric-guitar",
    "name": "Guitarra Eléctrica (Fender Stratocaster / Gibson Les Paul)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎸",
    "wikiCategories": [
      "Category:Fender_Stratocaster",
      "Category:Gibson_Les_Paul"
    ],
    "intitleQuery": "electric guitar Fender Gibson",
    "mustMatch": [
      "stratocaster",
      "les paul",
      "telecaster",
      "fender",
      "gibson",
      "guitar"
    ],
    "aiPromptSubject": "electric guitar Fender Gibson isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Guitarra Eléctrica (Fender Stratocaster / Gibson Les Paul)\"."
  },
  {
    "id": "renaissance-lute",
    "name": "Laúd Renacentista de Caja Abombada",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🪕",
    "wikiCategories": [
      "Category:Lutes"
    ],
    "intitleQuery": "renaissance lute instrument",
    "mustMatch": [
      "lute",
      "oud",
      "laute",
      "luth"
    ],
    "aiPromptSubject": "renaissance lute instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Laúd Renacentista de Caja Abombada\"."
  },
  {
    "id": "neapolitan-mandolin",
    "name": "Mandolina Napolitana o Americana",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🪕",
    "wikiCategories": [
      "Category:Mandolins"
    ],
    "intitleQuery": "mandolin instrument",
    "mustMatch": [
      "mandolin",
      "mandoline"
    ],
    "aiPromptSubject": "mandolin instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mandolina Napolitana o Americana\"."
  },
  {
    "id": "five-string-banjo",
    "name": "Banjo Circular con Parche y Tensores Metálicos",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🪕",
    "wikiCategories": [
      "Category:Banjos"
    ],
    "intitleQuery": "banjo instrument",
    "mustMatch": [
      "banjo"
    ],
    "aiPromptSubject": "banjo instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Banjo Circular con Parche y Tensores Metálicos\"."
  },
  {
    "id": "concert-harp",
    "name": "Arpa de Concierto de Pedales",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎵",
    "wikiCategories": [
      "Category:Pedal_harps",
      "Category:Harps"
    ],
    "intitleQuery": "pedal harp instrument",
    "mustMatch": [
      "harp",
      "harfe",
      "harpe"
    ],
    "aiPromptSubject": "pedal harp instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Arpa de Concierto de Pedales\"."
  },
  {
    "id": "hurdy-gurdy-vielle",
    "name": "Zanfona Medieval con Manivela y Teclado (Hurdy-Gurdy)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎻",
    "wikiCategories": [
      "Category:Hurdy-gurdies"
    ],
    "intitleQuery": "hurdy-gurdy instrument",
    "mustMatch": [
      "hurdy-gurdy",
      "vielle à roue",
      "drehleier",
      "zanfona"
    ],
    "aiPromptSubject": "hurdy-gurdy instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Zanfona Medieval con Manivela y Teclado (Hurdy-Gurdy)\"."
  },
  {
    "id": "sitar-indian",
    "name": "Sitar Indio con Resonador de Calabaza y Trastes Curvos",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🪕",
    "wikiCategories": [
      "Category:Sitars"
    ],
    "intitleQuery": "sitar instrument",
    "mustMatch": [
      "sitar"
    ],
    "aiPromptSubject": "sitar instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sitar Indio con Resonador de Calabaza y Trastes Curvos\"."
  },
  {
    "id": "grand-piano",
    "name": "Piano de Cola con Tapa Abierta",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🎹",
    "wikiCategories": [
      "Category:Grand_pianos"
    ],
    "intitleQuery": "grand piano",
    "mustMatch": [
      "piano",
      "steinway",
      "bösendorfer",
      "flügel"
    ],
    "aiPromptSubject": "grand piano isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Piano de Cola con Tapa Abierta\"."
  },
  {
    "id": "accordion-bellows",
    "name": "Acordeón o Bandoneón con Fuelle en Abanico",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🪗",
    "wikiCategories": [
      "Category:Accordions",
      "Category:Bandoneons"
    ],
    "intitleQuery": "accordion bandoneon",
    "mustMatch": [
      "accordion",
      "bandoneon",
      "concertina",
      "akkordeon",
      "accordéon"
    ],
    "aiPromptSubject": "accordion bandoneon isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Acordeón o Bandoneón con Fuelle en Abanico\"."
  },
  {
    "id": "alto-saxophone",
    "name": "Saxofón de Latón Dorado",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎷",
    "wikiCategories": [
      "Category:Alto_saxophones",
      "Category:Tenor_saxophones"
    ],
    "intitleQuery": "alto saxophone",
    "mustMatch": [
      "saxophone",
      "saxophon",
      "selmer"
    ],
    "aiPromptSubject": "alto saxophone isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Saxofón de Latón Dorado\"."
  },
  {
    "id": "brass-trumpet",
    "name": "Trompeta de Tres Pistones",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎺",
    "wikiCategories": [
      "Category:Trumpets"
    ],
    "intitleQuery": "trumpet brass instrument",
    "mustMatch": [
      "trumpet",
      "cornet",
      "trompete",
      "trompette"
    ],
    "aiPromptSubject": "trumpet brass instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Trompeta de Tres Pistones\"."
  },
  {
    "id": "slide-trombone",
    "name": "Trombón de Varas de Latón",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎺",
    "wikiCategories": [
      "Category:Trombones"
    ],
    "intitleQuery": "trombone instrument",
    "mustMatch": [
      "trombone",
      "posaune"
    ],
    "aiPromptSubject": "trombone instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Trombón de Varas de Latón\"."
  },
  {
    "id": "french-horn",
    "name": "Trompa o Corno Francés (Tubos Circulares y Rotores)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "📯",
    "wikiCategories": [
      "Category:French_horns"
    ],
    "intitleQuery": "French horn instrument",
    "mustMatch": [
      "french horn",
      "horn",
      "waldhorn",
      "cor d'harmonie"
    ],
    "aiPromptSubject": "French horn instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Trompa o Corno Francés (Tubos Circulares y Rotores)\"."
  },
  {
    "id": "tuba-sousaphone",
    "name": "Tuba o Bombardino de Grandes Tubos Cónicos",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎺",
    "wikiCategories": [
      "Category:Tubas",
      "Category:Euphoniums"
    ],
    "intitleQuery": "tuba euphonium instrument",
    "mustMatch": [
      "tuba",
      "euphonium",
      "sousaphone"
    ],
    "aiPromptSubject": "tuba euphonium instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tuba o Bombardino de Grandes Tubos Cónicos\"."
  },
  {
    "id": "clarinet-oboe",
    "name": "Clarinete u Oboe de Madera de Granadilla con Llaves",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🪈",
    "wikiCategories": [
      "Category:Clarinets",
      "Category:Oboes"
    ],
    "intitleQuery": "clarinet oboe instrument",
    "mustMatch": [
      "clarinet",
      "oboe",
      "klarinette",
      "clarinette",
      "hautbois"
    ],
    "aiPromptSubject": "clarinet oboe instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Clarinete u Oboe de Madera de Granadilla con Llaves\"."
  },
  {
    "id": "bassoon-fagotto",
    "name": "Fagot con Tudel Metálico en S",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🪈",
    "wikiCategories": [
      "Category:Bassoons"
    ],
    "intitleQuery": "bassoon instrument",
    "mustMatch": [
      "bassoon",
      "fagott",
      "basson"
    ],
    "aiPromptSubject": "bassoon instrument isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Fagot con Tudel Metálico en S\"."
  },
  {
    "id": "bagpipes-scottish",
    "name": "Gaita con Roncones Torneados y Puntero",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎶",
    "wikiCategories": [
      "Category:Bagpipes"
    ],
    "intitleQuery": "bagpipes",
    "mustMatch": [
      "bagpipe",
      "dudelsack",
      "cornemuse",
      "gaita"
    ],
    "aiPromptSubject": "bagpipes isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gaita con Roncones Torneados y Puntero\"."
  },
  {
    "id": "snare-drum-kit",
    "name": "Tambor Redoblante o Caja con Tensores Metálicos",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🥁",
    "wikiCategories": [
      "Category:Snare_drums"
    ],
    "intitleQuery": "snare drum",
    "mustMatch": [
      "snare drum",
      "drum",
      "trommel",
      "caisse claire"
    ],
    "aiPromptSubject": "snare drum isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tambor Redoblante o Caja con Tensores Metálicos\"."
  },
  {
    "id": "gramophone-horn",
    "name": "Gramófono Antiguo con Gran Bocina de Latón",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📻",
    "wikiCategories": [
      "Category:Gramophones"
    ],
    "intitleQuery": "gramophone phonograph horn",
    "mustMatch": [
      "gramophone",
      "phonograph",
      "victrola",
      "grammophon"
    ],
    "aiPromptSubject": "gramophone phonograph horn isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gramófono Antiguo con Gran Bocina de Latón\"."
  },
  {
    "id": "mechanical-typewriter",
    "name": "Máquina de Escribir Mecánica Antigua (Underwood / Olivetti)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "⌨️",
    "wikiCategories": [
      "Category:Typewriters"
    ],
    "intitleQuery": "vintage typewriter",
    "mustMatch": [
      "typewriter",
      "underwood",
      "olivetti",
      "remington",
      "schreibmaschine"
    ],
    "aiPromptSubject": "vintage typewriter isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Máquina de Escribir Mecánica Antigua (Underwood / Olivetti)\"."
  },
  {
    "id": "morse-telegraph-key",
    "name": "Manipulador Telegráfico Morse de Latón",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📠",
    "wikiCategories": [
      "Category:Telegraph_keys"
    ],
    "intitleQuery": "telegraph key Morse",
    "mustMatch": [
      "telegraph",
      "morse key",
      "taster",
      "manipulateur"
    ],
    "aiPromptSubject": "telegraph key Morse isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Manipulador Telegráfico Morse de Latón\"."
  },
  {
    "id": "mechanical-calculator-curta",
    "name": "Calculadora Mecánica de Manivela (Brunsviga / Curta)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🧮",
    "wikiCategories": [
      "Category:Mechanical_calculators",
      "Category:Pinwheel_calculators"
    ],
    "intitleQuery": "mechanical calculator pinwheel",
    "mustMatch": [
      "calculator",
      "brunsviga",
      "odher",
      "curta",
      "rechenmaschine"
    ],
    "aiPromptSubject": "mechanical calculator pinwheel isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Calculadora Mecánica de Manivela (Brunsviga / Curta)\"."
  },
  {
    "id": "antique-cash-register",
    "name": "Caja Registradora Antigua de Bronce (National)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📠",
    "wikiCategories": [
      "Category:Cash_registers"
    ],
    "intitleQuery": "antique cash register National",
    "mustMatch": [
      "cash register",
      "national",
      "registrierkasse",
      "caisse"
    ],
    "aiPromptSubject": "antique cash register National isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Caja Registradora Antigua de Bronce (National)\"."
  },
  {
    "id": "brass-sextant",
    "name": "Sextante Marino de Latón con Espejos y Filtros",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🧭",
    "wikiCategories": [
      "Category:Sextants"
    ],
    "intitleQuery": "nautical sextant brass",
    "mustMatch": [
      "sextant",
      "octant",
      "navigation"
    ],
    "aiPromptSubject": "nautical sextant brass isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sextante Marino de Latón con Espejos y Filtros\"."
  },
  {
    "id": "planispheric-astrolabe",
    "name": "Astrolabio Planisférico Árabe o Renacentista",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🧭",
    "wikiCategories": [
      "Category:Astrolabes"
    ],
    "intitleQuery": "astrolabe brass",
    "mustMatch": [
      "astrolabe",
      "astrolabium"
    ],
    "aiPromptSubject": "astrolabe brass isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Astrolabio Planisférico Árabe o Renacentista\"."
  },
  {
    "id": "armillary-sphere",
    "name": "Esfera Armilar de Anillos Astronómicos",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🌐",
    "wikiCategories": [
      "Category:Armillary_spheres"
    ],
    "intitleQuery": "armillary sphere",
    "mustMatch": [
      "armillary sphere",
      "armillary",
      "armillarsphäre",
      "sphère armillaire"
    ],
    "aiPromptSubject": "armillary sphere isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Esfera Armilar de Anillos Astronómicos\"."
  },
  {
    "id": "theodolite-survey",
    "name": "Teodolito Topográfico de Latón sobre Trípode",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🔭",
    "wikiCategories": [
      "Category:Theodolites"
    ],
    "intitleQuery": "theodolite brass",
    "mustMatch": [
      "theodolite",
      "survey",
      "theodolit",
      "théodolite"
    ],
    "aiPromptSubject": "theodolite brass isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Teodolito Topográfico de Latón sobre Trípode\"."
  },
  {
    "id": "antique-microscope",
    "name": "Microscopio Monocular Antiguo de Latón",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🔬",
    "wikiCategories": [
      "Category:Antique_microscopes"
    ],
    "intitleQuery": "antique brass microscope",
    "mustMatch": [
      "microscope",
      "mikroskop",
      "zeiss",
      "leitz"
    ],
    "aiPromptSubject": "antique brass microscope isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Microscopio Monocular Antiguo de Latón\"."
  },
  {
    "id": "refracting-telescope",
    "name": "Telescopio Refractor de Latón en Montura Ecuatorial",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🔭",
    "wikiCategories": [
      "Category:Refracting_telescopes"
    ],
    "intitleQuery": "brass telescope refracting",
    "mustMatch": [
      "telescope",
      "refractor",
      "fernrohr",
      "télescope"
    ],
    "aiPromptSubject": "brass telescope refracting isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Telescopio Refractor de Latón en Montura Ecuatorial\"."
  },
  {
    "id": "ship-binnacle",
    "name": "Bitácora Marina con Esferas de Hierro Dulce",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🧭",
    "wikiCategories": [
      "Category:Binnacles"
    ],
    "intitleQuery": "ship binnacle brass",
    "mustMatch": [
      "binnacle",
      "compass",
      "habitacle",
      "nautical"
    ],
    "aiPromptSubject": "ship binnacle brass isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bitácora Marina con Esferas de Hierro Dulce\"."
  },
  {
    "id": "stirling-steam-engine",
    "name": "Motor de Vapor o Motor Stirling de Volante y Pistón",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⚙️",
    "wikiCategories": [
      "Category:Stirling_engines",
      "Category:Model_steam_engines"
    ],
    "intitleQuery": "model steam engine Stirling",
    "mustMatch": [
      "steam engine",
      "stirling engine",
      "flywheel",
      "dampfmaschine"
    ],
    "aiPromptSubject": "model steam engine Stirling isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Motor de Vapor o Motor Stirling de Volante y Pistón\"."
  },
  {
    "id": "pocket-watch-movement",
    "name": "Mecanismo de Relojería Abierto (Engranajes y Volante)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⚙️",
    "wikiCategories": [
      "Category:Watch_movements",
      "Category:Clockworks"
    ],
    "intitleQuery": "watch movement gears",
    "mustMatch": [
      "movement",
      "clockwork",
      "gears",
      "watch",
      "uhrwerk",
      "horlogerie"
    ],
    "aiPromptSubject": "watch movement gears isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Mecanismo de Relojería Abierto (Engranajes y Volante)\"."
  },
  {
    "id": "steam-locomotive",
    "name": "Locomotora de Vapor Clásica",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚂",
    "wikiCategories": [
      "Category:Steam_locomotives"
    ],
    "intitleQuery": "steam locomotive train",
    "mustMatch": [
      "locomotive",
      "steam",
      "dampflok",
      "train"
    ],
    "aiPromptSubject": "steam locomotive train isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Locomotora de Vapor Clásica\"."
  },
  {
    "id": "vintage-tram-streetcar",
    "name": "Tranvía Histórico de Madera y Hierro",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚋",
    "wikiCategories": [
      "Category:Historic_trams"
    ],
    "intitleQuery": "vintage tram streetcar",
    "mustMatch": [
      "tram",
      "streetcar",
      "straßenbahn",
      "tramway"
    ],
    "aiPromptSubject": "vintage tram streetcar isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tranvía Histórico de Madera y Hierro\"."
  },
  {
    "id": "1930s-vintage-car",
    "name": "Automóvil Clásico Años 1930 (Radiador y Guardabarros Curvos)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚗",
    "wikiCategories": [
      "Category:1930s_automobiles",
      "Category:Bugatti_automobiles"
    ],
    "intitleQuery": "1930s vintage car",
    "mustMatch": [
      "automobile",
      "vintage car",
      "bugatti",
      "mercedes",
      "rolls-royce",
      "oldtimer"
    ],
    "aiPromptSubject": "1930s vintage car isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Automóvil Clásico Años 1930 (Radiador y Guardabarros Curvos)\"."
  },
  {
    "id": "volkswagen-beetle",
    "name": "Escarabajo Clásico (Volkswagen Tipo 1)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚗",
    "wikiCategories": [
      "Category:Volkswagen_Type_1"
    ],
    "intitleQuery": "Volkswagen Beetle classic",
    "mustMatch": [
      "volkswagen",
      "beetle",
      "käfer",
      "coccinelle"
    ],
    "aiPromptSubject": "Volkswagen Beetle classic isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Escarabajo Clásico (Volkswagen Tipo 1)\"."
  },
  {
    "id": "citroen-2cv-ds",
    "name": "Citroën 2CV Clásico (Aletas y Capó Acanalado)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚗",
    "wikiCategories": [
      "Category:Citroën_2CV"
    ],
    "intitleQuery": "Citroen 2CV",
    "mustMatch": [
      "2cv",
      "citroen",
      "citroën",
      "ente",
      "deuche"
    ],
    "aiPromptSubject": "Citroen 2CV isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Citroën 2CV Clásico (Aletas y Capó Acanalado)\"."
  },
  {
    "id": "vintage-tractor",
    "name": "Tractor Agrícola Antiguo de Ruedas Metálicas (Lanz Bulldog / Fordson)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚜",
    "wikiCategories": [
      "Category:Lanz_Bulldog",
      "Category:Fordson_tractors"
    ],
    "intitleQuery": "vintage tractor Lanz Fordson",
    "mustMatch": [
      "tractor",
      "lanz bulldog",
      "fordson",
      "traktor"
    ],
    "aiPromptSubject": "vintage tractor Lanz Fordson isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tractor Agrícola Antiguo de Ruedas Metálicas (Lanz Bulldog / Fordson)\"."
  },
  {
    "id": "classic-motorcycle",
    "name": "Motocicleta Clásica (Norton / Triumph / BMW)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🏍️",
    "wikiCategories": [
      "Category:Classic_motorcycles",
      "Category:Norton_motorcycles",
      "Category:Triumph_motorcycles"
    ],
    "intitleQuery": "classic motorcycle Norton Triumph",
    "mustMatch": [
      "motorcycle",
      "motorbike",
      "norton",
      "triumph",
      "bmw",
      "ducati",
      "motorrad"
    ],
    "aiPromptSubject": "classic motorcycle Norton Triumph isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Motocicleta Clásica (Norton / Triumph / BMW)\"."
  },
  {
    "id": "vespa-scooter",
    "name": "Scooter Clásica (Vespa)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🛵",
    "wikiCategories": [
      "Category:Vespa_scooters"
    ],
    "intitleQuery": "Vespa scooter",
    "mustMatch": [
      "vespa",
      "scooter",
      "lambretta",
      "piaggio"
    ],
    "aiPromptSubject": "Vespa scooter isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Scooter Clásica (Vespa)\"."
  },
  {
    "id": "vintage-bicycle",
    "name": "Bicicleta Clásica de Paseo",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚲",
    "wikiCategories": [
      "Category:Vintage_bicycles"
    ],
    "intitleQuery": "vintage bicycle",
    "mustMatch": [
      "bicycle",
      "bike",
      "fahrrad",
      "vélo",
      "bicyclette"
    ],
    "aiPromptSubject": "vintage bicycle isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bicicleta Clásica de Paseo\"."
  },
  {
    "id": "penny-farthing",
    "name": "Bicicleta Antigua de Rueda Alta (Penny-Farthing)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚲",
    "wikiCategories": [
      "Category:Penny-farthings"
    ],
    "intitleQuery": "penny-farthing bicycle",
    "mustMatch": [
      "penny-farthing",
      "high wheel",
      "hochrad",
      "vélocipède"
    ],
    "aiPromptSubject": "penny-farthing bicycle isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bicicleta Antigua de Rueda Alta (Penny-Farthing)\"."
  },
  {
    "id": "horse-drawn-carriage",
    "name": "Carruaje o Diligencia Antigua de Ruedas de Radios de Madera",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": " carriage ",
    "wikiCategories": [
      "Category:Stagecoaches",
      "Category:Carriages"
    ],
    "intitleQuery": "stagecoach horse carriage",
    "mustMatch": [
      "carriage",
      "stagecoach",
      "coach",
      "kutsche",
      "calèche"
    ],
    "aiPromptSubject": "stagecoach horse carriage isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Carruaje o Diligencia Antigua de Ruedas de Radios de Madera\"."
  },
  {
    "id": "wooden-sailboat",
    "name": "Velero Clásico de Madera",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⛵",
    "wikiCategories": [
      "Category:Wooden_sailboats",
      "Category:Sailing_yachts"
    ],
    "intitleQuery": "wooden sailboat yacht",
    "mustMatch": [
      "sailboat",
      "yacht",
      "schooner",
      "sailing",
      "segelboot",
      "voilier"
    ],
    "aiPromptSubject": "wooden sailboat yacht isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Velero Clásico de Madera\"."
  },
  {
    "id": "venetian-gondola",
    "name": "Góndola Veneciana (Proa con Ferro Metálico y Fórcola)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🛶",
    "wikiCategories": [
      "Category:Gondolas_(boat)"
    ],
    "intitleQuery": "Venetian gondola",
    "mustMatch": [
      "gondola",
      "ferro",
      "venice",
      "gondel"
    ],
    "aiPromptSubject": "Venetian gondola isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Góndola Veneciana (Proa con Ferro Metálico y Fórcola)\"."
  },
  {
    "id": "wooden-rowboat",
    "name": "Bote de Remos de Madera Varado mostrando las Cuadernas",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚣",
    "wikiCategories": [
      "Category:Rowboats"
    ],
    "intitleQuery": "wooden rowboat",
    "mustMatch": [
      "rowboat",
      "rowing boat",
      "skiff",
      "dinghy",
      "ruderboot",
      "barque"
    ],
    "aiPromptSubject": "wooden rowboat isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Bote de Remos de Madera Varado mostrando las Cuadernas\"."
  },
  {
    "id": "ships-anchor",
    "name": "Ancla Marina de Hierro con Cadena",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⚓",
    "wikiCategories": [
      "Category:Anchors"
    ],
    "intitleQuery": "ship anchor iron",
    "mustMatch": [
      "anchor",
      "anker",
      "ancre",
      "maritime"
    ],
    "aiPromptSubject": "ship anchor iron isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ancla Marina de Hierro con Cadena\"."
  },
  {
    "id": "ship-wheel-helm",
    "name": "Timón de Barco de Madera con Cabillas",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "☸️",
    "wikiCategories": [
      "Category:Ship's_wheels"
    ],
    "intitleQuery": "ship wheel wooden",
    "mustMatch": [
      "wheel",
      "helm",
      "steering wheel",
      "steuerrad",
      "gouvernail"
    ],
    "aiPromptSubject": "ship wheel wooden isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Timón de Barco de Madera con Cabillas\"."
  },
  {
    "id": "brass-propeller",
    "name": "Hélice Marina de Tres o Cuatro Palas en Bronce",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⚙️",
    "wikiCategories": [
      "Category:Ship_propellers"
    ],
    "intitleQuery": "ship propeller bronze",
    "mustMatch": [
      "propeller",
      "screw",
      "schiffsschraube",
      "hélice"
    ],
    "aiPromptSubject": "ship propeller bronze isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hélice Marina de Tres o Cuatro Palas en Bronce\"."
  },
  {
    "id": "brass-diving-helmet",
    "name": "Escafandra Clásica de Buzo en Cobre y Latón",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🤿",
    "wikiCategories": [
      "Category:Diving_helmets"
    ],
    "intitleQuery": "copper diving helmet",
    "mustMatch": [
      "diving helmet",
      "siebe gorman",
      "scaphandre",
      "taucherhelm"
    ],
    "aiPromptSubject": "copper diving helmet isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Escafandra Clásica de Buzo en Cobre y Latón\"."
  },
  {
    "id": "biplane-aircraft",
    "name": "Avión Biplano Clásico con Motor Radial y Hélice",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🛩️",
    "wikiCategories": [
      "Category:Biplanes"
    ],
    "intitleQuery": "biplane aircraft",
    "mustMatch": [
      "biplane",
      "stearman",
      "tiger moth",
      "sopwith",
      "doppeldecker"
    ],
    "aiPromptSubject": "biplane aircraft isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Avión Biplano Clásico con Motor Radial y Hélice\"."
  },
  {
    "id": "radial-aircraft-engine",
    "name": "Motor Radial de Aviación de Cilindros en Estrella",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⚙️",
    "wikiCategories": [
      "Category:Radial_engines"
    ],
    "intitleQuery": "radial aircraft engine",
    "mustMatch": [
      "radial engine",
      "pratt & whitney",
      "sternmotor",
      "moteur en étoile"
    ],
    "aiPromptSubject": "radial aircraft engine isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Motor Radial de Aviación de Cilindros en Estrella\"."
  },
  {
    "id": "hot-air-balloon",
    "name": "Globo Aerostático con Cesta de Mimbre y Quemador",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🎈",
    "wikiCategories": [
      "Category:Hot_air_balloons"
    ],
    "intitleQuery": "hot air balloon",
    "mustMatch": [
      "hot air balloon",
      "montgolfier",
      "heißluftballon",
      "montgolfière"
    ],
    "aiPromptSubject": "hot air balloon isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Globo Aerostático con Cesta de Mimbre y Quemador\"."
  },
  {
    "id": "coastal-lighthouse",
    "name": "Faro Costero sobre Rocas",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🗼",
    "wikiCategories": [
      "Category:Lighthouses"
    ],
    "intitleQuery": "lighthouse coastal tower",
    "mustMatch": [
      "lighthouse",
      "phare",
      "leuchtturm"
    ],
    "aiPromptSubject": "lighthouse coastal tower isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Faro Costero sobre Rocas\"."
  },
  {
    "id": "traditional-windmill",
    "name": "Molino de Viento Tradicional de Aspas de Madera",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🌾",
    "wikiCategories": [
      "Category:Windmills"
    ],
    "intitleQuery": "traditional windmill",
    "mustMatch": [
      "windmill",
      "windmühle",
      "moulin à vent"
    ],
    "aiPromptSubject": "traditional windmill isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Molino de Viento Tradicional de Aspas de Madera\"."
  },
  {
    "id": "watermill-wheel",
    "name": "Rueda Hidráulica de Molino de Agua con Cangilones",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🎡",
    "wikiCategories": [
      "Category:Water_wheels"
    ],
    "intitleQuery": "water wheel mill",
    "mustMatch": [
      "water wheel",
      "watermill",
      "wasserrad",
      "roue à aubes"
    ],
    "aiPromptSubject": "water wheel mill isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rueda Hidráulica de Molino de Agua con Cangilones\"."
  },
  {
    "id": "roman-stone-bridge",
    "name": "Puente Antiguo de Piedra de Arco de Medio Punto",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🌉",
    "wikiCategories": [
      "Category:Roman_bridges",
      "Category:Stone_arch_bridges"
    ],
    "intitleQuery": "Roman stone arch bridge",
    "mustMatch": [
      "bridge",
      "arch bridge",
      "roman bridge",
      "pont",
      "steinbrücke"
    ],
    "aiPromptSubject": "Roman stone arch bridge isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Puente Antiguo de Piedra de Arco de Medio Punto\"."
  },
  {
    "id": "corinthian-capital",
    "name": "Capitel Corintio Tallado con Hojas de Acanto",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏛️",
    "wikiCategories": [
      "Category:Corinthian_capitals"
    ],
    "intitleQuery": "Corinthian capital stone",
    "mustMatch": [
      "capital",
      "corinthian",
      "acanthus",
      "column",
      "kapitell",
      "chapiteau"
    ],
    "aiPromptSubject": "Corinthian capital stone isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Capitel Corintio Tallado con Hojas de Acanto\"."
  },
  {
    "id": "ionic-volute-capital",
    "name": "Capitel Jónico con Volutas en Espiral",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏛️",
    "wikiCategories": [
      "Category:Ionic_capitals"
    ],
    "intitleQuery": "Ionic capital volute",
    "mustMatch": [
      "ionic capital",
      "capital",
      "volute",
      "ionisch"
    ],
    "aiPromptSubject": "Ionic capital volute isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Capitel Jónico con Volutas en Espiral\"."
  },
  {
    "id": "gothic-gargoyle",
    "name": "Gárgola Gótica de Piedra",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🐉",
    "wikiCategories": [
      "Category:Gargoyles_of_Notre-Dame_de_Paris",
      "Category:Gothic_gargoyles"
    ],
    "intitleQuery": "Gothic gargoyle stone",
    "mustMatch": [
      "gargoyle",
      "grotesque",
      "chimera",
      "gargouille",
      "wasserspeier"
    ],
    "aiPromptSubject": "Gothic gargoyle stone isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Gárgola Gótica de Piedra\"."
  },
  {
    "id": "gothic-rose-window",
    "name": "Rosetón Gótico con Tracería de Piedra Calada",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏛️",
    "wikiCategories": [
      "Category:Rose_windows"
    ],
    "intitleQuery": "Gothic rose window tracery",
    "mustMatch": [
      "rose window",
      "tracery",
      "rosace",
      "rosette"
    ],
    "aiPromptSubject": "Gothic rose window tracery isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Rosetón Gótico con Tracería de Piedra Calada\"."
  },
  {
    "id": "flying-buttress-arch",
    "name": "Arbotante y Pináculo de Catedral Gótica",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "⛪",
    "wikiCategories": [
      "Category:Flying_buttresses"
    ],
    "intitleQuery": "flying buttress Gothic",
    "mustMatch": [
      "flying buttress",
      "buttress",
      "arc-boutant",
      "strebebogen"
    ],
    "aiPromptSubject": "flying buttress Gothic isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Arbotante y Pináculo de Catedral Gótica\"."
  },
  {
    "id": "spiral-staircase",
    "name": "Escalera de Caracol en Perspectiva Helicoidal",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🌀",
    "wikiCategories": [
      "Category:Spiral_stairs"
    ],
    "intitleQuery": "spiral staircase architecture",
    "mustMatch": [
      "spiral staircase",
      "spiral stairs",
      "wendeltreppe",
      "escalier en colimaçon"
    ],
    "aiPromptSubject": "spiral staircase architecture isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Escalera de Caracol en Perspectiva Helicoidal\"."
  },
  {
    "id": "wrought-iron-lantern",
    "name": "Farol Antiguo de Calle en Hierro Forjado",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏮",
    "wikiCategories": [
      "Category:Street_lanterns",
      "Category:Wrought_iron_street_lamps"
    ],
    "intitleQuery": "wrought iron street lantern",
    "mustMatch": [
      "lantern",
      "street lamp",
      "laterne",
      "lanterne"
    ],
    "aiPromptSubject": "wrought iron street lantern isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Farol Antiguo de Calle en Hierro Forjado\"."
  },
  {
    "id": "cast-iron-fire-hydrant",
    "name": "Hidrante de Incendios de Hierro Fundido en la Calle",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🚒",
    "wikiCategories": [
      "Category:Fire_hydrants"
    ],
    "intitleQuery": "fire hydrant cast iron",
    "mustMatch": [
      "fire hydrant",
      "hydrant",
      "borne d'incendie"
    ],
    "aiPromptSubject": "fire hydrant cast iron isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hidrante de Incendios de Hierro Fundido en la Calle\"."
  },
  {
    "id": "lion-door-knocker",
    "name": "Aldaba de Puerta en Bronce (Cabeza de León)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🦁",
    "wikiCategories": [
      "Category:Door_knockers"
    ],
    "intitleQuery": "brass door knocker lion",
    "mustMatch": [
      "knocker",
      "door knocker",
      "heurtoir",
      "türklopfer"
    ],
    "aiPromptSubject": "brass door knocker lion isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Aldaba de Puerta en Bronce (Cabeza de León)\"."
  },
  {
    "id": "stone-water-well",
    "name": "Brocal de Pozo Antiguo de Piedra con Arco de Forja y Polea",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🪣",
    "wikiCategories": [
      "Category:Well_heads"
    ],
    "intitleQuery": "stone well head pulley",
    "mustMatch": [
      "well",
      "wellhead",
      "pulley",
      "brunnen",
      "puits"
    ],
    "aiPromptSubject": "stone well head pulley isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Brocal de Pozo Antiguo de Piedra con Arco de Forja y Polea\"."
  },
  {
    "id": "japanese-pagoda-torii",
    "name": "Torii o Pagoda Tradicional Japonesa de Madera",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "⛩️",
    "wikiCategories": [
      "Category:Torii",
      "Category:Pagodas_in_Japan"
    ],
    "intitleQuery": "Torii gate Japanese pagoda",
    "mustMatch": [
      "torii",
      "pagoda",
      "shinto",
      "temple"
    ],
    "aiPromptSubject": "Torii gate Japanese pagoda isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Torii o Pagoda Tradicional Japonesa de Madera\"."
  },
  {
    "id": "japanese-stone-lantern",
    "name": "Linterna Japonesa de Piedra (Tōrō)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏮",
    "wikiCategories": [
      "Category:Tōrō"
    ],
    "intitleQuery": "Toro stone lantern Japan",
    "mustMatch": [
      "toro",
      "lantern",
      "stone lantern",
      "kasuga",
      "ishidoro"
    ],
    "aiPromptSubject": "Toro stone lantern Japan isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Linterna Japonesa de Piedra (Tōrō)\"."
  },
  {
    "id": "antique-cannon",
    "name": "Cañón Antiguo de Bronce sobre Cureña de Madera",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "💣",
    "wikiCategories": [
      "Category:Cannons"
    ],
    "intitleQuery": "antique cannon artillery",
    "mustMatch": [
      "cannon",
      "artillery",
      "kanone",
      "canon"
    ],
    "aiPromptSubject": "antique cannon artillery isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cañón Antiguo de Bronce sobre Cureña de Madera\"."
  },
  {
    "id": "medieval-knight-helmet",
    "name": "Yelmo o Casco de Armadura Medieval (Armet / Sallet)",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "⚔️",
    "wikiCategories": [
      "Category:Armets",
      "Category:Sallet",
      "Category:Close_helmets"
    ],
    "intitleQuery": "medieval helmet armet sallet",
    "mustMatch": [
      "helmet",
      "armet",
      "sallet",
      "bascinet",
      "burgonet",
      "helm",
      "heaume",
      "armor"
    ],
    "aiPromptSubject": "medieval helmet armet sallet isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Yelmo o Casco de Armadura Medieval (Armet / Sallet)\"."
  },
  {
    "id": "corinthian-greek-helmet",
    "name": "Casco Corintio Griego de Bronce",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🪖",
    "wikiCategories": [
      "Category:Corinthian_helmets"
    ],
    "intitleQuery": "Corinthian helmet bronze",
    "mustMatch": [
      "corinthian helmet",
      "helmet",
      "greek",
      "bronze"
    ],
    "aiPromptSubject": "Corinthian helmet bronze isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Casco Corintio Griego de Bronce\"."
  },
  {
    "id": "roman-galea-helmet",
    "name": "Casco de Legionario Romano (Galea con Carrilleras)",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🪖",
    "wikiCategories": [
      "Category:Roman_helmets"
    ],
    "intitleQuery": "Roman galea helmet",
    "mustMatch": [
      "roman helmet",
      "galea",
      "centurion",
      "helmet"
    ],
    "aiPromptSubject": "Roman galea helmet isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Casco de Legionario Romano (Galea con Carrilleras)\"."
  },
  {
    "id": "spanish-morion-helmet",
    "name": "Morrión Español del Siglo XVI con Cresta Curva",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🪖",
    "wikiCategories": [
      "Category:Morion_(helmet)"
    ],
    "intitleQuery": "Morion helmet",
    "mustMatch": [
      "morion",
      "cabasset",
      "conquistador",
      "helmet"
    ],
    "aiPromptSubject": "Morion helmet isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Morrión Español del Siglo XVI con Cresta Curva\"."
  },
  {
    "id": "samurai-kabuto-helmet",
    "name": "Casco Samurái (Kabuto con Maedate y Menpō)",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🥷",
    "wikiCategories": [
      "Category:Kabuto"
    ],
    "intitleQuery": "Japanese kabuto samurai helmet",
    "mustMatch": [
      "kabuto",
      "samurai",
      "helmet",
      "menpo",
      "armor"
    ],
    "aiPromptSubject": "Japanese kabuto samurai helmet isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Casco Samurái (Kabuto con Maedate y Menpō)\"."
  },
  {
    "id": "gothic-plate-cuirass",
    "name": "Coraza y Hombreras de Armadura Gótica Acanalada",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🛡️",
    "wikiCategories": [
      "Category:Gothic_plate_armour",
      "Category:Cuirasses"
    ],
    "intitleQuery": "Gothic plate armour cuirass",
    "mustMatch": [
      "cuirass",
      "armour",
      "armor",
      "breastplate",
      "pauldrons",
      "harnisch"
    ],
    "aiPromptSubject": "Gothic plate armour cuirass isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Coraza y Hombreras de Armadura Gótica Acanalada\"."
  },
  {
    "id": "rapier-swept-hilt-sword",
    "name": "Espada Ropería de Taza o Lazo (Guarda Compleja)",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "⚔️",
    "wikiCategories": [
      "Category:Rapiers"
    ],
    "intitleQuery": "rapier hilt sword",
    "mustMatch": [
      "rapier",
      "hilt",
      "sword",
      "degen",
      "rapière"
    ],
    "aiPromptSubject": "rapier hilt sword isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Espada Ropería de Taza o Lazo (Guarda Compleja)\"."
  },
  {
    "id": "medieval-crossbow",
    "name": "Ballesta Medieval de Madera y Arco de Acero",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🏹",
    "wikiCategories": [
      "Category:Crossbows"
    ],
    "intitleQuery": "medieval crossbow",
    "mustMatch": [
      "crossbow",
      "armbrust",
      "arbalète"
    ],
    "aiPromptSubject": "medieval crossbow isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Ballesta Medieval de Madera y Arco de Acero\"."
  },
  {
    "id": "flintlock-pistol",
    "name": "Pistola Antigua de Chispa con Llave de Pedernal y Madera Tallada",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🔫",
    "wikiCategories": [
      "Category:Flintlock_pistols"
    ],
    "intitleQuery": "flintlock pistol antique",
    "mustMatch": [
      "flintlock",
      "pistol",
      "steinschlosspistole",
      "pistolet à silex"
    ],
    "aiPromptSubject": "flintlock pistol antique isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Pistola Antigua de Chispa con Llave de Pedernal y Madera Tallada\"."
  },
  {
    "id": "wood-axe",
    "name": "Hacha de Leñador con Mango Curvo de Fresno",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🪓",
    "wikiCategories": [
      "Category:Axes"
    ],
    "intitleQuery": "wood splitting axe",
    "mustMatch": [
      "axe",
      "hatchet",
      "axt",
      "beil",
      "hache"
    ],
    "aiPromptSubject": "wood splitting axe isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Hacha de Leñador con Mango Curvo de Fresno\"."
  },
  {
    "id": "claw-hammer",
    "name": "Martillo de Carpintero de Orejas",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🔨",
    "wikiCategories": [
      "Category:Claw_hammers"
    ],
    "intitleQuery": "claw hammer",
    "mustMatch": [
      "hammer",
      "claw hammer",
      "marteau"
    ],
    "aiPromptSubject": "claw hammer isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Martillo de Carpintero de Orejas\"."
  },
  {
    "id": "adjustable-wrench",
    "name": "Llave Inglesa Ajustable con Sinfín",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🔧",
    "wikiCategories": [
      "Category:Adjustable_wrenches"
    ],
    "intitleQuery": "adjustable wrench",
    "mustMatch": [
      "wrench",
      "spanner",
      "bahco",
      "clé à molette",
      "schraubenschlüssel"
    ],
    "aiPromptSubject": "adjustable wrench isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Llave Inglesa Ajustable con Sinfín\"."
  },
  {
    "id": "pipe-wrench",
    "name": "Llave Stilson de Fontanero",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🔧",
    "wikiCategories": [
      "Category:Pipe_wrenches"
    ],
    "intitleQuery": "pipe wrench Stillson",
    "mustMatch": [
      "pipe wrench",
      "stillson",
      "rohrzange"
    ],
    "aiPromptSubject": "pipe wrench Stillson isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Llave Stilson de Fontanero\"."
  },
  {
    "id": "pliers-tool",
    "name": "Alicates o Tenazas de Forja",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🔧",
    "wikiCategories": [
      "Category:Pliers",
      "Category:Pincers"
    ],
    "intitleQuery": "pliers pincers tool",
    "mustMatch": [
      "pliers",
      "pincers",
      "zange",
      "pince",
      "nippers"
    ],
    "aiPromptSubject": "pliers pincers tool isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Alicates o Tenazas de Forja\"."
  },
  {
    "id": "c-clamp",
    "name": "Sargento o Prensa en C de Hierro",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🗜️",
    "wikiCategories": [
      "Category:Clamps_(tool)"
    ],
    "intitleQuery": "C-clamp tool",
    "mustMatch": [
      "clamp",
      "c-clamp",
      "g-clamp",
      "schraubzwinge",
      "serre-joint"
    ],
    "aiPromptSubject": "C-clamp tool isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Sargento o Prensa en C de Hierro\"."
  },
  {
    "id": "bench-vise",
    "name": "Tornillo de Banco de Taller en Hierro Fundido",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🗜️",
    "wikiCategories": [
      "Category:Vises"
    ],
    "intitleQuery": "bench vise tool",
    "mustMatch": [
      "vise",
      "vice",
      "bench vise",
      "schraubstock",
      "étau"
    ],
    "aiPromptSubject": "bench vise tool isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Tornillo de Banco de Taller en Hierro Fundido\"."
  },
  {
    "id": "woodworking-plane",
    "name": "Cepillo de Carpintero de Hierro y Madera (Stanley)",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🪚",
    "wikiCategories": [
      "Category:Planes_(tools)"
    ],
    "intitleQuery": "woodworking hand plane",
    "mustMatch": [
      "plane",
      "stanley",
      "hobel",
      "rabot",
      "woodworking"
    ],
    "aiPromptSubject": "woodworking hand plane isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Cepillo de Carpintero de Hierro y Madera (Stanley)\"."
  },
  {
    "id": "brace-hand-drill",
    "name": "Berbiquí o Taladro Manual de Carpintero",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🔩",
    "wikiCategories": [
      "Category:Braces_(tool)",
      "Category:Hand_drills"
    ],
    "intitleQuery": "brace hand drill",
    "mustMatch": [
      "brace",
      "hand drill",
      "bohrwinde",
      "vilebrequin"
    ],
    "aiPromptSubject": "brace hand drill isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Berbiquí o Taladro Manual de Carpintero\"."
  },
  {
    "id": "vernier-caliper",
    "name": "Calibre o Pie de Rey Metálico",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "📏",
    "wikiCategories": [
      "Category:Calipers"
    ],
    "intitleQuery": "vernier caliper",
    "mustMatch": [
      "caliper",
      "vernier",
      "messschieber",
      "pied à coulisse"
    ],
    "aiPromptSubject": "vernier caliper isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Calibre o Pie de Rey Metálico\"."
  },
  {
    "id": "micrometer-screw-gauge",
    "name": "Micrómetro de Arco (Tornillo Palmer de Precisión)",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "📏",
    "wikiCategories": [
      "Category:Micrometers"
    ],
    "intitleQuery": "micrometer screw gauge",
    "mustMatch": [
      "micrometer",
      "mikrometer",
      "bügelmessschraube",
      "palmer"
    ],
    "aiPromptSubject": "micrometer screw gauge isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Micrómetro de Arco (Tornillo Palmer de Precisión)\"."
  },
  {
    "id": "blacksmith-anvil",
    "name": "Yunque de Herrero de Acero",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "⚒️",
    "wikiCategories": [
      "Category:Anvils"
    ],
    "intitleQuery": "blacksmith anvil",
    "mustMatch": [
      "anvil",
      "amboss",
      "enclume",
      "blacksmith"
    ],
    "aiPromptSubject": "blacksmith anvil isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Yunque de Herrero de Acero\"."
  },
  {
    "id": "pulley-block-tackle",
    "name": "Polea o Motón Náutico de Madera y Gancho de Hierro",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⚙️",
    "wikiCategories": [
      "Category:Pulleys",
      "Category:Blocks_(sailing)"
    ],
    "intitleQuery": "pulley block tackle",
    "mustMatch": [
      "pulley",
      "block",
      "tackle",
      "flaschenzug",
      "poulie"
    ],
    "aiPromptSubject": "pulley block tackle isolated studio reference object",
    "tip": "Perspectiva y construcción mecánica: Encaja primero las proporciones generales, los ejes de simetría y los volúmenes primarios de \"Polea o Motón Náutico de Madera y Gancho de Hierro\"."
  },
  {
    "id": "haussmann-corner-building",
    "name": "Edificio Esquinero Haussmann en París (Perspectiva de 2 Puntos)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏛️",
    "wikiCategories": [],
    "intitleQuery": "Haussmann corner building Paris architecture",
    "mustMatch": [
      "haussmann",
      "corner",
      "building"
    ],
    "aiPromptSubject": "Haussmann corner building Paris architecture",
    "tip": "Traza la arista vertical de la esquina y proyecta las líneas de balcones y mansardas hacia dos puntos de fuga."
  },
  {
    "id": "gothic-cathedral-facade",
    "name": "Fachada de Catedral Gótica con Portada Abocinada y Torres",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "⛪",
    "wikiCategories": [],
    "intitleQuery": "Gothic cathedral facade architecture",
    "mustMatch": [
      "gothic",
      "cathedral",
      "facade"
    ],
    "aiPromptSubject": "Gothic cathedral facade architecture",
    "tip": "Divide la fachada en 3 cuerpos verticales y 3 niveles horizontales antes de dibujar arquivoltas y rosetón."
  },
  {
    "id": "cobblestone-alley-arches",
    "name": "Callejón Empedrado Europeo con Arcos y Faroles (Perspectiva de 1 Punto)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏘️",
    "wikiCategories": [],
    "intitleQuery": "European cobblestone alleyway arches perspective",
    "mustMatch": [
      "european",
      "cobblestone",
      "alleyway"
    ],
    "aiPromptSubject": "European cobblestone alleyway arches perspective",
    "tip": "Ubica el punto de fuga al fondo del callejón y usa el ritmo decreciente de puertas y ventanas para dar profundidad."
  },
  {
    "id": "new-york-fire-escape-facade",
    "name": "Fachada de Ladrillo con Escaleras de Incendios en Zigzag (Nueva York)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏢",
    "wikiCategories": [],
    "intitleQuery": "New York Soho cast iron fire escape facade",
    "mustMatch": [
      "new",
      "york",
      "soho"
    ],
    "aiPromptSubject": "New York Soho cast iron fire escape facade",
    "tip": "Contrasta la cuadrícula ortogonal de las ventanas con las diagonales y sombras proyectadas de las escaleras metálicas."
  },
  {
    "id": "roman-colosseum-arches",
    "name": "Arcadas Superpuestas del Coliseo Romano",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏟️",
    "wikiCategories": [],
    "intitleQuery": "Colosseum Rome arches exterior perspective",
    "mustMatch": [
      "colosseum",
      "rome",
      "arches"
    ],
    "aiPromptSubject": "Colosseum Rome arches exterior perspective",
    "tip": "Estudia cómo los arcos de medio punto se comprimen elípticamente a medida que el muro cilíndrico gira."
  },
  {
    "id": "venetian-canal-bridge",
    "name": "Puente sobre Canal de Venecia con Fachadas Reflejadas en el Agua",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🌉",
    "wikiCategories": [],
    "intitleQuery": "Venice canal bridge historic buildings",
    "mustMatch": [
      "venice",
      "canal",
      "bridge"
    ],
    "aiPromptSubject": "Venice canal bridge historic buildings",
    "tip": "Alinea la curva del arco del puente con su reflejo invertido y agrupa las ventanas góticas venecianas."
  },
  {
    "id": "baroque-dome-lantern",
    "name": "Cúpula Barroca con Nervaduras, Tambor de Columnas y Linterna",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🕌",
    "wikiCategories": [],
    "intitleQuery": "Baroque church dome lantern architecture",
    "mustMatch": [
      "baroque",
      "church",
      "dome"
    ],
    "aiPromptSubject": "Baroque church dome lantern architecture",
    "tip": "Construye cilindros y semiesferas concéntricas compartiendo el mismo eje vertical."
  },
  {
    "id": "japanese-castle-tenshu",
    "name": "Castillo Tradicional Japonés de Tejados Curvos Superpuestos (Himeji)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏯",
    "wikiCategories": [],
    "intitleQuery": "Himeji Castle Japanese architecture roofs",
    "mustMatch": [
      "himeji",
      "castle",
      "japanese"
    ],
    "aiPromptSubject": "Himeji Castle Japanese architecture roofs",
    "tip": "Observa la curvatura cóncava de los aleros (irimoya) y el basamento inclinado de piedra seca."
  },
  {
    "id": "art-deco-skyscraper-spire",
    "name": "Rascacielos Art Déco Escalonado en Contrapicado (Chrysler / Empire State)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏙️",
    "wikiCategories": [],
    "intitleQuery": "Art Deco skyscraper lookup perspective",
    "mustMatch": [
      "art",
      "deco",
      "skyscraper"
    ],
    "aiPromptSubject": "Art Deco skyscraper lookup perspective",
    "tip": "Usa una perspectiva de 3 puntos de fuga con el tercer punto muy alto para acentuar la verticalidad monumental."
  },
  {
    "id": "classical-portico-pediment",
    "name": "Pórtico Clásico con Columnata y Frontón Triangular (Panteón)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏛️",
    "wikiCategories": [],
    "intitleQuery": "Pantheon Rome classical portico columns",
    "mustMatch": [
      "pantheon",
      "rome",
      "classical"
    ],
    "aiPromptSubject": "Pantheon Rome classical portico columns",
    "tip": "Cuida el éntasis de los fustes y el espaciado rítmico entre las columnas iluminadas y el fondo oscuro del pórtico."
  },
  {
    "id": "tudor-half-timbered-house",
    "name": "Casa Entramada de Madera y Estuco (Estilo Tudor / Medieval)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏡",
    "wikiCategories": [],
    "intitleQuery": "half timbered medieval house facade",
    "mustMatch": [
      "half",
      "timbered",
      "medieval"
    ],
    "aiPromptSubject": "half timbered medieval house facade",
    "tip": "Dibuja primero el volumen de los pisos en voladizo y luego el patrón estructural de vigas de madera vistas."
  },
  {
    "id": "victorian-conservatory-glasshouse",
    "name": "Invernadero Victoriano de Hierro y Cristal con Cúpula",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🌿",
    "wikiCategories": [],
    "intitleQuery": "Victorian wrought iron glasshouse conservatory",
    "mustMatch": [
      "victorian",
      "wrought",
      "iron"
    ],
    "aiPromptSubject": "Victorian wrought iron glasshouse conservatory",
    "tip": "Enfócate en las costillas curvas de hierro forjado y alterna paneles transparentes con reflejos del cielo."
  },
  {
    "id": "industrial-water-tower",
    "name": "Torre de Agua Industrial sobre Estructura Reticulada de Acero",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🗼",
    "wikiCategories": [],
    "intitleQuery": "vintage rooftop water tower steel structure",
    "mustMatch": [
      "vintage",
      "rooftop",
      "water"
    ],
    "aiPromptSubject": "vintage rooftop water tower steel structure",
    "tip": "Practica el entrecruzamiento de vigas diagonales (celosía) sosteniendo el cilindro cónico superior."
  },
  {
    "id": "moroccan-horseshoe-arch-gate",
    "name": "Puerta Monumental Árabe con Arco de Herradura y Mocárabes",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🕌",
    "wikiCategories": [],
    "intitleQuery": "Moorish horseshoe arch gate architecture",
    "mustMatch": [
      "moorish",
      "horseshoe",
      "arch"
    ],
    "aiPromptSubject": "Moorish horseshoe arch gate architecture",
    "tip": "Encaja el alfiz rectangular exterior antes de trazar la curva cerrada del arco de herradura."
  },
  {
    "id": "classic-train-station-canopy",
    "name": "Marquesina Histórica de Estación de Tren en Hierro y Vidrio",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🚉",
    "wikiCategories": [],
    "intitleQuery": "historic train station iron glass roof perspective",
    "mustMatch": [
      "historic",
      "train",
      "station"
    ],
    "aiPromptSubject": "historic train station iron glass roof perspective",
    "tip": "Aprovecha la repetición de las cerchas metálicas curvas para reforzar la perspectiva lineal profunda."
  },
  {
    "id": "san-francisco-victorian-painted-ladies",
    "name": "Casas Victorianas en Hilera sobre Colina Empinada (Painted Ladies)",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏘️",
    "wikiCategories": [],
    "intitleQuery": "Painted Ladies Victorian houses San Francisco",
    "mustMatch": [
      "painted",
      "ladies",
      "victorian"
    ],
    "aiPromptSubject": "Painted Ladies Victorian houses San Francisco",
    "tip": "Contrasta la pendiente inclinada de la calle con las líneas verticales estrictas de las fachadas y miradores."
  },
  {
    "id": "brutalist-concrete-building",
    "name": "Edificio Brutalista de Volúmenes Geométricos en Hormigón y Sombras Duras",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏢",
    "wikiCategories": [],
    "intitleQuery": "Brutalist concrete architecture geometric shadows",
    "mustMatch": [
      "brutalist",
      "concrete",
      "architecture"
    ],
    "aiPromptSubject": "Brutalist concrete architecture geometric shadows",
    "tip": "Excelente para practicar bloques puros en perspectiva y grandes planos de luz y sombra proyectada."
  },
  {
    "id": "greek-amphitheater-ruins",
    "name": "Teatro Griego Clásico Tallado en la Ladera con Graderío Semicircular",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🏛️",
    "wikiCategories": [],
    "intitleQuery": "ancient Greek theater Epidaurus architecture",
    "mustMatch": [
      "ancient",
      "greek",
      "theater"
    ],
    "aiPromptSubject": "ancient Greek theater Epidaurus architecture",
    "tip": "Traza elipses concéntricas escalonadas convergiendo hacia el círculo central de la orchestra."
  },
  {
    "id": "historic-clock-tower-belfry",
    "name": "Torre del Reloj y Campanario Histórico en Esquina Urbana",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🕰️",
    "wikiCategories": [],
    "intitleQuery": "historic clock tower belfry architecture",
    "mustMatch": [
      "historic",
      "clock",
      "tower"
    ],
    "aiPromptSubject": "historic clock tower belfry architecture",
    "tip": "Asegúrate de que las esferas del reloj en las caras perpendiculares sigan la elipse correcta de cada plano."
  },
  {
    "id": "suspension-bridge-towers",
    "name": "Puente Colgante de Acero en Perspectiva con Cables y Pilonas",
    "category": "arquitectura",
    "categoryLabel": "Arquitectura y Paisaje Urbano",
    "icon": "🌉",
    "wikiCategories": [],
    "intitleQuery": "suspension bridge towers cables perspective",
    "mustMatch": [
      "suspension",
      "bridge",
      "towers"
    ],
    "aiPromptSubject": "suspension bridge towers cables perspective",
    "tip": "Dibuja la curva catenaria principal de los cables portantes y las pilonas gemelas en disminución."
  },
  {
    "id": "v8-engine-block",
    "name": "Motor V8 Mecánico con Colectores, Poleas y Correas",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⚙️",
    "wikiCategories": [],
    "intitleQuery": "V8 car engine mechanical block closeup",
    "mustMatch": [
      "car",
      "engine",
      "mechanical"
    ],
    "aiPromptSubject": "V8 car engine mechanical block closeup",
    "tip": "Encaja los dos bancos de cilindros en ángulo de 90° antes de añadir poleas circulares y tubos."
  },
  {
    "id": "cafe-racer-motorcycle",
    "name": "Motocicleta Café Racer con Motor Expuesto y Escape Cromado",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🏍️",
    "wikiCategories": [],
    "intitleQuery": "Cafe Racer motorcycle side three quarter view",
    "mustMatch": [
      "cafe",
      "racer",
      "motorcycle"
    ],
    "aiPromptSubject": "Cafe Racer motorcycle side three quarter view",
    "tip": "Alinea las dos ruedas en el mismo plano de suelo y conecta chasis, depósito y asiento con una línea fluida."
  },
  {
    "id": "classic-formula-1-car",
    "name": "Monoplaza Clásico de Fórmula 1 con Ruedas Descubiertas",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🏎️",
    "wikiCategories": [],
    "intitleQuery": "classic Formula 1 race car perspective",
    "mustMatch": [
      "classic",
      "formula",
      "race"
    ],
    "aiPromptSubject": "classic Formula 1 race car perspective",
    "tip": "Cuida la perspectiva de los cuatro neumáticos cilíndricos y los brazos triangulares de la suspensión."
  },
  {
    "id": "excavator-hydraulic-arm",
    "name": "Excavadora Pesada con Brazo Hidráulico Articulado y Orugas",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚜",
    "wikiCategories": [],
    "intitleQuery": "hydraulic excavator construction machine",
    "mustMatch": [
      "hydraulic",
      "excavator",
      "construction"
    ],
    "aiPromptSubject": "hydraulic excavator construction machine",
    "tip": "Descompón la máquina en tres bloques articulados: tren de orugas, cabina giratoria y brazo con pistones."
  },
  {
    "id": "farm-combine-harvester",
    "name": "Cosechadora o Tractor Agrícola Moderno con Neumáticos de Tacos Profundos",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚜",
    "wikiCategories": [],
    "intitleQuery": "agricultural tractor heavy tire treads",
    "mustMatch": [
      "agricultural",
      "tractor",
      "heavy"
    ],
    "aiPromptSubject": "agricultural tractor heavy tire treads",
    "tip": "Usa cilindros robustos para las ruedas traseras gigantes y marca el ritmo radial de los tacos de goma."
  },
  {
    "id": "helicopter-rotor-cockpit",
    "name": "Helicóptero con Cabina Acristalada y Cabeza de Rotor Mecánica",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚁",
    "wikiCategories": [],
    "intitleQuery": "helicopter cockpit rotor hub closeup",
    "mustMatch": [
      "helicopter",
      "cockpit",
      "rotor"
    ],
    "aiPromptSubject": "helicopter cockpit rotor hub closeup",
    "tip": "Contrasta la burbuja orgánica de la cabina con el eje mecánico vertical del rotor principal."
  },
  {
    "id": "fighter-jet-aircraft",
    "name": "Avión Caza a Reacción en Perspectiva 3/4 (Fuselaje y Alas en Flecha)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🛩️",
    "wikiCategories": [],
    "intitleQuery": "fighter jet aircraft three quarter view",
    "mustMatch": [
      "fighter",
      "jet",
      "aircraft"
    ],
    "aiPromptSubject": "fighter jet aircraft three quarter view",
    "tip": "Traza el eje longitudinal central del fuselaje y verifica la simetría en escorzo de las alas delta."
  },
  {
    "id": "planetary-gear-mechanism",
    "name": "Sistema de Engranajes Planetarios y Ruedas Dentadas de Acero",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⚙️",
    "wikiCategories": [],
    "intitleQuery": "planetary gears mechanical steel teeth",
    "mustMatch": [
      "planetary",
      "gears",
      "mechanical"
    ],
    "aiPromptSubject": "planetary gears mechanical steel teeth",
    "tip": "Dibuja primero los cilindros primitivos de contacto antes de tallar el ritmo de los dientes metálicos."
  },
  {
    "id": "vintage-pickup-truck",
    "name": "Camioneta Pickup Clásica de los Años 1950 (Guardabarros Abombados)",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🛻",
    "wikiCategories": [],
    "intitleQuery": "1950s vintage pickup truck three quarter view",
    "mustMatch": [
      "1950s",
      "vintage",
      "pickup"
    ],
    "aiPromptSubject": "1950s vintage pickup truck three quarter view",
    "tip": "Estudia las transiciones suaves entre la parrilla frontal, los guardabarros curvos y la caja trasera."
  },
  {
    "id": "semi-truck-tractor-cab",
    "name": "Camión Americano de Cabina Larga con Chimeneas y Parrilla Cromada",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚛",
    "wikiCategories": [],
    "intitleQuery": "American semi truck chrome grille perspective",
    "mustMatch": [
      "american",
      "semi",
      "truck"
    ],
    "aiPromptSubject": "American semi truck chrome grille perspective",
    "tip": "Domina la caja rectangular larga del capó y el alto contraste de reflejos en el parachoques y tubos cromados."
  },
  {
    "id": "tugboat-harbor-vessel",
    "name": "Barco Remolcador de Puerto con Casco Robusto y Defensas",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚢",
    "wikiCategories": [],
    "intitleQuery": "harbor tugboat vessel hull",
    "mustMatch": [
      "harbor",
      "tugboat",
      "vessel"
    ],
    "aiPromptSubject": "harbor tugboat vessel hull",
    "tip": "Construye la curva tridimensional de la proa cortando el agua y la superestructura escalonada."
  },
  {
    "id": "mountain-bike-suspension",
    "name": "Bicicleta de Montaña (MTB) con Horquilla de Suspensión y Frenos de Disco",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚵",
    "wikiCategories": [],
    "intitleQuery": "mountain bike suspension disc brakes",
    "mustMatch": [
      "mountain",
      "bike",
      "suspension"
    ],
    "aiPromptSubject": "mountain bike suspension disc brakes",
    "tip": "Dibuja primero los dos triángulos estructurales del cuadro antes de detallar ruedas y transmisión."
  },
  {
    "id": "forklift-industrial",
    "name": "Carretilla Elevadora (Montacargas) con Mástil Vertical y Horquillas",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🏗️",
    "wikiCategories": [],
    "intitleQuery": "industrial forklift truck perspective",
    "mustMatch": [
      "industrial",
      "forklift",
      "truck"
    ],
    "aiPromptSubject": "industrial forklift truck perspective",
    "tip": "Contrasta el bloque compacto del contrapeso con las guías verticales estrictas del mástil de carga."
  },
  {
    "id": "differential-gearbox-cutaway",
    "name": "Diferencial Automotriz y Caja de Transmisión Abierta",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "⚙️",
    "wikiCategories": [],
    "intitleQuery": "automotive differential gear mechanism",
    "mustMatch": [
      "automotive",
      "differential",
      "gear"
    ],
    "aiPromptSubject": "automotive differential gear mechanism",
    "tip": "Observa cómo los engranajes cónicos cambian la dirección del giro a 90 grados."
  },
  {
    "id": "vintage-fire-engine-ladder",
    "name": "Camión de Bomberos Clásico con Escalera Extensible y Campana",
    "category": "vehiculos",
    "categoryLabel": "Vehículos y Maquinaria",
    "icon": "🚒",
    "wikiCategories": [],
    "intitleQuery": "vintage fire engine truck ladder",
    "mustMatch": [
      "vintage",
      "fire",
      "engine"
    ],
    "aiPromptSubject": "vintage fire engine truck ladder",
    "tip": "Combina el volumen prismático del camión con la estructura reticulada de la escalera superior."
  },
  {
    "id": "jagged-alpine-mountain-peaks",
    "name": "Picos Alpinos Rocosos con Aristas Nevadas e Iluminación Lateral",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🏔️",
    "wikiCategories": [],
    "intitleQuery": "rugged alpine mountain peaks rock faces snow",
    "mustMatch": [
      "rugged",
      "alpine",
      "mountain"
    ],
    "aiPromptSubject": "rugged alpine mountain peaks rock faces snow",
    "tip": "Trata la montaña como un conjunto de planos tallados con una cara en luz plena y otra en sombra propia."
  },
  {
    "id": "breaking-ocean-wave-crest",
    "name": "Ola del Mar Rompiendo con Cresta de Espuma y Contraluz",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🌊",
    "wikiCategories": [],
    "intitleQuery": "breaking ocean wave curl foam surfing photography",
    "mustMatch": [
      "breaking",
      "ocean",
      "wave"
    ],
    "aiPromptSubject": "breaking ocean wave curl foam surfing photography",
    "tip": "Captura la espiral cilíndrica del tubo de agua y la red orgánica de espuma en la superficie."
  },
  {
    "id": "cumulonimbus-storm-clouds",
    "name": "Nubes Cumulonimbus Voluminosas Iluminadas al Atardecer",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "⛅",
    "wikiCategories": [],
    "intitleQuery": "cumulonimbus clouds dramatic sunlight sky",
    "mustMatch": [
      "cumulonimbus",
      "clouds",
      "dramatic"
    ],
    "aiPromptSubject": "cumulonimbus clouds dramatic sunlight sky",
    "tip": "Modela las nubes como volúmenes esféricos suaves con bordes luminosos (silver lining) y bases planas en sombra."
  },
  {
    "id": "slot-canyon-sandstone-walls",
    "name": "Cañón Estrecho de Arenisca Ondulada con Haz de Luz Cenital (Antelope Canyon)",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🏜️",
    "wikiCategories": [],
    "intitleQuery": "Antelope slot canyon sandstone light beams",
    "mustMatch": [
      "antelope",
      "slot",
      "canyon"
    ],
    "aiPromptSubject": "Antelope slot canyon sandstone light beams",
    "tip": "Usa curvas envolventes fluidas y degradados tonales para separar cada estrato de roca erosionada."
  },
  {
    "id": "waterfall-rocky-cliff",
    "name": "Cascada Salvaje Cayendo entre Paredes de Roca Basáltica y Niebla",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🏞️",
    "wikiCategories": [],
    "intitleQuery": "waterfall basalt rock cliff mist",
    "mustMatch": [
      "waterfall",
      "basalt",
      "rock"
    ],
    "aiPromptSubject": "waterfall basalt rock cliff mist",
    "tip": "Contrasta la textura dura, oscura y angular de las rocas húmedas con el velo blanco y vertical del agua."
  },
  {
    "id": "desert-sand-dunes-ripples",
    "name": "Dunas del Desierto con Aristas Sinuosas y Ondulaciones por el Viento",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🏜️",
    "wikiCategories": [],
    "intitleQuery": "Sahara desert sand dunes sharp ridge shadows",
    "mustMatch": [
      "sahara",
      "desert",
      "sand"
    ],
    "aiPromptSubject": "Sahara desert sand dunes sharp ridge shadows",
    "tip": "La arista en S de la duna divide nítidamente el lado iluminado por el sol del lado en sombra profunda."
  },
  {
    "id": "coastal-sea-stack-arch",
    "name": "Arco Natural de Roca Marina y Acantilado Erosionado por las Olas",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🪨",
    "wikiCategories": [],
    "intitleQuery": "natural sea arch coastal rock cliff",
    "mustMatch": [
      "natural",
      "sea",
      "arch"
    ],
    "aiPromptSubject": "natural sea arch coastal rock cliff",
    "tip": "Estudia las fracturas geológicas horizontales y verticales de la piedra frente a la horizontalidad del mar."
  },
  {
    "id": "winding-mountain-river-boulders",
    "name": "Río de Montaña serpenteando entre Cantos Rodados y Pinos",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🏞️",
    "wikiCategories": [],
    "intitleQuery": "mountain river boulders rapids forest",
    "mustMatch": [
      "mountain",
      "river",
      "boulders"
    ],
    "aiPromptSubject": "mountain river boulders rapids forest",
    "tip": "Usa la curva en S del cauce para guiar la mirada desde las rocas en primer plano hasta el fondo atmosférico."
  },
  {
    "id": "volcanic-crater-lava-rock",
    "name": "Cráter Volcánico y Formaciones de Roca Basáltica Columnar (Calzada del Gigante)",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🌋",
    "wikiCategories": [],
    "intitleQuery": "basalt columns Giant Causeway rock formation",
    "mustMatch": [
      "basalt",
      "columns",
      "giant"
    ],
    "aiPromptSubject": "basalt columns Giant Causeway rock formation",
    "tip": "Practica el encaje de prismas hexagonales escalonados vistos desde arriba y de perfil."
  },
  {
    "id": "glacier-ice-cave-crevasse",
    "name": "Glaciar Agrietado y Bloques de Hielo con Facetas Translúcidas",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🧊",
    "wikiCategories": [],
    "intitleQuery": "glacier ice crevasse formations",
    "mustMatch": [
      "glacier",
      "ice",
      "crevasse"
    ],
    "aiPromptSubject": "glacier ice crevasse formations",
    "tip": "Usa trazos angulares decididos para las fracturas del hielo y valores claros para la refracción interna."
  },
  {
    "id": "gnarled-deadwood-tree-cliff",
    "name": "Árbol Retorcido por el Viento al Borde de un Acantilado Rocoso",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🌲",
    "wikiCategories": [],
    "intitleQuery": "windswept bristlecone pine tree cliff",
    "mustMatch": [
      "windswept",
      "bristlecone",
      "pine"
    ],
    "aiPromptSubject": "windswept bristlecone pine tree cliff",
    "tip": "Sigue el flujo de torsión de las fibras de la madera que muestran la dirección constante del viento."
  },
  {
    "id": "karst-limestone-mountains",
    "name": "Montañas Kársticas Verticales entre Niebla (Guilin / Zhangjiajie)",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "⛰️",
    "wikiCategories": [],
    "intitleQuery": "Zhangjiajie karst rock pillars mist",
    "mustMatch": [
      "zhangjiajie",
      "karst",
      "rock"
    ],
    "aiPromptSubject": "Zhangjiajie karst rock pillars mist",
    "tip": "Aplica perspectiva atmosférica: pilares oscuros y detallados adelante, siluetas claras y suaves atrás."
  },
  {
    "id": "campfire-flames-embers",
    "name": "Fuego de Hoguera con Lenguas de Llama y Troncos Incandescentes",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🔥",
    "wikiCategories": [],
    "intitleQuery": "campfire flames glowing wood embers closeup",
    "mustMatch": [
      "campfire",
      "flames",
      "glowing"
    ],
    "aiPromptSubject": "campfire flames glowing wood embers closeup",
    "tip": "Invierte la lógica habitual: el centro de la llama y las brasas son el blanco puro del papel rodeado de oscuridad."
  },
  {
    "id": "splash-water-droplet-crown",
    "name": "Corona de Agua y Gotas en Suspensión al Impactar en la Superficie",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "💧",
    "wikiCategories": [],
    "intitleQuery": "water drop crown splash macro photography",
    "mustMatch": [
      "water",
      "drop",
      "crown"
    ],
    "aiPromptSubject": "water drop crown splash macro photography",
    "tip": "Observa las elipses concéntricas de las ondas y el contraste especular brillante en cada gota."
  },
  {
    "id": "hoodoos-rock-spires",
    "name": "Chimeneas de Hadas y Agujas Rocosas Erosionadas (Bryce Canyon)",
    "category": "paisajes",
    "categoryLabel": "Paisajes Naturales y Elementos",
    "icon": "🪨",
    "wikiCategories": [],
    "intitleQuery": "Bryce Canyon hoodoos rock formations",
    "mustMatch": [
      "bryce",
      "canyon",
      "hoodoos"
    ],
    "aiPromptSubject": "Bryce Canyon hoodoos rock formations",
    "tip": "Ideal para practicar columnas irregulares apiladas y el ritmo de sombras proyectadas entre agujas."
  },
  {
    "id": "nintendo-gameboy-dmg",
    "name": "Consola Portátil Clásica Game Boy (Carcasa Gris y Cruceta)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🎮",
    "wikiCategories": [],
    "intitleQuery": "original Nintendo Game Boy DMG console",
    "mustMatch": [
      "original",
      "nintendo",
      "game"
    ],
    "aiPromptSubject": "original Nintendo Game Boy DMG console",
    "tip": "Un prisma rectangular con esquinas redondeadas; cuida la alineación de la pantalla, la cruceta y los botones A/B."
  },
  {
    "id": "vintage-crt-computer-monitor",
    "name": "Ordenador Clásico Años 80 con Monitor CRT Abombado y Teclado Mecánico (Macintosh / IBM)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🖥️",
    "wikiCategories": [],
    "intitleQuery": "vintage 1980s CRT computer Macintosh IBM",
    "mustMatch": [
      "vintage",
      "1980s",
      "crt"
    ],
    "aiPromptSubject": "vintage 1980s CRT computer Macintosh IBM",
    "tip": "Observa la ligera curvatura esférica de la pantalla de tubo y la inclinación ergonómica del teclado."
  },
  {
    "id": "arcade-cabinet-machine",
    "name": "Máquina Recreativa Arcade Clásica con Marquesina, Joystick y Botones",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🕹️",
    "wikiCategories": [],
    "intitleQuery": "classic arcade cabinet machine side profile",
    "mustMatch": [
      "classic",
      "arcade",
      "cabinet"
    ],
    "aiPromptSubject": "classic arcade cabinet machine side profile",
    "tip": "Domina el perfil poligonal característico del mueble arcade y el plano inclinado del panel de control."
  },
  {
    "id": "cassette-tape-compact",
    "name": "Cinta de Cassette Compacta Transparente dejando ver las Bobinas",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📼",
    "wikiCategories": [],
    "intitleQuery": "transparent audio cassette tape closeup",
    "mustMatch": [
      "transparent",
      "audio",
      "cassette"
    ],
    "aiPromptSubject": "transparent audio cassette tape closeup",
    "tip": "Alinea las dos ruedas dentadas simétricas y el trapecio inferior donde entra el cabezal."
  },
  {
    "id": "boombox-ghettoblaster-80s",
    "name": "Radiocasete Estéreo Portátil de los Años 80 (Boombox con Dos Altavoces y Vúmetros)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📻",
    "wikiCategories": [],
    "intitleQuery": "vintage 1980s stereo boombox cassette player",
    "mustMatch": [
      "vintage",
      "1980s",
      "stereo"
    ],
    "aiPromptSubject": "vintage 1980s stereo boombox cassette player",
    "tip": "Practica cilindros concéntricos en perspectiva para los conos de los altavoces y diales cromados."
  },
  {
    "id": "atari-2600-woodgrain",
    "name": "Consola Clásica Atari 2600 con Panel Frontal de Madera e Interruptores Metálicos",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🎮",
    "wikiCategories": [],
    "intitleQuery": "Atari 2600 console joystick vintage",
    "mustMatch": [
      "atari",
      "2600",
      "console"
    ],
    "aiPromptSubject": "Atari 2600 console joystick vintage",
    "tip": "Contrasta las estrías horizontales de la carcasa con el mando vertical octogonal."
  },
  {
    "id": "sony-tps-l2-walkman-headphones",
    "name": "Reproductor de Cassette Portátil con Auriculares de Espuma Naranja",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🎧",
    "wikiCategories": [],
    "intitleQuery": "vintage portable cassette player Walkman headphones",
    "mustMatch": [
      "vintage",
      "portable",
      "cassette"
    ],
    "aiPromptSubject": "vintage portable cassette player Walkman headphones",
    "tip": "Combina la caja metálica rectangular del reproductor con el arco flexible de los auriculares."
  },
  {
    "id": "oscilloscope-crt-lab",
    "name": "Osciloscopio Analógico de Laboratorio con Pantalla Reticulada y Perillas",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📟",
    "wikiCategories": [],
    "intitleQuery": "vintage analog oscilloscope laboratory instrument",
    "mustMatch": [
      "vintage",
      "analog",
      "oscilloscope"
    ],
    "aiPromptSubject": "vintage analog oscilloscope laboratory instrument",
    "tip": "Excelente ejercicio de repetición geométrica para la matriz de perillas, conectores BNC y pantalla."
  },
  {
    "id": "view-master-stereoscope",
    "name": "Visor Estereoscópico Clásico (View-Master) con Disco de Diapositivas Circular",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🥽",
    "wikiCategories": [],
    "intitleQuery": "vintage View-Master stereoscope viewer reel",
    "mustMatch": [
      "vintage",
      "view-master",
      "stereoscope"
    ],
    "aiPromptSubject": "vintage View-Master stereoscope viewer reel",
    "tip": "Estudia cómo el disco circular sobresale de la carcasa ergonómica de baquelita o plástico."
  },
  {
    "id": "vintage-jukebox-wurlitzer",
    "name": "Sinfonola / Jukebox Clásica con Arco de Tubos Luminosos y Cromo (Wurlitzer)",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🎶",
    "wikiCategories": [],
    "intitleQuery": "vintage Wurlitzer jukebox chrome arches",
    "mustMatch": [
      "vintage",
      "wurlitzer",
      "jukebox"
    ],
    "aiPromptSubject": "vintage Wurlitzer jukebox chrome arches",
    "tip": "Construye la silueta de arco de medio punto y separa los brillos intensos de las molduras metálicas."
  },
  {
    "id": "retro-television-rabbit-ears",
    "name": "Televisor Antiguo de Madera con Esquinas Redondeadas, Perillas y Antena en V",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "📺",
    "wikiCategories": [],
    "intitleQuery": "vintage 1960s CRT television rabbit ears antenna",
    "mustMatch": [
      "vintage",
      "1960s",
      "crt"
    ],
    "aiPromptSubject": "vintage 1960s CRT television rabbit ears antenna",
    "tip": "Encaja el cubo principal antes de dibujar el bisel curvo que enmarca el tubo de imagen."
  },
  {
    "id": "floppy-disk-drive-retro",
    "name": "Disquete de 3.5 Pulgadas con Obturador Metálico Deslizante y Disquetera",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "💾",
    "wikiCategories": [],
    "intitleQuery": "retro 3.5 floppy disk closeup",
    "mustMatch": [
      "retro",
      "3.5",
      "floppy"
    ],
    "aiPromptSubject": "retro 3.5 floppy disk closeup",
    "tip": "Estudio de proporciones planas, bajorrelieves sutiles y el contraste entre plástico mate y aluminio."
  },
  {
    "id": "vintage-synthesizer-moog",
    "name": "Sintetizador Analógico Clásico con Teclado, Cables Patch y Potenciómetros",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🎹",
    "wikiCategories": [],
    "intitleQuery": "vintage modular analog synthesizer Moog",
    "mustMatch": [
      "vintage",
      "modular",
      "analog"
    ],
    "aiPromptSubject": "vintage modular analog synthesizer Moog",
    "tip": "Combina la perspectiva lineal de las teclas blancas y negras con las curvas colgantes de los cables."
  },
  {
    "id": "old-payphone-coin-box",
    "name": "Teléfono Público Antiguo de Monedas en Acero y Cromo con Cable Espiral",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "☎️",
    "wikiCategories": [],
    "intitleQuery": "vintage chrome payphone coin telephone",
    "mustMatch": [
      "vintage",
      "chrome",
      "payphone"
    ],
    "aiPromptSubject": "vintage chrome payphone coin telephone",
    "tip": "El cable en espiral colgando del auricular es un ejercicio clásico de cilindros envolventes."
  },
  {
    "id": "nixie-tube-clock",
    "name": "Reloj de Tubos Nixie de Vidrio con Filamentos Luminosos en Cobre",
    "category": "retro",
    "categoryLabel": "Tecnología Retro y Aparatos Clásicos",
    "icon": "🕰️",
    "wikiCategories": [],
    "intitleQuery": "Nixie tube clock glass vacuum tubes",
    "mustMatch": [
      "nixie",
      "tube",
      "clock"
    ],
    "aiPromptSubject": "Nixie tube clock glass vacuum tubes",
    "tip": "Practica la transparencia de las ampollas cilíndricas de vidrio alineadas sobre una base prismática."
  },
  {
    "id": "comic-superhero-dynamic-pose",
    "name": "Personaje de Cómic en Pose Heroica Dinámica con Escorzo Extremo",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🦸",
    "wikiCategories": [],
    "intitleQuery": "comic book superhero dynamic action pose figure reference",
    "mustMatch": [
      "comic",
      "book",
      "superhero"
    ],
    "aiPromptSubject": "comic book superhero dynamic action pose figure reference",
    "tip": "Exagera la línea de acción, la torsión entre caja torácica y pelvis, y el tamaño de manos o pies en primer plano."
  },
  {
    "id": "anime-samurai-swordsman",
    "name": "Espadachín Estilo Manga / Anime con Hakama Fluida y Katana en Guardia",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "⚔️",
    "wikiCategories": [],
    "intitleQuery": "anime samurai character design dynamic pose reference",
    "mustMatch": [
      "anime",
      "samurai",
      "character"
    ],
    "aiPromptSubject": "anime samurai character design dynamic pose reference",
    "tip": "Usa líneas angulares y decididas para los pliegues amplios de la ropa que acompañan el movimiento de la espada."
  },
  {
    "id": "stylized-cartoon-expressions-sheet",
    "name": "Estudio de Expresiones Faciales Estilizadas (Ira, Sorpresa, Risa, Sospecha)",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🎭",
    "wikiCategories": [],
    "intitleQuery": "character design facial expressions sheet animation reference",
    "mustMatch": [
      "character",
      "design",
      "facial"
    ],
    "aiPromptSubject": "character design facial expressions sheet animation reference",
    "tip": "Estira y comprime (squash & stretch) la máscara facial manteniendo el volumen craneal subyacente."
  },
  {
    "id": "cyberpunk-mercenary-character",
    "name": "Personaje Cyberpunk con Chaqueta de Cuello Alto, Visor Óptico y Brazo Cibernético",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🕶️",
    "wikiCategories": [],
    "intitleQuery": "cyberpunk character concept art design portrait",
    "mustMatch": [
      "cyberpunk",
      "character",
      "concept"
    ],
    "aiPromptSubject": "cyberpunk character concept art design portrait",
    "tip": "Contrasta texturas de ropa urbana holgada con paneles mecánicos rígidos en las articulaciones."
  },
  {
    "id": "steampunk-inventor-aviator",
    "name": "Inventor o Aviadora Steampunk con Gafas de Latón, Abrigo Largo y Mochila Mecánica",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🎩",
    "wikiCategories": [],
    "intitleQuery": "steampunk character concept art goggles coat",
    "mustMatch": [
      "steampunk",
      "character",
      "concept"
    ],
    "aiPromptSubject": "steampunk character concept art goggles coat",
    "tip": "Cuida la silueta general (que sea reconocible en negro puro) antes de añadir hebillas y engranajes."
  },
  {
    "id": "chibi-sd-proportioned-hero",
    "name": "Personaje Estilizado en Proporciones Chibi / Super Deformed (2 a 3 Cabezas de Alto)",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "✨",
    "wikiCategories": [],
    "intitleQuery": "chibi character design proportions concept art",
    "mustMatch": [
      "chibi",
      "character",
      "design"
    ],
    "aiPromptSubject": "chibi character design proportions concept art",
    "tip": "Simplifica manos y extremidades en formas suaves manteniendo ojos expresivos y una silueta clara."
  },
  {
    "id": "post-apocalyptic-wanderer",
    "name": "Viajero Post-Apocalíptico con Capa Desgastada, Máscara de Gas y Bastón",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🏜️",
    "wikiCategories": [],
    "intitleQuery": "post apocalyptic nomad character concept art",
    "mustMatch": [
      "post",
      "apocalyptic",
      "nomad"
    ],
    "aiPromptSubject": "post apocalyptic nomad character concept art",
    "tip": "Trabaja la superposición de capas de tela asimétricas, correas cruzadas y equipo colgado."
  },
  {
    "id": "noir-detective-trenchcoat",
    "name": "Detective Noir Estilizado en Gabardina y Sombrero Fedora bajo Luz Contraluz Dura",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🕵️",
    "wikiCategories": [],
    "intitleQuery": "film noir detective trenchcoat chiaroscuro illustration",
    "mustMatch": [
      "film",
      "noir",
      "detective"
    ],
    "aiPromptSubject": "film noir detective trenchcoat chiaroscuro illustration",
    "tip": "Resuelve el personaje usando casi exclusivamente dos valores: blanco puro y sombra negra sólida."
  },
  {
    "id": "space-astronaut-explorer-suit",
    "name": "Explorador Espacial con Traje Presurizado Voluminoso y Casco Esférico",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "👨‍🚀",
    "wikiCategories": [],
    "intitleQuery": "sci-fi astronaut character design concept art",
    "mustMatch": [
      "sci-fi",
      "astronaut",
      "character"
    ],
    "aiPromptSubject": "sci-fi astronaut character design concept art",
    "tip": "Construye anillos elípticos en los pliegues de los brazos y piernas para mostrar el grosor del traje."
  },
  {
    "id": "pirate-captain-tricorne",
    "name": "Capitán Pirata Estilizado con Sombrero Tricornio, Casaca Barroca y Catalejo",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🏴‍☠️",
    "wikiCategories": [],
    "intitleQuery": "pirate captain character design concept art",
    "mustMatch": [
      "pirate",
      "captain",
      "character"
    ],
    "aiPromptSubject": "pirate captain character design concept art",
    "tip": "Juega con el contraste de formas: hombros anchos, sombrero triangular y asimetría en el rostro o postura."
  },
  {
    "id": "animated-wise-elder-wizard",
    "name": "Anciano Sabio o Alquimista Estilizado con Barba Fluida y Lentes Gruesos",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🧙",
    "wikiCategories": [],
    "intitleQuery": "stylized old wizard character design animation",
    "mustMatch": [
      "stylized",
      "old",
      "wizard"
    ],
    "aiPromptSubject": "stylized old wizard character design animation",
    "tip": "Usa formas curvas y pesadas hacia abajo para transmitir edad, sabiduría y centro de gravedad bajo."
  },
  {
    "id": "agile-parkour-runner-character",
    "name": "Corredor Urbano / Acróbata Estilizado en Salto con Ropa Deportiva Holgada",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🏃",
    "wikiCategories": [],
    "intitleQuery": "stylized parkour character dynamic jump pose",
    "mustMatch": [
      "stylized",
      "parkour",
      "character"
    ],
    "aiPromptSubject": "stylized parkour character dynamic jump pose",
    "tip": "Aplica líneas rectas para el lado en tensión del cuerpo y curvas para el lado comprimido."
  },
  {
    "id": "mecha-pilot-armor-suit",
    "name": "Piloto con Exoesqueleto Ligero y Paneles de Armadura Sci-Fi",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🤖",
    "wikiCategories": [],
    "intitleQuery": "sci-fi exosuit character design concept art",
    "mustMatch": [
      "sci-fi",
      "exosuit",
      "character"
    ],
    "aiPromptSubject": "sci-fi exosuit character design concept art",
    "tip": "Asegúrate de que las placas rígidas respeten los puntos de giro anatómicos de hombros, codos y rodillas."
  },
  {
    "id": "character-silhouette-trio",
    "name": "Contraste de Proporciones de Personajes (Fuerte Cuadrado, Ágil Triangular, Amigable Redondo)",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "👥",
    "wikiCategories": [],
    "intitleQuery": "character design shape language square triangle circle",
    "mustMatch": [
      "character",
      "design",
      "shape"
    ],
    "aiPromptSubject": "character design shape language square triangle circle",
    "tip": "Aplica el lenguaje de formas (Shape Language) para definir la personalidad solo con la geometría base."
  },
  {
    "id": "viking-shieldmaiden-warrior",
    "name": "Guerrera o Guerrero Nórdico Estilizado con Pieles, Trenzas y Escudo Redondo",
    "category": "personajes",
    "categoryLabel": "Diseño de Personajes y Estilizados",
    "icon": "🛡️",
    "wikiCategories": [],
    "intitleQuery": "viking warrior character concept art fur armor",
    "mustMatch": [
      "viking",
      "warrior",
      "character"
    ],
    "aiPromptSubject": "viking warrior character concept art fur armor",
    "tip": "Diferencia el peso visual del pelaje espeso en los hombros frente a la madera y el metal del escudo."
  },
  {
    "id": "croissant-flaky-pastry",
    "name": "Croissant Francés Recién Horneado con Capas de Hojaldre Crujiente",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🥐",
    "wikiCategories": [],
    "intitleQuery": "fresh French croissant flaky pastry closeup",
    "mustMatch": [
      "fresh",
      "french",
      "croissant"
    ],
    "aiPromptSubject": "fresh French croissant flaky pastry closeup",
    "tip": "Construye los cilindros cónicos superpuestos en media luna antes de sugerir las láminas quebradizas del hojaldre."
  },
  {
    "id": "artisan-sourdough-bread-loaf",
    "name": "Hogaza de Pan de Masa Madre Abierta mostrando la Corteza Gremiada y la Miga Alveolada",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍞",
    "wikiCategories": [],
    "intitleQuery": "artisan sourdough bread loaf sliced crumb",
    "mustMatch": [
      "artisan",
      "sourdough",
      "bread"
    ],
    "aiPromptSubject": "artisan sourdough bread loaf sliced crumb",
    "tip": "Contrasta la superficie curva y enharinada de la corteza con la textura porosa e irregular del corte interior."
  },
  {
    "id": "ramen-bowl-chopsticks-egg",
    "name": "Tazón de Ramen Japonés con Fideos, Huevo Ajitsuke, Nori y Palillos",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍜",
    "wikiCategories": [],
    "intitleQuery": "Japanese ramen bowl chopsticks egg closeup",
    "mustMatch": [
      "japanese",
      "ramen",
      "bowl"
    ],
    "aiPromptSubject": "Japanese ramen bowl chopsticks egg closeup",
    "tip": "Encaja primero la elipse perfecta del borde del cuenco y organiza los ingredientes por planos de profundidad."
  },
  {
    "id": "sushi-nigiri-maki-platter",
    "name": "Bandeja de Sushi (Nigiri de Salmón y Rollos Maki sobre Tabla de Madera)",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍣",
    "wikiCategories": [],
    "intitleQuery": "sushi nigiri maki platter closeup photography",
    "mustMatch": [
      "sushi",
      "nigiri",
      "maki"
    ],
    "aiPromptSubject": "sushi nigiri maki platter closeup photography",
    "tip": "Estudia el brillo translúcido del pescado fresco frente a la textura granulada del arroz."
  },
  {
    "id": "rustic-cheese-grapes-still-life",
    "name": "Bodegón de Queso Curado en Cuña, Racimo de Uvas y Copa de Vino en Cristal",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🧀",
    "wikiCategories": [],
    "intitleQuery": "still life cheese wedge grapes wine glass",
    "mustMatch": [
      "still",
      "life",
      "cheese"
    ],
    "aiPromptSubject": "still life cheese wedge grapes wine glass",
    "tip": "Un estudio clásico de materiales: la opacidad mate del queso, la translucidez de las uvas y el reflejo especular del cristal."
  },
  {
    "id": "stacked-pancakes-syrup",
    "name": "Torre de Tortitas (Pancakes) con Mantequilla Fundiéndose y Miel Cayendo",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🥞",
    "wikiCategories": [],
    "intitleQuery": "stack of pancakes maple syrup dripping closeup",
    "mustMatch": [
      "stack",
      "pancakes",
      "maple"
    ],
    "aiPromptSubject": "stack of pancakes maple syrup dripping closeup",
    "tip": "Alinea los discos cilíndricos apilados y dibuja los brillos líquidos de alto contraste en las gotas de sirope."
  },
  {
    "id": "gourmet-burger-layers",
    "name": "Hamburguesa Artesanal en Primer Plano mostrando Capas de Pan Brioche, Queso Fundido y Hojas",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍔",
    "wikiCategories": [],
    "intitleQuery": "gourmet burger layers closeup food photography",
    "mustMatch": [
      "gourmet",
      "burger",
      "layers"
    ],
    "aiPromptSubject": "gourmet burger layers closeup food photography",
    "tip": "Evita aplastar las capas: envuelve cada ingrediente alrededor del volumen cilíndrico central."
  },
  {
    "id": "neapolitan-pizza-slice",
    "name": "Pizza Napolitana con Bordes Inflados Tostados (Cornicione) y Hojas de Albahaca",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍕",
    "wikiCategories": [],
    "intitleQuery": "Neapolitan pizza wood fired crust closeup",
    "mustMatch": [
      "neapolitan",
      "pizza",
      "wood"
    ],
    "aiPromptSubject": "Neapolitan pizza wood fired crust closeup",
    "tip": "Practica la elipse en escorzo del plato y las burburbujas irregulares tostadas de la masa."
  },
  {
    "id": "tableware-silver-cutlery-glass",
    "name": "Estudio de Reflejos en Cuchara, Tenedor de Plata y Copa de Cristal sobre Mantel",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍴",
    "wikiCategories": [],
    "intitleQuery": "silver spoon fork wine glass reflections still life",
    "mustMatch": [
      "silver",
      "spoon",
      "fork"
    ],
    "aiPromptSubject": "silver spoon fork wine glass reflections still life",
    "tip": "En el metal pulido y el vidrio no dibujas el objeto en sí, sino las formas distorsionadas de luces y sombras del entorno."
  },
  {
    "id": "waffle-berries-powdered-sugar",
    "name": "Gofre Belga de Celdas Profundas con Frutos Rojos",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🧇",
    "wikiCategories": [],
    "intitleQuery": "Belgian waffle berries closeup",
    "mustMatch": [
      "belgian",
      "waffle",
      "berries"
    ],
    "aiPromptSubject": "Belgian waffle berries closeup",
    "tip": "Usa la cuadrícula en perspectiva de las celdas del gofre para construir el plano superior con precisión."
  },
  {
    "id": "whole-roasted-artichoke-garlic",
    "name": "Cabeza de Ajo Abierta, Cebollas y Mortero en Mesa de Cocina Rústica",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🧄",
    "wikiCategories": [],
    "intitleQuery": "rustic garlic bulbs onions kitchen still life",
    "mustMatch": [
      "rustic",
      "garlic",
      "bulbs"
    ],
    "aiPromptSubject": "rustic garlic bulbs onions kitchen still life",
    "tip": "Aprovecha las líneas longitudinales de la piel papirácea del ajo y la cebolla para describir su esfericidad."
  },
  {
    "id": "chocolate-cake-slice-layers",
    "name": "Porción Triangular de Pastel en Capas con Cobertura Brillante de Chocolate",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍰",
    "wikiCategories": [],
    "intitleQuery": "layered chocolate cake slice plate closeup",
    "mustMatch": [
      "layered",
      "chocolate",
      "cake"
    ],
    "aiPromptSubject": "layered chocolate cake slice plate closeup",
    "tip": "Trata la porción como una cuña geométrica limpia y diferencia la textura esponjosa del bizcocho del glaseado liso."
  },
  {
    "id": "seafood-lobster-lemon",
    "name": "Langosta o Cangrejo Cocido con Rodajas de Limón en Bodegón Clásico",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🦞",
    "wikiCategories": [],
    "intitleQuery": "cooked lobster lemon still life photography",
    "mustMatch": [
      "cooked",
      "lobster",
      "lemon"
    ],
    "aiPromptSubject": "cooked lobster lemon still life photography",
    "tip": "Excelente reto de caparazones articulados cilíndricos con brillos intensos."
  },
  {
    "id": "espresso-cup-biscotti",
    "name": "Taza de Espresso en Porcelana Blanca con Cucharilla sobre Plato",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "☕",
    "wikiCategories": [],
    "intitleQuery": "white porcelain espresso cup saucer spoon",
    "mustMatch": [
      "white",
      "porcelain",
      "espresso"
    ],
    "aiPromptSubject": "white porcelain espresso cup saucer spoon",
    "tip": "Verifica que las elipses de la boca de la taza, la base y el plato compartan el mismo eje vertical."
  },
  {
    "id": "sliced-citrus-fruits-kiwi",
    "name": "Frutas Cítricas Cortadas al Medio (Naranja, Pomelo, Limón y Kiwi) a Contraluz",
    "category": "gastronomia",
    "categoryLabel": "Comida y Gastronomía",
    "icon": "🍊",
    "wikiCategories": [],
    "intitleQuery": "sliced citrus fruits orange lemon translucent closeup",
    "mustMatch": [
      "sliced",
      "citrus",
      "fruits"
    ],
    "aiPromptSubject": "sliced citrus fruits orange lemon translucent closeup",
    "tip": "Observa la simetría radial de los gajos y la textura brillante de las vesículas de jugo."
  },
  {
    "id": "drapery-hanging-cloth-folds",
    "name": "Estudio de Drapería Clásica: Tela Colgada de Dos Puntos (Pliegues en Pañal y Tubulares)",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🧶",
    "wikiCategories": [],
    "intitleQuery": "classical drapery study hanging cloth folds sculpture drawing",
    "mustMatch": [
      "classical",
      "drapery",
      "study"
    ],
    "aiPromptSubject": "classical drapery study hanging cloth folds sculpture drawing",
    "tip": "Identifica los puntos de tensión (de donde cuelga la tela) y sigue cómo los pliegues caen por gravedad."
  },
  {
    "id": "crumpled-paper-chiaroscuro",
    "name": "Hoja de Papel Arrugada con Luz Lateral Dura (Planos y Aristas en Claroscuro)",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "📄",
    "wikiCategories": [],
    "intitleQuery": "crumpled paper chiaroscuro light study",
    "mustMatch": [
      "crumpled",
      "paper",
      "chiaroscuro"
    ],
    "aiPromptSubject": "crumpled paper chiaroscuro light study",
    "tip": "Uno de los mejores ejercicios académicos: cada faceta plana del papel tiene un valor tonal exacto según su ángulo hacia la luz."
  },
  {
    "id": "gnarled-tree-bark-woodgrain",
    "name": "Corteza de Árbol Rugosa y Nudos de Madera con Vetas Profundas en Macro",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🪵",
    "wikiCategories": [],
    "intitleQuery": "rough tree bark wood grain knot closeup texture",
    "mustMatch": [
      "rough",
      "tree",
      "bark"
    ],
    "aiPromptSubject": "rough tree bark wood grain knot closeup texture",
    "tip": "No dibujes cada grieta por separado: agrupa las zonas de sombra profunda y sugiere la dirección del grano."
  },
  {
    "id": "worn-leather-jacket-creases",
    "name": "Pliegues de Cuero Desgastado en Manga o Bota con Costuras y Brillos Suaves",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🧥",
    "wikiCategories": [],
    "intitleQuery": "worn leather folds creases texture closeup",
    "mustMatch": [
      "worn",
      "leather",
      "folds"
    ],
    "aiPromptSubject": "worn leather folds creases texture closeup",
    "tip": "El cuero grueso forma pliegues anchos y redondeados (en zig-zag o diamante) en las zonas de flexión."
  },
  {
    "id": "knitted-wool-cable-sweater",
    "name": "Tejido de Lana Gruesa Trenzada (Punto Ocho) en Primer Plano",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🧶",
    "wikiCategories": [],
    "intitleQuery": "chunky cable knit wool texture closeup",
    "mustMatch": [
      "chunky",
      "cable",
      "knit"
    ],
    "aiPromptSubject": "chunky cable knit wool texture closeup",
    "tip": "Traza primero los grandes cilindros entrelazados de las trenzas antes de indicar las hebras individuales."
  },
  {
    "id": "cracked-dry-earth-mud",
    "name": "Tierra Seca Cuarteada en Polígonos Irregulares con Bordes Levantados",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🏜️",
    "wikiCategories": [],
    "intitleQuery": "cracked dry mud earth texture closeup",
    "mustMatch": [
      "cracked",
      "dry",
      "mud"
    ],
    "aiPromptSubject": "cracked dry mud earth texture closeup",
    "tip": "Concéntrate en el grosor en sombra de cada grieta y la ligera curvatura cóncava de cada placa de barro."
  },
  {
    "id": "polished-chrome-knot-reflections",
    "name": "Superficie Metálica Cromada / Acero Pulido con Reflejos de Alto Contraste",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "✨",
    "wikiCategories": [],
    "intitleQuery": "chrome metal knot sphere reflection closeup",
    "mustMatch": [
      "chrome",
      "metal",
      "knot"
    ],
    "aiPromptSubject": "chrome metal knot sphere reflection closeup",
    "tip": "El secreto del cromo es colocar blancos puros justo al lado de negros profundos con transiciones nítidas."
  },
  {
    "id": "weathered-brick-peeling-plaster",
    "name": "Muro Antiguo de Ladrillo Visto con Revoque de Cal Desconchado",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🧱",
    "wikiCategories": [],
    "intitleQuery": "old brick wall peeling plaster texture",
    "mustMatch": [
      "old",
      "brick",
      "wall"
    ],
    "aiPromptSubject": "old brick wall peeling plaster texture",
    "tip": "Practica el contraste entre la textura lisa del estuco y los ladrillos erosionados que asoman debajo."
  },
  {
    "id": "braided-hemp-rope-knot",
    "name": "Nudo Marinero en Cuerda Gruesa de Cáñamo Trenzado (As de Guía o Ocho)",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🪢",
    "wikiCategories": [],
    "intitleQuery": "thick braided rope knot macro closeup",
    "mustMatch": [
      "thick",
      "braided",
      "rope"
    ],
    "aiPromptSubject": "thick braided rope knot macro closeup",
    "tip": "Dibuja primero el tubo serpenteante del nudo y luego envuelve los cordones helicoidales siguiendo su volumen."
  },
  {
    "id": "reptile-scales-skin-macro",
    "name": "Escamas de Reptil o Piel de Cocodrilo en Primer Plano",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🦎",
    "wikiCategories": [],
    "intitleQuery": "reptile scales skin macro texture",
    "mustMatch": [
      "reptile",
      "scales",
      "skin"
    ],
    "aiPromptSubject": "reptile scales skin macro texture",
    "tip": "Observa cómo las escamas cambian de tamaño y se comprimen en escorzo al girar sobre la curvatura del cuerpo."
  },
  {
    "id": "bird-wing-feathers-layered",
    "name": "Plumaje de Ala de Ave Superpuesto en Abanico",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🪶",
    "wikiCategories": [],
    "intitleQuery": "bird wing feathers layered macro texture",
    "mustMatch": [
      "bird",
      "wing",
      "feathers"
    ],
    "aiPromptSubject": "bird wing feathers layered macro texture",
    "tip": "Agrupa las plumas por hileras (coberteras y remeras) como tejas superpuestas antes de detallar las bárbulas."
  },
  {
    "id": "rusted-corroded-iron-chain",
    "name": "Eslabones de Cadena de Hierro Oxidado y Corroído",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "⛓️",
    "wikiCategories": [],
    "intitleQuery": "rusted iron chain links closeup texture",
    "mustMatch": [
      "rusted",
      "iron",
      "chain"
    ],
    "aiPromptSubject": "rusted iron chain links closeup texture",
    "tip": "El óxido mate absorbe la luz y no tiene reflejos blancos duros; usa texturas granulares en el terminador de sombra."
  },
  {
    "id": "silk-satin-fabric-folds",
    "name": "Pliegues de Seda o Satén Brillante con Luces Especulares Intensas",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🎀",
    "wikiCategories": [],
    "intitleQuery": "silk satin fabric folds shiny drapery",
    "mustMatch": [
      "silk",
      "satin",
      "fabric"
    ],
    "aiPromptSubject": "silk satin fabric folds shiny drapery",
    "tip": "A diferencia del algodón mate, la seda tiene medios tonos oscuros y brillos blancos agudos en las crestas de los pliegues."
  },
  {
    "id": "wicker-rattan-weave-basket",
    "name": "Tejido de Mimbre o Ratán Entrelazado en Cesta Curva",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🧺",
    "wikiCategories": [],
    "intitleQuery": "woven wicker basket texture closeup",
    "mustMatch": [
      "woven",
      "wicker",
      "basket"
    ],
    "aiPromptSubject": "woven wicker basket texture closeup",
    "tip": "Usa el patrón de cestería como líneas de contorno cruzadas que revelan la redondez de la cesta."
  },
  {
    "id": "carved-marble-sculpture-folds",
    "name": "Túnica Esculpida en Mármol Blanco (Estudio de Pliegues de Bernini o Fidias)",
    "category": "texturas",
    "categoryLabel": "Estudios de Texturas y Superficies",
    "icon": "🗿",
    "wikiCategories": [],
    "intitleQuery": "marble sculpture drapery folds Bernini closeup",
    "mustMatch": [
      "marble",
      "sculpture",
      "drapery"
    ],
    "aiPromptSubject": "marble sculpture drapery folds Bernini closeup",
    "tip": "Ideal para estudiar valores sutiles, luz reflejada dentro de las oquedades y bordes duros vs. suaves."
  },
  {
    "id": "classic-library-bookshelves-ladder",
    "name": "Biblioteca Clásica de Madera con Estanterías Altas, Escalera Corredera y Sillón",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "📚",
    "wikiCategories": [],
    "intitleQuery": "classic wooden library interior bookshelves ladder",
    "mustMatch": [
      "classic",
      "wooden",
      "library"
    ],
    "aiPromptSubject": "classic wooden library interior bookshelves ladder",
    "tip": "Excelente reto de perspectiva interior: agrupa los libros en bloques geométricos en vez de dibujar lomo por lomo."
  },
  {
    "id": "artist-studio-easel-skylight",
    "name": "Estudio de Artista con Caballete de Madera, Mesas de Trabajo y Luz de Claraboya",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🎨",
    "wikiCategories": [],
    "intitleQuery": "artist painter studio interior easel natural light",
    "mustMatch": [
      "artist",
      "painter",
      "studio"
    ],
    "aiPromptSubject": "artist painter studio interior easel natural light",
    "tip": "Estudia cómo la luz cenital o de ventana ilumina los objetos cercanos y deja el fondo en penumbra."
  },
  {
    "id": "bohemian-living-room-plants",
    "name": "Salón Acogedor con Sofá, Alfombra, Estanterías y Plantas junto a un Ventanal",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🛋️",
    "wikiCategories": [],
    "intitleQuery": "cozy living room interior large window armchair plants",
    "mustMatch": [
      "cozy",
      "living",
      "room"
    ],
    "aiPromptSubject": "cozy living room interior large window armchair plants",
    "tip": "Define primero la caja espacial (suelo, paredes y techo) con 1 o 2 puntos de fuga antes de colocar los muebles."
  },
  {
    "id": "parisian-cafe-tables-chairs",
    "name": "Interior de Café Clásico con Mesas Redondas, Sillas de Bistrot y Espejos",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "☕",
    "wikiCategories": [],
    "intitleQuery": "historic Parisian cafe interior bistrot chairs tables",
    "mustMatch": [
      "historic",
      "parisian",
      "cafe"
    ],
    "aiPromptSubject": "historic Parisian cafe interior bistrot chairs tables",
    "tip": "Practica las elipses de los tableros de las mesas a distintas alturas con respecto a tu línea de horizonte."
  },
  {
    "id": "grand-staircase-foyer",
    "name": "Vestíbulo con Gran Escalera Curva, Balaustrada y Lámpara de Araña",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🏛️",
    "wikiCategories": [],
    "intitleQuery": "grand curved staircase hall chandelier interior",
    "mustMatch": [
      "grand",
      "curved",
      "staircase"
    ],
    "aiPromptSubject": "grand curved staircase hall chandelier interior",
    "tip": "Cada peldaño gira progresivamente alrededor del eje central de la escalera."
  },
  {
    "id": "vintage-kitchen-stove-shelves",
    "name": "Cocina Rústica o Vintage con Alacena, Cacerolas de Cobre Colgadas y Mesa Central",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🍳",
    "wikiCategories": [],
    "intitleQuery": "rustic vintage kitchen interior copper pots table",
    "mustMatch": [
      "rustic",
      "vintage",
      "kitchen"
    ],
    "aiPromptSubject": "rustic vintage kitchen interior copper pots table",
    "tip": "Aprovecha la isla o mesa central para establecer la cuadrícula en perspectiva del suelo."
  },
  {
    "id": "watchmaker-carpenter-workbench",
    "name": "Taller de Carpintería o Relojería con Banco de Trabajo y Herramientas Ordenadas",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🛠️",
    "wikiCategories": [],
    "intitleQuery": "traditional woodworker workshop bench tools interior",
    "mustMatch": [
      "traditional",
      "woodworker",
      "workshop"
    ],
    "aiPromptSubject": "traditional woodworker workshop bench tools interior",
    "tip": "Agrupa las herramientas de la pared en siluetas simples y enfoca el contraste en el banco de trabajo principal."
  },
  {
    "id": "sunlit-corridor-arches-shadows",
    "name": "Galería o Claustro Interior con Arcos y Sombras Proyectadas en el Suelo por el Sol",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🏛️",
    "wikiCategories": [],
    "intitleQuery": "cloister corridor arches sunlight shadows floor",
    "mustMatch": [
      "cloister",
      "corridor",
      "arches"
    ],
    "aiPromptSubject": "cloister corridor arches sunlight shadows floor",
    "tip": "Las franjas de luz y sombra en el pavimento refuerzan de inmediato la sensación de espacio tridimensional."
  },
  {
    "id": "attic-bedroom-slanted-roof",
    "name": "Habitación en Buhardilla con Vigas de Madera Inclinadas y Ventana con Luz Natural",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🛏️",
    "wikiCategories": [],
    "intitleQuery": "attic room wooden beams skylight window interior",
    "mustMatch": [
      "attic",
      "room",
      "wooden"
    ],
    "aiPromptSubject": "attic room wooden beams skylight window interior",
    "tip": "Estudia la intersección de los planos inclinados del tejado con las paredes verticales."
  },
  {
    "id": "chesterfield-leather-armchair",
    "name": "Sillón Chesterfield de Cuero Capitonnée con Botones Hundidos y Reposabrazos en Voluta",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🛋️",
    "wikiCategories": [],
    "intitleQuery": "Chesterfield tufted leather armchair three quarter view",
    "mustMatch": [
      "chesterfield",
      "tufted",
      "leather"
    ],
    "aiPromptSubject": "Chesterfield tufted leather armchair three quarter view",
    "tip": "El patrón romboidal del capitoné describe perfectamente la curvatura del respaldo y los brazos."
  },
  {
    "id": "antique-rolltop-writing-desk",
    "name": "Escritorio Antiguo de Cortina (Secreter) con Cajones y Compartimentos",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🪑",
    "wikiCategories": [],
    "intitleQuery": "antique wooden roll top desk drawers open",
    "mustMatch": [
      "antique",
      "wooden",
      "roll"
    ],
    "aiPromptSubject": "antique wooden roll top desk drawers open",
    "tip": "Un gran ejercicio de cajas anidadas en perspectiva y proporciones de mobiliario."
  },
  {
    "id": "greenhouse-interior-pots",
    "name": "Interior de Invernadero con Mesas de Cultivo, Macetas de Terracota y Estructura Acristalada",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🪴",
    "wikiCategories": [],
    "intitleQuery": "greenhouse interior terracotta pots glass roof",
    "mustMatch": [
      "greenhouse",
      "interior",
      "terracotta"
    ],
    "aiPromptSubject": "greenhouse interior terracotta pots glass roof",
    "tip": "Combina la geometría lineal de la estructura metálica con las formas orgánicas del follaje."
  },
  {
    "id": "gothic-cathedral-nave-vaults",
    "name": "Nave Central de Catedral Gótica con Bóvedas de Crucería y Vitrales",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "⛪",
    "wikiCategories": [],
    "intitleQuery": "Gothic cathedral nave ribbed vaults interior perspective",
    "mustMatch": [
      "gothic",
      "cathedral",
      "nave"
    ],
    "aiPromptSubject": "Gothic cathedral nave ribbed vaults interior perspective",
    "tip": "Sigue las columnas fasciculadas desde el suelo hasta donde se abren en abanico en las nervaduras de la bóveda."
  },
  {
    "id": "japanese-tatami-room-shoji",
    "name": "Habitación Tradicional Japonesa (Washitsu) con Paneles Shōji y Esteras de Tatami",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "🍵",
    "wikiCategories": [],
    "intitleQuery": "traditional Japanese tatami room shoji screens interior",
    "mustMatch": [
      "traditional",
      "japanese",
      "tatami"
    ],
    "aiPromptSubject": "traditional Japanese tatami room shoji screens interior",
    "tip": "La modulación exacta de los tatamis en el suelo te da una cuadrícula perfecta de perspectiva."
  },
  {
    "id": "barbershop-vintage-chair-interior",
    "name": "Sillón Clásico de Barbería en Cuero y Hierro Fundido en Interior Retro",
    "category": "interiores",
    "categoryLabel": "Interiores y Espacios Arquitectónicos",
    "icon": "💈",
    "wikiCategories": [],
    "intitleQuery": "vintage barbershop chair leather chrome",
    "mustMatch": [
      "vintage",
      "barbershop",
      "chair"
    ],
    "aiPromptSubject": "vintage barbershop chair leather chrome",
    "tip": "Descompón el sillón en base circular, asiento, respaldo reclinable y reposapiés metálico."
  },
  {
    "id": "acanthus-scroll-ornament",
    "name": "Ornamento Barroco o Renacentista de Hojas de Acanto en Espiral (Relieve / Grabado)",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "⚜️",
    "wikiCategories": [],
    "intitleQuery": "acanthus leaf scroll baroque ornament engraving relief",
    "mustMatch": [
      "acanthus",
      "leaf",
      "scroll"
    ],
    "aiPromptSubject": "acanthus leaf scroll baroque ornament engraving relief",
    "tip": "Dibuja primero la espiral en C o S que sirve de espina dorsal antes de desplegar los lóbulos de las hojas."
  },
  {
    "id": "heraldic-coat-of-arms-crest",
    "name": "Escudo Heráldico Grabado con Yelmo, Lambrequines, Leones Rampantes y Divisa",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "🛡️",
    "wikiCategories": [],
    "intitleQuery": "heraldic coat of arms engraving crest",
    "mustMatch": [
      "heraldic",
      "coat",
      "arms"
    ],
    "aiPromptSubject": "heraldic coat of arms engraving crest",
    "tip": "Trabaja con un eje vertical de simetría y observa el entrelazado rítmico de los lambrequines vegetales."
  },
  {
    "id": "vintage-intaglio-postage-stamp",
    "name": "Estampilla Postal Antigua Grabada al Buril con Marco Ornamental y Retrato",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "📮",
    "wikiCategories": [],
    "intitleQuery": "vintage engraved postage stamp ornate border macro",
    "mustMatch": [
      "vintage",
      "engraved",
      "postage"
    ],
    "aiPromptSubject": "vintage engraved postage stamp ornate border macro",
    "tip": "Estudia cómo el sombreado por líneas paralelas (cross-hatching) crea volumen utilizando una sola tinta."
  },
  {
    "id": "celtic-knotwork-interlace",
    "name": "Entrelazado Celta Tallado en Piedra o Metal (Nudo Infinito)",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "🪢",
    "wikiCategories": [],
    "intitleQuery": "Celtic knot interlace carved stone ornament",
    "mustMatch": [
      "celtic",
      "knot",
      "interlace"
    ],
    "aiPromptSubject": "Celtic knot interlace carved stone ornament",
    "tip": "Traza primero la rejilla geométrica subyacente y luego define qué cinta pasa por encima y cuál por debajo."
  },
  {
    "id": "art-nouveau-ironwork-balcony",
    "name": "Reja o Balcón Art Nouveau en Hierro Forjado con Curvas en Látigo y Motivos Florales",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "⚜️",
    "wikiCategories": [],
    "intitleQuery": "Art Nouveau wrought iron gate ornament Guimard",
    "mustMatch": [
      "art",
      "nouveau",
      "wrought"
    ],
    "aiPromptSubject": "Art Nouveau wrought iron gate ornament Guimard",
    "tip": "Practica trazos largos y continuos de muñeca y hombro para lograr la fluidez orgánica del modernismo."
  },
  {
    "id": "islamic-arabesque-muqarnas-tile",
    "name": "Celosía y Azulejo Geométrico Hispanoárabe (Lacería y Arabescos de la Alhambra)",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "🕌",
    "wikiCategories": [],
    "intitleQuery": "Alhambra geometric tile arabesque pattern closeup",
    "mustMatch": [
      "alhambra",
      "geometric",
      "tile"
    ],
    "aiPromptSubject": "Alhambra geometric tile arabesque pattern closeup",
    "tip": "Comienza con un círculo dividido en 6 u 8 partes iguales para construir la estrella poligonal central."
  },
  {
    "id": "illuminated-manuscript-initial",
    "name": "Letra Capitular Iluminada Medieval con Filigranas, Oro y Motivos Entrelazados",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "📜",
    "wikiCategories": [],
    "intitleQuery": "medieval illuminated manuscript ornate initial letter",
    "mustMatch": [
      "medieval",
      "illuminated",
      "manuscript"
    ],
    "aiPromptSubject": "medieval illuminated manuscript ornate initial letter",
    "tip": "Contrasta la estructura sólida y arquitectónica de la letra con la delicadeza de las volutas que la rodean."
  },
  {
    "id": "silver-filigree-brooch-pendant",
    "name": "Joya o Broche de Filigrana en Plata con Hilos Trenzados y Granulado",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "💎",
    "wikiCategories": [],
    "intitleQuery": "silver filigree jewelry ornate brooch macro",
    "mustMatch": [
      "silver",
      "filigree",
      "jewelry"
    ],
    "aiPromptSubject": "silver filigree jewelry ornate brooch macro",
    "tip": "Agrupa las micro-espirales en zonas tonales antes de destacar los brillos puntuales del metal."
  },
  {
    "id": "antique-pocket-watch-engraving",
    "name": "Tapa de Reloj de Bolsillo Grabada a Mano con Guilloché y Volutas Florales",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "⌚",
    "wikiCategories": [],
    "intitleQuery": "engraved antique gold pocket watch case ornament",
    "mustMatch": [
      "engraved",
      "antique",
      "gold"
    ],
    "aiPromptSubject": "engraved antique gold pocket watch case ornament",
    "tip": "Observa cómo las curvas del grabado se adaptan a la superficie convexa de la tapa circular."
  },
  {
    "id": "gothic-stone-tracery-quatrefoil",
    "name": "Tracería Gótica Calada en Piedra (Cuadrifolios y Triforios)",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "⛪",
    "wikiCategories": [],
    "intitleQuery": "Gothic stone tracery quatrefoil architecture closeup",
    "mustMatch": [
      "gothic",
      "stone",
      "tracery"
    ],
    "aiPromptSubject": "Gothic stone tracery quatrefoil architecture closeup",
    "tip": "Un excelente ejercicio de compás a mano alzada y grosor de biseles en piedra."
  },
  {
    "id": "baroque-gilded-picture-frame",
    "name": "Esquina de Marco Barroco Tallado y Dorado con Rocalla y Volutas",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "🖼️",
    "wikiCategories": [],
    "intitleQuery": "ornate baroque gilded frame corner closeup",
    "mustMatch": [
      "ornate",
      "baroque",
      "gilded"
    ],
    "aiPromptSubject": "ornate baroque gilded frame corner closeup",
    "tip": "Usa el eje diagonal de 45° de la esquina como línea de simetría de las volutas talladas."
  },
  {
    "id": "vintage-banknote-guilloche-rosette",
    "name": "Roseta Geométrica y Grabado Clásico de Billete Antiguo",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "💵",
    "wikiCategories": [],
    "intitleQuery": "vintage banknote engraving vignette guilloche",
    "mustMatch": [
      "vintage",
      "banknote",
      "engraving"
    ],
    "aiPromptSubject": "vintage banknote engraving vignette guilloche",
    "tip": "Practica el control de presión del lápiz o estilógrafo mediante tramas cruzadas limpias."
  },
  {
    "id": "mayan-aztec-carved-glyph-stone",
    "name": "Glifo o Relieve Mesoamericano Tallado en Piedra (Maya / Azteca)",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "🗿",
    "wikiCategories": [],
    "intitleQuery": "Mayan carved stone glyph relief closeup",
    "mustMatch": [
      "mayan",
      "carved",
      "stone"
    ],
    "aiPromptSubject": "Mayan carved stone glyph relief closeup",
    "tip": "Separa claramente el plano frontal del relieve del plano profundo del fondo mediante la sombra proyectada del borde."
  },
  {
    "id": "venetian-lace-rosette-pattern",
    "name": "Rosetón de Encaje Veneciano de Aguja con Motivos Geométricos y Florales",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "❄️",
    "wikiCategories": [],
    "intitleQuery": "Venetian needle lace rosette macro pattern",
    "mustMatch": [
      "venetian",
      "needle",
      "lace"
    ],
    "aiPromptSubject": "Venetian needle lace rosette macro pattern",
    "tip": "Dibuja en negativo oscureciendo los huecos del fondo para que el hilo claro resalte."
  },
  {
    "id": "cartouche-scroll-map-compass-rose",
    "name": "Rosa de los Vientos y Cartela Barroca de Mapa Antiguo",
    "category": "filigranas",
    "categoryLabel": "Filigranas, Estampillas y Símbolos",
    "icon": "🧭",
    "wikiCategories": [],
    "intitleQuery": "antique map compass rose ornate cartouche engraving",
    "mustMatch": [
      "antique",
      "map",
      "compass"
    ],
    "aiPromptSubject": "antique map compass rose ornate cartouche engraving",
    "tip": "Combina la precisión radial de los rumbos de la brújula con los pergaminos enrollados de la cartela."
  },
  {
    "id": "ergonomic-power-drill",
    "name": "Taladro Inalámbrico de Diseño Industrial con Empuñadura Ergonómica y Mandril",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🔩",
    "wikiCategories": [],
    "intitleQuery": "cordless power drill industrial design product photo",
    "mustMatch": [
      "cordless",
      "power",
      "drill"
    ],
    "aiPromptSubject": "cordless power drill industrial design product photo",
    "tip": "Construye el cilindro del motor arriba, el mango inclinado en ángulo ergonómico y el bloque prismático de la batería abajo."
  },
  {
    "id": "dyson-industrial-vacuum-appliance",
    "name": "Electrodoméstico Ciclónico o Secador de Diseño Industrial Contemporáneo",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🌀",
    "wikiCategories": [],
    "intitleQuery": "modern industrial design appliance product photography",
    "mustMatch": [
      "modern",
      "industrial",
      "design"
    ],
    "aiPromptSubject": "modern industrial design appliance product photography",
    "tip": "Estudia las intersecciones limpias entre cilindros, conos truncados y superficies plásticas satinadas."
  },
  {
    "id": "braun-dieter-rams-appliance",
    "name": "Aparato de Diseño Minimalista Funcional (Estilo Braun / Dieter Rams)",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "📻",
    "wikiCategories": [],
    "intitleQuery": "Braun Dieter Rams industrial design product",
    "mustMatch": [
      "braun",
      "dieter",
      "rams"
    ],
    "aiPromptSubject": "Braun Dieter Rams industrial design product",
    "tip": "Práctica de precisión geométrica pura: proporciones exactas, rejillas de puntos y botones perfectamente alineados."
  },
  {
    "id": "juicy-salif-philippe-starck",
    "name": "Exprimidor de Diseño Industrial Escultórico en Aluminio Pulido (Philippe Starck)",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🍋",
    "wikiCategories": [],
    "intitleQuery": "Philippe Starck Juicy Salif lemon squeezer",
    "mustMatch": [
      "philippe",
      "starck",
      "juicy"
    ],
    "aiPromptSubject": "Philippe Starck Juicy Salif lemon squeezer",
    "tip": "Un cuerpo ovoide facetado sostenido por tres patas arácnidas; ideal para practicar simetría tridimensional y reflejos."
  },
  {
    "id": "professional-game-controller",
    "name": "Mando de Videojuegos Ergonómico Moderno en Vista 3/4 (DualSense / Xbox)",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🎮",
    "wikiCategories": [],
    "intitleQuery": "modern ergonomic gamepad controller product photo",
    "mustMatch": [
      "modern",
      "ergonomic",
      "gamepad"
    ],
    "aiPromptSubject": "modern ergonomic gamepad controller product photo",
    "tip": "Domina las curvas de doble curvatura (superficies orgánicas CAD) en los agarres laterales y los joysticks cilíndricos."
  },
  {
    "id": "aerodynamic-cycling-helmet",
    "name": "Casco de Ciclismo o Motociclismo Aerodinámico con Nervaduras y Ventilación",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🚴",
    "wikiCategories": [],
    "intitleQuery": "aerodynamic cycling helmet industrial design",
    "mustMatch": [
      "aerodynamic",
      "cycling",
      "helmet"
    ],
    "aiPromptSubject": "aerodynamic cycling helmet industrial design",
    "tip": "Parte de una semiesfera alargada y talla las cavidades aerodinámicas siguiendo las líneas de flujo."
  },
  {
    "id": "espresso-portafilter-machine",
    "name": "Portafiltro Profesional de Cafetera Espresso en Acero Inoxidable y Mango Torneado",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "☕",
    "wikiCategories": [],
    "intitleQuery": "espresso machine portafilter stainless steel closeup",
    "mustMatch": [
      "espresso",
      "machine",
      "portafilter"
    ],
    "aiPromptSubject": "espresso machine portafilter stainless steel closeup",
    "tip": "Alinea el cilindro pesado de la cazoleta metálica con el eje cónico del mango inclinado."
  },
  {
    "id": "multi-tool-leatherman-pliers",
    "name": "Herramienta Multiusos Plegable de Acero Inoxidable (Estilo Leatherman) Abierta",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🛠️",
    "wikiCategories": [],
    "intitleQuery": "stainless steel folding multi tool pliers",
    "mustMatch": [
      "stainless",
      "steel",
      "folding"
    ],
    "aiPromptSubject": "stainless steel folding multi tool pliers",
    "tip": "Excelente reto de articulaciones mecánicas plegables y chapa de acero troquelada."
  },
  {
    "id": "cinema-camera-rig-cage",
    "name": "Cámara de Cine Digital Modular con Lente de Enfoque Manual y Parasol (Matte Box)",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🎥",
    "wikiCategories": [],
    "intitleQuery": "digital cinema camera lens matte box rig",
    "mustMatch": [
      "digital",
      "cinema",
      "camera"
    ],
    "aiPromptSubject": "digital cinema camera lens matte box rig",
    "tip": "Combina el cubo central del cuerpo de cámara con los anillos cilíndricos dentados del objetivo y el parasol rectangular."
  },
  {
    "id": "ergonomic-computer-mouse",
    "name": "Ratón Ergonómico Vertical o de Diseño Industrial con Rueda Metálica (MX Master)",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🖱️",
    "wikiCategories": [],
    "intitleQuery": "ergonomic computer mouse MX Master product photo",
    "mustMatch": [
      "ergonomic",
      "computer",
      "mouse"
    ],
    "aiPromptSubject": "ergonomic computer mouse MX Master product photo",
    "tip": "Usa líneas de sección transversal (cross-contours) para describir la bóveda asimétrica donde apoya la palma."
  },
  {
    "id": "quadcopter-camera-drone",
    "name": "Dron Cuadricóptero Plegable con Brazos Articulados y Cámara en Gimbal",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🛸",
    "wikiCategories": [],
    "intitleQuery": "folding camera drone quadcopter product photo",
    "mustMatch": [
      "folding",
      "camera",
      "drone"
    ],
    "aiPromptSubject": "folding camera drone quadcopter product photo",
    "tip": "Verifica que los cuatro motores con sus hélices formen un plano coherente en perspectiva."
  },
  {
    "id": "industrial-sewing-machine-head",
    "name": "Cabezal de Máquina de Coser o Herramienta de Precisión de Escritorio",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🪡",
    "wikiCategories": [],
    "intitleQuery": "industrial sewing machine head mechanism",
    "mustMatch": [
      "industrial",
      "sewing",
      "machine"
    ],
    "aiPromptSubject": "industrial sewing machine head mechanism",
    "tip": "Separa el brazo horizontal superior de la base plana y alinea verticalmente la barra de la aguja."
  },
  {
    "id": "french-curve-architect-tools",
    "name": "Juego de Reglas de Cálculo, Plantillas Burmester (Curvas Francesas) y Escalímetro",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "📐",
    "wikiCategories": [],
    "intitleQuery": "architect drafting tools French curves scale ruler",
    "mustMatch": [
      "architect",
      "drafting",
      "tools"
    ],
    "aiPromptSubject": "architect drafting tools French curves scale ruler",
    "tip": "Practica el trazado de curvas de radio variable continuo sin quiebres bruscos."
  },
  {
    "id": "carabiner-climbing-hardware",
    "name": "Mosquetón de Escalada y Polea en Aluminio Anodizado con Rosca de Seguridad",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🧗",
    "wikiCategories": [],
    "intitleQuery": "climbing carabiner pulley aluminum hardware",
    "mustMatch": [
      "climbing",
      "carabiner",
      "pulley"
    ],
    "aiPromptSubject": "climbing carabiner pulley aluminum hardware",
    "tip": "Observa la sección transversal en forma de I de la aleación de aluminio que reduce peso manteniendo resistencia."
  },
  {
    "id": "boka-kettle-gooseneck-pour",
    "name": "Tetera de Cuello de Cisne (Gooseneck Kettle) en Acero Mate para Café de Especialidad",
    "category": "industrial",
    "categoryLabel": "Diseño Industrial y Objetos Funcionales",
    "icon": "🫖",
    "wikiCategories": [],
    "intitleQuery": "matte black gooseneck kettle industrial design",
    "mustMatch": [
      "matte",
      "black",
      "gooseneck"
    ],
    "aiPromptSubject": "matte black gooseneck kettle industrial design",
    "tip": "Contrasta el tronco de cono limpio del cuerpo con la curva en S precisa del pico vertedor."
  },
  {
    "id": "european-wyvern-dragon",
    "name": "Dragón Europeo o Wyvern con Alas Membranáceas, Cuernos y Escamas",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🐉",
    "wikiCategories": [],
    "intitleQuery": "dragon creature concept art sculpture anatomy reference",
    "mustMatch": [
      "dragon",
      "creature",
      "concept"
    ],
    "aiPromptSubject": "dragon creature concept art sculpture anatomy reference",
    "tip": "Basa su anatomía en animales reales: alas de murciélago (dedos alargados), cuello de reptil y musculatura felina."
  },
  {
    "id": "mythological-griffin-creature",
    "name": "Grifo Mitológico (Cuerpo de León con Cabeza, Plumas y Alas de Águila Real)",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🦅",
    "wikiCategories": [],
    "intitleQuery": "griffin mythological creature sculpture concept art",
    "mustMatch": [
      "griffin",
      "mythological",
      "creature"
    ],
    "aiPromptSubject": "griffin mythological creature sculpture concept art",
    "tip": "Estudia la zona de transición anatómica en los hombros donde el plumaje del águila se funde con el pelaje del león."
  },
  {
    "id": "ornate-elven-paladin-armor",
    "name": "Armadura Fantástica Ornamentada con Hombreras en Capas y Filigranas Metálicas",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🛡️",
    "wikiCategories": [],
    "intitleQuery": "ornate fantasy plate armor concept art",
    "mustMatch": [
      "ornate",
      "fantasy",
      "plate"
    ],
    "aiPromptSubject": "ornate fantasy plate armor concept art",
    "tip": "Superpón las placas metálicas como escamas para que permitan el movimiento creíble del torso y los brazos."
  },
  {
    "id": "minotaur-labyrinth-beast",
    "name": "Minotauro o Criatura Bestial con Cabeza de Toro y Torso Musculoso",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🐂",
    "wikiCategories": [],
    "intitleQuery": "minotaur creature anatomy sculpture concept art",
    "mustMatch": [
      "minotaur",
      "creature",
      "anatomy"
    ],
    "aiPromptSubject": "minotaur creature anatomy sculpture concept art",
    "tip": "Aumenta el volumen de los trapecios y el cuello para sostener de forma convincente el peso del cráneo y los cuernos."
  },
  {
    "id": "pegasus-winged-horse",
    "name": "Pegaso (Caballo Alado en Corveta con Grandes Alas Desplegadas)",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🐎",
    "wikiCategories": [],
    "intitleQuery": "winged horse Pegasus sculpture statue",
    "mustMatch": [
      "winged",
      "horse",
      "pegasus"
    ],
    "aiPromptSubject": "winged horse Pegasus sculpture statue",
    "tip": "Asegúrate de que la inserción de las alas nazca cerca de la cruz y las escápulas sin bloquear las patas delanteras."
  },
  {
    "id": "ancient-treant-forest-golem",
    "name": "Gólem de Piedra o Ent (Guardián Arbóreo Formado por Raíces, Corteza y Roca)",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🌳",
    "wikiCategories": [],
    "intitleQuery": "tree ent stone golem creature concept art",
    "mustMatch": [
      "tree",
      "ent",
      "stone"
    ],
    "aiPromptSubject": "tree ent stone golem creature concept art",
    "tip": "Usa volúmenes pesados y asimétricos combinando anatomía humanoide con texturas de roca musgosa y raíces."
  },
  {
    "id": "kraken-giant-cephalopod-ship",
    "name": "Kraken o Criatura Abisal con Tentáculos y Ventosas Envolviendo un Galeón",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🐙",
    "wikiCategories": [],
    "intitleQuery": "kraken sea monster tentacles concept art",
    "mustMatch": [
      "kraken",
      "sea",
      "monster"
    ],
    "aiPromptSubject": "kraken sea monster tentacles concept art",
    "tip": "Los tentáculos son cilindros cónicos en espiral; muestra las ventosas solo cuando el lado interno gira hacia el espectador."
  },
  {
    "id": "chinese-imperial-dragon-statue",
    "name": "Dragón Oriental Imperial Serpenteante con Bigotes, Melena y Garras sobre Esfera",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🐉",
    "wikiCategories": [],
    "intitleQuery": "Chinese dragon bronze stone sculpture closeup",
    "mustMatch": [
      "chinese",
      "dragon",
      "bronze"
    ],
    "aiPromptSubject": "Chinese dragon bronze stone sculpture closeup",
    "tip": "Sigue la línea sinusoidal continua de la columna vertebral desde los cuernos hasta la cola."
  },
  {
    "id": "fantasy-greatsword-runic-hilt",
    "name": "Espada Fantástica o Martillo de Guerra con Guarda Esculpida, Runas y Empuñadura",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "⚔️",
    "wikiCategories": [],
    "intitleQuery": "fantasy greatsword ornate hilt concept art",
    "mustMatch": [
      "fantasy",
      "greatsword",
      "ornate"
    ],
    "aiPromptSubject": "fantasy greatsword ornate hilt concept art",
    "tip": "Mantén un eje central rectilíneo impecable desde el pomo hasta la punta de la hoja."
  },
  {
    "id": "floating-citadel-fantasy-castle",
    "name": "Ciudadela Fantástica o Castillo sobre Islas Flotantes de Roca con Puentes y Cascadas",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🏰",
    "wikiCategories": [],
    "intitleQuery": "floating island fantasy castle concept art",
    "mustMatch": [
      "floating",
      "island",
      "fantasy"
    ],
    "aiPromptSubject": "floating island fantasy castle concept art",
    "tip": "Usa perspectiva de tres puntos y varía la escala de las islas secundarias para crear profundidad épica."
  },
  {
    "id": "cerberus-three-headed-hound",
    "name": "Cerbero o Sabueso Mitológico de Tres Cabezas en Tensión Muscular",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🐺",
    "wikiCategories": [],
    "intitleQuery": "Cerberus mythological creature sculpture concept art",
    "mustMatch": [
      "cerberus",
      "mythological",
      "creature"
    ],
    "aiPromptSubject": "Cerberus mythological creature sculpture concept art",
    "tip": "Orienta cada una de las tres cabezas en un ángulo distinto (frontal, perfil y 3/4) naciendo del mismo pecho."
  },
  {
    "id": "phoenix-mythical-fire-bird",
    "name": "Ave Fénix con Largas Plumas Caudales en Movimiento y Cresta Real",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🔥",
    "wikiCategories": [],
    "intitleQuery": "phoenix mythical bird sculpture concept art",
    "mustMatch": [
      "phoenix",
      "mythical",
      "bird"
    ],
    "aiPromptSubject": "phoenix mythical bird sculpture concept art",
    "tip": "Prioriza curvas largas en S y dinamismo ascendente en las alas y la cola."
  },
  {
    "id": "dwarven-axe-shield-emblem",
    "name": "Hacha de Doble Filo y Escudo Enano con Grabados Geométricos y Nudos",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🪓",
    "wikiCategories": [],
    "intitleQuery": "dwarven battle axe ornate shield concept art",
    "mustMatch": [
      "dwarven",
      "battle",
      "axe"
    ],
    "aiPromptSubject": "dwarven battle axe ornate shield concept art",
    "tip": "El estilo enano se basa en formas pesadas, angulares, biseles gruesos y motivos geométricos entrelazados."
  },
  {
    "id": "centaur-archer-anatomy",
    "name": "Centauro Arquero en Galope (Transición Anatómica entre Torso Humano y Cuerpo Equino)",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🏹",
    "wikiCategories": [],
    "intitleQuery": "centaur sculpture anatomy reference",
    "mustMatch": [
      "centaur",
      "sculpture",
      "anatomy"
    ],
    "aiPromptSubject": "centaur sculpture anatomy reference",
    "tip": "Une la pelvis humana suavemente con el pecho y las escápulas del caballo manteniendo el equilibrio dinámico."
  },
  {
    "id": "wizard-staff-crystal-lantern",
    "name": "Báculo de Mago de Madera Retorcida Engarzando un Cristal o Farol",
    "category": "fantasia",
    "categoryLabel": "Fantasía y Criaturas Mitológicas",
    "icon": "🪄",
    "wikiCategories": [],
    "intitleQuery": "fantasy wizard staff crystal wood concept art",
    "mustMatch": [
      "fantasy",
      "wizard",
      "staff"
    ],
    "aiPromptSubject": "fantasy wizard staff crystal wood concept art",
    "tip": "Contrasta las formas orgánicas y nudosas de la rama con las facetas geométricas rectas del cristal."
  }
];
