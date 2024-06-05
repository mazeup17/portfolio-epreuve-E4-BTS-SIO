import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@mdi/font/css/materialdesignicons.css"; // Pour Material Design Icons
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/style/global-styles.css"; // Importez votre fichier CSS global

loadFonts();

createApp(App).use(vuetify).mount("#app");
