<template>
  <v-footer
    class=" d-flex flex-column"
  >

  <div class="d-sm-block d-md-flex">
    <div>
      <VList>
        <VListItem><h3>Bilgiler</h3></VListItem>
        <VListItem :active="false" to="/security" title="Gizlilik ilkeleri"></VListItem>
        <VListItem :active="false" to="/personel" title="Kullanıcı sözleşmesi"></VListItem>
      </VList>
    </div>

    <div>
      <VList>
        <VListItem><h3>Tutku Spor Kulübü</h3></VListItem>
        <VListItem :active="false" to="/content" title="Salonlarımız"></VListItem>
        <VListItem :active="false" to="/content" title="İletişim"></VListItem>
      </VList>
    </div>

    <div>
      <VList>
        <VListItem :active="false"  to="/" >
          <v-img width="100" src="/src/assets/TutkuGskLogo.jpg"></v-img>
        </VListItem>
      </VList>
    </div>
  </div>


    <v-divider></v-divider>

    <div>
      2021 — <strong>Tutku Spor Kulübü</strong>
    </div>
  </v-footer>
</template>
<script setup lang="ts">


</script>
