<template >
  <VContainer >
      <div id="courseGallery">
        <h1 class="text-center my-5">Voleybol Okulu Galerisi</h1>
        <v-row>
          <v-col
            v-for="item in items"
            :key="item"
            class="d-flex child-flex"
            cols="6"
            sm="4"
            md="4"
            lg="3"
          >
            <v-img
              :src="item.image"
              :lazy-src="item.image"
              aspect-ratio="1"
              cover
              class="bg-grey-lighten-2"
              @click="toggleDialog"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
               <DialogComponent :dialog="dialog" :image="item.image" />
            </v-img>

          </v-col>
        </v-row>
      </div>

    </VContainer>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import DialogComponent from "@/components/dialog.vue";

const dialog = ref(false);

const toggleDialog = () => {
  dialog.value = !dialog.value;
};

const items = [
  {image:'/src/assets/yazokulu1.jpg'},
  {image:'/src/assets/yazokulu2.JPG'},
  {image:'/src/assets/gal7.jpeg'},
  {image:'/src/assets/yazokulu3.jpg'},
  {image:'/src/assets/gal5.jpeg'},
  {image:'/src/assets/yazokulu4.jpg'},
  {image:'/src/assets/gals1.jpeg'},
  {image:'/src/assets/yazokulug5.JPG'},
  {image:'/src/assets/gals2.jpeg'},
  {image:'/src/assets/yazokulug6.jpg'},
  {image:'/src/assets/gals3.jpeg'},
  {image:'/src/assets/yazokulug7.jpg'},
  {image:'/src/assets/gals4.jpeg'},
  {image:'/src/assets/yazokulug8.JPG'},
  {image:'/src/assets/yazokulug9.JPG'},
  {image:'/src/assets/gals5.jpeg'},
  {image:'/src/assets/yazokulug10.jpg'},
  {image:'/src/assets/yazokulug11.JPG'},
  {image:'/src/assets/gals6.jpeg'},
  {image:'/src/assets/yazokulug12.JPG'},
  {image:'/src/assets/gals7.jpeg'},
  {image:'/src/assets/gals8.jpeg'},
  {image:'/src/assets/gals9.jpeg'},
  {image:'/src/assets/gals10.jpeg'},
  {image:'/src/assets/gals11.jpeg'},
]
</script>
