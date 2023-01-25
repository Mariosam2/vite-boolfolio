<script>
import { store } from '../../store';
import axios from 'axios';
export default {
    name: 'ContactView',
    data() {
        return {
            store,
            loading: false,
            name: null,
            email: null,
            message: null,
            errors: null,
            errMsg: '',
        }
    },
    watch: {
        name() {
            if (this.errors) {
                this.errors.name = null;
            }

        },
        email() {
            if (this.errors) {
                this.errors.email_address = null;

            }
        },
        message() {
            if (this.errors) {
                this.errors.message = null;
            }

        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            this.errors = null;
            let contact = {
                name: this.name,
                email_address: this.email,
                message: this.message
            };
            axios.post(this.store.apiURL + '/contacts', contact)
                .then(resp => {
                    console.log(resp);
                    if (!resp.data.success) {
                        this.errors = resp.data.errors;
                        this.loading = false;


                    } else {
                        //redirect to thankyou page
                        this.loading = false;
                    }

                })
                .catch(err => {
                    console.log(err);
                    this.errMsg = err.message;
                    this.loading = false;
                })
        }
    }

}
</script>
<template>
    <main id="site_main" class="min-vh-100 bg_dark">
        <div class="min-vh-100 d-flex justify-content-center align-items-center text_primary" v-if="errMsg.length > 0">
            <h1>{{ errMsg }}</h1>
        </div>
        <div class="container" v-else-if="!loading">
            <h1 class="pt-4 ms-3 text_secondary">Contact Me</h1>
            <div class="row mx-4">
                <form @submit.prevent="sendForm()"
                    class="col-12 col-md-9 my-4 col-lg-7 p-3 p-lg-5 bg_primary rounded-2">
                    <div class="mb-3">
                        <label for="name" class="form-label text_primary">Name</label>
                        <input type="text" name="name" id="name" class="form-control"
                            :class="errors && errors.name ? 'is-invalid' : ''" placeholder="Mario Rossi"
                            aria-describedby="helpId" v-model="name">
                        <div v-if="errors">
                            <small class="text-danger d-block" v-for="error in errors.name">{{ error }}</small>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label text_primary">Email</label>
                        <input type="email" class="form-control"
                            :class="errors && errors.email_address ? 'is-invalid' : ''" name="email" id="email"
                            aria-describedby="emailHelpId" placeholder="example@mail.com" v-model="email">
                        <div v-if="errors">
                            <small class="text-danger d-block" v-for="error in errors.email_address">{{ error }}</small>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label text_primary">Write your message here</label>
                        <textarea class="form-control" :class="errors && errors.message ? 'is-invalid' : ''"
                            name="message" id="message" rows="3" v-model="message"></textarea>
                        <div v-if="errors">
                            <small class="text-danger d-block" v-for="error in errors.message">{{ error }}</small>
                        </div>
                    </div>
                    <div class="d-flex">
                        <button type="submit" class="btn btn_dark ms-auto me-2 mt-3">Send</button>
                    </div>
                </form>
            </div>

        </div>
        <div class="container pt-5 min-vh-100 d-flex justify-content-center align-items-center text_primary"
            v-else-if="loading">
            <h2>Loading...</h2>
        </div>


    </main>
</template>
<style lang="scss" scoped>
.btn.btn_dark {
    color: var(--switch-dark);
    background-color: var(--muted-color);

    &:hover {
        background-color: var(--secondary-color);
    }
}

[data-theme="dark"] .btn.btn_dark {
    color: var(--muted-color);
    background-color: var(--bg-dark);

    &:hover {
        color: var(--secondary-color);
    }
}
</style>