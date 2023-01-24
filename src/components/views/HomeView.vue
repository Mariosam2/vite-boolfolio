<script>
import { store } from '../../store'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
    name: 'HomeView',
    data() {
        return {
            store,
        }
    },
    methods: {
        animate() {
            gsap.registerPlugin(ScrollTrigger);
            gsap.fromTo(".projects .container", { x: 50, opacity: 0 }, { scrollTrigger: { trigger: ".projects .container", toggleActions: "restart none none none" }, x: 0, opacity: 1, duration: 1 })
        }
    },
    mounted() {

        this.animate();


    }
}
</script>
<template>
    <main id="site_main" class="bg_primary">
        <section class="presentation bg_primary">
            <div class="container">
                <div class="row align-items-center pt-4">
                    <div class="col-12 col-lg-5 d-lg-none my-4 d-flex justify-content-center">
                        <img class="avatar" :src="store.getImageUrl('avatar.jpeg')" alt="">
                    </div>
                    <div class="col-12 col-lg-7  d-flex flex-column p-4 p-lg-5">
                        <h1 class="text_secondary text-center text-lg-start me-3 mb-3">Lorem Ipsum Dolor</h1>
                        <p class="text_muted text-center text-lg-start home_paragraph">Lorem ipsum dolor sit amet
                            consectetur
                            adipisicing
                            elit. Placeat
                            corrupti
                            neque eius molestiae
                            perferendis sapiente aut impedit unde, officia non laudantium aperiam ratione quis et qui
                            accusamus harum perspiciatis debitis, assumenda accusantium ipsam? Non perferendis ex
                            molestiae
                            expedita explicabo, soluta molestias fugiat incidunt labore amet debitis architecto nesciunt
                            iusto placeat.</p>
                    </div>
                    <div class="col-12 col-lg-5 d-none d-lg-block">
                        <img class="avatar" :src="store.getImageUrl('avatar.jpeg')" alt="">
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1674557407 bg_primary">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                        class="shape-fill"></path>
                </svg>
            </div>
        </section>
        <section class="banner">
            <div class="banner-layover"></div>
        </section>
        <section class="projects">
            <div class="container pt-5 pb-4">
                <div class="p-lg-3 p-md-5  mx-md-5 rounded-3">
                    <div class="container-fluid py-4">
                        <h1 class="display-5  text_secondary">Home Page</h1>
                        <p class="col-md-9 py-3 home_paragraph text_muted">Loresm ipsum dolor sit amet consectetur,
                            adipisicing
                            elit.
                            Soluta, neque.
                            Iure
                            dolorum sint suscipit, expedita, nisi exercitationem tempora repudiandae vitae dolorem
                            consectetur
                            sed earum aliquid saepe ab harum odit voluptatum modi nemo maxime commodi impedit. Enim
                            perspiciatis, porro iure dolore aut qui quisquam eius. Libero, cupiditate. Maiores, alias,
                            aliquid
                            tempore molestiae inventore quia similique aut doloremque voluptas eum sint nobis fuga?
                            Aperiam
                            qui
                            autem accusantium ad deleniti repellat, laborum dignissimos. Ex sunt nihil aut fugit neque
                            officiis
                            nostrum unde quas alias at ut mollitia, exercitationem id inventore quam laboriosam optio
                            molestiae
                            necessitatibus, possimus tempore. Iste unde provident magnam voluptatibus! Explicabo!</p>
                        <router-link class="btn bg_primary jumbo_button btn-lg" type="button"
                            :to="{ name: 'projects' }">See
                            projects</router-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
.btn.jumbo_button {
    border-radius: 0;
    border: 1px solid #6c757d;
    color: var(--secondary-color);

}

.home_paragraph {
    font-size: 1.1rem;
}
</style>