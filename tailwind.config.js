/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        faris: {
          50: '#F0F9F3',
          100: '#DDF3E4',
          200: '#BCE5CB',
          300: '#8CD2A7',
          400: '#4FBA7E',
          500: '#22A94D', // Faris Primary Brand Green
          600: '#178A3C',
          700: '#136E31',
          800: '#105628',
          900: '#0B3D1F', // Deep Forest Green
          950: '#062413', // Ultra Deep Night Green
        },
        cream: {
          50: '#FCFDFB',
          100: '#F8FAF7', // Soft off-white brand background
          200: '#F0F4EE',
          300: '#E4EBE0',
        },
        gold: {
          100: '#F5EED9',
          200: '#ECDDB3',
          300: '#DFC685',
          400: '#D3B45E',
          500: '#C9A862', // Champagne Gold Accent
          600: '#B08E44',
          700: '#8D6E2E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 45px -15px rgba(11, 61, 31, 0.12), 0 0 0 1px rgba(11, 61, 31, 0.05)',
        'luxury-hover': '0 30px 60px -20px rgba(11, 61, 31, 0.22), 0 0 0 1px rgba(34, 169, 77, 0.25)',
        'glow-green': '0 0 25px rgba(34, 169, 77, 0.35)',
        'glow-gold': '0 0 25px rgba(201, 168, 98, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
