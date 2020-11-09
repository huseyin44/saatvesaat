<template >
  <div id="app"  >
  <v-app id="inspire" >   
    <v-carousel height="700"
      cycle
      delimiter-icon="mdi-minus"       
    >
      <v-carousel-item   
        v-for="(item,i) in items" 
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </v-app>
</div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.saatvesaat.com.tr/media/wysiwyg/ss-slider/kasim-20-01-20.jpg',
          },
          {
            src: 'https://cdn.saatvesaat.com.tr/media/wysiwyg/ss-slider/diesel_08_10.jpg',
          },
          {
            src: 'https://cdn.saatvesaat.com.tr/media/wysiwyg/ss-slider/versace-10-oct.jpg',
          },
          {
            src: 'https://cdn.saatvesaat.com.tr/media/wysiwyg/ss-slider/b-s-1020.jpg',
          },
           {
            src: 'https://cdn.saatvesaat.com.tr/media/wysiwyg/ss-slider/yeni-sezon-10.jpg',
          },
           {
            src: 'https://cdn.saatvesaat.com.tr/media/wysiwyg/ss-slider/mk-access-20.jpg',
          },
        ],
         
      }
    },
  }
</script>