/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-1': "url('/images/hero-1.jpg')",  // Path bắt đầu bằng /images/, không /public/
        'hero-2': "url('/images/hero-2.jpg')",
        'hero-3': "url('/images/hero-3.jpg')",
      },
    },
  },
  plugins: [],
};