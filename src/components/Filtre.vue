<template>
<div class="filtre">
 <v-app>
    <div class="kategorifiltre" >
      <v-menu  open-on-hover offset-y  >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" >
            Kategori
          </v-btn>
        </template>
        <v-list class="kategorilist" >
       <div :class="{ red9 : gecersiz9 }" @mouseover="kirmizi9" @mouseleave="gecersiz9=false">Saat</div>
       <div :class="{ red10 : gecersiz10 }" @mouseover="kirmizi10" @mouseleave="gecersiz10=false">Fırsat</div>
       <div :class="{ red11 : gecersiz11 }" @mouseover="kirmizi11" @mouseleave="gecersiz11=false">Online-Mağazaya-Özel</div>
       <div :class="{ red12 : gecersiz12 }" @mouseover="kirmizi12" @mouseleave="gecersiz12=false" >İndirimli-Saatler </div>
        </v-list>
      </v-menu>
      <v-menu  open-on-hover offset-y >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" >
            Cinsiyet
          </v-btn>
        </template>
        <v-list class="kategorilist">
       <v-radio :class="{ red2 : gecersiz2 }" @mouseover="kirmizi2" @mouseleave="gecersiz2=false" label="Erkek"></v-radio>
       <v-radio :class="{ red1 : gecersiz1 }" @mouseover="kirmizi1" @mouseleave="gecersiz1=false" label="Kadın"></v-radio>
        </v-list>
      </v-menu>
      <v-menu  open-on-hover offset-y  >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" >
            Fiyat
          </v-btn>
        </template>
        <v-list class="kategorifiyat">
       <div :class="{ red3 : gecersiz3 }" @mouseover="kirmizi3" @mouseleave="gecersiz3=false">1,000,000TL-1,498,000TL</div>
       <div :class="{ red6 : gecersiz6 }" @mouseover="kirmizi6" @mouseleave="gecersiz6=false">1,500,000TL-1,998,000TL</div>
       <div :class="{ red5 : gecersiz5 }" @mouseover="kirmizi5" @mouseleave="gecersiz5=false">2,000,000TL-2,498,000TL</div>
        </v-list>
      </v-menu>
      <v-menu  open-on-hover offset-y >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" >
            Renk
          </v-btn>
        </template>
        <v-list class="kategorilist">
       <v-radio :class="{ red7 : gecersiz7 }" @mouseover="kirmizi7" @mouseleave="gecersiz7=false" label="Metalik Gri"></v-radio>
       <v-radio :class="{ red8 : gecersiz8 }" @mouseover="kirmizi8" @mouseleave="gecersiz8=false" label="Rose Gold"></v-radio>
       <v-radio :class="{ red13 : gecersiz13 }" @mouseover="kirmizi13" @mouseleave="gecersiz13=false" label="Siyah"></v-radio>
       <v-radio :class="{ red14 : gecersiz14}" @mouseover="kirmizi14" @mouseleave="gecersiz14=false" label="Kahverengi"></v-radio>
       <v-radio :class="{ red15 : gecersiz15}" @mouseover="kirmizi15" @mouseleave="gecersiz15=false" label="Beyaz"></v-radio>
       <v-radio :class="{ red16 : gecersiz16 }" @mouseover="kirmizi16" @mouseleave="gecersiz16=false" label="Pempe"></v-radio>
        </v-list>
      </v-menu>
       <v-menu  open-on-hover offset-y >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" >
            Kayış Tipi
          </v-btn>
        </template>
        <v-list class="kategorilist">
       <v-radio :class="{ red17 : gecersiz17 }" @mouseover="kirmizi17" @mouseleave="gecersiz17=false" label="Çelik"></v-radio>
       <v-radio :class="{ red18 : gecersiz18 }" @mouseover="kirmizi18" @mouseleave="gecersiz18=false" label="Deri"></v-radio>
        </v-list>
      </v-menu>
      <v-menu  open-on-hover offset-y >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" >
            Tarz
          </v-btn>
        </template>
        <v-list class="kategorilist">
       <v-radio :class="{ red19 : gecersiz19 }" @mouseover="kirmizi19" @mouseleave="gecersiz19=false" label="Spor Saatler"></v-radio>
       <v-radio :class="{ red20 : gecersiz20 }" @mouseover="kirmizi20" @mouseleave="gecersiz20=false" label="Klasik Saatler"></v-radio>
        </v-list>
      </v-menu>
      <v-menu  open-on-hover offset-y >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" >
            Teknoloji
          </v-btn>
        </template>
        <v-list class="kategorilist">
       <v-radio :class="{ red21 : gecersiz21 }" @mouseover="kirmizi21" @mouseleave="gecersiz21=false" label="Quartz"></v-radio>
       <v-radio :class="{ red22 : gecersiz22 }" @mouseover="kirmizi22" @mouseleave="gecersiz22=false" label="Otomatik"></v-radio>
        </v-list>
      </v-menu>
      <button class="urun">URUN</button>
      <v-menu  open-on-hover offset-y >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" >
            Sıralama
          </v-btn>
        </template>
        <v-list class="kategorilist">
       <v-radio :class="{ red23 : gecersiz23 }" @mouseover="kirmizi23" @mouseleave="gecersiz23=false" label="Seçtiklerimiz"></v-radio>
       <v-radio :class="{ red24 : gecersiz24 }" @mouseover="kirmizi24" @mouseleave="gecersiz24=false" label="Fiyat Artan"></v-radio>
       <v-radio :class="{ red25 : gecersiz25 }" @mouseover="kirmizi25" @mouseleave="gecersiz25=false" label="Fiyat Azalan"></v-radio>
       <v-radio :class="{ red26 : gecersiz26 }" @mouseover="kirmizi26" @mouseleave="gecersiz26=false" label="Yeni Gelenler"></v-radio>
       <v-radio :class="{ red27 : gecersiz27 }" @mouseover="kirmizi27" @mouseleave="gecersiz27=false" label="İndirimler"></v-radio>
        </v-list>
      </v-menu>
    </div>
    
  </v-app>
