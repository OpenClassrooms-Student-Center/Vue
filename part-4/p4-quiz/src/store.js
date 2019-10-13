import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    price: 40
  },
  mutations: {
    fetchPrice(state) {
      fetch('/api/price').then(() => {
        console.log('hello')
      })
      state = response
    }
  }
})
