import App from './App.vue';

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
import { createApp } from 'vue';

import uView from 'uview-ui';
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp({
    ...App,
    uView,
});

app.use(pinia);
// app.use();

app.mount('#app');

// #endif
