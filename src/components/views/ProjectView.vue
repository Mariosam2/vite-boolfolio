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
            errMsg: null
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
        }
    },
    mounted() {
        this.getProject(this.store.apiURL + '/projects/' + this.$route.params.slug)
    }
}
</script>

<template>
    <div class="container min-vh-100 pt-5" v-if="project != null && !loading">
        <div class="row">
            <div class="col-12 col-md-8 text_primary ">
                <img style="width: 100%; max-height:500px; object-fit: cover;" :src="store.getImage(project.img)"
                    :alt="project.slug">
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
                        <p><strong>Type: </strong>{{ project.type.name }}</p>
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
    <div class="container pt-5 min-vh-100 d-flex justify-content-center align-items-center" v-else-if="loading">
        <h2>Loading...</h2>
    </div>
    <div class="min-vh-100 d-flex justify-content-center align-items-center text_primary" v-else-if="errMsg.length > 0">
        <h1>{{ this.errMsg }}</h1>
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
</style>