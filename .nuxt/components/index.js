export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Button } from '../..\\components\\Button\\Button.vue'
export { default as PokemonCard } from '../..\\components\\PokemonCard\\PokemonCard.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyButton = import('../..\\components\\Button\\Button.vue' /* webpackChunkName: "components_Button/Button" */).then(c => c.default || c)
export const LazyPokemonCard = import('../..\\components\\PokemonCard\\PokemonCard.vue' /* webpackChunkName: "components_PokemonCard/PokemonCard" */).then(c => c.default || c)
