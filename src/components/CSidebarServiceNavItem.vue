<template>
  <li class="c-sidebar-nav-item">
    <slot>
      <CLink
        :class="linkClasses"
        v-bind="computedLinkProps"
      >
        <div v-if="icon" class="c-sidebar-nav-icon">
          <CServiceIcon v-if="icon" :src="icon" />
        </div>
        {{name}}
        <CBadge
          v-if="badge"
          v-bind="Object.assign({}, badge, { text: null })"
        >
          {{badge.text}}
        </CBadge>
      </CLink>
    </slot>
  </li>
</template>

<script>
import { props as linkProps } from '@coreui/vue/src/components/link/CLink'
import { CLink, CBadge, CIcon } from '@coreui/vue'
import CServiceIcon from './CServiceIcon.vue'

const props = Object.assign(
  {}, 
  linkProps, 
  {
    exact: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,
      default: 'c-active'
    }
  },
  {
    name: String,
    icon: [String, Object],
    fontIcon: String,
    badge: Object,
    addLinkClasses: [String, Array, Object],
    label: Boolean
  }
)

export default {
  name: 'CSidebarServiceNavItem',
  components: {
    CLink, 
    CBadge,
    CServiceIcon
  },
  props,
  computed: {
    computedLinkProps () {
      return Object.keys(linkProps).reduce((props, key) => {
        props[key] = this[key]
        return props
      }, {})
    },
    linkClasses () {
      return [
        this.label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link',
        this.addLinkClasses
      ]
    },
    computedIcon () {
      if (typeof this.icon === 'object') {
        return Object.assign(
          { customClasses: 'c-sidebar-nav-icon' },
          this.icon
        )
      } else {
        return { customClasses: 'c-sidebar-nav-icon', name: this.icon }
      }
    }
  }
}
</script>