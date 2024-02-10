<template>
  <v-carousel

    cycle
    :show-arrows="false"
    class="bg-black"
  >
  <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="slide.image"
      cover
      gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.3)"
    ></v-carousel-item>
  </v-carousel>
</template>
<script setup lang="ts">
const slides = [
  {image:'/src/assets/etkinlik2.jpg' , text:'Denizli Büyükşehir Belediyemizin düzenlediği minik kızlar turnuvamız.'},
  {image:'/src/assets/etkinlikyuruyus.jpeg' , text:'Çamlık Yürüyüşümüz'},
  {image:'/src/assets/etkinlik 3.jpg' , text:'Pandemiden sonra ilk buluşmamız.'},
  {image:'/src/assets/EtkinlikYaz.jpeg' , text:'Yaza Veda'},
  ]
</script>
