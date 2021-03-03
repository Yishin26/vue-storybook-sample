import { shallowMount } from '@vue/test-utils'
import Button from '@/stories/Button.vue'

describe('Button.vue', () => {
  it('Renders button text using a label prop', () => {
    const label = 'Test Button'
    const wrapper = shallowMount(Button, {
      propsData: { label }
    })
    expect(wrapper.text()).toBe('Test Button')
  })

  //如果我們想要再測試 Button 如果指定 primary 為 True，元件渲染成有 Primary Class
  it('Renders the button in the primary state', () => {
    const label = 'Button'
    const primary = true
    const wrapper = shallowMount(Button, {
      propsData: { label, primary }
    })
    expect(wrapper.classes('storybook-button--primary')).toBe(true)
  })

  //繼續測試 Button 如果指定 primary 為 False，元件渲染為 Secondary Class
  const factory = (propsData, label = 'Button') => {
    return shallowMount(Button, {
      propsData: {
        label,
        ...propsData
      }
    })
  }

  it('Renders the button in the primary state', () => {
    const wrapper = factory({ primary: true })
    expect(wrapper.classes('storybook-button--primary')).toBe(true)
  })

  it('Renders the button in the secondary state', () => {
    const wrapper = factory({ primary: false })
    expect(wrapper.classes('storybook-button--secondary')).toBe(true)
  })
   
  
  
})
