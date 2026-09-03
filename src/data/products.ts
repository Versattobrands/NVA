import { ASSETS } from "./assetsMap";

export type ProductFeature = {
  name: string;
  icon?: string;
};

export type InfoBlock = {
  title: string;
  highlight: string;
  description?: string;
};

export type Product = {
  slug: string;
  name: string;
  area: "Agro";
  description: string;
  subtitle?: string;
  logo?: string;
  infoBlocks?: InfoBlock[];
  features: ProductFeature[];
  benefits?: string[];
  image?: string;
  technicalSheet?: string;
  featured?: boolean;
  validationRequired?: boolean;
  notes?: string;
};

export const APLITEC_PRODUCTS: Product[] = [
  {
    slug: "troppoil",

    name: "TROPPOIL",
    area: "Agro",
    subtitle: "Origem MINERAL com aditivos VEGETAIS",
    logo: ASSETS.aplitecIcons.troppoil.logo,
    description: "Adjuvante de origem mineral com aditivos vegetais, desenvolvido para diferentes aspectos da aplicação agrícola.",
    image: ASSETS.images.troppoilSquare,
    features: [
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.aplitecIcons.troppoil.tankMix },
      { name: "EMULSIFICANTE ESPALHANTE ADESIVO", icon: ASSETS.aplitecIcons.troppoil.emulsificante },
      { name: "ANTI-DERIVA", icon: ASSETS.aplitecIcons.troppoil.antiDeriva },
      { name: "DISPERSANTE", icon: ASSETS.aplitecIcons.troppoil.dispersante }
    ],
    benefits: [
      "Melhora a cobertura e adesão das gotas na folha",
      "Reduz a deriva na aplicação aérea e terrestre",
      "Compatível com a maioria dos defensivos em tank mix",
      "Origem mineral com aditivos vegetais de alta performance"
    ],
    featured: true
  },
  {
    slug: "spray-h",
    name: "SPRAY H",
    area: "Agro",
    logo: ASSETS.aplitecIcons.sprayH.logo,
    description: "Adjuvante multifuncional para herbicidas; Use 50-100ml/ha primeiro na calda.",
    features: [
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.aplitecIcons.sprayH.tankMix },
      { name: "EMULSIFICANTE ESPALHANTE ADESIVO", icon: ASSETS.aplitecIcons.sprayH.emulsificante },
      { name: "DISPERSANTE", icon: ASSETS.aplitecIcons.sprayH.dispersante },
      { name: "ANTI-DERIVA", icon: ASSETS.aplitecIcons.sprayH.antiDeriva },
      { name: "ANTI-ESPUMA", icon: ASSETS.aplitecIcons.sprayH.antiEspuma },
      { name: "REDUTOR pH", icon: ASSETS.aplitecIcons.sprayH.redutorPh }
    ],
    benefits: [
      "Otimiza a eficácia de herbicidas em tank mix",
      "Reduz a tensão superficial e melhora o espalhamento",
      "Elimina espuma indesejada no tanque",
      "Reduz o pH da calda para maior estabilidade dos herbicidas",
      "Minimiza a deriva durante a aplicação"
    ]
  },
  {
    slug: "spray-if",
    name: "SPRAY IF",
    area: "Agro",
    logo: ASSETS.aplitecIcons.sprayIf.logo,
    description: "Adjuvante multifuncional para inseticidas e fungicidas; use 50-100ml/ha primeiro na calda.",
    features: [
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.aplitecIcons.sprayIf.tankMix },
      { name: "EMULSIFICANTE ESPALHANTE ADESIVO", icon: ASSETS.aplitecIcons.sprayIf.emulsificante },
      { name: "DISPERSANTE", icon: ASSETS.aplitecIcons.sprayIf.dispersante },
      { name: "ANTI-DERIVA", icon: ASSETS.aplitecIcons.sprayIf.antiDeriva },
      { name: "ANTI-ESPUMA", icon: ASSETS.aplitecIcons.sprayIf.antiEspuma }
    ],
    benefits: [
      "Potencializa a eficácia de inseticidas e fungicidas",
      "Melhora a cobertura e penetração na folha",
      "Compatível com ampla gama de defensivos em tank mix",
      "Controla a espuma durante o preparo da calda",
      "Reduz a deriva e melhora a deposição"
    ]
  },
  {
    slug: "detex",
    name: "DETEX",
    area: "Agro",
    logo: ASSETS.aplitecIcons.detex.logo,
    description: "Emulsificação de óleos vegetais brutos e degomados.",
    features: [
      { name: "EMULSIFICANTE ESPALHANTE ADESIVO", icon: ASSETS.aplitecIcons.detex.emulsificante },
      { name: "DISPERSANTE", icon: ASSETS.aplitecIcons.detex.dispersante }
    ],
    benefits: [
      "Promove emulsificação eficiente de óleos vegetais brutos e degomados",
      "Melhora a dispersão na calda de pulverização",
      "Aumenta a cobertura e a adesão na folha"
    ]
  },
  {
    slug: "dsolv-protax",
    name: "DSOLV + PROTAX",
    area: "Agro",
    logo: ASSETS.aplitecIcons.dsolv.logo,
    description: "Compatibiliza misturas complexas de glifosato e outros defensivos com fertilizantes.",
    features: [
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.aplitecIcons.dsolv.tankMix }
    ],
    benefits: [
      "Compatibiliza glifosato com fertilizantes foliares em tank mix",
      "Evita a formação de precipitados e incompatibilidades na calda",
      "Garante estabilidade em misturas complexas de defensivos"
    ]
  },
  {
    slug: "dsolv-m",
    name: "DSOLV + M",
    area: "Agro",
    logo: ASSETS.aplitecIcons.dsolvM.logo,
    description: "Compatibiliza misturas complexas de defensivos EC / Óleos / MANCOZEB.",
    features: [
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.aplitecIcons.dsolvM.tankMix }
    ],
    benefits: [
      "Compatibiliza misturas de defensivos EC com óleos e MANCOZEB",
      "Previne precipitações e separação de fases na calda",
      "Facilita o preparo de caldas complexas com segurança"
    ]
  },
  {
    slug: "mataspuma",
    name: "MATASPUMA",
    area: "Agro",
    logo: ASSETS.aplitecIcons.mataspuma.logo,
    description: "Elimina a espuma indesejada.",
    features: [
      { name: "ANTI-ESPUMA", icon: ASSETS.aplitecIcons.mataspuma.antiEspuma }
    ],
    benefits: [
      "Elimina rapidamente a espuma no tanque de pulverização",
      "Facilita o preparo correto da calda",
      "Melhora a eficiência do enchimento e mistura"
    ]
  }
];

