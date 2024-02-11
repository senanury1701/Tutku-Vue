<template>
  <v-dialog :model="props.dialog" activator="parent" width="auto">
    <v-card
    class="mx-auto"
    height="auto"
    width="auto"
    theme="dark">
    <v-img
        class="bg-black w-100"
        min-width="400"
        :aspect-ratio="1"
        :src=props.image
      ></v-img>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {  defineProps } from 'vue';
const props = defineProps({
  dialog: Boolean,
  image: String,
});


</script>
