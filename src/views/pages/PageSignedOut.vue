<template>
  <CContainer class="d-flex align-items-center min-vh-100">
    <CRow class="w-100 justify-content-center">
      <CCol md="6">
        <div class="clearfix">
          <h1 class="float-left display-3 mr-4">      
            <CIcon 
              class="c-sidebar-brand-full" 
              :use="logoWideSrc" 
              size="custom-size" 
              :height="35" 
              :viewBox="logoWideBox"
            />
          </h1>
          <h4 class="pt-3">You have signed out</h4>
          <p class="text-muted">Please close all browser windows to ensure your session has been fully cleared.</p>
        </div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'PageSignedOut',
  computed: {
    logoWideSrc() {
      return this.$store.state.config.logoWideSrc
    },
    logoWideBox() {
      return this.$store.state.config.logoWideBox
    }
  }
}
</script>
