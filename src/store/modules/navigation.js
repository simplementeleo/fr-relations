const navigation = {
  namespaced: true,
  state: {
    filteringSearch: false,
    isActive: false,
    currentElements: [
      { el: 'Especifica tu genero', show: true, arrow: false, span: '¿Qué soy?'},
      { el: 'Especifica qué buscas', show: false, arrow: false, span: '¿Qué busco?'},
      { el: 'Especifica para qué', show: false, arrow: false, span: '¿Para qué?'},
      { el: 'Especifica dónde', show: false, span: '¿En dónde?', cant: '(27.000)'},
    ],
    
  },
  mutations: {
    changeActive(state) {
      state.isActive = !state.isActive
    },
    currentNav(state, current) {
      state.currentElements[current.index].el = current.value
      state.currentElements[current.index].arrow = current.show
      if (current.index != 3) {
        state.currentElements[current.index + 1].show = current.show
      }
      // console.log(state.currentElements[current.index].el)
    },
    changeFilteringSearch(state){
      state.filteringSearch = !state.filteringSearch
    }
  },
  actions: {
  },
}
export default navigation;