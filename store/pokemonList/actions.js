const actions = {
  async getInitialList({commit}) {
    const { data } = await this.$axios.get(`${process.env.pokeApiGateway}/pokemon?limit=16`)

    const list = data.results
    const pagination = 0

    commit('UPDATE_LIST', { list, pagination })
  },
  async updateList({ state: { list }, commit }, newPagination) {
    if(!list[newPagination]) {
      commit('UPDATE_LOADING', true)

      const offset = 16 * newPagination

      const { data } = await this.$axios.get(`${process.env.pokeApiGateway}/pokemon?limit=16&offset=${offset}`)
      
      const list = data.results

      commit('UPDATE_LOADING', false)
      commit('UPDATE_LIST', { list, pagination: newPagination })
    }

    commit('UPDATE_PAGINATION', newPagination || 0)
  }
}

export default actions