import App from './App.vue';
import 'uno.css'

// #ifndef VUE3
// import Vue from 'vue';
// import './uni.promisify.adaptor';

// Vue.config.productionTip = false;
// App.mpType = 'app';

// const app = new Vue({
//     ...App,
// });
// app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import uviewPlus from 'uview-plus'

const pinia = createPinia()
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(pinia)
  return {
    app
  }
}
// #endif
