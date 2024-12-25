/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1' }],    // 72px
        'h1': ['3.5rem', { lineHeight: '1.2' }],        // 56px
        'h2': ['2.75rem', { lineHeight: '1.2' }],       // 44px
        'h3': ['2rem', { lineHeight: '1.3' }],          // 32px
        'h4': ['1.5rem', { lineHeight: '1.4' }],        // 24px
        'large': ['1.25rem', { lineHeight: '1.5' }],    // 20px
        'body': ['1rem', { lineHeight: '1.5' }],        // 16px
        'small': ['0.875rem', { lineHeight: '1.5' }],   // 14px
        'xs': ['0.75rem', { lineHeight: '1.5' }],       // 12px
        'button': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],      // 16px semibold
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 6s ease-in-out infinite 3s',
      }
    },
  },
  plugins: [],
}
