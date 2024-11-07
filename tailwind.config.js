/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/navbar-bannar/bgNavBanner.png')",
        "hero-email": "url('/src/assets/email/emailBg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
