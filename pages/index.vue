<template>
  <div class="container">
    <div>
      <div class="links">
        <select id="pokedex-select" @change="selectPokemon">
          <option>Select a Pokémon</option>
        </select>
        <div class="pokedex-slot" v-if="selectedPokemon">
          <div class="main">
            <div v-html="selectedPokemon.name" />
            <img :src="selectedPokemon.sprites.front_default" />
          </div>
          <div class="data">
            <b>Abilities</b>
            <ul>
              <li v-for="ability in selectedPokemon.abilities" :key="ability.key" v-html="ability.ability.name" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      pokedex: {},
      selectedPokemon: null
    }
  },
  mounted() {
    const pokedexSelect = document.getElementById('pokedex-select');
    
    this.$axios.get(`https://pokeapi.co/api/v2/pokedex/kanto`)
    .then((res) => {
      this.pokedex = res.data.pokemon_entries

      res.data.pokemon_entries.forEach(el => {
        let option = document.createElement("option")
        option.value = el.entry_number
        option.innerHTML = el.pokemon_species.name

        pokedexSelect.appendChild(option);
      })
    })
  },
  methods: {
    selectPokemon({e, target}) {
      const pokemonId = target.value

      this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => {
        console.log(res.data)
        this.selectedPokemon = res.data
      })
    }
  }
}
</script>

<style lang="postcss">
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
