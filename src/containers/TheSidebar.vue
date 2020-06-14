<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="c-sidebar-brand-full" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="this.navItems"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>

export default {
  name: 'TheSidebar',
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    },
    services() {
      return this.$store.getters.services
    },
    navItems () {
      return this.generateNavItems()
    }
  }, methods: {
    generateNavItems: function() {
      var root = [];

      //generate the bar
      var bar = {
        _name: "CSidebarNav",
        _children: []
      };
      root[0] = bar;

      //add the default home item
      bar._children.push(this.createHomeItem());

      //if we don't have the services, nothing to add
      if(this.services != null) {
        //loop over the services and add them
        this.services.forEach(group => {
          if(group.name !== undefined && group.name !== null && group.name !== "")
            bar._children.push(this.createNavTitle(group));

          group.items.forEach(service => {
            bar._children.push(this.createNavItem(service));
          });
        });
      }

      return root;
    },
    createHomeItem: function() {
      return {
        _name: "CSidebarNavItem",
        name: "Services",
        to: "/Services",
        icon: 'cil-applications'
      }
    },
    createNavItem: function(s) {
      return {
            _name: "CSidebarNavItem",
            name: s.name,
            ...(s.target === "embed") && { to: "/Service/" + s.name },
            ...(s.target !== "embed") && { href: s.url, target: s.target === "new" ? "_blank" : "_self" },
            ...(s.icon !== undefined) && { icon: s.icon, ...(s.iconClass !== undefined) && { class: s.iconClass } },
            ...(s.badge !== undefined) && { badge: { text: s.badge, color: s.badgeColor !== undefined ? s.badgeColor : 'primary' } },
            ...(s.class !== undefined) && { _class: s.class }
          }
    },
    createNavTitle: function(g) {
      return {
          _name: "CSidebarNavTitle",
          _children: [ g.name ]
        }
    }
  }
}
</script>
