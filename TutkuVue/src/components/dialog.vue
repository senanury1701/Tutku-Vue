<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false)

</script>

<template>
  <div class="text-center">


    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
