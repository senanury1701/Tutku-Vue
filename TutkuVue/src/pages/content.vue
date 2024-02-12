<template>
  <div class="bg-black" style="min-height: 100vh ;">
    <v-container class="bg-black">
      <v-row class="justify-center bg-black">
        <v-col cols="12" md="6">
          <v-card class="m-5 text-white text-center bg-black">
            <h1 class="my-4">Bize Ulaşın</h1>
            <h4>Tel no: <v-btn class="bg-transparent text-decoration-underline"  href="tel:+905530124434">0 553 012 4434</v-btn></h4>
            <h4>Tel no: <VBtn class="bg-transparent text-decoration-underline"  href="tel:+905384431217">0 538 443 1217</VBtn></h4>
            <div class="mx-auto my-5" >
              <v-btn class="mx-5 bg-transparent " :size="50" variant="flat"  @click="openInstagram">
                <v-icon size="40">mdi-instagram</v-icon>
              </v-btn>
              <v-btn class="mx-5 bg-transparent" :size="50" variant="flat" @click="openWhatsApp">
                <v-icon size="40">mdi-whatsapp</v-icon>
              </v-btn>
            </div>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9292959233526!2d29.081201776412772!3d37.76825601253459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73f064ce60437%3A0xefbfbc65bfe099a4!2sDenizli%20Lisesi!5e0!3m2!1sen!2str!4v1691079860203!5m2!1sen!2str"
                  width="100%" height="250" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </v-col>
              <v-col cols="12" md="6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.5676862185414!2d29.12145707641154!3d37.72982421474718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73eb084e75a1b%3A0xc627990e769192b4!2sT%C3%BCrk%20E%C4%9Fitim%20Vakf%C4%B1%20Anadolu%20Lisesi!5e0!3m2!1sen!2str!4v1691079887955!5m2!1sen!2str"
                  width="100%" height="250" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script setup lang="ts">
const openInstagram = () => {
  window.open('https://www.instagram.com/tutkugskvoleybol/', '_blank');
};

const openWhatsApp = () => {
  window.open('https://wa.me/05384431217', '_blank');
};
</script>
