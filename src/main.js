import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

//change this import if you want to use other icon packs
import "@coreui/icons/css/all.css";

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

import CServiceIcon from './components/CServiceIcon';
import CServiceGroup from './components/CServiceGroup';
import CServiceItem from './components/CServiceItem';
import CSidebarServiceNavItem from './components/CSidebarServiceNavItem';
import CHeaderLink from './components/CHeaderLink';

Vue.component('CServiceIcon', CServiceIcon);
Vue.component('CServiceGroup', CServiceGroup);
Vue.component('CServiceItem', CServiceItem);
Vue.component('CSidebarServiceNavItem', CSidebarServiceNavItem);
Vue.component('CHeaderLink', CHeaderLink);

function start() {
  new Vue({
    el: '#app',
    router,
    store,
    icons,
    template: '<App/>',
    components: {
      App
    }
  });
}

store.dispatch('fetchConfig')
  .then((response) => { 
    start();
  })
  .catch((error) => {
    alert('Could not load config', error);
  });