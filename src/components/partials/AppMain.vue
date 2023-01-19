<script>
import ProjectCard from '../ProjectCard.vue';
import axios from 'axios';
export default {
    name: 'AppMain',
    components: {
        ProjectCard
    },
    data() {
        return {
            baseURL: 'http://127.0.0.1:8000/api',
            projects: []
        }
    },
    methods: {
        getProjects() {
            axios.get(this.baseURL + '/projects')
                .then(resp => {
                    //console.log(resp.data.result);
                    this.projects = resp.data.result;
                })
                .catch(function (err) {
                    console.log(err);
                })
        }

    },
    mounted() {
        this.getProjects()
        //console.log(this.projects)

    }
}
</script>
<template>
    <main id="site_main">
        <div class="container p-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <!-- TODO: make get request with axios in ProjectCard Component + iteraion to show all projects-->
                <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
            </div>
        </div>

    </main>
</template>
<style>

</style>