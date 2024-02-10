<script setup lang="ts">
import slider1 from '@/assets/slider.jpg'
import slider2 from '@/assets/slider2.jpg'
import slider3 from '@/assets/slider3.jpg'
import slider4 from '@/assets/slider4.jpg'
  const items = [
      slider1,
      slider2,
      slider3,
      slider4,
    ]

</script>
<template>
    <v-carousel cycle show-arrows="hover" touch class="bg-black">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item"   >
      </v-carousel-item>
    </v-carousel>
</template>
