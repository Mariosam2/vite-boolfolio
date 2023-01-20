<script>
import axios from 'axios';

export default {
    name: 'ProjectView',
    data() {
        return {
            baseURL: 'http://127.0.0.1:8000/api',
            loading: true,
            err: null,
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
                    }


                })
                .catch(err => {
                    //console.log(err)
                    this.err = err.message
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
                <img class="img-fluid" :src="'/' + project.img" :alt="project.slug">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Loading... </div>
</template>
<style>

</style>