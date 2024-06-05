<template>
  <v-app>
    <Navbar />
    <Accueil />
    <Stage />
    <ProjetCours />
    <Veille />
    <Footer />
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import Accueil from "./pages/Accueil.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import ProjetCours from "./pages/ProjetCours.vue"
import Stage from "./pages/Stage.vue";
import Veille from "./pages/Veille.vue"

export default {
  name: "App",

  components: {
    Navbar,
    Accueil,
    ProjetCours,
    Footer,
    Stage,
    Veille,
  },

  data: () => ({
    //
  }),
};
</script>

<style></style>
