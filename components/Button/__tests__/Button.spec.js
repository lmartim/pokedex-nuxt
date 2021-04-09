import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button/Button.vue'

describe('components/Button', () => {
  describe('Button rendering', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        label: 'Button Label'
      }
    })
  
    it('Checking Button label', () => {
      expect(wrapper.text()).toContain('Button Label')
    })
  })
})