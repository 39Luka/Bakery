/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        black1: "var(--color-black-1)",
        black2: "var(--color-black-2)",
        black3: "var(--color-black-3)",
        grey1: "var(--color-grey-1)",
        grey2: "var(--color-grey-2)",
        grey3: "var(--color-grey-3)",
        grey4: "var(--color-grey-4)",
        grey5: "var(--color-grey-5)",
        white: "var(--color-white)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
      },
      fontFamily: {
        base: "var(--font-family-base)",
      },
      fontWeight: {
        base: "var(--text-weight-base)",
        bold: "var(--fw-bold)",
        heading: "var(--heading-weight-base)",
        heading6: "var(--heading-h6-weight)",
      },
      fontSize: {
        // Headings
        h1: ["var(--heading-h1-size)", { lineHeight: "var(--heading-h1-line-height)" }],
        h2: ["var(--heading-h2-size)", { lineHeight: "var(--heading-h2-line-height)" }],
        h3: ["var(--heading-h3-size)", { lineHeight: "var(--heading-h3-line-height)" }],
        h4: ["var(--heading-h4-size)", { lineHeight: "var(--heading-h4-line-height)" }],
        h5: ["var(--heading-h5-size)", { lineHeight: "var(--heading-h5-line-height)" }],
        h6: ["var(--heading-h6-size)", { lineHeight: "var(--heading-h6-line-height)" }],
        // Textos
        large: ["var(--text-large-size)", { lineHeight: "var(--text-large-line-height)" }],
        medium: ["var(--text-medium-size)", { lineHeight: "var(--text-medium-line-height)" }],
        normal: ["var(--text-normal-size)", { lineHeight: "var(--text-normal-line-height)" }],
        small: ["var(--text-small-size)", { lineHeight: "var(--text-small-line-height)" }],
      },
      letterSpacing: {
        base: "var(--letter-spacing-base)",
      },
    },
  },
  plugins: [],
}
