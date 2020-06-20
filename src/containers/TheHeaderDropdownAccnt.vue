<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/default_avatar.png"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>{{ fullName }}</strong>
    </CDropdownHeader>
    <CDropdownItem @click="profile()">
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem @click="logout()">
      <CIcon name="cil-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  },
  computed: {
    userName() {
      return this.$keycloak.userName;
    },
    fullName() {
      return this.$keycloak.fullName;
    }
  },
  methods: {
    profile: function() {
      this.$keycloak.accountManagement();
    },
    logout: function() {
      this.$keycloak.logoutFn({ redirectUri: 'https://google.com'})
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>