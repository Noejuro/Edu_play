import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLeveluno: 1, userLeveldos: null, userLeveltres: null,
    userStyle: null,
    class: {
      uno: 1, dos: 1, tres: 1, cuatro: 1, cinco: 1, seis: 1, siete: 1, ocho: 1, nueve: 1,
    },
    completed: {
      uno: null, dos: null, tres: null, cuatro: null, cinco: null, seis: null, siete: null, ocho: null, nueve: null,
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
