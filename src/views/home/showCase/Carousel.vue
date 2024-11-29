<template>
  <v-carousel
    class="carousel mt-3"
    hide-delimiter-background
    color="primary"
    show-arrows="hover"
    height="200"
    hide-delimiters
    :show-arrows="false"
  >
    <v-carousel-item v-for="(chunk, index) in chunkedItems" :key="index">
      <div class="carousel-slide">
        <v-card v-for="item in chunk" :key="item.id" class="carousel-card">
          <v-card-title class="text-center text-h6 mt-2">{{ item.nome }}</v-card-title>

          <!-- Exibição de estrelas (5 estrelas) -->
          <div class="star-rating">
            <v-rating v-model="item.rating" color="yellow" background-color="lightyellow" length="5" readonly />
          </div>

          <!-- Comentário de avaliação -->
          <v-card-text class="text-center text-body-2 px-4">
            "{{ item.comentario }}"
          </v-card-text>
        </v-card>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'RealEstateCarousel',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    chunkedItems() {
      const chunkSize = 3; // Mostrar 3 depoimentos por slide
      const chunks = [];
      for (let i = 0; i < this.items.length; i += chunkSize) {
        chunks.push(this.items.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
};
</script>

<style scoped>
.carousel-slide {
  display: flex;
  justify-content: space-around;
}

.carousel-card {
  width: 32%;
  margin: 0 10px;
  border-radius: 12px;
  box-shadow: 4px 8px 8px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
}
.v-card-title {
  font-weight: bold;
  margin-top: 10px;
}
.v-card-text {
  font-style: italic;
}
.star-rating {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}
</style>
