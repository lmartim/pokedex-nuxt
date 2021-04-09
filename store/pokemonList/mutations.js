import Vue from "vue";

const mutations = {
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

export default mutations