/* eslint-disable global-require */
module.exports = {
  purge: {
    enabled: true,
    content: [
      "./maizzle/build_local/*.html",
      "./src/emailTemplates/*.html"
    ]
  },
  theme: {
    screens: {
      sm: { max: "600px" },
      dark: { raw: "(prefers-color-scheme: dark)" }
    },
    extend: {
      colors: {
        gray: {
          50: "#FBFDFE",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CFD8E3",
          400: "#CFD8E3",
          500: "#6B7280",
          600: "#475569",
          700: "#364152",
          800: "#27303F",
          900: "#1A202E"
        }
      },
      spacing: {
        screen: "100vw",
        full: "100%",
        px: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        21: "21px",
        24: "24px",
        25: "25px",
        28: "28px",
        30: "30px",
        32: "32px",
        35: "35px",
        36: "36px",
        40: "40px",
        44: "44px",
        45: "45px",
        48: "48px",
        52: "52px",
        56: "56px",
        60: "60px",
        64: "64px",
        72: "72px",
        80: "80px",
        96: "96px",
        250: "250px",
        570: "570px",
        600: "600px",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%"
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        full: "9999px"
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "36px",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem"
      },
      inset: (theme) => ({
        ...theme("spacing")
      }),
      letterSpacing: (theme) => ({
        ...theme("spacing")
      }),
      lineHeight: (theme) => ({
        ...theme("spacing")
      }),
      maxHeight: (theme) => ({
        ...theme("spacing")
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
        xs: "160px",
        sm: "192px",
        md: "224px",
        lg: "256px",
        xl: "288px",
        "2xl": "336px",
        "3xl": "384px",
        "4xl": "448px",
        "5xl": "512px",
        "6xl": "576px",
        "7xl": "640px"
      }),
      minHeight: (theme) => ({
        ...theme("spacing")
      }),
      minWidth: (theme) => ({
        ...theme("spacing")
      })
    }
  },
  plugins: [require("tailwindcss-font-inter")],
  corePlugins: {
    animation: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false
  }
};
