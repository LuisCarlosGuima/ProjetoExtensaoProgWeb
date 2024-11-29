<template>
  <div class="main-container">
    <v-parallax class="custom-parallax">
      <div class="content-container">
        <router-view path="$router.key" />
        <header-menu-bar/>
        <Footer/>
      </div>
    </v-parallax>
  </div>
</template>

<script>
import HeaderMenuBar from '@/components/HeaderMenuBar.vue';
import Footer from '../components/Footer.vue'
import { ref, onMounted, computed } from 'vue'

export default {
  name: 'Main-home',

  components:{
    Footer,
    HeaderMenuBar
  },

  setup() {

    onMounted(() => {
      document.body.classList.add('praiaAlegre')
    })

    return {
    }
  }
}
</script>
<style scoped>

.custom-parallax {
  background: linear-gradient(to bottom, #b9b5b591, var(--color-base));
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>