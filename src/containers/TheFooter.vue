<template>
  <CFooter :fixed="false" v-html="footerText">
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    footerText: String
  }
}
</script>
