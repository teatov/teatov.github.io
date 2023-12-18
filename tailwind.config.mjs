const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      twhite: "#F4F1DE",
      tred: "#E07A5F",
      tpurple: "#1b1d2e",
      tgreen: "#81B29A",
      tyellow: "#F2CC8F",
    },
    fontFamily: {
      sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      mono: ["Ubuntu Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
