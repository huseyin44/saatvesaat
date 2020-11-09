<template>
<div id="anasayfa">
<div class="test">%100 Orijinal • Ücretsiz Kargo • Vade Farksız 9 Taksit </div>
<div class="ikinciyer">
  <button class="saatbuton" >saat&saat</button>
  <button class="bayansaat">BAYAN SAAT</button>
  <button class="erkeksaat">ERKEK SAAT</button>
  <button class="cocuksaat">ÇOCUK SAAT</button>  
  
  <v-row justify="center" class="markalar" >
    <v-menu v-model="showMenu3" offset-y open-on-hover >
      <template v-slot:activator="{ on, attrs }"  > 
        <div class="markabut"
          v-bind="attrs"
          v-on="on"
        >
        MARKALAR
        </div>
      </template>
      <v-list class="itemlistelemecolumn">
      <div class="5" :class="{ red35 : gecersiz35 }" @mouseover="kirmizi35" @mouseleave="gecersiz35=false">88 Rue Du Rhone</div>
      <div class="6" :class="{ red36 : gecersiz36 }" @mouseover="kirmizi36" @mouseleave="gecersiz36=false">Armani Exchange </div>
      <div class="7" :class="{ red7 : gecersiz7 }" @mouseover="kirmizi7" @mouseleave="gecersiz7=false">Bomberg </div>
      <div class="8" :class="{ red8 : gecersiz8 }" @mouseover="kirmizi8" @mouseleave="gecersiz8=false">Boss Watches </div>
      <div>'DKNY</div>
      <div>Edox </div>
      <div>Empori Armani </div>
      <div>Escape  </div>
      <div>Esprit  </div>
      <div>FENDI </div>
      <div>Fossil</div>
      <div>Gc </div>
      <div>Glam Rock </div>
      <div>Guess </div>
      <div>Lacoste </div>
      <div>Lorus </div>
      <div>Oris </div>
      <div>Parigi </div>
      <div>Seiko </div>
      <div>Skagen </div>
      <div>Skechers </div>
      <div>Tag HEUER </div>
      <div>Thom Olson </div>
      <div>Young Sterna </div>
      <div>Xonix </div>
      </v-list>
    </v-menu> 
  </v-row>
  
  <button class="taki">TAKI & AKSESUAR</button>
  <button class="taki2">FIRSAT</button> 
  <button class="online">ONLİNE ÖZEL</button> 
  <div class="aramaa">
  <input class="arama" type="search" placeholder="Kelime / Kod" autocomplete="off">
  <input class="arares" type="image" src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg" >
  </div> 
  <v-row justify="center" class="kullanici" :class="{ red : gecersiz }" @mouseover="kirmizi" @mouseleave="gecersiz=false">
    <v-menu v-model="showMenu" offset-y >
      <template v-slot:activator="{ on, attrs }" > 
        <v-card
          img="https://www.flaticon.com/svg/static/icons/svg/747/747376.svg"
          height="35"
          width="35"
          v-bind="attrs"
          v-on="on"
        ></v-card>
      </template>
      <v-list>
      <div :class="{ red9 : gecersiz9 }" @mouseover="kirmizi9" @mouseleave="gecersiz9=false">Favori Listem</div>
      <div :class="{ red10 : gecersiz10 }" @mouseover="kirmizi10" @mouseleave="gecersiz10=false">Sepetim</div>
      <div :class="{ red11 : gecersiz11 }" @mouseover="kirmizi11" @mouseleave="gecersiz11=false">Alışverişi Tamamla</div>
      <div :class="{ red12 : gecersiz12 }" @mouseover="kirmizi12" @mouseleave="gecersiz12=false" >Uye Girisi </div>
      <div :class="{ red13 : gecersiz13 }" @mouseover="kirmizi13" @mouseleave="gecersiz13=false">Üye Ol</div>
      </v-list>
    </v-menu> 
  </v-row>
    <v-row justify="center" class="sepet" :class="{ red2 : gecersiz2 }" @mouseover="kirmizi2" @mouseleave="gecersiz2=false">
    <v-menu v-model="showMenu2" offset-y>
      <template v-slot:activator="{ on, attrs }" > 
        <v-card
          img="https://www.flaticon.com/svg/static/icons/svg/126/126515.svg"
          height="35"
          width="35"
          v-bind="attrs"
          v-on="on"
        ></v-card>
      </template>
      <v-list>
        <div>Sepet</div>
        <div>Sepetiniz Boş</div>      
      </v-list>
    </v-menu> 
  </v-row>
  <v-app>
  </v-app>
  </div> 
  <div>
      <img class="resim1" height="300" width="1550"  src="https://cdn.saatvesaat.com.tr/media/wysiwyg/Bulk/online-ozel-07-10.jpg" >
  </div>
