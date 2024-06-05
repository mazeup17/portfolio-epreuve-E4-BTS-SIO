<template>
  <v-container class="d-flex justify-center align-center" fluid id="Accueil">
    <v-row class="justify-center">
      <v-col cols="5" class="d-flex justify-center">
        <div v-if="showContent" class="fade-in align-center">
          <h2 class="text2">Je suis...</h2>
          <h1 class="text">PEREIRA Baptiste</h1>
          <h2 class="text2">Etudiant en BTS SIO</h2>
          <p class="text">
            Bonjour ! j'ai 19 ans et je suis passionné par le domaine de
            l'informatique. Après avoir obtenu mon brevet des collèges, j'ai
            poursuivi mes études en choisissant une filière générale avec une
            spécialisation en mathématiques, physique et histoire-géographie,
            géopolitique et science politique (HGGSP) pour mon bac.
            Actuellement, je suis en train de suivre un BTS SIO (Services
            Informatiques aux Organisations), où je continue à développer mes
            compétences dans le domaine de l'informatique.
          </p>
          <div class="flex text2 space">
            <v-icon>mdi-language-html5</v-icon>
            <v-icon>mdi-language-css3</v-icon>
            <v-icon>mdi-language-javascript</v-icon>
            <v-icon>mdi-react</v-icon>
            <v-icon>mdi-language-php</v-icon>
            <v-icon>mdi-laravel</v-icon>
            <v-icon>mdi-language-java</v-icon>
            <v-icon>mdi-database</v-icon>
          </div>
        </div>
      </v-col>

      <v-col cols="4">
        <v-img height="350" src="../assets/images/imgCode.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
  <div class="test">
    <v-divider color="border" class="border-opacity-75" inset></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      showContent: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showContent = true;
    }, 10);
  },
};
</script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeInAnimation 1s ease-in forwards;
}
.align-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.space {
  font-size: 24px;
  letter-spacing: 2px;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
