import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/app/images/nb-background-image.jpg')",
      }
    },
  },
  plugins: [],
}
export default config
