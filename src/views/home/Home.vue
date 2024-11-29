<template>
  <v-carousel
    cycle
    interval="8000"
    height="100%"
    hide-delimiters
    :show-arrows="false"
  >
    <v-carousel-item v-for="(servico, index) in servicos" :key="index">
      <v-row justify="center" class="ma-1">
        <v-col cols="12" md="12">
          <v-card class="service-card fill-height pa-4" style="min-height: 760px;">
            <!-- Exibe a imagem do serviço -->
            <img 
              :src="servico.imagem" 
              height="500px" 
              width="100%" 
              style="object-fit: cover !important; border-radius: 12px;" 
              class="mb-3"
            />

            <v-card-title class="text-h5 font-weight-bold">
              {{ servico.titulo }}
            </v-card-title>
            <v-card-text style="font-size: 20px;">{{ servico.descricao }}</v-card-text>
            <v-card-actions>
              <v-btn
                color="secondary"
                outlined
                @click="redirect(servico.link)"
              >
                Saiba Mais
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  <v-divider color="black" class="ma-4"></v-divider>
  
    <show-case />
  
  <v-divider color="black" class="ma-4"></v-divider>
</template>


<script>
import ShowCase from './showCase/ShowCase.vue';

export default {
  components: {
    ShowCase,
  },
  data() {
    return {
      servicos: [
        {
          titulo: 'Logotipo',
          descricao: ' Logotipo profissional e versátil, ideal para aplicações em materiais digitais, como sites e redes sociais, bem como em materiais impressos, como placas, letreiros, banners, adesivos e outros.',
          link: '/logotipo',
          imagem: './src/imagens/Logo.jpg', // Link para a imagem do serviço de logotipo
        },
        {
          titulo: 'Gerenciamento Inteligente',
          descricao: 'Soluções inteligentes para otimizar a gestão do seu negócio. No gerenciamento convencional, muitas vezes, um profissional atende vários clientes do mesmo nicho para otimizar o tempo e replicar estratégias. No nosso Gerenciamento Inteligente, as estratégias são rotativas e adaptáveis, moldadas pelas principais tendências do mercado, visando alcançar os objetivos traçados. Abordamos o seu negócio sob uma perspectiva de 360 graus, garantindo que suas estratégias estejam sempre em evolução.',
          link: '/gerenciamento-inteligente',
          imagem: './src/imagens/Gerenciamento.jpg', // Link para a imagem do serviço de gerenciamento
        },
      ],
    };
  },
  methods: {
    redirect(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.service-card {
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.fill-height {
  min-height: calc(100vh - 600px); 
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
