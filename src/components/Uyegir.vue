<template>
  <div class="Uyegir" width="610">
   <div class="uye">Üye Girişi</div>
   <div class="email">Email Adresiniz</div>
   <div>
   <input type="email" autocapitalize="off" autocorrect="off" spellcheck="false" v-model="user.email"  
   class="inputemail" title="Email Adresiniz">
   </div>
   <div class="sifre" >Şifre
   </div>
   <div>
   <input type="password" name="login[password]" class="inputsifre" v-model="user.sifre" title="Şifre">
   </div>
   <div :class="{ red : gecersiz }" @mouseover="kirmizi" @mouseleave="gecersiz=false" class="sifre11">Şifrenizi mi unuttunuz ?</div>
   <div :class="{ red2 : gecersiz2 }" @mouseover="kirmizi2" @mouseleave="gecersiz2=false" class="uyegirisibut">ÜYE GİRİŞİ</div>
   <div class="b">
   <div class="facebook">
        <a href="https://graph.facebook.com/oauth/authorize?client_id=328336257500368&amp;redirect_uri=https%3A%2F%2Fwww.saatvesaat.com.tr%2Fsocialconnect%2Ffacebook%2Fconnect%2F&amp;state=968c0ff130b664635e9d4f2c0710cc65&amp;scope=email%2Cuser_birthday" rel="facebook-connect" class="button mnm-button connect-facebook inline">
           <span><i class="ion-social-facebook"></i> Facebook ile Giriş Yap</span>
       </a>
    </div>
   </div>
  </div>
</template>

<script>
export default{
  name:'Uyegir',
  data: () => ({
    gecersiz: false,
    gecersiz2: false,
    user: {
       email: '12345',
       sifre: '12345',
    },
  }),
  methods:{
    kirmizi() {
      this.gecersiz = true;
      },
     kirmizi2() {
      this.gecersiz2 = true;
      },
}}

</script>

<style lang="scss">
.uye{
  height: 35px;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
  border-bottom: 1px solid #EDEDED;
  padding-bottom: 3px;
  margin-bottom: 15px;
}
.email{
  display: inline-block;
    font-size: 12px;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 500;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
    
}
.inputemail{
  -moz-appearance: none;
    -webkit-appearance: none;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    border: 1px solid #C0C0C0;
    background: #FFFFFF;
    font-size: 14px;
    outline: none;
    height: 30px;
    
}
.sifre{
  display: inline-block;
    font-size: 12px;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 500;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
    padding: 15px 5px 5px 0px;
}
.inputsifre{
  -moz-appearance: none;
    -webkit-appearance: none;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    border: 1px solid #C0C0C0;
    background: #FFFFFF;
    font-size: 14px;
    outline: none;
    height: 30px;
}
.sifre11{
  color:#BD1818;
  height: 50px;
  padding: 20px 0px 50px 0px;
}
div.red {
  text-decoration: underline;
  background:white ;
  border: black; 
  color: red;
}
.uyegirisibut{
    background: #9c0c0c;
    font-size: 14px;
    padding: 10px 30px;
    height: 40px;
    width: 150px;
    color: white;
}
div.red2 {
  color: black;
  background:white ;
  border-style: solid;
  border-color: black;
}
.facebook{
  background:blue;
  display: inline-block;
  padding: 25px 25px;
  border: 2px solid transparent;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: normal;
  font-family: "Roboto", Arial, sans-serif;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
}
.b{
  padding: 25px 0px 0px 0px;
}
</style>