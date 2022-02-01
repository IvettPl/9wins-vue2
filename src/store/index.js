import { createStore } from 'vuex'

export default createStore({
  state: {
    stateAsideLeft: false,
    stateAsideRight: false,
    regShowPanel: false,
    logShowPanel: false,
    isAuth: true,
    emptyBox: true,
    depositCard: true,
    emptyBoxWithdrawal: true,
    withdrawalCard: true
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
    },
    showcardForm(state){
      state.depositCard = !state.depositCard
    },
    showWithdrawalForm(state){
      state.withdrawalCard = !state.withdrawalCard
    }
  },
  actions: {
  },
  modules: {
  }
})
