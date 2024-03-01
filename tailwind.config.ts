import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
      },
      backgroundImage: {
        "gradient-linear":
          // 'radial-gradient( circle 815px at 23.4% -21.8%,  rgb(224, 2, 77)0.2%, rgb(13, 29, 65) 100.2% );',
          "linear-gradient(94.3deg,  rgb(224, 2, 77) 1%, rgba(26,33,64,1) 99% );",
      },
      gridTemplateColumns: {
        app: "1fr 0.1fr",
        contact: "0.3fr 0.7fr",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        // slideUpAndFade: {
        //   from: { opacity: '0' },
        //   to: { opacity: '1' },
        // },
      },
      animation: {
        slideDownAndFade: "slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // slideUpAndFade: 'slideUpAndFade 1s linear',
      },
      colors: {
        ruby: {
          50: "#FFF0F2",
          100: "#FFE1E7",
          200: "#FFC8D5",
          300: "#FF9CB2",
          400: "#FF648B",
          500: "#FF2E67",
          600: "#F30B54",
          700: "#E0024D",
          800: "#AC0543",
          900: "#930840",
          950: "#53001E",
        },
        sapphire: {
          50: "#EEF7FF",
          100: "#D8EDFF",
          200: "#BADFFF",
          300: "#8ACDFF",
          400: "#53B1FF",
          500: "#2B8FFF",
          600: "#146FFC",
          700: "#0D57E8",
          800: "#1246BB",
          900: "#154093",
          950: "#0D1D41",
        },
      },
    },
  },
  plugins: [],
};
export default config;
