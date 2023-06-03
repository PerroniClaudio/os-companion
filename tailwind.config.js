/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'os-primary': {
          '50': '#fef1f9',
          '100': '#fde6f5',
          '200': '#fdcdec',
          '300': '#fda4db',
          '400': '#fb6bc1',
          '500': '#f440a6',
          '600': '#e41e85',
          '700': '#d91173',
          '800': '#a41057',
          '900': '#88134b',
          '950': '#540329',
        },
        'os-secondary':  {
          '50': '#ecfeff',
          '100': '#cefaff',
          '200': '#a3f2fe',
          '300': '#64e7fc',
          '400': '#23d2f2',
          '500': '#02b4d8',
          '600': '#058fb5',
          '700': '#0c7292',
          '800': '#135d77',
          '900': '#154d64',
          '950': '#073245',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