</div>
</template>

<script>
export default {
    data: () => ({
    gecersiz: false,
    gecersiz1: false,
    gecersiz2: false,
    gecersiz3: false,
    gecersiz5: false,
    gecersiz6: false,
    gecersiz7: false,
    gecersiz8: false,
    gecersiz9: false,
    gecersiz10: false,
    gecersiz11: false,
    gecersiz12: false,
    gecersiz13: false,
    gecersiz14: false,
    gecersiz15: false,
    gecersiz16: false,
    gecersiz17: false,
    gecersiz18: false,
    gecersiz19: false,
    gecersiz20: false,
    gecersiz21: false,
    gecersiz22: false,
    gecersiz23: false,
    gecersiz24: false,
    gecersiz25: false,
    gecersiz26: false,
    gecersiz27: false,
    gecersiz28: false,
  }),
  methods:{
  kirmizi1() {
      this.gecersiz1 = true;
  },
 kirmizi2() {
      this.gecersiz2 = true;
  },
   kirmizi3() {
      this.gecersiz3 = true;
  },
   kirmizi5() {
      this.gecersiz5 = true;
  },
   kirmizi6() {
      this.gecersiz6 = true;
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
  kirmizi14() {
      this.gecersiz14 = true;
  },
  kirmizi15() {
      this.gecersiz15 = true;
  },
  kirmizi16() {
      this.gecersiz16 = true;
  },
kirmizi17() {
      this.gecersiz17 = true;
  },
  kirmizi18() {
      this.gecersiz18 = true;
  },
   kirmizi19() {
      this.gecersiz19 = true;
  },
   kirmizi20() {
      this.gecersiz20= true;
  },
  kirmizi21() {
      this.gecersiz21= true;
  },
  kirmizi22() {
      this.gecersiz22= true;
  },
   kirmizi23() {
      this.gecersiz23= true;
  },
   kirmizi24() {
      this.gecersiz24= true;
  },
   kirmizi25() {
      this.gecersiz25= true;
  },
   kirmizi26() {
      this.gecersiz26= true;
  },
   kirmizi27() {
      this.gecersiz27= true;
  },
   kirmizi28() {
      this.gecersiz28= true;
  },
}}

</script>

<style>
.filtre{
    width: 1400px;
    background:#f4f4f4;
    height: 50px;
    margin: auto;
    
}
.kategorilist{
    height: auto;
    margin: auto;
    width: 200px;
}
.kategorifiltre{
    padding: 40px 0px 0px 0px;
}
.red {
background: gray;
 color: black;
}
.red1 {
  background: gray;
 color: black;
}
.red2 {
  background: gray;
 color: black;
}
.red3 {
  background: gray;
 color: black;
}
.red5 {
  background: gray;
 color: black;
}
.red6 {
 background: gray;
 color: black;
}
.red7 {
  color: red;
}
.red8 {
  color: red;
}
.red9{
  background: gray;
  color: black;
}
.red10 {
 background: gray;
 color: black;
}
.red11 {
  background: gray;
  color: black;
}
.red12 {
  background: gray;
  color: black;
}
.red13 {
  background: gray;
  color: black;
}
.red14 {
  background: gray;
  color: black;
}
.red15 {
  background: gray;
  color: black;
}
.red16 {
  background: gray;
  color: black;
}
.red17 {
  background: gray;
  color: black;
}
.red18 {
  background: gray;
  color: black;
}
.red19{
  background: gray;
  color: black;
}
.red20 {
  background: gray;
  color: black;
}
.red21 {
  background: gray;
  color: black;
}
.red22 {
  background: gray;
  color: black;
}
.red23 {
  background: gray;
  color: black;
}
.red24 {
  background: gray;
  color: black;
}
.red25 {
  background: gray;
  color: black;
}
.red26 {
  background: gray;
  color: black;
}
.red27 {
  background: gray;
  color: black;
}
.red28 {
  background: white;
  color: red;
}
.urun{
  color: black; 
  background: #f4f4f4; 
  height: 38px;
  width: 600px;
  text-align: left;
}
</style>