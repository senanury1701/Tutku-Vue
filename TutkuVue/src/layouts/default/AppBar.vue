<template>
  <div >
    <v-app-bar class="bg-black" app :elevation="3">
      <v-sheet class="d-md-flex d-none " min-width="60px" />
      <router-link :to="{ path: '/' }" class="text-decoration-none text-white">
        <v-avatar class="ms-7 ms-lg-16" size="55" image="/src/assets/TutkuGskLogo.jpg"></v-avatar>
      </router-link>
      <router-link :to="{ path: '/' }" class="text-decoration-none text-white ms-3" >
        <v-toolbar-title >Tutku Spor Kulübü</v-toolbar-title>
      </router-link>
        <v-toolbar-title ></v-toolbar-title>
        <div class="d-lg-flex d-none ">
          <v-list-item v-for="(item, index) in items" :key="index" :to="item.link" active-class="list-item-active">
            <v-list-item-content>
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div class=" me-lg-16 d-none d-sm-flex">
          <v-btn variant="text" @click="openInstagram" icon="mdi-instagram"></v-btn>
          <v-btn variant="text" @click="openWhatsApp" icon="mdi-whatsapp"></v-btn>
        </div>

      <v-app-bar-nav-icon class="d-md-flex  d-lg-none " @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-sheet class="d-md-flex d-none " min-width="60px" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer"  class="d-md-flex d-lg-none pt-5" location="right">
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.link" active-class="list-item-active ">
            <v-list-item-content>
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
      </v-list-item>
      <div class="d-flex d-sm-none " style="position: absolute; bottom: 30px;">
        <v-btn class="mx-5" :size="50" variant="flat" @click="openInstagram">
          <v-icon size="40">mdi-instagram</v-icon>
        </v-btn>
        <v-btn :size="50" variant="flat" @click="openWhatsApp">
          <v-icon size="40">mdi-whatsapp</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>

  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
const drawer = ref(false)
const items= [
        { title: 'Voleybol Okulu', link: '/course' },
        { title: 'Hakkımızda', link: '/about' },
        { title: 'İletişim', link: '/content' },
      ]
const openInstagram = () => {
  window.open('https://www.instagram.com/tutkugskvoleybol/', '_blank');
};

const openWhatsApp = () => {
  window.open('https://wa.me/05384431217', '_blank');
};
</script>

<style scoped>
.list-item-active {
  border-bottom: 2px solid #ffffffab
}
</style>
