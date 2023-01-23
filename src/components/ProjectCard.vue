<script>
import { store } from '../store'
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store,
            string: 'dughysauhgdsabhjgdabhjs'
        }
    },
    computed: {
        trimDescription() {
            return this.project.description = this.project.description.slice(0, 100);
        }
    },





}
</script>
<template>
    <div class="col">
        <div class="card ms_card text_primary bg_primary">
            <img class="card-img-top" :src="store.getImage(project.img)" :alt="project.slug">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">{{ trimDescription + '...'}}
                </p>
                <p class="card-text m-0 py-2" v-if="project.type"><strong>Type:</strong> {{ project.type.name }}</p>
                <p class="card-text m-0 py-2" v-else><strong>Type:</strong> <span>None</span> </p>
                <p class="card-text m-0 py-2" v-if="project.technologies.length > 0">
                    <strong>Technologies: </strong>
                    <span v-for="(technology, i) in project.technologies">
                        {{ !(i === project.technologies.length - 1) ? technology.name + ', ' : technology.name}}
                    </span>
                </p>
                <p class="card-text m-0 py-2" v-else><strong>Technologies:</strong> <span>None</span> </p>
            </div>
            <div class="card-footer bg_secondary d-flex justify-content-between">
                <router-link class="btn bg_primary d-block ms-auto"
                    :to="{ name: 'project', params: { slug: project.slug } }">More
                    details</router-link>

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.ms_card {
    height: 100%;
    border: none;
}
</style>