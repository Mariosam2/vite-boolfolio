<script>
import axios from 'axios';

export default {
    name: 'ProjectView',
    data() {
        return {
            baseURL: 'http://127.0.0.1:8000/api',
            loading: true,
            project: null,
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
                    }


                })
                .catch(error => {
                    //console.log(err);
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else {
                        console.log(error.message);
                    }
                    this.loading = false;
                })
        }
    },
    mounted() {
        this.getProject(this.baseURL + '/projects/' + this.$route.params.slug)
    }
}
</script>

<template>
    <div class="container min-vh-100 pt-5" v-if="!loading">
        <div class="row">
            <div class="col-12 col-md-8">
                <img style="width: 100%; max-height: 500px; object-fit: cover" :src="'/' + project.img"
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
                        <router-link class="btn bg_primary d-block w-25 ms-auto" :to="{ name: 'projects' }">Back to
                            projects</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Loading... </div>
</template>
<style>

</style>