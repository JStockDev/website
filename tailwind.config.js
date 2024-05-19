/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: '400px',
        lgg: '1100px'
      },
      fontFamily: {
        main: ['var(--font-main)'],
        logo: ['var(--font-logo)'],
      },
      colors: {
        primary: '#3cf000',
      },
    },
  },
  plugins: [],
}

