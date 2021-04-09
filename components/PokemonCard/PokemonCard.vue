<template>
  <div
    v-bind="$attrs"
    class="pokemon-card bg-blue-200 hover:bg-blue-500 p-5 rounded-md capitalize transition duration-500 ease-in-out cursor-pointer"
    v-on="$listeners"
  >
    <img :src="getPokemonImage(number)" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Charizard',
    },
    number: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      pokeImage: process.env.pokeImage,
    }
  },
  methods: {
    getPokemonImage(number) {
      return `${this.pokeImage}/${number}.png`
    },
  },
}
</script>
