import Vue from 'vue'
import Vuex from 'vuex'
import navigation from './modules/navigation';
import people from './modules/people';
import filters from './modules/filters';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    nav: navigation,
    people: people,
    filters: filters
  }
})
