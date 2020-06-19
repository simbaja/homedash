<template>
  <CHeaderNavItem class="px-3">
    <CHeaderNavLink :href="link.url">
      <CServiceIcon v-if="link.icon" :src="link.icon" :target="link.target" :additionalClasses="'d-md-down-none mx-2'" ></CServiceIcon>
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
  }
}
</script>