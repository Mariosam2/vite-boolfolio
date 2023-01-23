<script>
import ProjectCard from '../ProjectCard.vue';
import axios from 'axios';
import { store } from '../../store'
export default {
    name: 'ProjectsView',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            loading: true,
            projects: null,
            currentPage: 1,
            prevPageUrl: null,
            nextPageUrl: null
        }
    },
    methods: {
        getProjects(url) {
            axios.get(url)
                .then(resp => {
                    if (resp.data.success) {
                        //console.log(resp.data.result);
                        //console.log(resp.status)
                        this.projects = resp.data.result.data;
                        this.currentPage = resp.data.result.current_page;
                        this.prevPageUrl = resp.data.result.prev_page_url;
                        this.nextPageUrl = resp.data.result.next_page_url;
                        this.loading = false;
                    } else {
                        // 404 redirect
                        this.loading = false;
                        this.$router.push({ name: 'notfound' })


                    }


                })
                .catch(err => {
                    console.log(err);
                    this.loading = false;
                    this.$router.push({ name: 'notfound' })

                })
        },
        prevPage(url) {
            this.getProjects(url);
        },
        nextPage(url) {
            this.getProjects(url);
        },


    },
    mounted() {
        this.getProjects(this.store.apiURL + '/projects')


    }
}
</script>
<template>
    <div class="container ms_container min-vh-100 d-flex flex-column" v-if="projects != null && !loading">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
        </div>
        <div class="d-flex justify-content-center mt-5 text_primary">
            <div class="prev" v-if="prevPageUrl != null" @click="prevPage(prevPageUrl)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-bar-left ms_icon " viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
                </svg>
            </div>
            <span class="fw-bold fs-5 mx-2">{{ currentPage }}</span>
            <div class="next" v-if="nextPageUrl != null" @click="nextPage(nextPageUrl)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-bar-right ms_icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z" />
                </svg>
            </div>
        </div>
    </div>
    <div class="container pt-5 min-vh-100 d-flex justify-content-center align-items-center" v-if="loading">
        <h2>Loading...</h2>
    </div>
</template>
<style lang="scss" scoped>
.container.ms_container {
    padding-top: 8rem;
    padding-bottom: 4rem;
}
</style>