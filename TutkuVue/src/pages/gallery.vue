<template >
  <VContainer style="max-width: 1200px;">
      <div id="courseGallery">
        <h1 class="text-center my-5">Voleybol Okulu Galerisi</h1>
        <v-row>
          <v-col
          v-for="(item,i) in items" :key="i"
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
import image1 from '@/assets/yazokulu1.jpg'
import image2 from '@/assets/yazokulu2.jpg'
import image3 from '@/assets/gal7.jpeg'
import image4 from '@/assets/yazokulu3.jpg'
import image5 from '@/assets/gal5.jpeg'
import image6 from '@/assets/yazokulu4.jpg'
import image7 from '@/assets/gals1.jpeg'
import image8 from '@/assets/yazokulug5.jpg'
import image9 from '@/assets/gals2.jpeg'
import image10 from '@/assets/yazokulug6.jpg'
import image11 from '@/assets/gals3.jpeg'
import image12 from '@/assets/yazokulug7.jpg'
import image13 from '@/assets/gals4.jpeg'
import image14 from '@/assets/yazokulug8.jpg'
import image15 from '@/assets/yazokulug9.jpg'
import image16 from '@/assets/gals5.jpeg'
import image17 from '@/assets/yazokulug10.jpg'
import image18 from '@/assets/yazokulug11.jpg'
import image19 from '@/assets/gals6.jpeg'
import image20 from '@/assets/yazokulug12.jpg'
import image21 from '@/assets/gals7.jpeg'
import image22 from '@/assets/gals8.jpeg'
import image23 from '@/assets/gals9.jpeg'
import image24 from '@/assets/gals10.jpeg'
import image25 from '@/assets/gals11.jpeg'
const dialog = ref(false);

const toggleDialog = () => {
  dialog.value = !dialog.value;
};

const items = [
  {image: image1 },
  {image: image2 },
  {image: image3 },
  {image: image4 },
  {image: image5 },
  {image: image6 },
  {image: image7 },
  {image: image8 },
  {image: image9 },
  {image: image10 },
  {image: image11 },
  {image: image12 },
  {image: image13 },
  {image: image14 },
  {image: image15 },
  {image: image16 },
  {image: image17 },
  {image: image18 },
  {image: image19 },
  {image: image20 },
  {image: image21 },
  {image: image22 },
  {image: image23 },
  {image: image24 },
  {image: image25 },
]
</script>
