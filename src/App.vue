<template>
  <router-view></router-view>
</template>

<style>
  @import './../node_modules/@coreui/icons/css/all.css'
</style>

<script>
import defaultConfig from "./assets/defaults.yml";

export default {
  name: 'App',
  mounted: function () {
    this.setTitle(this.$route)
  },
  watch: {
    '$route' (to, from) {
      this.setTitle(to)
    },
    '$store.state.config' (to, from) {
      this.setTitle(this.$route)
    }, 
    immediate: true
  },
  methods: {
    setTitle: function(t) {
      var pageTitle = t.name??"";
      if(t.name == 'Embedded Service')
        pageTitle = t.params.name;

      document.title = `${this.$store.getters.baseTitle} - ${pageTitle}`
    }
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
