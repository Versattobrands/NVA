/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        novaag: {
          // ─── PALETA OFICIAL NVA ─── use SOMENTE essas 5 cores
          red:   '#D91E2D',  // Vermelho
          green: '#2C3F34',  // Verde escuro
          lime:  '#05a44d',  // Verde limão CTA
          gold:  '#F5A823',  // Dourado / Amarelo
          black: '#0A0A0A',  // Preto
          white: '#FFFFFF',  // Branco

          // Aliases legados — mapeados para as cores oficiais
          // NÃO adicionar novas cores fora da paleta
          dark:     '#2C3F34', // → green
          medium:   '#2C3F34', // → green
          petrol:   '#2C3F34', // → green
          tech:     '#D91E2D', // → red
          accent:   '#05a44d', // → lime (#05a44d)
          gray:     '#0A0A0A', // → black
          beige:    '#FFFFFF', // → white
          offwhite: '#FFFFFF', // → white
        }
      },
      fontFamily: {
        title: ['var(--font-title)'],
        body: ['var(--font-body)'],
        product: ['var(--font-product)'],
      },
    },
  },
  plugins: [],
}