export const AGRO_PRODUCTS: Product[] = [
  {
    slug: "troppoil",
    name: "Troppoil",
    area: "Agro",
    description: "Adjuvante de origem mineral com aditivos vegetais.",
    image: ASSETS.products.troppoil,
    features: [
      { name: "Emulsificante", icon: ASSETS.icons.emulsificante },
      { name: "Espalhante", icon: ASSETS.icons.espalhante },
      { name: "Adesivo", icon: ASSETS.icons.adesivo },
      { name: "Tank mix compatível", icon: ASSETS.icons.tankMix },
      { name: "Anti-deriva", icon: ASSETS.icons.antiDeriva },
      { name: "Dispersante", icon: ASSETS.icons.dispersante }
    ],
    benefits: [
      "Melhora a cobertura e adesão das gotas na folha",
      "Reduz a deriva na aplicação aérea e terrestre",
      "Compatível com a maioria dos defensivos em tank mix",
      "Origem mineral com aditivos vegetais de alta performance"
    ],
    featured: true
  },
  {
    slug: "stimulus",
    name: "Stimulus",
    area: "Agro",
    description: "Solução associada ao estímulo de plantas e agentes microbiológicos dentro da atuação Agro.",
    image: ASSETS.products.generic,
    validationRequired: true,
    notes: "Verificar se o produto oficial é Stimatrix Gold ao invés de Stimulus. Nome pendente de validação nos assets.",
    features: [
      { name: "Estimulação", icon: ASSETS.icons.estimulaEvolucao }
    ],
    benefits: [
      "Estimula o desenvolvimento vegetal",
      "Sinergismo com microrganismos benéficos do solo e da planta"
    ]
  },
  {
    slug: "stimatrix-gold",
    name: "Stimatrix Gold",
    area: "Agro",
    description: "Produto associado à estimulação e à evolução do desenvolvimento vegetal.",
    image: ASSETS.products.generic,
    infoBlocks: [
      {
        title: "Nutrientes Elaborados:",
        highlight: "L-aminoácidos",
        description: "Carboidratos de origem vegetal."
      },
      {
        title: "Nutrientes Minerais:",
        highlight: "Todos os 17 Macros/Micros",
        description: "Nutrientes inclusos Selênio."
      },
      {
        title: "Componentes:",
        highlight: "Elicitores de PGRs com Algas"
      }
    ],
    features: [
      { name: "Estimula evolução", icon: ASSETS.icons.estimulaEvolucao },
      { name: "Bio-sinergia", icon: ASSETS.icons.bioSinergia },
      { name: "Multi mecanismo de ação", icon: ASSETS.icons.multiMecanismo },
      { name: "Efeito protetor", icon: ASSETS.icons.efeitoProtetor }
    ],
    benefits: [
      "Nutrição completa com todos os 17 macro e micronutrientes incluindo Selênio",
      "L-aminoácidos e carboidratos de origem vegetal para bio-estimulação",
      "Elicitores de reguladores de crescimento vegetal (PGRs) com algas",
      "Promove bio-sinergia com a planta e organismos microbiológicos",
      "Efeito anti-estresse e protetor"
    ]
  },
  {
    slug: "aminobio",
    name: "Aminobio",
    area: "Agro",
    description: "Produto voltado à nutrição com L-aminoácidos hidrolisados e ácidos fúlvicos e húmicos.",
    image: ASSETS.products.generic,
    features: [
      { name: "L-aminoácidos", icon: ASSETS.icons.lAminoacidos },
      { name: "Ácidos fúlvicos", icon: ASSETS.icons.acidosFulvicos },
      { name: "Ácidos húmicos", icon: ASSETS.icons.acidosFulvicos },
      { name: "Nutrição", icon: ASSETS.icons.nutricao },
      { name: "Bio-sinergia", icon: ASSETS.icons.bioSinergia }
    ],
    benefits: [
      "Nutrição foliar com L-aminoácidos hidrolisados de alta absorção",
      "Ácidos fúlvicos e húmicos para maior disponibilidade de nutrientes",
      "Estimula a sinergia com a planta e organismos microbiológicos",
      "Auxilia no manejo de distúrbios nutricionais",
      "Efeito anti-estresse para melhor recuperação das plantas"
    ]
  },
  {
    slug: "nodusec",
    name: "Nodusec",
    area: "Agro",
    description: "Produto associado ao enraizamento e à bio-sinergia, com nutrientes e características voltadas ao desenvolvimento vegetal.",
    image: ASSETS.products.generic,
    features: [
      { name: "Enraizador em pó" },
      { name: "Grafite secante" },
      { name: "Ni" },
      { name: "Co" },
      { name: "Mo" },
      { name: "Zn" },
      { name: "B" },
      { name: "Bio-sinergia", icon: ASSETS.icons.bioSinergia },
      { name: "Estímulo à evolução", icon: ASSETS.icons.estimulaEvolucao },
      { name: "Sinergia com a planta e organismos microbiológicos" },
      { name: "Anti-estresse", icon: ASSETS.icons.antiEstresse },
      { name: "Multi mecanismo de ação", icon: ASSETS.icons.multiMecanismo },
      { name: "Manejo de distúrbio nutricional", icon: ASSETS.icons.disturbioNutricional }
    ],
    benefits: [
      "Enraizador em pó com grafite secante para tratamento de sementes em batelada",
      "Fornece micronutrientes essenciais: Ni, Co, Mo, Zn e B",
      "Mais acabamento e menos água no TS batelada",
      "Estimula o desenvolvimento e sinergia com organismos microbiológicos",
      "Efeito anti-estresse e multi mecanismo de ação"
    ]
  },
  {
    slug: "honra",
    name: "Honra",
    area: "Agro",
    description: "Produto inovador com múltiplos modos de ação, associado à nutrição, sanidade e resistência das plantas.",
    image: ASSETS.products.generic,
    features: [
      { name: "Multi mecanismo de ação", icon: ASSETS.icons.multiMecanismo },
      { name: "Indução de resistência", icon: ASSETS.icons.inducaoResistencia },
      { name: "Efeito protetor", icon: ASSETS.icons.efeitoProtetor },
      { name: "Nutrição", icon: ASSETS.icons.nutricao },
      { name: "Sanidade", icon: ASSETS.icons.sanidade },
      { name: "Resistência", icon: ASSETS.icons.inducaoResistencia }
    ],
    benefits: [
      "Plantas saudáveis e produtivas com múltiplos modos de ação",
      "Praticidade no preparo de caldas — líquido, solúvel, compatível e pH neutro",
      "Melhor eficiência e proteção junto a fungicidas sistêmicos",
      "Promove nutrição, sanidade e indução de resistência"
    ],
    notes: "Não afirmar controle de doenças."
  },
  {
    slug: "vipmax",
    name: "Vipmax",
    area: "Agro",
    description: "Produto associado a estratégias de nutrição, proteção e manejo fitossanitário.",
    image: ASSETS.products.generic,
    features: [
      { name: "Multi mecanismo de ação", icon: ASSETS.icons.multiMecanismo },
      { name: "Dispersante", icon: ASSETS.icons.dispersante },
      { name: "Efeito protetor", icon: ASSETS.icons.efeitoProtetor },
      { name: "Auxílio ao manejo fitossanitário" }
    ],
    benefits: [
      "Acondiciona a água de pulverização com eletrólitos estabilizadores",
      "Aumenta a eficácia dos defensivos e promove melhor absorção foliar",
      "Controla pH de águas ácidas e auxilia misturas de tanque",
      "Efeito espalhante-adesivo para maior cobertura foliar"
    ]
  },
  {
    slug: "aminoill",
    name: "Aminoill",
    area: "Agro",
    description: "Adjuvante agrícola balanceado que combina eletrólitos de dióxido de cloro e tensoativos, contribuindo para a qualidade da água e das gotas durante a pulverização agrícola.",
    image: ASSETS.products.generic,
    features: [
      { name: "Emulsificante", icon: ASSETS.icons.emulsificante },
      { name: "Espalhante", icon: ASSETS.icons.espalhante },
      { name: "Adesivo", icon: ASSETS.icons.adesivo },
      { name: "Tank mix compatível", icon: ASSETS.icons.tankMix },
      { name: "Redutor de pH", icon: ASSETS.icons.redutorPh },
      { name: "Anti-espuma", icon: ASSETS.icons.antiEspuma },
      { name: "Anti-deriva", icon: ASSETS.icons.antiDeriva },
      { name: "pH neutro", icon: ASSETS.icons.phNeutro },
      { name: "Efeito protetor", icon: ASSETS.icons.efeitoProtetor },
      { name: "Tecnologia de aminoácido + óleo" }
    ],
    benefits: [
      "Tecnologia de aminoácido + óleo para maior absorção com herbicidas",
      "Promove melhor absorção e nutrição em aplicações foliares",
      "Reduz o pH da calda e elimina a espuma indesejada",
      "Anti-deriva e efeito espalhante-adesivo de alta performance"
    ]
  },
  {
    slug: "essencial",
    name: "Essencial",
    area: "Agro",
    description: "Adjuvante associado a óleos essenciais e a estratégias de aplicação agrícola.",
    image: ASSETS.products.generic,
    features: [
      { name: "Tank mix compatível", icon: ASSETS.icons.tankMix },
      { name: "Emulsificante", icon: ASSETS.icons.emulsificante },
      { name: "Espalhante", icon: ASSETS.icons.espalhante },
      { name: "Adesivo", icon: ASSETS.icons.adesivo },
      { name: "Repelência", icon: ASSETS.icons.repelencia },
      { name: "Efeito translaminar", icon: ASSETS.icons.efeitoTranslaminar }
    ],
    benefits: [
      "100% miscível em água com efeito translaminar (aumenta absorção e translocação)",
      "Quebra a tensão superficial da gota, dispensando outros adjuvantes",
      "Melhora a estabilidade e compatibilidade da calda, reduzindo riscos de fitotoxicidade",
      "Auxilia na limpeza do sistema de pulverização (tanque, peneiras e bicos)"
    ]
  },
  {
    slug: "lemond",
    name: "Lemond",
    area: "Agro",
    description: "Adjuvante com combinação de óleos essenciais de citronela, alho e laranja, desenvolvido para auxiliar a absorção de defensivos e a limpeza de tanque, peneiras e bicos.",
    image: ASSETS.products.generic,
    features: [
      { name: "Poder da citronela", icon: ASSETS.icons.citronela },
      { name: "Poder do D-limoneno", icon: ASSETS.icons.dLimoneno },
      { name: "Poder do alho", icon: ASSETS.icons.alho },
      { name: "Tank mix compatível", icon: ASSETS.icons.tankMix },
      { name: "Emulsificante", icon: ASSETS.icons.emulsificante },
      { name: "Espalhante", icon: ASSETS.icons.espalhante },
      { name: "Adesivo", icon: ASSETS.icons.adesivo },
      { name: "Repelência", icon: ASSETS.icons.repelencia },
      { name: "Efeito translaminar", icon: ASSETS.icons.efeitoTranslaminar }
    ],
    benefits: [
      "Combinação de óleos essenciais de citronela, alho e D-limoneno (laranja)",
      "Efeito translaminar para maior absorção e translocação dos defensivos",
      "100% miscível em água e compatível em tank mix",
      "Auxilia na limpeza do sistema de pulverização",
      "Melhora a estabilidade da calda e reduz riscos de fitotoxicidade"
    ],
    notes: "Não afirmar controle ou eliminação de pragas."
  },
  {
    slug: "shock-sk31",
    name: "Shock SK31",
    area: "Agro",
    description: "Enxofre solúvel super concentrado para nutrir e sinalizar quimicamente as plantas.",
    image: ASSETS.products.generic,
    validationRequired: true,
    features: [],
    benefits: [
      "Enxofre solúvel super concentrado para nutrição foliar",
      "Sinalização química das plantas para manejo fitossanitário",
      "Promove maturação, enchimento e qualidade dos grãos/frutos",
      "pH neutro e compatível com outros defensivos"
    ],
    notes: "TODO: Solicitar a descrição técnica oficial e características confirmadas."
  },
  {
    slug: "suncal",
    name: "Suncal",
    area: "Agro",
    description: "Nanopartículas para nutrição e proteção solar das plantas.",
    image: ASSETS.products.generic,
    features: [
      { name: "Enxofre solúvel", icon: ASSETS.icons.enxofreSoluvel },
      { name: "Superconcentrado" },
      { name: "Nutrição", icon: ASSETS.icons.nutricao },
      { name: "Proteção solar" },
      { name: "Nanopartículas" },
      { name: "Maturação" },
      { name: "Enchimento" },
      { name: "Qualidade" },
      { name: "Repelência", icon: ASSETS.icons.repelencia },
      { name: "Efeito protetor", icon: ASSETS.icons.efeitoProtetor },
      { name: "Anti-estresse", icon: ASSETS.icons.antiEstresse },
      { name: "pH neutro", icon: ASSETS.icons.phNeutro }
    ],
    benefits: [
      "Formulação líquida com nanopartículas de fácil aplicação via folha e solo",
      "Alta percolação no perfil do solo, auxiliando no desenvolvimento radicular",
      "Reflete parte da radiação UV e IV danosa — reduz a temperatura foliar e a evapotranspiração",
      "Fornece minerais-chave para nutrição e proteção sob estresse climático",
      "Efeito anti-estresse e protetor"
    ],
    notes: "Não utilizar o termo 'desalojante' sem validação técnica."
  },
  {
    slug: "bioshock",
    name: "Bioshock",
    area: "Agro",
    description: "Acondicionador para pulverizações eficientes contra percevejos.\n\nPercevejo-marrom — Euschistus heros\nPercevejo-verde-pequeno — Piezodorus guildinii\nPercevejo-verde — Nezara viridula\nPercevejo-barriga-verde — Diceraeus furcatus",
    image: ASSETS.products.generic,
    features: [
      { name: "Especificidade", icon: ASSETS.icons.especificidade },
      { name: "Sinergia", icon: ASSETS.icons.bioSinergia },
      { name: "Tank mix compatível", icon: ASSETS.icons.tankMix },
      { name: "pH neutro", icon: ASSETS.icons.phNeutro },
      { name: "Bio-sinergia", icon: ASSETS.icons.bioSinergia },
      { name: "Multi mecanismo de ação", icon: ASSETS.icons.multiMecanismo }
    ],
    benefits: [
      "Promove melhor eficácia dos defensivos contra percevejos",
      "Auxilia no manejo de quebra de resistência",
      "Acondiciona a água, neutraliza pH e promove efeito espalhante-adesivo",
      "Multi mecanismo de ação: contato, especificidade e sinergia",
      "Tank mix compatível com pH neutro"
    ],
    notes: "Usar a grafia oficial encontrada nos assets. Não afirmar controle de pragas sem validação regulatória."
  }
];

