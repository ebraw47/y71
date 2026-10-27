/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'Chakra Petch', 'sans-serif'],
      },
      colors: {
        primary: '#140808',
        secondary: '#2a0f0f',
        accent: '#fbdf03',
        cyan: '#f6c453',
        maroon: '#5c1212',
      },
    },
  },
  plugins: [],
};
