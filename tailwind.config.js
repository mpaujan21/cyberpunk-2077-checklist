import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  darkMode: "false",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "cyberpunk-yellow": "#FCEE09",
        "cyberpunk-red": "#FF003C",
        "cyberpunk-cyan": "#00F0FF",
        "cyberpunk-green": "#66FFA8",
      },
    },
  },
  plugins: [],
};
