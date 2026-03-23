export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#FF5300',
          light: '#FFEEE8',
          dark: '#E64A00',
        },
        background: '#F6F7FB',
        surface: '#FFFFFF',
        text: {
          main: '#1A1C1E',
          muted: '#8A8C98',
        }
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.03)',
      },
    }
  },
  plugins: []
}
