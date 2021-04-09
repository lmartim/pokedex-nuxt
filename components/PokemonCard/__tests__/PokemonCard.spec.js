import { shallowMount } from '@vue/test-utils'
import PokemonCard from '@/components/PokemonCard/PokemonCard.vue'

describe('components/PokemonCard', () => {
  describe('PokemonCard is rendering', () => {
    const wrapper = shallowMount(PokemonCard, {
      propsData: {
        name: 'Charizard',
        number: 6,
      },
    })

    it('Checking Card label', () => {
      expect(wrapper.text()).toContain('Charizard')
    })

    it('Checking Card img src', () => {
      const img = wrapper.findAll('img')
      expect(img.length).toBe(1)
    })
  })
})
