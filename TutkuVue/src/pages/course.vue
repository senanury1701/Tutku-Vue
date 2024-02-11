<template>
  <div class="bg-black">
    <v-img
      gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.8)"
      aspect-ratio="16/9"
      cover
      src="/src/assets/courseback.jpeg"
    >
    <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-card-title class="text-white text-md-h3 text-sm-h4">
              Voleybol Okulu <br> Kayıtlarımız Devam <br> Ediyor!
            </v-card-title>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <VContainer class="container" >
      <p>Tutku Gençlik Spor Kulübü olarak, topluma faydalı bireyler yetiştirmek ve Türk voleybolunu gelecekteki yıldızlarıyla güçlendirmek amacıyla kararlılıkla çalışmalarımıza devam ediyoruz. Eğer siz de voleybolun heyecanına kapıldıysanız ve yeteneklerinizi en üst seviyeye çıkarmak istiyorsanız, Tutku Gençlik Spor Kulübü Voleybol Okulu'na katılma fırsatını kaçırmayın!</p>
      <v-row justify="center" class="my-3">
        <v-btn color="success" class="btn w-50" href="/content">Iletisim icin</v-btn>
      </v-row>
      <h3 class="my-3"> Tutku Gençlik Spor Kulübü Voleybol Okulları: Spor ve Başarıya Adım Atın!</h3>
      <p>Tutku Gençlik Spor Kulübü olarak, Türk voleybolunun yıldızlarını yetiştirmek ve topluma katkı sağlamak için gayretle çalışıyoruz. Voleybol sevgisine sahipseniz ve yeteneklerinizi en üst düzeye çıkarmak istiyorsanız, Tutku Gençlik Spor Kulübü Voleybol Okulları'na katılmak için en doğru yerdesiniz!</p>
      <h3 class="my-3">Neden Tutku Gençlik Spor Kulübü Voleybol Okulu'na Katılmalısınız?</h3>
      <p>
        Uzman Eğitmenler: Kulübümüzün deneyimli ve profesyonel antrenörleri, voleybolun inceliklerini sizlere öğretmeye hazır. Teknik yeteneklerinizi geliştirmek için en iyi rehberlerle çalışacaksınız. <br><br>
        Takım Ruhu: Tutku Gençlik Spor Kulübü ailesine katıldığınızda, dostluk ve dayanışma duygularıyla dolu bir ortamda bulunacaksınız. Takım arkadaşlarıyla birlikte başarıya koşacaksınız. <br><br>
        Rekabet Fırsatı: Kulübümüz, yerel düzeyde çeşitli turnuvalara katılma fırsatı sunar. Kendinizi rekabet içinde geliştirme şansını yakalayacaksınız. <br><br>
        Unutmayın, Tutku Gençlik Spor Kulübü Voleybol Okulu'na katılarak sadece spor becerilerinizi değil, aynı zamanda karakterinizi de güçlendireceksiniz. Topluma faydalı bireyler olarak yetişmeniz için sizleri bekliyoruz. Tutku ailesine katılmak için hemen başvurun! <br><br></p>
      <v-row justify="center" class="my-3">
        <v-btn
        class="bg-transparent"
        width="250"
        height="100"
        @click="scrollToTarget('#courseGallery')"
      >
        <img style="height: 100px; width: 150px;" src="/src/assets/down.png" alt="">
      </v-btn>
    </v-row>
    </VContainer>
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
      <v-row justify="center" class="my-5">
        <v-btn color="success" class="btn w-50" to="/gallery">Galerinin devamı</v-btn>
      </v-row>
    </VContainer>

  </div>
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
