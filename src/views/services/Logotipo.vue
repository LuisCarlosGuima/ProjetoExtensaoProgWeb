<template>
  <!-- Seção de introdução e descrição -->
  <v-card class="introduction-section ma-4 pa-4">
    <v-row>
      <v-col cols="12" md="12">
        <div class="text-section" style="text-align: left;">
          <h1>PROPOSTA DE
            LOGOTIPO</h1>
          <p>
            Logotipo exclusiva com design personalizado.
            Logotipo profissional e versátil, ideal para aplicações
            em materiais digitais, como sites e redes sociais, bem
            como em materiais impressos, como placas, letreiros,
            banners, adesivos e outros.
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>O QUE INCLUI</h1>
          <p>
            1 logotipo com design personalizado e exclusivo;
            Manual de marca;
            Cartão de visita digital (PDF);
            Banner redes sociais;
            Design para artes de papelaria
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>DETALHAMENTO</h1>
          <p>
            Pesquisa de referências: Pesquisas básicas sobre o nicho,
            mercado, público-alvo;
            Identidade visual completa: Definição de paleta de cores,
            tipografia, elementos da marca, símbolo);
            Logotipo com design personalizado e exclusivo: Logotipo
            criada especificamente para o cliente, de acordo com suas
            necessidades e visão de marca;
            Manual de marca: O manual de marca inclui diretrizes de
            uso, cores, tipografia, sugestões de aplicações outra
            informação relevante para garantir a consistência da
            marca;
            Formatos: PNG, JPG, PDF e SVG;
            Variações da logo: PNG transparente, preto e branco e
            variações de cores;
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>O QUE NÃO INCLUI</h1>
          <p>
            Escolha/definição do nome da marca;
            Registro de marca;
            Materiais impressos;
            Design para artes de papelaria após 30 dias da entrega
            da logotipo. São cobrados à parte
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>INVESTIMENTO R$ xxxx reais</h1>
          <p>
            Logotipo profissional
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>FORMA DE PAGAMENTO</h1>
          <p>
            O pagamento é feito em 2 etapas: 
            50% na solicitação dos serviços
            50% na entrega do projeto finalizado
            Para pagamentos parcelados, será aplicado um acréscimo
            proporcional ao número de parcelas (consulte as taxas).
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>PRAZO DE ENTREGA</h1>
          <p>
            O prazo de entrega é de 30 dias úteis, a partir da data de recebimento do briefing de logotipo preenchido. 
          </p>
        </div>
        <div  class="text-section" style="text-align: left;">
          <h1>VENHA RENOVAR A IDENTIDADE DA SUA MARCA!</h1>
          <v-btn color="secondary" href="https://docs.google.com/forms/d/1Ry4aPX3vGS_wuPLum5bIrOlUay-ATx82b-qizgU_zMc/viewform?edit_requested=true" target="_blank">Clique aqui e faça o seu orçamento!</v-btn>
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
