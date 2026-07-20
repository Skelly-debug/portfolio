/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08080c",
          50: "#f5f4f8",
          900: "#0c0c12",
          950: "#08080c",
        },
        surface: "#121218",
        "surface-2": "#191922",
        line: "rgba(242, 241, 247, 0.09)",
        paper: "#f2f1f7",
        muted: "#8d8a9a",
        signal: {
          DEFAULT: "#8a6bff",
          soft: "#8a6bff1a",
          bright: "#a68bff",
        },
        wave: {
          DEFAULT: "#33d6c0",
          soft: "#33d6c01a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-dots":
          "radial-gradient(circle, rgba(242,241,247,0.14) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        signal: {
          "0%,100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        signal: "signal 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
