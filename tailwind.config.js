/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'apple-dark': '#0F172A',
        'slate-body': '#334155',
        'stone-light': '#F8FAFC',
        'stone-card': '#FFFFFF',
        'stone-muted': '#F1F5F9',
        'stripe-blue': '#2563EB',
        'stripe-blue-hover': '#1D4ED8',
        'emerald-mint': '#10B981',
        'emerald-glow': '#34D399',
        'border-subtle': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      boxShadow: {
        apple: '0 20px 40px -15px rgba(15, 23, 42, 0.07)',
        'apple-hover': '0 30px 60px -12px rgba(37, 99, 235, 0.12)',
        stripe: '0 13px 27px -5px rgba(50, 50, 93, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
