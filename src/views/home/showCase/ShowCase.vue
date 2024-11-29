<template>
  <Carousel :items="depoimentos" />
</template>

<script>
import Carousel from './Carousel.vue';

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      depoimentos: [
        {
          id: 1,
          nome: 'João Silva',
          rating: 5, // Avaliação com 5 estrelas
          comentario: 'Serviço incrível! Superou todas as expectativas.',
        },
        {
          id: 2,
          nome: 'Maria Oliveira',
          rating: 4, // Avaliação com 4 estrelas
          comentario: 'Profissionais dedicados e atendimento impecável.',
        },
        {
          id: 3,
          nome: 'Carlos Pereira',
          rating: 5, // Avaliação com 5 estrelas
          comentario: 'Recomendo a todos! Excelente trabalho.',
        },
        {
          id: 4,
          nome: 'Fernanda Costa',
          rating: 5, // Avaliação com 5 estrelas
          comentario: 'Atendimento excelente, superou minhas expectativas!',
        },
        {
          id: 5,
          nome: 'Pedro Almeida',
          rating: 3, // Avaliação com 3 estrelas
          comentario: 'O serviço foi bom, mas há espaço para melhorias.',
        },
        {
          id: 6,
          nome: 'Luciana Santos',
          rating: 4, // Avaliação com 4 estrelas
          comentario: 'Gostei muito do serviço, mas o tempo de entrega poderia ser melhor.',
        },
        {
          id: 7,
          nome: 'Ricardo Souza',
          rating: 5, // Avaliação com 5 estrelas
          comentario: 'Ótimo atendimento, equipe super profissional!',
        },
        {
          id: 8,
          nome: 'Beatriz Lima',
          rating: 4, // Avaliação com 4 estrelas
          comentario: 'Muito satisfeita com o resultado, recomendaria sem dúvida.',
        },
        {
          id: 9,
          nome: 'Gustavo Pereira',
          rating: 5, // Avaliação com 5 estrelas
          comentario: 'Excelente experiência, voltarei com certeza!',
        },
        {
          id: 10,
          nome: 'Isabela Rocha',
          rating: 3, // Avaliação com 3 estrelas
          comentario: 'Bom, mas o atendimento precisa de mais atenção e cuidado.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-card {
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-card-title, .v-card-text {
  text-align: center;
}
</style>
