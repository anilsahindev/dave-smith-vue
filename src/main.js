import Vue from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import './assets/script/ping';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
