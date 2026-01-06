/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        'background-elevated': '#0a0a0a',
        'text-primary': '#f5f5f5',
        'text-secondary': '#b0b0b0',
        'text-muted': '#808080',
        silver: {
          DEFAULT: '#c0c0c0',
          light: '#e8e8e8',
          dark: '#808080',
          50: '#fafafa',
          100: '#f0f0f0',
          200: '#d4d4d4',
          300: '#c0c0c0',
          400: '#a0a0a0',
          500: '#808080',
          600: '#606060',
          700: '#404040',
          800: '#202020',
          900: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#c0c0c0',
          purple: '#b09cff',
          blue: '#8fb3ff',
          teal: '#8fffc7',
        },
        card: 'rgba(255, 255, 255, 0.03)',
        'card-hover': 'rgba(255, 255, 255, 0.06)',
        border: 'rgba(255, 255, 255, 0.12)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'slide-up-delayed': 'slideUp 1s ease-out 0.2s both',
        'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'reveal-delayed': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(60px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { textShadow: '0 0 20px rgba(192, 192, 192, 0.3)' },
          '100%': { textShadow: '0 0 40px rgba(192, 192, 192, 0.6)' },
        },
      },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(135deg, #808080 0%, #c0c0c0 25%, #e8e8e8 50%, #c0c0c0 75%, #808080 100%)',
        'silver-text': 'linear-gradient(90deg, #606060 0%, #c0c0c0 20%, #f0f0f0 50%, #c0c0c0 80%, #606060 100%)',
        'radial-spotlight': 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(192, 192, 192, 0.06), transparent 40%)',
      },
    },
  },
  plugins: [],
}
