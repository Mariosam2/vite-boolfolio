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
            firstImageSrc: null,
        }
    },
    methods: {
        getFirstImageFromMedia(media) {
            //media will be json so we need to parse it
            media = JSON.parse(media);
            for (let i = 0; i < media.length; i++) {
                if (media[i].type === 'image') {
                    this.firstImageSrc = this.store.getImage(media[i].src);
                    break;
                }
            }
        }
    },
    computed: {
        trimDescription() {
            return this.project.description = this.project.description.slice(0, 100);
        }
    },
    mounted() {
        this.getFirstImageFromMedia(this.project.media);
    }





}
</script>
<template>
    <div class="col">
        <div class="project rounded-2">
            <div class="project-layover rounded-2"></div>
            <img class="project-img rounded-2"
                :src="firstImageSrc !== null ? firstImageSrc : this.store.baseURL + '/storage/images/placeholder.webp'"
                :alt="project.name">
            <router-link class="project-link" :to="{ name: 'project', params: { slug: project.slug } }">
                More details...
            </router-link>
            <router-link class="btn bg_primary d-none ms-auto"
                :to="{ name: 'project', params: { slug: project.slug } }">More
                details
            </router-link>
        </div>


    </div>
</template>
<style lang="scss" scoped>
.project {
    width: 100%;
    height: 320px;
    position: relative;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }

    .project-layover {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(black, 0.5);
        z-index: 999;

    }

    .project-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.25s ease-out;

        &:before {
            content: "";
            display: none;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;


        }

    }

    &:hover .project-img {
        scale: 1.1;

    }

    &:hover .project-img:before {
        display: block;
    }




    .project-link {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 80%;
        translate: -50% -50%;
        z-index: 99999;
        color: var(--text-almost-white);
        text-decoration: none;
        transition: all 0.25s ease-in-out;

        &:hover {
            text-decoration: underline;

        }
    }

    &:hover .project-link {
        opacity: 1;
    }
}
</style>