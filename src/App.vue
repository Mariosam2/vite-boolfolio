<script>
import AppHeader from './components/partials/AppHeader.vue';
import AppFooter from './components/partials/AppFooter.vue';
import AppMain from './components/partials/AppMain.vue';
export default {
  name: 'App',
  components: {
    AppHeader, AppFooter, AppMain
  }
}
</script>

<template>
  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>

</template>

<style lang="scss">

</style>

