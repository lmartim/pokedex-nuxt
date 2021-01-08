import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  createPersistedState({
    key: 'pokedex-nuxt',
    paths: 'pokemons',
  })(store)
}