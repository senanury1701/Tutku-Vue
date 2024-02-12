<template>
  <v-carousel
    cycle
    show-arrows="hover"
    class="bg-black mx-auto"
    style="max-width: 1200px;"
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
import activity1 from '@/assets/etkinlik2.jpg'
import activity2 from '@/assets/etkinlikyuruyus.jpeg'
import activity3 from '@/assets/etkinlik 3.jpg'
import activity4 from '@/assets/EtkinlikYaz.jpeg'
const slides = [
  {image:activity1 , text:'Denizli Büyükşehir Belediyemizin düzenlediği minik kızlar turnuvamız.'},
  {image:activity2 , text:'Çamlık Yürüyüşümüz'},
  {image:activity3 , text:'Pandemiden sonra ilk buluşmamız.'},
  {image:activity4 , text:'Yaza Veda'},
  ]
</script>
