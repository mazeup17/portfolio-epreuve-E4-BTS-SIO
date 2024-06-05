<template>
  <v-container class="d-flex justify-center align-cente" fluid id="Projet">
    <h1 class="text">Projet réalisé en cours</h1>
  </v-container>
  <v-container class="d-flex justify-center align-center" fluid>
    <v-card
      v-for="(card, index) in cards"
      :key="index"
      class="mx-auto border-card d-flex flex-column"
      max-width="400"
      color="bgcard"
      min-width="18%"
    >
      <v-img
        class="align-end text-white border-img flex-grow-1"
        :src="card.image"
        height="210"
        cover
      >
      </v-img>

      <v-card-title class="text">{{ card.title }}</v-card-title>

      <v-card-text class="text2">
        <div>Languages utilisés :</div>
        <div class="d-flex space-around" fluid>
          <h1 v-for="(language, langIndex) in card.languages" :key="langIndex">
            <v-icon>{{ language }}</v-icon>
          </h1>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="text" variant="text" @click="toggleReveal(index)">
          En savoir plus
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <v-card
          color="bgcard"
          v-if="revealCards[index]"
          class="v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text">{{ card.titleDesc }}</p>
            <v-divider color="border" class="border-opacity-75"></v-divider>
            <v-container>
              <p class="text2">{{ card.text }}</p>
            </v-container>
          </v-card-text>

          <v-card-actions class="pt-0">
            <v-btn color="text" :href="card.githubLink" target="_blank">
              Voir sur GitHub
            </v-btn>
          </v-card-actions>
          <v-card-actions class="pt-0">
            <v-btn color="text" variant="text" @click="toggleReveal(index)">
              Fermer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-container>
  <div>
    <v-divider color="border" class="border-opacity-75" inset></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: require("../assets/images/screenAppJava.png"),
          title: "ImmoApp Desktop",
          titleDesc: "ImmoApp Desktop",
          text: "Le but de ce projet est qu'en tant qu'agence immobilière il y est la possibilité d'ajouter des logements que les propriétaires pourront mettre à la réservation sur le site, il faut pouvoir mettre des photos et attribuer un propriétaire au logement",
          languages: ["mdi-language-java", "mdi-database"],
          githubLink:
            "https://github.com/axizof/ImmoAppJava?tab=readme-ov-file",
        },
        {
          image: require("../assets/images/image0.jpeg"),
          titleDesc: "ImmoApp Mobile",
          title: "ImmoApp Mobile",
          text: "L'objectif de ce projet est qu'une fois la réservation effectué sur le site internet, le client puisse effectuer un état des lieux a l'arriver dans son logement. Pour le propriétaire, il pourra voir les différents avis et états des lieux de ses logements.",
          languages: ["mdi-react", "mdi-language-php", "mdi-database"],
          githubLink: "https://github.com/mazeup17/immoApp-REACT2.git",
        },
        {
          image: require("../assets/images/projetImmoWeb.png"),
          titleDesc: "ImmoWeb",
          title: "ImmoWeb",
          text: "Projet réalisé durant l'année scolaire. L'objectif était de réaliser une application web permettant de réserver des appartemments ou maisons (comme airbnb). Il y a une interface utilisateur et une propriétaire qui permet de gérer les réservations sur ses biens, d'en rajouter, supprimé...",
          languages: ["mdi-language-php", "mdi-database"],
          githubLink: "https://github.com/mazeup17/ImmoWeb.git",
        },
      ],
      revealCards: [false, false, false],
    };
  },
  methods: {
    toggleReveal(index) {
      this.revealCards[index] = !this.revealCards[index];
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

p {
  font-size: 13px;
  letter-spacing: 1px;
}
</style>
