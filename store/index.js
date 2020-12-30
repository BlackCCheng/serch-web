import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

const store = () =>  new Vuex.Store({
    state,
    mutations,
    actions,
    modules
  })

export default store
