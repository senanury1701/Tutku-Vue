<script setup lang="ts">
import slider from '@/components/slider.vue';
import card from '@/components/card.vue';
import infoCard from '@/components/infoCard.vue';
</script>

<template>
  <div >
    <div>
      <slider />
    </div>
    <div class="text-center mx-5 my-5">
      <h1> Duyurular</h1>
      <card />
    </div>
    <div >
      <infoCard/>
    </div>

  </div>
</template>
<style>

</style>
