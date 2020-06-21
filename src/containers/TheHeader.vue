<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon :use="logoWideSrc" :viewBox="logoWideBox" height="48" alt="Logo"/>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CRenderFunction flat :content-to-render="this.navItems"/>
    </CHeaderNav>
    <CHeaderNav class="mr-4" v-if="usingAuthentication">
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  },
  computed: {
    links() {
      return this.$store.getters.links;
    },
    logoWideSrc() {
      return this.$store.state.config.logoWideSrc
    },
    logoWideBox() {
      return this.$store.state.config.logoWideBox
    },
    usingAuthentication() {
      return this.$store.getters.usingAuthentication;
    },
    navItems() {
      return this.generateNavItems();
    }
  },
  methods: {
    generateNavItems: function() {
      var root = [];

      //add the nav bar
      var bar = { 
        _name: "CHeaderNav",
        class: "d-md-down-none mr-auto",
        _children: []
      }
      root.push(bar);

      //if we don't have the links, nothing to add
      if(this.links != null) {
        //loop over the links and add them
        this.links.forEach(link => {
          bar._children.push(this.createNavItem(link));     
        });
      }

      console.info(root);
      return root;
    },
    createNavItem: function(l) {
      return {
        _name: "CHeaderLink",
        link: l,
        _children: []
      }
    }
  }  
}
</script>
