// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#0B161A",
          nav: "#101B20",
          text: "#B6ECF7",
          border: "#045468",
          bgcard: "#082C36",
        },
      },
    },
    options: {
      customProperties: true,
    },
  },
});
