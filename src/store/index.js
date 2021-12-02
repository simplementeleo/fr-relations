import Vue from 'vue'
import Vuex from 'vuex'
import navigation from './modules/navigation';
import people from './modules/people';

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
    people: people
  }
})
