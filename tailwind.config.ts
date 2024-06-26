import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        bannerInicioMobile: "url('/imgs/BannerInicioMobile.png')",
        bannerInicio: "url('/imgs/BannerInicio.png')",
      },
      colors: {
        dark: {
          100: "#393B3D",
        },
        whitesh: "#fff2eb",
      },
    },
  },
  plugins: [],
};
export default config;
