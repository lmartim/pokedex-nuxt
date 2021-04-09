import { shallowMount } from '@vue/test-utils'
import PokemonTypeBadge from '~/components/PokemonTypeBadge/PokemonTypeBadge.vue'

describe('components/PokemonTypeBadge', () => {
  describe('Rendering Badge with Fire type', () => {
    const wrapper = shallowMount(PokemonTypeBadge, {
      propsData: {
        type: 'fire'
      }
    })
  
    it('Checking Badge label', () => {
      expect(wrapper.text()).toContain('fire')
    })

    it('Checking Badge type class', () => {
      expect(wrapper.classes()).toContain('type-fire')
    })
  })
})