<template>
  <v-row class="fullHeight" justify="center" align="center">
    <!-- <v-col md="4" sm="10" cols="7" align="center"> -->
    <v-col sm="10" cols="7" align="center">
      <div class="text1">404</div>
      <div class="text2 mb-10">Página não encontrada</div>
      <div class="d-flex flex-column align-items-stretch">
        <v-btn @click="$router.push('/home')" color="primary">Ir para Home</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style scoped>
  * {
    transition: all ease 1s;
  }

  .fullHeight {
    min-height: 90%;
  }

  .text1 {
    font-size: 15rem;
  }

  .text2 {
    font-size: 3.5rem;
    font-weight: 500;
  }

  @media (max-width: 620px) {

    .text1 {
      font-size: 10rem;
    }

    .text2 {
      font-size: 2rem;
    }
  } 

  @media (max-width: 400px) {

    .text1 {
      font-size: 8rem;
    }

    .text2 {
      font-size: 1.5rem;
    }
  }
</style>