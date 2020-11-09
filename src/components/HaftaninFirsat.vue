<template>
  <div id="haftaninfirsat" class="haftalik">
   <img class="resim" src="https://cdn.saatvesaat.com.tr/media/wysiwyg/home-showcase/cok-satanlar-0920.jpg" >
   <div class="firsat">
  <div class="test">HAFTANIN FIRSATLARI
  <div >
  <v-sheet  height="350">
    <v-slide-group  >
      <v-slide-item 
        v-for="(item,i) in items"
        :key="i"
        v-slot="{ active, toggle }"
      >
        <v-btn height="300" width="220" 
          :input-value="active"
          @click="toggle"
        >
        <div class="slidegrp">
          <img  :src="item.url" width="225" height="230" >
          <div>
              <input type="text" :placeholder="item.marka" height="15">
          </div>
          <div>
              <input type="text" :placeholder="item.isim" height="15">
          </div>
          <div>
              <input type="text" :placeholder="item.fiyat +'  ' +'₺'" height="15" class="fiyat">      
          </div>
          <div >
              <input type="text" :placeholder="item.indirimli +'  ' +'₺'" height="15" class="indirimli" >
          </div>
        </div>   
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
 </div>
   </div> </div>
</div>
  
</template>

<script>
 export default {
    data:()=>( {
     items: [
      {
        marka:'Seiko',
        isim:'SEISB305P Erkek Kol Saati',
        ozellik1:'Quartz Teknoloji',
        ozellik2:'44 mm Kasa Çapı',
        fiyat:337000,
        indirimli:151600,
        url:'https://cdn.saatvesaat.com.tr/media/catalog/product/s/e/seisb305p_1.jpg',
        url2:null
      },
      {
        marka:'Welder Moody Watch',
        isim:'WWRC671 Bayan Kol Saati',
        ozellik1:'Quartz Teknoloji',
        ozellik2:'Çelik ',
        fiyat:437000,
        indirimli:201600,
        url:'https://cdn.saatvesaat.com.tr/media/catalog/product/w/w/wwrc671_1.jpg',
        url2:'https://cdn.saatvesaat.com.tr/media/catalog/product/w/w/wwrc671_3.jpg'
      },
      {
        marka:'Tommy Hilfiger',
        isim:'TH1782254 Bayan Kol Saati',
        ozellik1:'Quartz Teknoloji',
        ozellik2:'Çelik ',
        fiyat:237000,
        indirimli:101600,
        url:'https://cdn.saatvesaat.com.tr/media/catalog/product/t/h/th1782254_1.jpg',
        url2:'https://cdn.saatvesaat.com.tr/media/catalog/product/t/h/th1782254_3.jpg'
      },
      {
        marka:'Wesse',
        isim:'TWWG203803 Kol Saati',
        ozellik1:'Quartz Teknoloji',
        ozellik2:'Çelik ',
        fiyat:37000,
        indirimli:11600,
        url:'https://cdn.saatvesaat.com.tr/media/catalog/product/w/w/wwg203803_1_2.jpg',
        url2:'https://cdn.saatvesaat.com.tr/media/catalog/product/w/w/wwg203803_3.jpg'
      },
      {
        marka:'Guess',
        isim:'GUW0995G3 Erkek Kol Saati',
        ozellik1:'Quartz Teknoloji',
        ozellik2:'Çelik ',
        fiyat:337000,
        indirimli:211600,
        url:'https://cdn.saatvesaat.com.tr/media/catalog/product/g/u/guw0995g3_1.jpg',
        url2:'https://cdn.saatvesaat.com.tr/media/catalog/product/g/u/guw0995g3_2.jpg'
      },
      {
        marka:'Guess',
        isim:'GUW0911L5 Bayan Kol Saati',
        ozellik1:'Quartz Teknoloji',
        ozellik2:'Çelik ',
        fiyat:737000,
        indirimli:411600,
        url:'https://cdn.saatvesaat.com.tr/media/catalog/product/g/u/guw0911l5.jpg',
        url2:'https://cdn.saatvesaat.com.tr/media/catalog/product/g/u/guw0911l5_2.jpg'
      },
      {
        marka:'Guess',
        isim:'GUU1295L2 Bayan Kol Saati',
        ozellik1:'Quartz Teknoloji',
        ozellik2:'Çelik ',
        fiyat:785400,
        indirimli:125200,
        url:'https://cdn.saatvesaat.com.tr/media/catalog/product/g/u/guu1295l2_1.jpg',
        url2:'https://cdn.saatvesaat.com.tr/media/catalog/product/g/u/guu1295l2_2.jpg'
      },
      {
        marka:'CERRUTI 1881',
        isim:'CRA012037 Erkek Kol Saati',
        ozellik1:'Quartz Teknoloji',
        ozellik2:'Çelik ',
        fiyat:884400,
        indirimli:555200,
        url:'https://cdn.saatvesaat.com.tr/media/catalog/product/c/r/cra012037_1.jpg',
        url2:'https://cdn.saatvesaat.com.tr/media/catalog/product/c/r/cra012037_2.jpg'
      },
      {
        marka:'Guess',
        isim:'CRA28101 Erkek Kol Saati',
        ozellik1:'Quartz Teknoloji',
        ozellik2:'Çelik ',
        fiyat:195500,
        indirimli:105200,
        url:'https://cdn.saatvesaat.com.tr/media/catalog/product/c/r/cra28101_1.jpg',
        url2:null
      }
    ]
  }),
  }
</script>

<style>

div.test{
  color:white;
  background: black;
  text-align: center;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  text-align:center;
 
}
.resim{
  height: 400px;
 width: 700px;
}
.haftalik{
column-count : 2;
}
.firsat{
  column-width:500px;
  height: 400px;
  width:750px ; 
}

</style>