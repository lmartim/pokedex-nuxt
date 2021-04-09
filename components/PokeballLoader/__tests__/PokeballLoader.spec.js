import { shallowMount } from '@vue/test-utils'
import PokeballLoader from '@/components/PokeballLoader/PokeballLoader.vue'

describe('components/PokeballLoader', () => {
  describe('PokeballLoader is rendering', () => {
    const wrapper = shallowMount(PokeballLoader)

    it('Checking PokeballLoader snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
