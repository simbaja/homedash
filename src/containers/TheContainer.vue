<template>
  <div class="c-app">
    <TheSidebar/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <!--<CContainer fluid>-->
            <transition name="fade">
              <router-view></router-view>
            </transition>
          <!--</CContainer>-->
        </main>
      </div>
      <TheFooter v-if="footerText" :footerText="footerText"/>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  name: 'TheContainer',
  components: {
    TheSidebar,
    TheHeader,
    TheFooter
  },
  computed: {
    footerText() {
      return this.$store.getters.footerText;
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
