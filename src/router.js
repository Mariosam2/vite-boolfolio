import * as router from "vue-router";
import Home from './components/views/HomeView.vue';
import Projects from './components/views/ProjectsView.vue';

const myRouter = router.createRouter({
    history: router.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            name: 'projects',
            component: Projects
        }
    ]
})

export { myRouter }