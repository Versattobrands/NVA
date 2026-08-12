export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  warning?: string;
  isHero?: boolean;
  imageUrl?: string;
}

export interface ProductLine {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  products: Product[];
}

export const PORTFOLIO: ProductLine[] = [
  {
    id: "aplitec",
    name: "APLITEC",
    description: "Aplitec é uma linha de produtos adjuvantes com foco nos aspectos físico-químicos das aplicações de defensivos.",
    highlights: [
      "Qualidade da calda",
      "Compatibilidade",
      "Emulsificação",
      "Espalhamento",
      "Adesão",
      "Dispersão",
      "Controle de espuma",
      "Ajuste de pH",
      "Redução de deriva"
    ],
    products: [
      {
        id: "troppoil",
        name: "Troppoil",
        description: "Adjuvante de origem mineral com aditivos vegetais, desenvolvido para atuar em diferentes aspectos da aplicação agrícola.",
        features: [
          "Emulsificante",
          "Espalhante",
          "Adesivo",
          "Tank mix compatível",
          "Anti-deriva",
          "Dispersante"
        ],
        isHero: true,
        imageUrl: "/images/troppoil_bottle.png"
      },
      {
        id: "spray-h",
        name: "Spray H",
        description: "Adjuvante desenvolvido para auxiliar aplicações em tank mix, com características emulsificantes, espalhantes e adesivas.",
        features: [
          "Tank mix compatível",
          "Emulsificante",
          "Espalhante",
          "Adesivo"
        ],
        imageUrl: "/images/generic_bottle.png"
      },
      {
        id: "spray-if",
        name: "Spray IF",
        description: "Adjuvante desenvolvido para auxiliar aplicações em tank mix, com atuação na emulsificação, no espalhamento e na adesão.",
        features: [
          "Tank mix compatível",
          "Emulsificante",
          "Espalhante",
          "Adesivo"
        ],
        imageUrl: "/images/generic_bottle.png"
      },
      {
        id: "detex",
        name: "Detex",
        description: "Adjuvante multifuncional destinado a auxiliar diferentes estratégias de aplicação agrícola.",
        features: [
          "Emulsificante",
          "Espalhante",
          "Adesivo",
          "Dispersante",
          "Anti-deriva"
        ],
        warning: "Informações de uso conforme recomendação técnica e documentação oficial do produto.",
        imageUrl: "/images/generic_bottle.png"
      },
      {
        id: "dsolv-protax",
        name: "Dsolv + Protax",
        description: "Produto desenvolvido para auxiliar a compatibilização de misturas complexas de defensivos, óleos e outros componentes da calda.",
        features: [
          "Compatibilização de misturas",
          "Dispersão",
          "Anti-deriva"
        ],
        imageUrl: "/images/generic_bottle.png"
      },
      {
        id: "dsolv-m",
        name: "Dsolv + M",
        description: "Produto desenvolvido para auxiliar a compatibilização de misturas complexas de glifosato e outros defensivos com fertilizantes.",
        features: [
          "Tank mix compatível",
          "Compatibilização de misturas",
          "Dispersão",
          "Anti-deriva"
        ],
        imageUrl: "/images/generic_bottle.png"
      },
      {
        id: "mataspuma",
        name: "Mataspuma",
        description: "Produto desenvolvido para auxiliar no controle da espuma indesejada durante o preparo e a aplicação da calda.",
        features: [
          "Anti-espuma",
          "Tank mix compatível"
        ],
        imageUrl: "/images/generic_bottle.png"
      }
    ]
  },
  {
    id: "stimulus",
    name: "STIMULUS",
    description: "Linha de produtos com foco em estimular plantas e agentes microbiológicos por meio de uma estratégia holística.",
    highlights: [
      "Fisiologia vegetal",
      "Bioestimulação",
      "Nutrição",
      "Estímulo de plantas",
      "Agentes microbiológicos",
      "Manejo de estresse"
    ],
    products: []
  },
  {
    id: "nutriprotection",
    name: "NUTRIPROTECTION",
    description: "Linha focada em entregar soluções que integram nutrição especializada e proteção às culturas agrícolas.",
    highlights: [
      "Nutrição Especializada",
      "Sanidade",
      "Vigor",
      "Proteção"
    ],
    products: []
  },
  {
    id: "pme",
    name: "PME",
    description: "Pó Micronizado Especial. Tecnologia voltada a aplicações de alta precisão que demandam formulações secas de máxima solubilidade.",
    highlights: [
      "Pó Micronizado",
      "Solubilidade",
      "Alta Concentração",
      "Eficiência"
    ],
    products: []
  },
  {
    id: "serv",
    name: "SERV",
    description: "Nossa área de serviços corporativos focada em prover soluções complementares e estruturação técnica para o produtor.",
    highlights: [
      "Soluções Complementares",
      "Consultoria Técnica",
      "Projetos Customizados"
    ],
    products: []
  }
];
