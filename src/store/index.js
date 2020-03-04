import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testTxt:{ }
  },
  mutations: {
    POSITION(state,msg) {
      state.testTxt.tips= msg;
    }
  },
  actions: {
  },
  modules: {
  }
})
