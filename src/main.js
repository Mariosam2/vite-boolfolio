import { createApp } from 'vue'
import './assets/scss/app.scss'
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { myRouter } from './router'
import App from './App.vue'

createApp(App).use(myRouter).mount('#app')
