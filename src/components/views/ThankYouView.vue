<script>
export default {
    name: 'ThankYouView',

}
</script>
<template>
    <main id="site_main" class="bg_dark">
        <div class="container p-4 p-lg-0 min-vh-100 justify-content-center d-flex align-items-center">
            <div class="thank-you bg_primary p-4 rounded-2 d-flex flex-column align-items-center">
                <svg class="checkmark my-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
                <h2 class="text_primary text-center">Thank you for your message!</h2>
            </div>
        </div>

        <router-link :to="{ name: 'home' }"></router-link>
    </main>
</template>
<style lang="scss" scoped>
.checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #7ac142;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

[data-theme="dark"] .checkmark__circle {
    fill: var(--secondary-color);
    stroke: var(--secondary-color);
}

.checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
    100% {
        stroke-dashoffset: 0;
    }
}

@keyframes scale {

    0%,
    100% {
        transform: none;
    }

    50% {
        transform: scale3d(1.1, 1.1, 1);
    }
}

@keyframes fill {
    100% {
        box-shadow: inset 0px 0px 0px 30px #7ac142;
    }
}


@keyframes stretch {
    from {
        width: 0px;
    }

    50% {
        width: 25px;
    }

    to {
        width: 50px;
    }
}
</style>