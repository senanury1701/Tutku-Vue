<template>
  <v-dialog :model="props.dialog" activator="parent" width="auto">
    <v-card
    class="mx-auto bg-transparent"
    height="auto"
    width="auto"
    theme="dark"
    >
    <v-img
      :width=imageWidth
      :max-height="800"
      cover
      :src=props.image
      ></v-img>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">

import {  defineProps,ref, onMounted,onBeforeUnmount } from 'vue';
const props = defineProps({
  dialog: Boolean,
  image: String,
});
const imageWidth = ref((window.innerWidth / 4) * 3);

const updateImageWidth = () => {
  imageWidth.value = Math.min((window.innerWidth / 4) * 3, 800);
};

onMounted(() => {
  updateImageWidth();
  window.addEventListener('resize', updateImageWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateImageWidth);
});
</script>
