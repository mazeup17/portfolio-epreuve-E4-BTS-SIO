<template>
  <v-toolbar app color="nav" :class="{ 'fixed-nav': isFixed }" id="toolbar">
    <v-spacer />
    <v-btn color="text" @click="scroll('Accueil')" plain> Parcours</v-btn
    ><v-spacer />
    <v-btn color="text" text @click="scroll('Stage')" plain> Stage</v-btn
    ><v-spacer />
    <v-btn color="text" text @click="scroll('Projet')" plain> Projet</v-btn
    ><v-spacer />
    <v-btn color="text" text @click="scroll('Veille')" plain>
      Veille technologique</v-btn
    >
    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
    };
  },
  methods: {
    scroll(nomSection) {
      const element = document.getElementById(nomSection);
      const toolbarHeight = document.getElementById("toolbar").offsetHeight;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - toolbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    },

    handleScroll() {
      const toolbar = document.getElementById("toolbar");
      const offsetTop = toolbar.offsetTop;
      const scrollY = window.scrollY;
      this.isFixed = scrollY > offsetTop;

      document.body.style.paddingTop = this.isFixed
        ? toolbar.offsetHeight + "px"
        : "0";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
