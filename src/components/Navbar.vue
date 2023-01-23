<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isDarkTheme: false,
        }
    },
    methods: {
        switchTheme() {
            let app = document.getElementById('app');
            if (app.getAttribute('data-theme') === null) {
                app.setAttribute('data-theme', 'dark');
                this.isDarkTheme = true;
                window.localStorage.setItem('theme', 'dark');
            } else {
                app.removeAttribute('data-theme');
                this.isDarkTheme = false;
                window.localStorage.removeItem('theme');
            }

        },
        getTheme() {
            if (window.localStorage.getItem('theme') === 'dark') {
                app.setAttribute('data-theme', 'dark');
                this.isDarkTheme = true;
            }
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },
    mounted() {
        this.getTheme();
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary bg_primary">
        <div class="container">
            <router-link class="navbar-brand text_secondary d-flex align-items-center" :to="{ name: 'home' }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-wallet2 ms_wallet" viewBox="0 0 16 16">
                    <path
                        d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                </svg>
                Boolfolio
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <router-link class="nav-link fw-semibold text_secondary"
                            :class="currentRouteName === 'home' ? 'active' : ''" aria-current="page"
                            :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link fw-semibold text_secondary"
                            :class="currentRouteName === 'projects' || currentRouteName === 'project' ? 'active' : ''"
                            aria-current="page" :to="{ name: 'projects' }">Projects</router-link>
                    </li>
                    <li class="nav-item d-flex align-items-center text_primary ">
                        <label>
                            <input class="form-check-input d-none" type="checkbox" @input="switchTheme()">
                            <div class="slider ms-2 me-3 rounded-5">
                                <div class="slider-thumb" :class="isDarkTheme ? 'checked' : ''"></div>
                            </div>
                        </label>
                        Enable Dark-Mode
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
.ms_wallet {
    width: 32px;
    height: auto;
    margin-inline: 0.5rem;
}

.slider {
    position: relative;
    width: 32px;
    height: 20px;
    background-color: var(--secondary-color);

    .slider-thumb {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--primary-color);
        left: 0;
        bottom: 0;
        transition: 0.2s ease;


    }

    .slider-thumb.checked {
        left: 100%;
        translate: -100%;
    }

}
</style>