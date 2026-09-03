/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E0C078",
          dark: "#A88435",
        },
        ink: {
          DEFAULT: "#0D0D0D",
          soft: "#1A1A1A",
          muted: "#2A2A2A",
        },
      },
      fontFamily: {
        display: ['"Montserrat"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
      boxShadow: {
        cta: "0 10px 28px rgb(201 162 75 / 0.28)",
        gold: "0 0 0 1px rgb(201 162 75 / 0.35)",
      },
      backgroundImage: {
        "gold-glow":
          "radial-gradient(ellipse at 80% 20%, rgb(201 162 75 / 0.18), transparent 45%), radial-gradient(ellipse at 10% 90%, rgb(201 162 75 / 0.08), transparent 40%)",
      },
    },
  },
  plugins: [],
};
