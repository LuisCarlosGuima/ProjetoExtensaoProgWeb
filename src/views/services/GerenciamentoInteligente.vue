<template>
  <!-- Seção de introdução e descrição -->
  <v-card class="introduction-section ma-4 pa-4">
    <v-row>
      <v-col cols="12" md="12">
        <div class="text-section" style="text-align: left;">
          <h1>GERENCIAMENTO INTELIGENTE</h1>
          <p>
            Pesquisa (mercado, conteúdo, concorrentes, hashtags, anúncios) +
            Criação de estratégias de conteúdos + Construção de narrativas +
            Construção de Identidade Visual;
            Implementação da: Pesquisa (conteúdos estratégicos),
            narrativas e identidade visual + Testes de anúncio
            Movimentação, estratégicas novas, implementações novas
            (sempre em rotatividade)
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>O QUE INCLUI</h1>
          <p>
            Construção ou fortalecimento de Identidade Visual;
            Analise e estruturação do perfil do Instagram;
            Construção de narrativas para te tornar uma marca forte;
            Estratégias de conteúdos para Atrair, Conectar,
            Convencer e Vender;
            Estratégias para Atrair, Conectar, convencer e vender
            (Criativos - Tráfego pago);
            Cronograma de postagens;
            Criação de roteiros de vídeos e as respectivas edições;
            Criação e organização de todos os posts;
            Construção de legendas inteligentes;
            Postagens feed de forma manual;
            Direcionamento do que fazer nos Stories para o tornar:
            Stories Inteligentes;
            Stories estratégicos: Abertura de agenda, promoção,
            abertura de cursos, mentorias, etc;
            Sugestões de melhorias como um todo;
            Reunião e relatório mensal de resultados e alinhamentos.
            Gestão do Google meu Negócio*
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>O QUE NÃO INCLUI</h1>
          <p>
            Materiais (envio o direcionamento para que faça os
            materiais porém o cliente deve fornecer esses materiais
            para que eu possa trabalhar na divulgação);
            Resposta de direct (o cliente fica responsável por
            responder os directs e compartilhar marcações nos
            stories);
            Stories dia a dia;
            Respostas de comentários;
            Trabalhos como: Cartão, ebooks, personalizados, etc. São
            cobrados à parte.
            Resposta no Google meu Negócio*
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>INVESTIMENTO R$ xxxx reais</h1>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>SEU NEGÓCIO NUNCA MAIS SERÁ O MESMO!</h1>
          <v-btn color="secondary" href="https://docs.google.com/forms/d/1ibO4tX6hJjz3IiTbYt3T3XRWu74bzi0tRF8m4n-vlH8/viewform?edit_requested=true" target="_blank">Clique aqui e faça o seu orçamento!</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "GerenciamentoInteligente",
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
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para a imagem */
  mix-blend-mode: multiply;
}

.image-section {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para a imagem */
}

.introduction-section {
  background-color: #ffffff; /* Fundo branco para a seção de trodução */
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
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-base);
}

.services-section {
  background-color: #f7f7f7; /* Fundo cinza claro para a seção de serviços */
  padding: 20px 0;
}

.services-section h2 {
  font-size: 2rem;
  font-weight: bold;
  padding-left: 20px; /* Padding para alinhar com o texto */
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
