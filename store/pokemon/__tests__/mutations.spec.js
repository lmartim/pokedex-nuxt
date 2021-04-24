import mutations from '@/store/pokemon/mutations'

const mockSelectedPokemon = {
  id: 6,
  name: 'Charizard',
  types: [
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'flying',
        url: 'https://pokeapi.co/api/v2/type/3/',
      },
    },
  ],
}

const mockEvolutionChain = {
  chain: {
    evolution_details: [],
    is_baby: false,
    species: {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon-species/4/',
    },
  },
}

describe('store/pokemon/mutations', () => {
  const state = {
    name: '',
    selected: {},
    evolutionChain: {},
    loading: false,
  }

  it('Trigger `UPDATE_NAME` mutation', () => {
    expect(state.name).toBe('')
    mutations.UPDATE_NAME(state, 'Charizard')
    expect(state.name).toBe('Charizard')
  })

  it('Trigger `UPDATED_SELECTED` mutation', () => {
    expect(state.selected).toStrictEqual({})
    mutations.UPDATE_SELECTED(state, mockSelectedPokemon)
    expect(state.selected).toBe(mockSelectedPokemon)
  })

  it('Trigger `UPDATE_EVOLUTION_CHAIN` mutation', () => {
    expect(state.evolutionChain).toStrictEqual({})
    mutations.UPDATE_EVOLUTION_CHAIN(state, mockEvolutionChain)
    expect(state.evolutionChain).toBe(mockEvolutionChain)
  })

  it('Trigger `UPDATE_LOADING` mutation', () => {
    expect(state.loading).toBe(false)
    mutations.UPDATE_LOADING(state, true)
    expect(state.loading).toBe(true)
  })
})
