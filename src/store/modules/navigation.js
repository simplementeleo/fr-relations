const navigation = {
  namespaced: true,
  state: {
    isActive: false
  },
  mutations: {
    changeActive(state) {
      state.isActive = !state.isActive
    }
  },
  actions: {
  },
}
export default navigation;