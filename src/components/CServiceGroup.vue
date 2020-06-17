<template>
<CCard>
  <CCardHeader class="group-header"><CServiceIcon :src="group.icon" height="32px"/><span class="h4">{{ group.name }}</span></CCardHeader>
    <CCardBody>
      <CRow>
        <CServiceItem v-for="(item, index) in group.items" :service="item" :key="index"></CServiceItem>
      </CRow>
    </CCardBody>
  </CCard>        
</template>

<script>

import CServiceItem from './CServiceItem'

export default {
  name: 'CServiceGroup',
  props: {
    group: Object
  },
  computed: {
    
  }
}
</script>