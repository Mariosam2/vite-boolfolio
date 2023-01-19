<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }


}
</script>
<template>
    <div class="col">
        <div class="card ms_card">
            <img class="card-img-top" :src="project.img" alt="Title">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">{{ project.description }}</p>
            </div>
            <div class="card-footer d-flex">
                <p class="card-text">{{ project.types }}</p>
                <p class="card-text">{{ project.technologies }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.ms_card {
    height: 100%;
}
</style>