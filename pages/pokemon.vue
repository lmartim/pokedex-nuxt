<template>
  <div class="container flex-col">
    <div class='back' @click="$router.push('/')">
      Back
    </div>
    <div class="bg-blue-200 p-5 rounded-md" v-if="selected">
      <div class="container__pokemon-info">
        <div class="container__pokemon-info__image">
          <img :src="getPokemonImage(selected.id)">
        </div>
        <div class="container__pokemon-info__content">
          <div class="container__pokemon-info__content-name">
            #{{selected.id}} - {{selected.name}}
          </div>
          <div class="container__pokemon-info__content-types">
            <PokemonTypeBadge :type="type.name" v-for="({type}, index) in selected.types" :key="(index+2)*22" />
          </div>
        </div>
      </div>
      <div class="container__pokemon-attributes">
        <b>Abilities:</b><br>
        <div class="container__pokemon-attributes__abilities">
          <div v-for="({ability}, index) in selected.abilities" :key="index">
            {{ability.name}}
          </div>
        </div>
      </div>
      <div class="container__pokemon-stats">
        <b>Stats:</b>
        <div class="container__pokemon-stats__block">
          <div class="container__pokemon-stats__block-stat" v-for="({stat, base_stat}, index) in selected.stats" :key="(index+1)*10">
            {{statText(stat.name)}}: {{base_stat}}
          </div>
        </div>
      </div>
      <div class="container__pokemon-evolution" v-if="evolutionChain && evolutionChain.species">
        <b>Evolution Chain:</b>
        <div class="container__pokemon-evolution__block">
          <div class="container__pokemon-evolution__block-chain">
            {{evolutionChain.species.name}}
          </div>
          <div v-if="evolutionChain.evolves_to[0]">
            =>
          </div>
          <div class="container__pokemon-evolution__block-chain" v-if="evolutionChain.evolves_to[0]">
            {{evolutionChain.evolves_to[0].species.name}}
          </div>
          <div v-if="evolutionChain.evolves_to[0].evolves_to[0]">
            =>
          </div>
          <div class="container__pokemon-evolution__block-chain" v-if="evolutionChain.evolves_to[0].evolves_to[0]">
            {{evolutionChain.evolves_to[0].evolves_to[0].species.name}}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <PokeballLoader />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      pokeImage: process.env.pokeImage
    }
  },
  computed: {
    ...mapState({
      selected: state => state.pokemon.selected,
      evolutionChain: state => state.pokemon.evolutionChain,
      loading: state => state.pokemon.loading
    })
  },
  mounted() {
    if (Object.keys(this.selected).length <= 0) {
      this.$router.push({
        path: '/'
      })
    }

    console.log('SELECTED: ', this.selected)
    console.log('CHAIN: ', this.evolutionChain)
  },
  methods: {
    getPokemonImage(number) {
      return `${this.pokeImage}/${number}.png`
    },
    statText(stat) {
      switch(stat) {
        case 'hp':
          return 'HP'
        case 'attack':
          return 'Attack'
        case 'defense':
          return 'Defense'
        case 'special-attack':
          return 'Sp. Attack'
        case 'special-defense':
          return 'Sp. Defense'
        case 'speed':
          return 'Speed'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .back {
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
  .container__pokemon-info {
    display: flex;
    &__image {
      margin-right: 30px;
    }
    &__content {
      text-align: left;
      &-name {
        font-weight: 700;
        text-align: left;
      }
      &-name, &-types {
        text-transform: capitalize;
      }
      &-types {
        display: flex;
        text-align: left;
        .type:last-child {
          margin-left: 10px;
        }
      }
    }
  }
  .container__pokemon-attributes {
    text-align: left;
    margin-top: 15px;
    &__abilities {
      text-transform: capitalize;
    }
  }
  .container__pokemon-stats {
    text-align: left;
    margin-top: 15px;
    &__block {
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }
  .container__pokemon-evolution {
    text-align: left;
    margin-top: 15px;
    &__block {
      display: flex;
      justify-content: center;
      &-chain {
        margin: 0 8px;
        text-transform: capitalize;
      }
    }
  }
}

</style>
