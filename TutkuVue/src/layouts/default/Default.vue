<template>
  <v-app >
    <default-bar />
    <default-view />
    <default-link class="default-link"/>
    <default-footer/>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultFooter from './Footer.vue'
  import DefaultLink from '@/components/link.vue'
</script>
<style scoped>
.default-link {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 10;
}
</style>
