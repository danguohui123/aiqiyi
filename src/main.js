// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './assets/style/border.css'
import './assets/style/reset.css'
import './assets/style/iconfont.css'
import VueawesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueawesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
