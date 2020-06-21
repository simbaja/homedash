import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import VueKeyCloak from '@dsb-norge/vue-keycloak-js'
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
  var authConfig = store.getters.authenticationConfig;
  if(authConfig == null)
    startVue();
  else
  {
    Vue.use(VueKeyCloak, {
      init: {
        // Use 'login-required' to always require authentication
        // If using 'login-required', there is no need for the router guards in router.js
        onLoad: 'check-sso'
      },      
      config: authConfig,
      onReady: kc => { // eslint-disable-line no-unused-vars
        startVue();
      }
    });
  }
}

function startVue()
{
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

//set the global error handler
window.onerror = function(message, source, lineno, colno, error) {
  console.log('Exception: ', error)
}

//store the router so we have access to it in the store
store.commit('set', ['router', Vue.observable(router)]);

//get the config, then start the app
store.dispatch('fetchConfig')
  .then((response) => { 
    start();
  })
  .catch((error) => {
    alert('Could not load config', error);
  });