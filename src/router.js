import * as router from "vue-router";
import Home from './components/views/HomeView.vue';
import Projects from './components/views/ProjectsView.vue';
import Contact from './components/views/ContactView.vue';
import ThankYou from './components/views/ThankYouView.vue';
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
            path: '/contact-me',
            name: 'contact',
            component: Contact
        },
        {
            path: '/ty-page',
            name: 'thankyou',
            component: ThankYou
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