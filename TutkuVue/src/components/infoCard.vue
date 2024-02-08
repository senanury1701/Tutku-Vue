<template>
<v-card>
    <v-img
      :src=image
      class="align-center text-center "
      gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.7)"
      height="600px"
      cover
    >
      <v-card-title  class="text-white text-h4 " >VOLEYBOL OKULU</v-card-title>
      <v-divider
        :thickness="6"
        class="border-opacity-75 m-auto"
        color="success"
        width="50%"
      ></v-divider>
      <v-card-text class="text-white text-lg-h5 py-5">Türk voleybolunu şekillendirmek ve topluma katkı sağlamak için çalışıyoruz. Sizin de voleybol TUTKU'nuz varsa, hemen bize katılın!</v-card-text>
      <v-spacer />
      <VBtn color="success">Daha Fazla Bilgi</VBtn>
    </v-img>

  </v-card>
</template>

<script setup lang="ts">
import image from '@/assets/brightnesback.jpg'
</script>
