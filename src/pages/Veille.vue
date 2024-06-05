<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <h1 class="text">Veille technologique</h1>
  </v-container>
  <div class="d-flex justify-center align-center">
    <h2 class="text2">
      Vue - <v-icon>mdi-vuejs</v-icon> - Framework JavaScript
    </h2>
  </div>
  <v-spacer></v-spacer>
  <div class="d-flex justify-center align-center">
    <p class="text text-center reduit">
      Vue.js est un framework JavaScript moderne et réactif, conçu en 2014 par
      Evan You pour simplifier le développement d'applications web interactives.
      Avec sa syntaxe intuitive, sa performance optimisée et sa documentation
      exhaustive, Vue permet aux développeurs de créer rapidement des interfaces
      utilisateur dynamiques et réactives pour une variété de projets, des
      petites applications aux grandes entreprises.
    </p>
  </div>
  <v-spacer></v-spacer>
  <v-container class="d-flex justify-space-around" fluid id="Veille">
    <div class="d-flex flex-column center">
      <h2 class="text2">Avantages du framework</h2>
      <p class="text">- Facilité d'apprentissage et d'utilisation</p>
      <p class="text">- Flexibilité et modularité</p>
      <p class="text">- Réactivité et performance</p>
      <p class="text">- Écosystème solide</p>
      <p class="text">- Communauté active et support</p>
      <p class="text">- Compatibilité avec d'autres technologies</p>
    </div>
    <div class="d-flex flex-column center">
      <div>
        <h2 class="text2">Liens importants</h2>
        <p class="text">
          Documentation de Vue -
          <a href="https://vuejs.org/" class="text2">Cliquez ici ! </a>
        </p>
        <p class="text">
          Dépot github -
          <a href="https://github.com/vuejs" class="text2">Cliquez ici ! </a>
        </p>
      </div>
      <div class="d-flex flex-column center">
        <h2 class="text2">Qui utilise Vue ?</h2>
        <p class="text">Alibaba</p>
        <p class="text">Nintendo</p>
        <p class="text">Adobe</p>
        <p class="text">GitLab</p>
        <p class="text">Louis Vuitton</p>
      </div>
    </div>
    <div class="d-flex flex-column center">
      <h2 class="text2">Dans quel type de projet ?</h2>
      <p class="text">- Applications web monopage</p>
      <p class="text">- Applications web dynamiques</p>
      <p class="text">- Applications mobiles (Vue Native)</p>
      <p class="text">- Applications d'administration</p>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.space-between {
  justify-content: space-between;
}

.center {
  text-align: center;
}

.reduit {
  width: 65%;
}
</style>
