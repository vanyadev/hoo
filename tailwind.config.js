/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: {
        18: "72px",
      },
      colors: {
        "hoobe-primary": "var(--hoobe-primary)",
        "hoobe-dark": "var(--hoobe-primary-dark)",
      },
      spacing: {
        calculated: "calc(62% - var(--container-padding))",
      },
      boxShadow: {
        wrapper: "0 0.75rem 44px 0 rgba(78, 81, 82, 0.12)",
      },
    },
  },
  plugins: [],
}
