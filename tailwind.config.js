/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "rgba(155, 195, 246, 1)",      // Blue (buttons, active)
        primaryLight: "#EFF6FF",
        sidebar: "#FFFFFF",
        header: "#FFFFFF",
        textPrimary: "#0F172A",
        textSecondary: "#64748B",
        border: "#E5E7EB",
        success: "#22C55E",
        warning: "#FACC15",
        danger: "#EF4444",
      },
      fontFamily: {
        app: ["Parkinsans", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
