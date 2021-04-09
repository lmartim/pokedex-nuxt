const actions = {
  async getPokemon({ state: { name }, commit }, pokemon) {
    commit('UPDATE_NAME', pokemon)
    commit('UPDATE_LOADING', true)

    const { data } = await this.$axios.get(`${process.env.pokeApiGateway}/pokemon/${pokemon}`)
    commit('UPDATE_SELECTED', data)

    const species = await this.$axios.get(data.species.url)
    const evolution = await this.$axios.get(species.data.evolution_chain.url)
    commit('UPDATE_EVOLUTION_CHAIN', evolution.data.chain)
    
    commit('UPDATE_LOADING', false)

    this.$router.push({
      path: '/pokemon'
    })
  }
}

export default actions