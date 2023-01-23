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
                    <h2>{{ project.title }}</h2>
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
</style>