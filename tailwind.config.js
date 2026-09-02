export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#0f1115",
        secondBg: "#151922",
        cardBg: "#181c25",
        primaryText: "#f5f5f5",
        mutedText: "#9ca3af",
        accent: "#38bdf8"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        code: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"]
      }
    }
  },
  plugins: []
};
