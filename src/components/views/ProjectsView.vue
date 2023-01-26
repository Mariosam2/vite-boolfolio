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
            nextPageUrl: null,
            store,
            loading: true,
            projects: [],
            errMsg: '',

        }
    },
    methods: {
        getProjects(url) {
            axios.get(url)
                .then(resp => {
                    if (resp.data.success) {
                        //console.log(resp);
                        //console.log(resp.data.result);
                        //console.log(resp.status)
                        this.projects = this.projects.concat(resp.data.result.data);
                        // Code for pagination
                        this.nextPageUrl = resp.data.result.next_page_url;
                        this.loading = false;
                    } else {
                        // 404 redirect
                        this.loading = false;
                        this.$router.push({ name: 'notfound' })


                    }


                })
                .catch(err => {
                    //console.log(err, err.response);
                    this.loading = false;
                    this.errMsg = err.message;

                })
        },
        prevPage(url) {
            this.getProjects(url);
        },
        nextPage(url) {
            this.getProjects(url);
        },
        load() {
            if (this.nextPageUrl) {
                //this.loading = true;
                this.getProjects(this.nextPageUrl);
            }

        }


    },
    mounted() {
        this.getProjects(this.store.apiURL + '/projects')


    }
}
</script>
<template>
    <main id="site_main" class="bg_dark">
        <div class="min-vh-100 d-flex justify-content-center align-items-center text_primary" v-if="errMsg.length > 0">
            <h1>{{ errMsg }}</h1>
        </div>
        <div class="container ms_container min-vh-100 d-flex flex-column" v-else-if="projects != null && !loading">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                <ProjectCard v-for="project in projects " :project="project"></ProjectCard>
            </div>
            <div class="load-more d-flex flex-column align-items-center fw-bold" @click="load()" v-if="nextPageUrl">
                <span class="text_primary d-block mb-1">See More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-down ms_arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
            </div>
        </div>
        <div class="container pt-5 min-vh-100 d-flex justify-content-center align-items-center text_primary"
            v-else-if="loading">
            <h2>Loading...</h2>
        </div>
    </main>
    <!-- Code for pagination-->
    <!--  <div class="d-flex justify-content-center mt-5 text_primary">
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
            </div> -->

</template>
<style lang="scss" scoped>
#site_main {


    .container.ms_container {
        padding-top: 8rem;
        padding-bottom: 8rem;
        position: relative;


        .load-more {
            position: absolute;
            bottom: 3rem;
            left: 50%;
            translate: -50% 0;

            &:hover {
                cursor: pointer;


            }

            &:hover span {
                text-decoration: underline;
            }

            &:hover .ms_arrow-down {
                animation: .5s ease-in infinite alternate move-arrow;
            }

            .ms_arrow-down {
                width: 1.4rem;
                height: auto;
                position: relative;
            }
        }
    }
}


@keyframes move-arrow {
    from {
        top: 0rem;
    }

    25% {
        top: 0.25rem;
    }

    50% {
        top: 0.5rem;
    }

    75% {
        top: 0.75rem;
    }

    to {
        top: 1rem;
    }
}
</style>