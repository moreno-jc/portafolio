/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        'main': '#030E27',
        'secondary': '#000716',
      },
      backgroundImage: {
        'grid': "url('/grid.png')",
        'gridDouble': "url('/gridDouble.png')",
        'gridBackWard': "url('/gridBackWard.png')",
      },
    },
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
}
