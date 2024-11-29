<template>
  <v-app>
    <v-main>
      <router-view path="$router.key" />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
  }
</script>


<style>
</style>
