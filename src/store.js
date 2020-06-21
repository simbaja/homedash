import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import jsyaml from "js-yaml";
import merge from "lodash.merge";
import defaultConfig from "./assets/defaults.yml";

async function loadConfig () {
  return fetch("/config.yml").then(function (response) {
    if (response.status != 200) {
      return;
    }
    return response.text().then(function (body) {
      return jsyaml.load(body);
    });
  });
}

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  config: null,
  router: null
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

const actions = {
  async fetchConfig({ commit }) {
    try {
      const defaults = jsyaml.load(defaultConfig);
      let config = await loadConfig();
      
      commit('set', ['config', merge(defaults, config)]);
    } catch (error) {
      //TODO: handle exception
    }
  }
}

const getters = {
  config(state) {
    return state.config
  },
  services(state) {
    return state.config != null ? state.config.services : null;
  },
  links(state) {
    return state.config != null ? state.config.links : null;
  },
  baseTitle(state) {
    if(state.config == null)
      return "";
    return `${state.config.title} | ${state.config.subtitle}`;
  },
  footerText(state) {
    if(state.config == null)
      return "";
    return state.config.footer ?? false;
  },
  usingAuthentication(state) {
    return state.config.keycloakAuthenticate ?? false;
  },
  authenticationConfig(state, getters) {
    if(state.config == null || !state.config.keycloakAuthenticate)
      return null;
    
    return {
      realm: state.config.keycloakRealm,
      url: state.config.keycloakUrl,
      clientId: state.config.keycloakClientId,
      logoutRedirectUri: getters.signoutRedirectUrl
    }
  },
  signoutRedirectUrl(state) {
    var internalUrl = window.location.origin;
    if(state.router !== null)
      internalUrl += "/" + state.router.resolve({ name: "PageSignedOut" }).href

    return state.config.keycloakSignoutRedirectUrl ?? internalUrl
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})