<template>
  <v-footer
    :height="expanded ? '130' : '31'"
    color="#1F1F1F"
    app
    class="transition-smooth"
  >
    <v-col
      class="pa-2 text-white d-flex flex-md-row flex-column justify-md-space-between align-center text-caption"
    >
      <div v-if="!expanded">Todos os direitos reservados © 2024 - {{ company }}.</div>

      <template v-if="expanded">
        <v-row>
          <v-col style="display: flex; justify-content: center;">
        <div>
          <div>Atendimento</div>
          <div>
            <a href="tel:+554732244220" class="text-decoration-none contact-link">
              <v-icon icon="mdi-phone-outline" color="secondary"/>(47) 99631-7849
            </a>
          </div>
          <div>
            <a href="mailto:tainahpnegretti@gmail.com?subject=Gostaria%20de%20Informações%20sobre%20o%seu%20trabalho!" class="text-decoration-none contact-link">
              <v-icon icon="mdi-email-multiple-outline" color="secondary"/> tainahpnegretti@gmail.com
            </a>
          </div>
          <div>
            <a href="https://goo.gl/maps/6rFtAJQYvtcSppHu8" target="_blank" class="text-decoration-none contact-link">
              <v-icon icon="mdi-map-marker-outline" color="secondary"/>Centro - Penha - CEP: 88.385-000
            </a>
          </div>
        </div>
      
        <div style="margin-left: 300px;">
          <div>Redes Sociais</div>
          <div>
            <a href="https://www.facebook.com/praiaalegreimoveis" target="_blank" class="text-decoration-none social-link">
              <v-icon icon="mdi-facebook" color="secondary"/> @tainanegretti
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/praiaalegreimoveis/" target="_blank" class="text-decoration-none social-link">
              <v-icon icon="mdi-instagram" color="secondary"/> @tainanegretti
            </a>
          </div>
        </div>
      </v-col>
      </v-row>
      </template>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      company: 'Tainá Negretti',
      expanded: false,
      scrollPosition: 0,
      margin: 30,
    };
  },
  methods: {
    onScroll() {
      const bottomOfPage =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      const currentScroll = window.scrollY;

      if (bottomOfPage && !this.expanded) {
        this.expanded = true;
        this.$nextTick(() => {
          window.scrollBy(0, 200); 
        });
      } else if (!bottomOfPage && currentScroll < this.scrollPosition - this.margin) {
        this.expanded = false;
        this.$nextTick(() => {
          window.scrollBy(0, -200);
        });
      }

      this.scrollPosition = currentScroll;
    },

    debounceScroll() {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(this.onScroll, 100);
    }
  },
  mounted() {
    this.scrollTimeout = null;
    window.addEventListener('scroll', this.debounceScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.debounceScroll);
  },
};
</script>

<style scoped>
.transition-smooth {
  transition: height 0.3s ease-in-out;
}

.contact-link, .social-link {
  color: rgba(255, 255, 255, .7);
  transition: color .3s;
}

.contact-link:hover, .social-link:hover {
  color: #c95;
}

.text-decoration-none {
  text-decoration: none;
}
</style>
