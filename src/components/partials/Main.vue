<script>
import ProjectCard from '../ProjectCard.vue';
export default {
    name: 'Main',
    components: {
        ProjectCard
    }
}
</script>
<template>
    <main id="site_main">
        <div class="container">
            <div class="row">
                <!-- TODO: make get request with axios in ProjectCard Component + iteraion to show all projects-->
                <ProjectCard></ProjectCard>
            </div>
        </div>

    </main>
</template>
<style>

</style>