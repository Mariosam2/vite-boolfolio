<script>
import { store } from '../../store'
export default {
    name: 'ContactView',
    data() {
        return {
            store,
        }
    },
    methods: {
        sendForm() {

        }
    }

}
</script>
<template>
    <main id="site_main" class="min-vh-100 bg_dark">
        <div class="container">
            <h1 class="pt-4 ms-3 text_secondary">Contact Me</h1>
            <div class="row mx-4">
                <form @submit.prevent="sendForm()" class="col-12 col-md-9 my-4 col-lg-7 p-5 bg_primary rounded-2">
                    <div class="mb-3">
                        <label for="name" class="form-label text_primary">Name</label>
                        <input type="text" name="name" id="name" class="form-control" placeholder="Mario Rossi"
                            aria-describedby="helpId">
                        <small id="helpId" class="text_muted">Help text</small>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label text_primary">Email</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                            placeholder="example@mail.com">
                        <small id="emailHelpId" class="form-text text_muted">Help text</small>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label text_primary">Write your message here</label>
                        <textarea class="form-control" name="message" id="message" rows="3"></textarea>
                    </div>
                </form>
            </div>

        </div>

    </main>
</template>
<style>

</style>