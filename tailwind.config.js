/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'shake-error': 'shakeError 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shakeError: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-8px)' },
          '75%': { transform: 'translateX(8px)' },
        },
      },
      colors: {
        navy: {
          500: '#2563eb',
          600: '#1e40af',
          700: '#1e3a8a',
        },
        gray: {
          100: '#f3f4f6',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2a44',
          850: '#1a2536',
          900: '#111827',
        },
        red: {
          500: '#ef4444',
        },
      },
    },
  },
};