import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
Vue.use(VueRouter);
import Anasayfa2 from './components/Anasayfa2.vue'
import HaftaninFirsat from './components/HaftaninFirsat.vue'
import Markalar from './components/Markalar.vue'
import Sizinicinsec from './components/Sizinicinsec.vue'
import Slider from './components/Slider.vue'
import Uyegir from './components/Uyegir.vue'
import Anasayfa from './components/Anasayfa.vue'
import Filtre from './components/Filtre.vue'
const router = new VueRouter({
  routes: [
    { path: '/Anasayfa2', component: Anasayfa2 },
    { path: '/HaftaninFirsat', component: HaftaninFirsat },
    { path: '/Markalar', component: Markalar },
    { path: '/Sizinicinsec', component: Sizinicinsec },
    { path: '/Slider', component: Slider },
    { path: '/Uyegir', component: Uyegir },
    { path: '/Anasayfa', component: Anasayfa },
    { path: '/Filtre', component: Filtre },
  ],
  mode: 'history'
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
