/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        pure_white: "#ffffff",
        white: "#F3F5FF",
        vs: "#212435",
        vsg: "#4dc3a0",
        vsgrey: "#A0A8C3",
        vsg_light: "#0BD88F",
        vs_card: "#2B2F44",
        vs_grey_light: "#737B98",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        "nav-lg": "1290px",
      },
    },
  },
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          esModule: false,
        },
      });
    },
  },
  plugins: [],
};
