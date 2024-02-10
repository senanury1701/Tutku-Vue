<script setup lang="ts">
import slider from '@/components/slider.vue';
import card from '@/components/card.vue';
import infoCard from '@/components/infoCard.vue';
import successTab from '@/components/successTab.vue';
import activity from '@/components/activity.vue';
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
    <div class="mt-10">
      <successTab/>
    </div>
    <div class="mt-10">
      <h1 class="text-center">Etkinliklerimiz</h1>
      <activity />
    </div>

  </div>
</template>
<style>

</style>
