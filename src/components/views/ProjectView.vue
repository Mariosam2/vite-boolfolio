<script>
import axios from 'axios';
import { store } from '../../store'
export default {
    name: 'ProjectView',
    data() {
        return {
            store,
            loading: true,
            project: null,
            errMsg: null,
            currentMedia: 0,


        }
    },
    methods: {
        getProject(url) {
            axios.get(url)
                .then(resp => {
                    //console.log(resp)
                    if (resp.data.success) {
                        this.project = resp.data.result[0];
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
                    this.errMsg = err.message;


                })
        },
        next() {
            if (this.currentMedia >= JSON.parse(this.project.media).length - 1) {
                this.currentMedia = 0;
            }
            this.currentMedia++

        },
        prev() {
            if (this.currentMedia < 0) {
                this.currentMedia = JSON.parse(this.project.media).length - 1;
            }
            this.currentMedia++
        },


    },
    mounted() {
        this.getProject(this.store.apiURL + '/projects/' + this.$route.params.slug)


    }
}
</script>

<template>
    <div class="project container min-vh-100 pt-5" v-if="project != null && !loading">
        <div class="row">
            <div class="col-12 col-md-7 text_primary ">
                <div id="carouselExample" class="carousel slide ms_carousel">
                    <div class="carousel-inner">
                        <div v-for="(file, i) in JSON.parse(this.project.media)" class="carousel-item ms_slide"
                            :class="i === currentMedia ? 'active' : ''">
                            <img v-if="file.type === 'image'" :src="this.store.getImage(file.src)" class="d-block w-100"
                                alt="...">
                            <video controls>
                                <source :src="this.store.getImage(file.src)" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <button class="ms_prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden" @click="prev">Previous</span>
                    </button>
                    <button class="ms_next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden" @click="next">Next</span>
                    </button>
                </div>
                <div class="content pb-4 pt-2">
                    <h2 class="d-flex align-items-center">{{ project.title }}
                        <a href="https://github.com/Mariosam2/vite-boolfolio" class="ms-3 text_primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-github git_icon" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </h2>
                    <p class="py-2">{{ project.description }}</p>
                    <div>
                        <p v-if="project.type !== null"><strong>Type: </strong>{{ project.type.name }}</p>
                        <p v-if="project.technologies.length > 0">
                            <strong>Technologies: </strong>
                            <span v-for="(technology, i) in project.technologies">
                                {{ !(i === project.technologies.length - 1) ? technology.name + ', ' : technology.name}}
                            </span>
                        </p>
                        <p v-else><strong>Technologies:</strong> <span>None</span></p>
                        <router-link class="btn bg_primary d-block  ms-sm-auto" :to="{ name: 'projects' }">Back to
                            projects</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container pt-5 min-vh-100 d-flex justify-content-center align-items-center text_primary"
        v-else-if="loading">
        <h2>Loading...</h2>
    </div>
    <div class="min-vh-100 d-flex justify-content-center align-items-center text_primary" v-else-if="errMsg.length > 0">
        <h1>{{ errMsg }}</h1>
    </div>
</template>
<style lang="scss" scoped>
.btn.bg_primary {
    width: 30%;
}

[data-theme="dark"] .btn.bg_primary {
    color: var(--text-primary);

    &:hover {
        background-color: var(--primary-color);
        color: var(--text-secondary)
    }
}

.git_icon {
    width: 32px;
    height: auto;
}

.ms_slide {
    height: 480px;

    img,
    video {
        height: 100%;
        object-fit: cover;
    }
}

.ms_carousel {
    position: relative;

    .ms_next,
    .ms_prev {
        position: absolute;
        top: 50%;
        border: none;
        background-color: transparent;

        span {
            transition: scale 0.25s ease-out;

            &:hover {
                scale: 1.2;
            }
        }
    }

    .ms_next {
        left: 100%;
        translate: -100% -50%;
    }

    .ms_prev {
        left: 0;
        translate: 0 -50%;
    }


}
</style>


