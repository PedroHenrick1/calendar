/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        link: '1.5rem',
        h1: '3rem',
        logo: '2rem',
      },
      colors: {
        primary: 'rgba(0, 0, 0, 0.23',
      },
      backgroundImage: {
        "background-1": "url('/images/background-image.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
  },
  plugins: [],
};
