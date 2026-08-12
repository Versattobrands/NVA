# NOVAAG - Site Institucional

Este é o projeto front-end do novo site institucional da **NOVAAG**. Ele foi desenvolvido utilizando **React**, **TypeScript**, **Vite** e **Tailwind CSS**, com foco em alta performance, código limpo, responsividade e componentização para facilitar futuras alterações.

## Estrutura do Projeto

A arquitetura de pastas foi desenhada de forma modular:

- `src/components/ui/`: Componentes básicos reutilizáveis (`Button`, `Cards`, `SectionHeading`, `ImagePlaceholder`, `FloatingWhatsAppButton`).
- `src/components/layout/`: Componentes estruturais da página (`Header`, `Footer`).
- `src/pages/`: As 5 páginas solicitadas (`Home`, `About`, `Products`, `Contact`, `Troppoil`).
- `src/lib/`: Funções utilitárias como o `cn` para mesclar classes do Tailwind (clsx + tailwind-merge).
- `src/App.tsx`: Configuração de Rotas, Título dinâmico (SEO) e Scroll automático.
- `tailwind.config.js`: Centralização da paleta de cores e tipografia.

## Como Executar Localmente

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Na raiz do projeto, instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:5173` no seu navegador.

## Onde Alterar as Cores

As cores principais estão centralizadas no arquivo `tailwind.config.js`. Se você precisar alterar o verde profundo, por exemplo, basta mudar o valor correspondente lá, e isso refletirá em todo o site.

## Onde Substituir as Imagens

As imagens atuais estão sendo representadas pelo componente `ImagePlaceholder`, que cria blocos visuais elegantes utilizando Tailwind CSS e a biblioteca de ícones `lucide-react`.

Para inserir as imagens reais:
1. Coloque os arquivos de imagem dentro da pasta `public/` ou importe-os diretamente nos arquivos.
2. Nos arquivos de página (`src/pages/*.tsx`), procure pelo componente `<ImagePlaceholder ... />` e substitua-o pela tag padrão de imagem:
   ```tsx
   <img src="/caminho/para/imagem.jpg" alt="Descrição" className="suas classes tailwind aqui" />
   ```

## Onde Alterar Textos e Contatos

- **Textos das Páginas**: Os textos estão inseridos diretamente nos componentes de página dentro de `src/pages/`. Eles foram organizados de forma semântica para facilitar a leitura do código.
- **Contatos Gerais (Footer)**: Localizados em `src/components/layout/Footer.tsx`.
- **Botão do WhatsApp (Flutuante)**: Localizado em `src/components/ui/FloatingWhatsAppButton.tsx`. Substitua o número no link `href="https://wa.me/..."`.

## Lista de Conteúdos que Precisam ser Validados pela Novaag

Há informações que foram preenchidas com dados provisórios (placeholders) para fins de layout. A NOVAAG precisa validar e fornecer os dados reais para:

- [ ] Imagens da Home (Hero e Seção Institucional).
- [ ] Textos históricos da Linha do Tempo na página **Quem Somos**.
- [ ] Endereços completos das Unidades Industriais e de Estoque.
- [ ] Lista real de categorias e produtos para a página **Produtos**.
- [ ] Mockup oficial ou foto em alta resolução da embalagem do **Troppoil**.
- [ ] Telefone, WhatsApp comercial oficial e endereços na página de **Contato** e no **Footer**.
- [ ] Links reais das redes sociais da empresa (Instagram, LinkedIn, Facebook).
