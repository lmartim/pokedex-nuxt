const mutations = {
  UPDATE_NAME (state, name) {
    state.name = name
  },
  UPDATE_SELECTED (state, pokemon) {
    state.selected = pokemon
  },
  UPDATE_EVOLUTION_CHAIN (state, chain) {
    state.evolutionChain = chain
  },
  UPDATE_LOADING (state, loading) {
    state.loading = loading
  }
}

export default mutations