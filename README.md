# Novaag - Website Institucional

O site da Novaag foi projetado com base na identidade visual e apresentação institucional da empresa. O objetivo é comunicar que a Novaag é uma indústria brasileira sólida, técnica e de soluções biotecnológicas para o campo, Comex e mercado industrial.

## Stack Utilizado
- **Framework:** React + Vite
- **Estilização:** Tailwind CSS (Estilo escuro, industrial, técnico)
- **Roteamento:** React Router DOM
- **Linguagem:** TypeScript
- **Ícones Genéricos:** Lucide React (apenas para ações de UI, como Menu, X, Share). Os ícones de produtos vêm da pasta de assets.

## Instalação e Execução

### Instalar as dependências:
```bash
npm install
```

### Executar em desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto

A estrutura segue a organização principal do negócio:

- `src/pages`:
  - `Home.tsx` (`/`)
  - `About.tsx` (`/quem-somos`)
  - `BusinessAreas.tsx` (`/areas-de-atuacao`) - *Engloba Agro, Comex, Industrial e Produtos*
  - `Contact.tsx` (`/contato`)
  - `Troppoil.tsx` (`/troppoil`)

- `src/components`:
  - `/layout`: Header, Footer, MobileMenu.
  - `/ui`: Componentes de conteúdo como `ProductRow` (para alternar esquerda/direita com produtos), `BusinessAreaSection`, `SectionHeading`, `Timeline`, `ContactForm`, `CTASection`.

- `src/data`:
  - `products.ts`: Contém os 13 produtos oficiais da área Agro, atrelando as características com os ícones localizados em `/Assets/ICONOGRAFIA`.
  - `businessAreas.ts`: Organiza os dados das áreas Agro, Comex e Industrial (com Etanol e Food).
  - `siteContent.ts`: Centraliza as cópias das páginas (Missão, Visão, Valores, CTAs).
  - `assetsMap.ts`: Centraliza os caminhos das imagens, logos e ícones.
  - `assetReview.md`: Relatório que documenta quais assets foram identificados e quais estão pendentes (com placeholder).

## Como Editar o Site?

- **Para alterar textos institucionais (Missão, Home, etc):** Edite `src/data/siteContent.ts`.
- **Para alterar os produtos (nome, descrição, ícones):** Edite `src/data/products.ts`.
- **Para alterar as áreas de atuação:** Edite `src/data/businessAreas.ts`.
- **Para alterar os caminhos de imagens e ícones:** Edite `src/data/assetsMap.ts`.
- **Para alterar cores e fontes:** 
  - As fontes principais são controladas via CSS Variables em `src/index.css`.
  - As cores oficias estão configuradas no `tailwind.config.js` (`novaag-green`, `novaag-red`, `novaag-gold`, `novaag-black`).
- **Onde trocar contatos?** O visual do formulário e dados do Footer estão em `src/pages/Contact.tsx` e `src/components/layout/Footer.tsx`.

## Status dos Recursos

### Assets Identificados:
- Os ícones oficiais (`Anti Estresse.png`, `Tankmix Compatível.png`, etc.) foram localizados e mapeados.
- Os logotipos da história (`Nova AG.png`, `Enbi.png`, `Itatec.png`, `NVA 2026.svg`, etc.) foram mapeados na `Timeline`.

### Pendências (TODOs):
- **Descrições:** O produto `Shock SK31` está com a descrição em aberto.
- **Textos:** A história da hot page do `Troppoil` precisa de validação final.
- **Fontes Oficiais:** O sistema tenta carregar as fontes `Aptos`, `Kulim Park` e `RR Beaver` como fallbacks padrão, mas requer que os arquivos originais (`.ttf` ou `.woff2`) sejam fornecidos no futuro para garantir que 100% dos navegadores obedeçam ao peso de cada fonte se elas não estiverem instaladas na máquina do usuário.
- **Ícones Ausentes:** Ícones de L-aminoácidos e especificidade não foram localizados; estão utilizando um check-mark (`icons.svg#check`) temporariamente.

## Funcionalidades Futuras
- Integração real com endpoint de e-mail no formulário de contato.
- Funcionalidade de download da ficha técnica em `/troppoil`.
- Feed real do Instagram na seção `Siga a Novaag` (atualmente estático / em placeholder).
