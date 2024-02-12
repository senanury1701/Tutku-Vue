<template>
  <v-card>
    <h1 class="text-center mb-3 ">Başarılar</h1>
    <v-tabs v-model="tab" bg-color="success" align-tabs="center">
      <v-tab :value="1">2023-2024</v-tab>
      <v-tab :value="2">2022-2023</v-tab>
      <v-tab :value="3">2021-2022</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="(windowItem, index) in items" :key="index" :value="index + 1">
        <v-container fluid>
          <v-row justify="center">
            <v-col  v-for="(item, i) in windowItem" :key="i"  md="4" s="12" class="text-center card-avarege" >
              <VCard @click="toggleDialog" :width="350" min-height="380">
                <v-img  :src="item.image" aspect-ratio="1" cover></v-img>
                <v-card-text class="text-h6">{{ item.text }}</v-card-text>
                <DialogComponent :dialog="dialog" :image="item.image" />
              </VCard>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>

</template>

<script setup lang="ts">
import { ref } from "vue";
import DialogComponent from "@/components/dialog.vue";
import image341 from '@/assets/YildizTakimi2.jpeg'
import image342 from '@/assets/MidiTakim.jpeg'
import image343 from '@/assets/KucukTakim.jpeg'

import image231 from '@/assets/tutkuYildiz.png'
import image232 from '@/assets/slider2.jpg'
import image233 from '@/assets/slider4.jpg'

import image121 from '@/assets/slider3.jpg'
import image122 from '@/assets/2021-yildiz.jpeg'

const dialog = ref(false);

const toggleDialog = () => {
  dialog.value = !dialog.value;
};

const tab = ref(null);
const items = [
  [
    { text: '2023-2024 Sezonu Yıldız Kızlar ', image: image341 },
    { text: '2023-2024 Sezonu Midi Kızlar ', image: image342 },
    { text: '2023-2024 Sezonu Küçük Kızlar ', image: image343 },
  ],
  [
    { text: '2022-2023 Sezonu Yıldız Kızlar Denizli 4.lüğü', image: image231  },
    { text: '2022-2023 Sezonu Genç Kızlar Denizli 2.liği', image: image232 },
    { text: '2022-2023 Sezonu TVF Kadınlar 2. Ligi', image: image233 },
  ],
  [
    { text: '2021-2022 Sezonu Bölgesel Lig Denizli Şampiyonluğu', image: image121 },
    { text: '2021-2022 Sezonu Yıldız Kızlar Denizli 4.lüğü', image: image122 },
  ],
];
</script>

<style>
.card-avarege{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
