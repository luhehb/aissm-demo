module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#204070',
        'brand-navy-600': '#4870B0',
        'brand-accent': '#F09800',
        'ink': '#111827',
        'ink-muted': '#6B7280',
        'panel': '#F8F8F8',
        'search-bg': '#D8E0F0'
      },
      maxWidth: {
        'content': '1200px'
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: [],
}
