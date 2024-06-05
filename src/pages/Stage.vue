<template>
  <v-container class="d-flex justify-center align-cente" fluid>
    <h1 class="text">Mes stages</h1>
  </v-container>
  <v-container class="d-flex justify-center align-center" fluid id="Stage">
    <v-row class="justify-center">
      <v-col cols="2" class="d-flex justify-center">
        <div class="flex">
          <div class="center">
            <h3 class="text2">Stage de première année</h3>
            <iframe
              class="marge"
              src="/rapportdestageArcelor.pdf"
              width="500px"
              height="600px"
              frameborder="0"
            ></iframe>
          </div>

          <div class="center">
            <h3 class="text2">Stage de deuxième année</h3>
            <iframe
              class="marge"
              src="/testRapport.pdf"
              width="500px"
              height="600px"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <div class="test">
    <v-divider color="border" class="border-opacity-75" inset></v-divider>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.marge {
  margin: 50px;
}
.space-between {
  justify-content: space-between;
}

.center {
  text-align: center;
}
</style>