export const STIMULUS_PRODUCTS: Product[] = [
  {
    slug: "stimatrix-gold",
    name: "STIMATRIX GOLD",
    area: "Agro",
    logo: ASSETS.stimulusIcons.stimatrixGold.logo,
    description: "Nutrição e proteção de alta performance.",
    infoBlocks: [
      {
        title: "Nutrientes Elaborados:",
        highlight: "L-aminoácidos",
        description: "Carboidratos de origem vegetal."
      },
      {
        title: "Nutrientes Minerais:",
        highlight: "Todos os 17 Macros/Micros",
        description: "Nutrientes inclusos Selênio."
      },
      {
        title: "Componentes:",
        highlight: "Elicitores de PGRs",
        description: "com Algas"
      }
    ],
    features: [
      { name: "ANTI-ESTRESSE", icon: ASSETS.stimulusIcons.stimatrixGold.antiEstresse },
      { name: "EFEITO PROTETOR", icon: ASSETS.stimulusIcons.stimatrixGold.efeitoProtetor },
      { name: "BIO SINERGIA", icon: ASSETS.stimulusIcons.stimatrixGold.bioSinergia },
      { name: "MULTI MECANISMO DE AÇÃO", icon: ASSETS.stimulusIcons.stimatrixGold.multiMecanismoAcao },
      { name: "ESTIMULA EVOLUÇÃO", icon: ASSETS.stimulusIcons.stimatrixGold.estimulaEvolucao }
    ],
    benefits: [
      "Nutrição completa com todos os 17 macro e micronutrientes incluindo Selênio",
      "L-aminoácidos e carboidratos de origem vegetal para bio-estimulação",
      "Elicitores de reguladores de crescimento vegetal (PGRs) com algas",
      "Promove bio-sinergia com a planta e organismos microbiológicos",
      "Efeito anti-estresse e protetor de alta performance"
    ],
    featured: true
  },
  {
    slug: "aminobio",
    name: "AMINOBIO",
    area: "Agro",
    logo: ASSETS.stimulusIcons.aminobio.logo,
    description: "Nutrição com L-AMINOÁCIDOS hidrolisados e ÁCIDOS FÚLVICOS e HÚMICOS. \nSINERGIA com PLANTA e organismos MICROBIOLÓGICOS.",
    features: [
      { name: "BIO SINERGIA", icon: ASSETS.stimulusIcons.aminobio.bioSinergia },
      { name: "ANTI ESTRESSE", icon: ASSETS.stimulusIcons.aminobio.antiEstresse },
      { name: "DISTÚRBIO NUTRICIONAL", icon: ASSETS.stimulusIcons.aminobio.disturbioNutricional }
    ],
    benefits: [
      "Nutrição foliar com L-aminoácidos hidrolisados de alta absorção",
      "Ácidos fúlvicos e húmicos para maior disponibilidade de nutrientes",
      "Estimula a sinergia com a planta e organismos microbiológicos",
      "Auxilia no manejo de distúrbios nutricionais",
      "Efeito anti-estresse para melhor recuperação das plantas"
    ]
  },
  {
    slug: "nodusec",
    name: "NODUSEC",
    area: "Agro",
    logo: ASSETS.stimulusIcons.nodusec.logo,
    description: "ENRAIZADOR em pó com GRAFITE SECANTE e nutrients Ni+Co+Mo+Zn+B. \nTS BATELADA com mais ACABAMENTO e MENOS ÁGUA.",
    features: [
      { name: "BIO SINERGIA", icon: ASSETS.stimulusIcons.nodusec.bioSinergia },
      { name: "MULTI MECANISMO DE AÇÃO", icon: ASSETS.stimulusIcons.nodusec.multiMecanismoAcao },
      { name: "ESTIMULA EVOLUÇÃO", icon: ASSETS.stimulusIcons.nodusec.estimulaEvolucao },
      { name: "MANEJO", icon: ASSETS.stimulusIcons.nodusec.manejo }
    ],
    benefits: [
      "Enraizador em pó com grafite secante para tratamento de sementes em batelada",
      "Fornece micronutrientes essenciais: Ni, Co, Mo, Zn e B",
      "Mais acabamento e menos água no TS batelada",
      "Estimula o desenvolvimento e sinergia com organismos microbiológicos",
      "Efeito anti-estresse e multi mecanismo de ação"
    ]
  }
];

