<template>
  <v-app>
    <v-main>
      <router-view path="$router.key" />
    </v-main>
  </v-app>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'

  export default {
    name: 'App',
  }
</script>


<style>
</style>
