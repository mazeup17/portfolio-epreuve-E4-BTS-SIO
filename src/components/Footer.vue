<template>
  <v-footer class="d-flex flex-column footer fixed-bottom">
    <div class="bg-nav d-flex w-100 pa-4 align-center px-4">
      <v-spacer></v-spacer>
      <p class="text">
        &copy; {{ new Date().getFullYear() }} —
        <strong>Pereira Baptiste</strong>
      </p>
      <v-spacer></v-spacer>

      
    </div>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    
  }),
};
</script>
<style scoped>
.footer {
  bottom: 0;
  width: 100%;
  padding: 0;
}
</style>
