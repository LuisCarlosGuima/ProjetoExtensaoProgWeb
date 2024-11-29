<template>
<!-- Seção de informações de contato -->
<v-card class="contact-info-section ma-4 pa-4">
  <v-row justify="center" style="text-align: center;">
    <v-col cols="12" md="12" class="pa-16">
      <h1 class="contact-title">Tainá Negretti</h1>
      <div class="contact-subtitle" color="primary">Eleve o patamar de sua empresa!</div>
      <div>
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
      <iframe
        class="contact-map mt-6"
        src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sAv.+Nereu+Ramos,+1234+-+Centro,+Penha+-+SC,+88385-000!5e0!6i10"
        width="100%"
        height="350"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0">
      </iframe>

      <v-card class="contact-card mt-4">
        <v-card-title class="contact-card-title">Entre em contato!</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Nome" required class="mt-4"></v-text-field>
            <v-text-field label="Digite seu E-mail" required></v-text-field>
            <v-select
              :items="['Informações sobre seus serviços', 'Outros']"
              label="Motivo do contato"
              required>
            </v-select>
            <v-textarea label="Mensagem" required></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" text>Enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      
    </v-col>
  </v-row>
</v-card>
</template>
  
<script>
export default {
  name: "Contato",
};
</script>

<style scoped>
.contact-info-section {
  padding-bottom: 20px;
}

.contact-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;  
}

.contact-subtitle {
  font-size: 20px;
  
}

.contact-details {
  font-size: 12px;
  color: #555;
}

.contact-map {
  border: 0;
  width: 100%;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-form-section {
  padding-top: 20px;
}

.contact-card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-card-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #333;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px;
}

.contact-card-title::after {
  content: " ";
  display: block;
  width: 100%;
  height: 4px;
  background-color: var(--color-secondary);
  margin-top: 10px;
  border-radius: 8px;
}

.contact-card v-card-text,
.contact-card v-card-actions {
  padding: 20px;
}

.v-btn {
  width: 100%;
  color: #fff;
  background-color: #333;
  font-weight: bold;
}

.contact-link, .social-link {
  color: rgba(0, 0, 0, 0.7);
  transition: color .3s;
  font-size: 20px
}

.contact-link:hover, .social-link:hover {
  color: var(--color-secondary);
}

.text-decoration-none {
  text-decoration: none;
}
  </style>
  