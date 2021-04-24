<template>
  <div class="container flex-col">
    <div v-if="loading">
      <PokeballLoader />
    </div>
    <div v-else>
      <div class="grid grid-cols-4 gap-3">
        <PokemonCard
          v-for="(pokemon, index) in list[pagination]"
          :key="index"
          :name="pokemon.name"
          :number="index + 1 + pagination * 16"
          @click="navigate(pokemon.name)"
        />
      </div>
      <div class="grid grid-cols-2 gap-3 mt-10">
        <Button
          label="Previous"
          :disabled="pagination <= 0"
          @click="updateList(-1)"
        />
        <Button label="Next" @click="updateList(1)" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      list: (state) => state.pokemonList.list,
      pagination: (state) => state.pokemonList.pagination,
      loading: (state) => state.pokemonList.loading,
    }),
  },
  mounted() {
    if (!this.list.length) this.$store.dispatch('pokemonList/getInitialList')
  },
  methods: {
    updateList(update) {
      this.$store.dispatch('pokemonList/updateList', this.pagination + update)
    },
    navigate(pokemon) {
      this.$store.dispatch('pokemon/getPokemon', pokemon)
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.pokedex-slot {
  display: flex;
  margin-top: 20px;
}
.main {
  margin-right: 20px;
}
.data {
  text-align: left;
}
</style>