export const NUTRIPROTECTION_PRODUCTS: Product[] = [
  {
    slug: "honra",
    name: "HONRA",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.honra.logo,
    description: "Inovador e exclusivo produto com múltiplos modos de ação que promovem nutrição, sanidade e resistência às plantas.",
    features: [
      { name: "MULTI MECANISMO DE AÇÃO", icon: ASSETS.nutriprotectionIcons.honra.multiMecanismoAcao },
      { name: "INDUÇÃO RESISTÊNCIA", icon: ASSETS.nutriprotectionIcons.honra.inducaoResistencia },
      { name: "EFEITO PROTETOR", icon: ASSETS.nutriprotectionIcons.honra.efeitoProtetor }
    ],
    benefits: [
      "Plantas saudáveis e produtivas com múltiplos modos de ação",
      "Praticidade no preparo de caldas — líquido, solúvel, compatível e pH neutro",
      "Melhor eficiência e proteção junto a fungicidas sistêmicos",
      "Promove nutrição, sanidade e indução de resistência"
    ]
  },
  {
    slug: "forca-sanit",
    name: "FORÇA SANIT",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.forcaSanit.logo,
    description: "OTIMIZAÇÃO de controle do MANEJO FITOSSANITÁRIO. MAIS FORÇA contra as doenças no MANEJO FITOSSANITÁRIO.",
    features: [
      { name: "MULTI MECANISMO DE AÇÃO", icon: ASSETS.nutriprotectionIcons.forcaSanit.multiMecanismoAcao },
      { name: "EFEITO PROTETOR", icon: ASSETS.nutriprotectionIcons.forcaSanit.efeitoProtetor },
      { name: "DISPERSANTE", icon: ASSETS.aplitecIcons.sprayH.dispersante } // Using an existing dispersante icon as fallback if specific doesn't exist
    ],
    benefits: [
      "Otimização do controle no manejo fitossanitário",
      "Maior força e eficiência contra doenças no manejo",
      "Multi mecanismo de ação com efeito protetor e dispersante"
    ]
  },
  {
    slug: "vipmax",
    name: "VIPMAX",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.vipmax.logo,
    description: "É um balanceado adjuvante agrícola que combina eletrólitos de dióxido de cloro e tensoativos surfactants que melhoram a qualidade da água e a qualidade físico-química das gotas durante a pulverização agrícola.",
    features: [
      { name: "EMULSIFICANTE ESPALHANTE ADESIVO", icon: ASSETS.nutriprotectionIcons.vipmax.emulsificante },
      { name: "pH NEUTRO", icon: ASSETS.nutriprotectionIcons.vipmax.phNeutro },
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.nutriprotectionIcons.vipmax.tankMix },
      { name: "EFEITO PROTETOR", icon: ASSETS.nutriprotectionIcons.vipmax.efeitoProtetor }
    ],
    benefits: [
      "Acondiciona a água de pulverização com eletrólitos estabilizadores",
      "Aumenta a eficácia dos defensivos e promove melhor absorção foliar",
      "Controla pH de águas ácidas e auxilia misturas de tanque",
      "Efeito espalhante-adesivo para maior cobertura foliar"
    ]
  },
  {
    slug: "aminoill",
    name: "AMINOILL",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.aminoill.logo,
    description: "Com HERBICIDAS, promove melhor ABSORÇÃO e NUTRIÇÃO. Tecnologia de AMINOÁCIDO+ÓLEO.",
    features: [
      { name: "REDUTOR pH", icon: ASSETS.nutriprotectionIcons.aminoill.redutorPh },
      { name: "ANTI-ESPUMA", icon: ASSETS.nutriprotectionIcons.aminoill.antiEspuma },
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.nutriprotectionIcons.aminoill.tankMix },
      { name: "EMULSIFICANTE ESPALHANTE ADESIVO", icon: ASSETS.nutriprotectionIcons.aminoill.emulsificante },
      { name: "ANTI-DERIVA", icon: ASSETS.nutriprotectionIcons.aminoill.antiDeriva },
      { name: "EFEITO PROTETOR", icon: ASSETS.nutriprotectionIcons.aminoill.efeitoProtetor },
      { name: "ANTI-ESTRESSE", icon: ASSETS.nutriprotectionIcons.aminoill.antiEstresse }
    ],
    benefits: [
      "Tecnologia de aminoácido + óleo para maior absorção com herbicidas",
      "Promove melhor absorção e nutrição em aplicações foliares",
      "Reduz o pH da calda e elimina a espuma indesejada",
      "Anti-deriva e efeito espalhante-adesivo de alta performance"
    ]
  },
  {
    slug: "essencial",
    name: "ESSENCIAL",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.essencial.logo,
    description: "Combinação de óleos essenciais de citronella, alho e laranja em um inovador adjuvante que auxilia a absorção de defensivos e limpeza de tanque, peneiras e bicos.",
    features: [
      { name: "PODER DA CITRONELA", icon: ASSETS.nutriprotectionIcons.essencial.poderCitronela },
      { name: "PODER DO D-LIMONENO", icon: ASSETS.nutriprotectionIcons.essencial.poderLimoneno },
      { name: "PODER DO ALHO", icon: ASSETS.nutriprotectionIcons.essencial.poderAlho },
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.aplitecIcons.troppoil.tankMix }, // Using fallback if needed
      { name: "EMULSIFICANTE ESPALHANTE ADESIVO", icon: ASSETS.aplitecIcons.troppoil.emulsificante },
      { name: "REPELÊNCIA", icon: ASSETS.nutriprotectionIcons.essencial.repelencia },
      { name: "EFEITO TRANSLAMINAR", icon: ASSETS.nutriprotectionIcons.essencial.efeitoTranslaminar }
    ],
    benefits: [
      "100% miscível em água com efeito translaminar (aumenta absorção e translocação)",
      "Quebra a tensão superficial da gota, dispensando outros adjuvantes",
      "Melhora a estabilidade e compatibilidade da calda, reduzindo riscos de fitotoxicidade",
      "Auxilia na limpeza do sistema de pulverização (tanque, peneiras e bicos)"
    ]
  },
  {
    slug: "lemond",
    name: "LEMOND",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.lemond.logo,
    description: "Combinação de óleos essenciais de citronella, alho e laranja em um inovador adjuvante que auxilia a absorção de defensivos e limpeza de tanque, peneiras e bicos.",
    features: [
      { name: "PODER DO D-LIMONENO", icon: ASSETS.nutriprotectionIcons.lemond.poderLimoneno },
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.aplitecIcons.troppoil.tankMix },
      { name: "EMULSIFICANTE ESPALHANTE ADESIVO", icon: ASSETS.aplitecIcons.troppoil.emulsificante },
      { name: "REPELÊNCIA", icon: ASSETS.nutriprotectionIcons.essencial.repelencia },
      { name: "EFEITO TRANSLAMINAR", icon: ASSETS.nutriprotectionIcons.essencial.efeitoTranslaminar }
    ],
    benefits: [
      "Combinação de óleos essenciais de citronela, alho e D-limoneno (laranja)",
      "Efeito translaminar para maior absorção e translocação dos defensivos",
      "100% miscível em água e compatível em tank mix",
      "Auxilia na limpeza do sistema de pulverização",
      "Melhora a estabilidade da calda e reduz riscos de fitotoxicidade"
    ]
  },
  {
    slug: "shock-sk31",
    name: "SHOCK SK31",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.shockSk31.logo,
    description: "ENXOFRE SOLÚVEL SUPER CONCENTRADO para NUTRIR e sinalizar quimicamente = DESALOJANTE",
    features: [
      { name: "MATURAÇÃO ENCHIMENTO QUALIDADE", icon: ASSETS.nutriprotectionIcons.shockSk31.maturacao },
      { name: "pH NEUTRO", icon: ASSETS.nutriprotectionIcons.shockSk31.phNeutro },
      { name: "REPELÊNCIA", icon: ASSETS.nutriprotectionIcons.shockSk31.repelencia }
    ],
    benefits: [
      "Enxofre solúvel super concentrado para nutrição foliar",
      "Sinalização química das plantas para manejo fitossanitário",
      "Promove maturação, enchimento e qualidade dos grãos/frutos",
      "pH neutro e repelência natural"
    ]
  },
  {
    slug: "suncal",
    name: "SUNCAL",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.suncal.logo,
    description: "NANO PARTÍCULAS para a NUTRIÇÃO & PROTEÇÃO SOLAR",
    features: [
      { name: "DISTÚRBIO NUTRICIONAL", icon: ASSETS.nutriprotectionIcons.suncal.disturbioNutricional },
      { name: "EFEITO PROTETOR", icon: ASSETS.nutriprotectionIcons.suncal.efeitoProtetor },
      { name: "ANTI-ESTRESSE", icon: ASSETS.stimulusIcons.stimatrixGold.antiEstresse } // fallback
    ],
    benefits: [
      "Formulação líquida com nanopartículas de fácil aplicação via folha e solo",
      "Alta percolação no perfil do solo, auxiliando no desenvolvimento radicular",
      "Reflete parte da radiação UV e IV danosa — reduz a temperatura foliar e a evapotranspiração",
      "Fornece minerais-chave para nutrição e proteção sob estresse climático",
      "Efeito anti-estresse e protetor"
    ]
  },
  {
    slug: "bioshock",
    name: "BIOSHOCK",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.bioshock.logo,
    description: "Acondicionador para pulverizações EFICIENTES contra PERCEVEJOS",
    features: [
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.nutriprotectionIcons.bioshock.tankMix },
      { name: "BIO SINERGIA", icon: ASSETS.nutriprotectionIcons.bioshock.bioSinergia },
      { name: "pH NEUTRO", icon: ASSETS.nutriprotectionIcons.bioshock.phNeutro },
      { name: "MULTI MECANISMO DE AÇÃO", icon: ASSETS.nutriprotectionIcons.bioshock.multiMecanismoAcao }
    ],
    benefits: [
      "Promove melhor eficácia dos defensivos contra percevejos",
      "Auxilia no manejo de quebra de resistência",
      "Acondiciona a água, neutraliza pH e promove efeito espalhante-adesivo",
      "Multi mecanismo de ação: contato, especificidade e sinergia",
      "Tank mix compatível com pH neutro"
    ]
  }
];

