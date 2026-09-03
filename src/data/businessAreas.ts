import { ASSETS } from "./assetsMap";
import { AGRO_PRODUCTS, type Product } from "./products";

export type SubArea = {
  name: string;
  subtitle: string;
  description: string;
};

export type BusinessArea = {
  id: string;
  slug: string;
  name: string;
  description: string;
  subtitle?: string;
  image: string;
  cta: string;
  products?: Product[];
  subAreas?: SubArea[];
};

export const BUSINESS_AREAS: BusinessArea[] = [
  {
    id: "agro",
    slug: "agro",
    name: "Agro",
    description: "A atuação Agro reúne especialidades agrícolas, fertilizantes, biofertilizantes e soluções técnicas desenvolvidas para diferentes desafios do campo.",
    image: ASSETS.images.field3,
    cta: "Conheça o Agro",
    products: AGRO_PRODUCTS
  },
  {
    id: "comex",
    slug: "comex",
    name: "Comex",
    subtitle: "Alianças estratégicas",
    description: "Expansão do know-how brasileiro para outros mercados através de parcerias duradouras que complementam o pós-venda com dinamismo, customização, flexibilidade, inovação e valor justo.",
    image: ASSETS.images.worldMap,
    cta: "Conheça o Comex"
  },
  {
    id: "industrial",
    slug: "industrial",
    name: "Industrial",
    subtitle: "Insumos especiais e terceirizações.",
    description: "Desenvolvimento de produtos e insumos. Terceirização de processos químicos. Fabricação B2B de marcas dedicadas.",
    image: ASSETS.images.industry,
    cta: "Conheça o Industrial",
    subAreas: [
      {
        name: "Etanol",
        subtitle: "Otimização de destilarias de milho.",
        description: "Desenvolvimento de enzimas e aditivos de processos dedicados ao processamento de usinas de etanol de milho, com foco em diferenciação, customização e resultado."
      },
      {
        name: "Food",
        subtitle: "Insumos e tecnologias para a indústria de alimentos.",
        description: "Desenvolvimento de proteínas alternativas e aditivos de health food, com foco no bem-estar e na cadeia B2B."
      }
    ]
  }
];
