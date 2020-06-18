<template>
  <CCol col="12" md="12" lg="6" xl="4">
    <!-- derived from CWidgetIcon source -->
    <div class="card service-item">
      <CCardLink v-if="service.target == 'embed'" :to="'/Service/'+service.name" class="stretched-link"></CCardLink>
      <CCardLink v-if="service.target != 'embed'" :href="service.url" class="stretched-link"></CCardLink>
      <div
        class="card-body d-flex align-items-center p-0"
      >
        <div
          class="mr-3 text-white"
          :class="[`bg-${computedColor}`, 'p-4']"
        >
          <CServiceIcon :src="computedIcon" width="48" height="48"/>
        </div>
        <div>
          <div :class="`text-value text-${computedColor}`">
            {{service.name}}
          </div>
          <div
            v-if="service.subtitle"
            class="text-muted text-uppercase font-weight-bold small"
          >
            {{service.subtitle}}
          </div>
          <div v-if="service.badge" class="tag" :class="`badge-${computedBadgeColor}`">
            <strong class="tag-text">#{{ service.badge }}</strong>
          </div>
        </div>
      </div>
    </div>
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
    },
    computedColor() {
      return this.service.backgroundColor ?? this.$store.getters.config.serviceColor;
    },
    computedBadgeColor() {
      return this.service.badgeColor ?? this.$store.getters.config.badgeColor;
    }
  }
}
</script>