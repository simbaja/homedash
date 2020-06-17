<template>
<CContainer fluid>
  <div>
    <CServiceGroup v-for="(group, index) in serviceGroups" :group="group" :key="index"></CServiceGroup>
  </div>
</CContainer>
</template>

<script>
import CServiceGroup from '../components/CServiceGroup'

export default {
  name: 'Services',
  components: {
  },
  data () {
    return {
      //serviceGroups: this.$store.getters.services
    }
  },
  computed: {
    serviceGroups() {
      return this.$store.getters.services
    }
  }
}
</script>
