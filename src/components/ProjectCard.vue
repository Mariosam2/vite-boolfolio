<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            string: 'dughysauhgdsabhjgdabhjs'
        }
    },
    computed: {
        trimDescription() {
            return this.project.description = this.project.description.slice(0, 100);
        }
    },
    mounted() {

    }




}
</script>
<template>
    <div class="col" v-if="project != null">
        <div class="card ms_card">
            <img class="card-img-top" :src="project.img" alt="Title">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">{{ trimDescription + '...'}}
                </p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <p class="card-text m-0 mx-2" v-if="project.type"><strong>Type:</strong> {{ project.type.name }}</p>
                <p class="card-text m-0 mx-2" v-else><strong>Type:</strong> <span>None</span> </p>
                <p class="card-text m-0 mx-2" v-if="project.technologies.length > 0">
                    <strong>Technologies: </strong>
                    <span v-for="(technology, i) in project.technologies">
                        {{ !(i === project.technologies.length - 1) ? technology.name + ', ' : technology.name}}
                    </span>
                </p>
                <p class="card-text m-0 mx-2" v-else><strong>Technologies:</strong> <span>None</span> </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.ms_card {
    height: 100%;
}
</style>