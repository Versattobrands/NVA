import { ASSETS } from "./assetsMap";

export type ProductFeature = {
  name: string;
  icon?: string;
};

export type Product = {
  slug: string;
  name: string;
  area: "Agro";
  description: string;
  features: ProductFeature[];
  image?: string;
  technicalSheet?: string;
  featured?: boolean;
  validationRequired?: boolean;
  notes?: string;
};

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
    ]
  },
  {
    slug: "stimatrix-gold",
    name: "Stimatrix Gold",
    area: "Agro",
    description: "Produto associado à estimulação e à evolução do desenvolvimento vegetal.",
    image: ASSETS.products.generic,
    features: [
      { name: "Estimula evolução", icon: ASSETS.icons.estimulaEvolucao },
      { name: "Bio-sinergia", icon: ASSETS.icons.bioSinergia },
      { name: "Multi mecanismo de ação", icon: ASSETS.icons.multiMecanismo },
      { name: "Efeito protetor", icon: ASSETS.icons.efeitoProtetor }
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
    notes: "Não afirmar controle ou eliminação de pragas."
  },
  {
    slug: "shock-sk31",
    name: "Shock SK31",
    area: "Agro",
    description: "Produto da área Agro. Informações técnicas em atualização.",
    image: ASSETS.products.generic,
    validationRequired: true,
    features: [],
    notes: "TODO: Solicitar a descrição técnica oficial e características confirmadas."
  },
  {
    slug: "suncal",
    name: "Suncal",
    area: "Agro",
    description: "Produto associado à nutrição, proteção solar e sinalização química das plantas.",
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
    notes: "Não utilizar o termo 'desalojante' sem validação técnica."
  },
  {
    slug: "bioshok",
    name: "Bioshok",
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
    notes: "Usar a grafia oficial encontrada nos assets. Não afirmar controle de pragas sem validação regulatória."
  }
];
