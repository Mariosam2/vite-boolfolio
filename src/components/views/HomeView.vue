<script>
export default {
    name: 'HomeView'
}
</script>
<template>
    <div class="container min-vh-100 pt-5">
        <div class="p-5 mb-4  mx-5 rounded-3 bg_primary">
            <div class="container-fluid py-4">
                <h1 class="display-5 fw-bold text-secondary">Home Page</h1>
                <p class="col-md-9 py-3 fs-5 text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Soluta, neque.
                    Iure
                    dolorum sint suscipit, expedita, nisi exercitationem tempora repudiandae vitae dolorem consectetur
                    sed earum aliquid saepe ab harum odit voluptatum modi nemo maxime commodi impedit. Enim
                    perspiciatis, porro iure dolore aut qui quisquam eius. Libero, cupiditate. Maiores, alias, aliquid
                    tempore molestiae inventore quia similique aut doloremque voluptas eum sint nobis fuga? Aperiam qui
                    autem accusantium ad deleniti repellat, laborum dignissimos. Ex sunt nihil aut fugit neque officiis
                    nostrum unde quas alias at ut mollitia, exercitationem id inventore quam laboriosam optio molestiae
                    necessitatibus, possimus tempore. Iste unde provident magnam voluptatibus! Explicabo!</p>
                <button class="btn bg_primary jumbo_button btn-lg text-muted" type="button">Example button</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.btn.jumbo_button {
    border-radius: 0;
    border: 1px solid #6c757d;

    &:hover {
        filter: brightness(90%);
    }
}
</style>