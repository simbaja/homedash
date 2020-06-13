<template>
  <router-view></router-view>
</template>

<script>
const jsyaml = require("js-yaml");
const merge = require("lodash.merge");

import defaultConfig from "./assets/defaults.yml";

export default {
  name: 'App',
  created: async function () {
    try {
      const defaults = jsyaml.load(defaultConfig);
      let config = await this.getConfig();
      
      this.$store.commit('set', ['config', merge(defaults, config)]);
      this.$store.commit('set', ['services', this.$store.state.config.services]);
      document.title = `${this.$store.state.config.title} | ${this.$store.state.config.subtitle}`;
    } catch (error) {
      //TODO: handle exception
    }
  },
  methods: {
    getConfig: function () {
      return fetch("/config.yml").then(function (response) {
        if (response.status != 200) {
          return;
        }
        return response.text().then(function (body) {
          return jsyaml.load(body);
        });
      });
    }
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
