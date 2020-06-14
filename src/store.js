import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const jsyaml = require("js-yaml");
const merge = require("lodash.merge");
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
  config: null
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
  baseTitle(state) {
    if(state.config == null)
      return "";
    return `${state.config.title} | ${state.config.subtitle}`;
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})