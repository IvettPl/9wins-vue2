import { createStore } from 'vuex'

export default createStore({
  state: { 
    stateAsideLeft: false,
    stateAsideRight: false,
    regShowPanel: false,
    logShowPanel: false,
    isAuth: false, 
  },
  getters: {
     
  },
  mutations: {
    showPanelLeft(state){
      state.stateAsideLeft = !state.stateAsideLeft
    },
    showPanelRight(state){
      state.stateAsideRight = !state.stateAsideRight
    },  
    showRegPanel(state){
      state.regShowPanel = !state.regShowPanel
    },
    showLogPanel(state){
      state.logShowPanel = !state.logShowPanel
    },
    closePanel(state){
      state.stateAsideLeft = false
      state.stateAsideRight = false
      state.regShowPanel = false
      state.logShowPanel = false
    }
  },
  actions: {
  },
  modules: {
  }
})
