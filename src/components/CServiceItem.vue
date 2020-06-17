<template>
  <CCol col="12" md="12" lg="6" xl="4">
    <CWidgetIcon
      :header="service.name"
      :text="service.subtitle"
      color="secondary"
      :iconPadding="false"
      class="service-item"
    >
      <CServiceIcon :src="computedIcon" width="48" height="48"/>
    </CWidgetIcon>
  </CCol>
</template>

<script>
import CServiceIcon from './CServiceIcon'

export default {
  name: 'CServiceItem',
  props: {
    service: Object
  },
  computed: {
    computedIcon() {
      return this.service.icon ?? "window-maximize";
    }
  }
}
</script>