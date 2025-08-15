import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
