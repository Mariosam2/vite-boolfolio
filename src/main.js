import { createApp } from 'vue'
import './assets/scss/app.scss'
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App.vue';
import { myRouter } from './router';



createApp(App).use(myRouter).mount('#app')
