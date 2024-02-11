<template>
  <VContainer>
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
            </v-img>
          </v-col>
        </v-row>
      </div>

    </VContainer>
</template>
<script setup lang="ts">
const scrollToTarget = (target) => {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
const items = [
  {image:'/src/assets/yazokulu1.jpg'},
  {image:'/src/assets/yazokulu2.JPG'},
  {image:'/src/assets/yazokulu3.jpg'},
  {image:'/src/assets/yazokulu4.jpg'},
  {image:'/src/assets/yazokulug5.JPG'},
  {image:'/src/assets/yazokulug6.jpg'},
  {image:'/src/assets/yazokulug7.jpg'},
  {image:'/src/assets/yazokulug8.JPG'},
  {image:'/src/assets/yazokulug9.JPG'},
  {image:'/src/assets/yazokulug10.jpg'},
  {image:'/src/assets/yazokulug11.JPG'},
  {image:'/src/assets/yazokulug12.JPG'},
]
</script>
