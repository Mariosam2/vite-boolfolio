import * as router from "vue-router";
import Home from './components/views/Homeview.vue';

const myRouter = router.createRouter({
    history: router.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

export { myRouter }