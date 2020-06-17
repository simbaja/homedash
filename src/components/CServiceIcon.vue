<template>
  <img
    v-if="isImgSrc"
    :src="src"
    :class="computedClasses"
    role="img"
  />
  <i
    v-else
    :class="computedClasses"
    role="img"
  />
</template>

<style scoped>
.c-icon {
  display: inline-block;
  color: inherit;
  text-align: center;
  fill: currentColor;
}
</style>

<script>
export default {
  name: 'CServiceIcon',
  props: {
    src: String,
    customClasses: [String, Array, Object],
    title: String,
    width: String,
    height: String
  },
  computed: {
    isImgSrc() {
      return ['png','jpg','gif'].includes(this.src.split('.').pop());
    },
    computedClasses () {
      var classNames = ["c-icon","c-icon-custom-size"];

      if(!this.isImgSrc)
        classNames.push(this.src);

      return this.customClasses || classNames;
    }
  }
}
</script>