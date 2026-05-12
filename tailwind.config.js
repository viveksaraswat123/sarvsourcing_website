/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FDFBF2',
          100: '#FAF4D8',
          200: '#F2E4A1',
          300: '#E8CE6A',
          400: '#D4AC35',
          500: '#B8960C',
          600: '#9A7A08',
          700: '#7A5F06',
          800: '#5C4604',
          900: '#3D2E02',
        },
        charcoal: {
          50:  '#F7F7F7',
          100: '#EBEBEB',
          200: '#D1D1D1',
          300: '#A8A8A8',
          400: '#7A7A7A',
          500: '#555555',
          600: '#3D3D3D',
          700: '#2B2B2B',
          800: '#1A1A1A',
          900: '#0F0F0F',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      }
    },
  },
  plugins: [],
}
