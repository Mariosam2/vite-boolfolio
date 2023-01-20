<script>
export default {
    name: 'NotFoundView',
    data() {
        return {
            statusCode: this.$route.status || 404,
            errorMessage: this.$route.message || 'Ops! Something went wrong...',
        }
    }
}
</script>
<template>
    <div class="container-fluid min-vh-100 bg-dark text-white d-flex justify-content-center align-items-center">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="status_code">{{ statusCode }}</h1>
            <p>{{ errorMessage }}</p>
        </div>
    </div>
</template>
<style>

</style>