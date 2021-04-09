import Vue from "vue";

export const state = () => ({
  list: [],
  pagination: 0,
  loading: false
})

export const mutations = {
  UPDATE_LIST (state, { list, pagination }) {
    Vue.set(state.list, pagination, list)
  },
  UPDATE_PAGINATION (state, newPagination) {
    state.pagination = newPagination
  },
  UPDATE_LOADING (state, loading) {
    state.loading = loading
  }
}

export const actions = {
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