</div>
</template>

<script>
export default {
  name: 'Anasayfa',
    data: () => ({
    gecersiz: false,
    gecersiz2: false,
    gecersiz3: false,
    gecersiz35: false,
    gecersiz36: false,
    gecersiz7: false,
    gecersiz8: false,
    gecersiz9: false,
    gecersiz10: false,
    gecersiz11: false,
    gecersiz12: false,
    gecersiz13: false,
    showMenu: false,
    showMenu2: false,
    showMenu3: false,
   
  }),
  methods:{
    kirmizi() {
      this.gecersiz = true;
      },
    kirmizi2() {
      this.gecersiz2 = true;
  },
     kirmizi3() {
      this.gecersiz3 = true;
  },
   kirmizi3() {
      this.gecersiz3 = true;
  },
   kirmizi35() {
      this.gecersiz35 = true;
  },
   kirmizi36() {
      this.gecersiz36 = true;
  },
   kirmizi7() {
      this.gecersiz7 = true;
  },
   kirmizi8() {
      this.gecersiz8 = true;
  },
   kirmizi9() {
      this.gecersiz9= true;
  },
   kirmizi10() {
      this.gecersiz10= true;
  },
   kirmizi11() {
      this.gecersiz11 = true;
  },
   kirmizi12() {
      this.gecersiz12 = true;
  },
   kirmizi13() {
      this.gecersiz13 = true;
  },

}}
</script>
<style >
div.ikinciyer{
    column-count:11;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;
    height: 80px;
}
button.saatbuton{
    display: block;
    width: 190px;
    min-width: 100px;
    min-height: 74px;
    text-align: center;
    padding: 5px 5px 5px 5px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;
    font-size: x-large; 
}
button.bayansaat{
    display: block;
    width: 190px;
    min-width: 100px;
    min-height: 74px;
    text-align: center;
    padding: 5px 5px 5px 15px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;  
}
button.erkeksaat{
    display: block;
    width: 190px;
    min-width: 100px;
    min-height: 74px;
    text-align: center;
    padding: 5px 5px 5px 15px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;
}
button.cocuksaat{
    display: block;
    width: 170px;
    min-width: 100px;
    min-height: 74px;
    text-align: center;
    padding: 5px 5px 5px 15px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;
}
.markalar{
    display: block;
    width: 150px;
    min-width: 100px;
    min-height: 74px;
    text-align: center;
    padding: 23px 20px 12px 30px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;  
    color: black;
}
.markabut{
    background-color:#F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;  
    color: black;
}
button.taki{
    display: block;
    width: 200px;
    min-width: 100px;
    min-height: 74px;
    text-align: center;
    padding: 5px 30px 5px 5px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;
}
button.taki2{
    display: block;
    width: 180px;
    min-width: 100px;
    min-height: 74px;
    text-align: center;
    padding: 5px 10px 5px 5px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;
}
button.online{
    display: block;
    width: 140px;
    min-width: 100px;
    min-height: 74px;
    text-align: center;
    padding: 5px 5px 5px 15px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    border-style:solid ;
    color: #BD1818;
}
.aramaa{
    width: 180px;
    min-width: 180px;
    min-height: 32px;
    height: 32px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
    padding: 20px 25px 40px 15px;
}
.arama{
    width: 160px;
    min-width: 160px;
    min-height: 32px;
    height: 32px;
    bottom: 45px;
    font-family: "Roboto", Arial, sans-serif;
    border-radius: 30px;
    font-size: 15px;
    background-color: #F9F9F9;
    border-color: #F9F9F9;
}
.arares{
   position: absolute;
   top: 57px;
   right:250px;
   width: 32px;
   height: 27px;
   min-width: 32px;
   min-height: 27px;
}
.kullanici{
   position: absolute;
   top: 50px;
   right:180px;
   width: 35px;
   height: 35px;
   min-width: 32px;
   min-height: 50px;
}
.sepet{
   position: absolute;
   top: 50px;
   right:110px;
   width: 35px;
   height: 35px;
   min-width: 32px;
   min-height: 50px;
}
.red {
  background-color: red;
}
.red2 {
  background-color: red;
}
.red35 {
  color: red;
}
.red36 {
  color: red;
}
.red7 {
  color: red;
}
.red8 {
  color: red;
}
.red9{
  color: red;
}
.red10 {
  color: red;
}
.red11 {
  color: red;
}
.red12 {
  color: red;
}
.red13 {
  color: red;
}
.itemlist{
    text-decoration: underline;
    color: red;
}
.itemlistelemecolumn{
  column-count: 3;
  
}
</style>