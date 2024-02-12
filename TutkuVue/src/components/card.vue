<template>
  <VCol>
    <VRow class="mx-lg-10">
      <VCol  v-for="(item,i) in items" :key="i">
        <v-card
          :to="item.route"
          :href="item.link"
          :target="item.property"
          class="mx-auto card-hover my-5 pb-5"
          max-width="400"
        >
          <v-img
            height="300"
            width="400"
            :src=item.image
            cover
          >

          </v-img>
          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-text>
            <div>{{ item.text }}</div>
          </v-card-text>
        </v-card>
      </VCol>

    </VRow>
  </VCol>

</template>
<script setup lang="ts">
import cardImage from '@/assets/cardtitle1.jpg'
import cardImage2 from '@/assets/sube2.jpg'
import cardImage3 from '@/assets/erasmus.jpeg'

const items = [
  {property: '_blank' , link: 'https://www.mobilsporcu.com/onkayit/denizli-tutku-genclik-ve-spor-kulubu' , image: cardImage , title: 'Voleybol Okulu' , text:'Voleybol Okulu kayıtlarımız devam ediyor! Tutkunu keşfetmeye var mısın?'},
  {route: '/content'  ,image: cardImage2 , title: 'Ailemiz Sizinle Birlikte' , text:'Ailemiz sizinle birlikte büyüyor. Tutku Spor Kulübü  Voleybol ailesi olarak 2 şubemiz ile hizmetinizdeyiz!'},
  {property: '_blank', link: 'https://www.instagram.com/p/CximpyHKKKy/?igshid=MzRlODBiNWFlZA=='  ,image: cardImage3 , title: 'Erasmus Projesi' , text:'İkinci kez içerisinde yer aldığımız Erasmus projesini sizlere duyurmaktan onur duyarız.'},
  ]
</script>

<style>
.card-hover:hover{
  transform: scale(1.02);
}
</style>
