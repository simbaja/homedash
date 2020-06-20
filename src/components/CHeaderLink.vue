<template>
  <CHeaderNavItem class="px-3">
    <CHeaderNavLink :href="link.url" :target="computedTarget">
      <CServiceIcon v-if="link.icon" :src="link.icon" :additionalClasses="'d-md-down-none mx-2'" ></CServiceIcon>
      {{ link.name }}
    </CHeaderNavLink>
  </CHeaderNavItem>
</template>

<script>
import CServiceIcon from './CServiceIcon'

export default {
  name: 'CHeaderLink',
  props: {
    link: Object
  },
  computed: {
    computedTarget() {
      if(this.link.target)
        return this.link.target === "new" ? "_blank" : "_self";
      return "_blank";
    }
  }
}
</script>