export const PME_PRODUCTS: Product[] = [
  {
    slug: "phn",
    name: "PHN",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.phn.logo,
    description: "Linha pHn = pH Neutro e com alta COMPATIBILIDADE com inseticidas e fungicidas",
    features: [
      { name: "DISTÚRBIO NUTRICIONAL", icon: ASSETS.nutriprotectionIcons.phn.disturbioNutricional },
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.nutriprotectionIcons.phn.tankMix },
      { name: "ANTI-ESTRESSE", icon: ASSETS.nutriprotectionIcons.phn.antiEstresse },
      { name: "pH NEUTRO", icon: ASSETS.nutriprotectionIcons.phn.phNeutro }
    ],
    benefits: [
      "Micronizados, solúveis e em pó concentrado com pH neutro",
      "Alta compatibilidade com fungicidas e inseticidas em tank mix",
      "PHn BIOMAG: ativador enzimático e constituinte da clorofila com L-aminoácidos",
      "PHn BORO: nutrição foliar de Boro ao longo do ciclo da cultura",
      "PHn CAB: Cálcio e Boro com aminoácidos para florescimento e pegamento",
      "PHn KS50: Potássio solúvel para translocação de fotoassimilados",
      "PHn MOVIK: NPK e micronutrientes solúveis com polissacarídeos"
    ]
  },
  {
    slug: "pme",
    name: "PME",
    area: "Agro",
    logo: ASSETS.nutriprotectionIcons.pme.logo,
    description: "Linha de pó micronizado especial, totalmente solúvel e de alta compatibilidade",
    features: [
      { name: "DISTÚRBIO NUTRICIONAL", icon: ASSETS.nutriprotectionIcons.pme.disturbioNutricional },
      { name: "TANK MIX COMPATÍVEL", icon: ASSETS.nutriprotectionIcons.pme.tankMix }
    ],
    benefits: [
      "Pó micronizado especial totalmente solúvel",
      "Nutrição micronutricional equilibrada e anti-estresse",
      "Alta compatibilidade em tank mix com fungicidas e inseticidas",
      "pH neutro para máxima compatibilidade com defensivos"
    ]
  }
];
