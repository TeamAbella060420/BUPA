import type { Config } from "tailwindcss";
const { webFontSizes } = require('./src/libs/fontSizes');
const { colors } = require('./src/libs/colors');
const { spacing } = require('./src/libs/spacing');

delete spacing.spacing;
delete colors.colors;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      spacing: spacing,
      fontFamily: {
        thin: ["STCForward-Thin"],
        thinItalic: ["STCForward-ThinItalic"],

        light: ["STCForward-Light"],
        lightItalic: ["STCForward-LightItalic"],

        regular: ["STCForward-Regular"],
        italic: ["STCForward-Italic"],

        medium: ["STCForward-Medium"],
        mediumItalic: ["STCForward-MediumItalic"],

        bold: ["STCForward-Bold"],
        boldItalic: ["STCForward-BoldItalic"],

        extraBold: ["STCForward-ExtraBold"],
        extraBoldItalic: ["STCForward-ExtraBoldItalic"],
      },
      gridTemplateColumns: {
        productImages: "repeat(6, minmax(0, 1fr))",
        productDetailsMainSection: "repeat(2, minmax(0, 1fr))",
        cartPageLayout: "repeat(3, minmax(0, 1fr)) minmax(282px, 1fr)",
        playerSelectionLayout: "repeat(3, minmax(0, 1fr))",
      },
      scale: {
        productImage: "1.1",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: webFontSizes,
    },
    screens: {
      SD: '640px',
      XGA: '1024px',
      HD: '1280px',
      FHD: '1920px',
      '2K': '2560px',
      '4K': '3840px',
      '8K': '7680px',

      mdxs: { max: '395px' },
      mdMaxxS: { max: '450px' },
      mdMaxxSD: { max: '640px' },
      mdMaxxSS: { max: '768px' },
      mdMaxS: { max: '820px' },
      mdMaxM: { max: '900px' },
      mdMaxMm: { max: '1330px' },
      mdMaxL: { max: '1430px' },
      mdMaxLl: { max: '1440px' },
      mdMaxLll: { max: '1740px' },
    },
  },
  plugins: [
],
};
export default config;
