import * as router from "vue-router";
import Home from './components/views/HomeView.vue';
import Projects from './components/views/ProjectsView.vue';
import Project from './components/views/ProjectView.vue';
import NotFound from './components/views/NotFoundView.vue';

const myRouter = router.createRouter({
    history: router.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: Project
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound
        },
    ]
})

export { myRouter }