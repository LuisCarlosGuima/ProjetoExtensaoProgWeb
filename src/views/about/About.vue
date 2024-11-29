<template>
  <!-- Seção de introdução e descrição -->
  <v-card class="introduction-section ma-4 pa-4">
    <v-row>
      <v-col cols="12" md="9">
        <div class="text-section" style="text-align: center;">
          <h1>QUEM SOU</h1>
          <p>
            Sou Estrategista Digital, com especialização em estratégias de conteúdo para mídias sociais. Minha experiência abrange o desenvolvimento de soluções personalizadas para 
            clientes do Brasil e dos Estados Unidos, oferecendo um atendimento próximo e estratégias adaptadas às necessidades de cada mercado. Minha paixão é ajudar marcas e 
            profissionais a se destacarem em um ambiente digital competitivo, construindo conexões reais com seus públicos.
          </p>
        </div>
        <div  class="text-section" style="text-align: center;">
          <h1>MEU MAIOR OBJETIVO</h1>
          <p>
            Meu objetivo é construir uma presença digital sólida e autêntica para você e seu negócio, transformando-o em uma marca forte, confiável e reconhecida. 
            Quero que você seja a escolha natural para o seu público-alvo, destacando-se a ponto de ser recomendado diariamente por clientes e parceiros.
            
          </p>
          <p>
            Acredito que uma marca forte não é apenas visível, mas memorável. Por isso, meu trabalho envolve estratégias que conectam, gerando impacto e resultados consistentes.
          </p>
        </div>
        <div  class="text-section" style="text-align: center;">
          <h1>COMO FAÇO ISSO</h1>
          <p>
            Meu diferencial está no Gerenciamento Inteligente, uma abordagem moderna e personalizada que vai além do modelo tradicional.
            No gerenciamento convencional, é comum replicar estratégias entre diferentes clientes de um mesmo nicho. No entanto, esse método pode limitar o potencial de cada marca.
            Com o Gerenciamento Inteligente, cada cliente é único. Minhas estratégias são:
          </p>
          <p>
            <ul class="text-section" style="list-style-type: none;">
              <li>
                Rotativas e adaptáveis, ajustadas de acordo com as principais tendências do mercado.
              </li>
              <li>
                Focadas nos seus objetivos específicos, com um acompanhamento contínuo dos resultados.
              </li>
              <li>
                Desenvolvidas com uma perspectiva 360 graus, considerando todos os aspectos do seu negócio para garantir que suas estratégias estejam sempre atualizadas e alinhadas às mudanças do mercado.
              </li>
            </ul>
          </p>
        </div>
        <div  class="text-section" style="text-align: center;">
          <h1>POR QUE ESCOLHER MEUS SERVIÇOS</h1>
          <p>
            <ul class="text-section" style="list-style-type: none;">
              <li>
                Experiência internacional: Trabalho com clientes em diferentes mercados, trazendo uma visão global para as suas estratégias.
              </li>
              <li>
                Personalização: Cada projeto é planejado e executado com exclusividade, refletindo a essência da sua marca.
              </li>
              <li>
                Inovação constante: Estou sempre de olho nas tendências e avanços do setor para implementar soluções inovadoras e relevantes para você.
              </li>
            </ul>
          </p>
          <p>
            Juntos, podemos transformar sua presença digital em uma ferramenta poderosa, capaz de impulsionar sua marca para novos patamares de sucesso!
          </p>
        </div>
        <div  class="text-section" style="text-align: center;">
          <h1>PRONTO PARA COMEÇAR?</h1>
          <p>
            Seja para construir do zero ou melhorar sua estratégia atual, estou aqui para ajudar. Vamos trabalhar juntos para alcançar seus objetivos e criar uma marca que faça diferença no dia a dia das pessoas.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="3" >
        <!-- Banner de imagem superior -->
        <div class="banner">
          <img src="@/../src/imagens/ImagemRosto.jpeg" alt="Banner" class="banner-image" />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Sobre",
  components: {
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 90%;
  height: 400px;
  overflow: hidden;
  margin-left: auto;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  mix-blend-mode: multiply;
}

.image-section {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.introduction-section {
  background-color: #ffffff;
  padding: 20px 0;
}

.text-section {
  padding: 20px;
  color: var(--color-secondary);
}

.text-section h1 {
  font-size: 2rem;
  font-weight: bold;
}

.text-section p {
  font-size: 20px;
  line-height: 1.6;
  color: var(--color-base);
}

.text-section li {
  font-size: 20px;
  line-height: 1.6;
  color: var(--color-base);
}

.services-section {
  background-color: #f7f7f7;
  padding: 20px 0;
}

.services-section h2 {
  font-size: 2rem;
  font-weight: bold;
  padding-left: 20px;
}

.services-section ul {
  list-style-type: disc;
  padding-left: 40px;
}

.services-section li {
  font-size: 16px;
  line-height: 1.6;
}
</style>
