import { shallowMount } from '@vue/test-utils'
import NumberRenderer from '@/components/NumberRenderer.vue'

const factory = propsData => {
  return shallowMount(NumberRenderer, {
    propsData: {
      ...propsData
    }
  })
}
describe('NumberRenderer', () => {
  it('當even為true,秀出偶數', () => {
    const wrapper = factory({ even: true })
    expect(wrapper.text()).toBe('2, 4, 6, 8')
  })
  //call一个不用真正渲染组件而测试计算属性的替代方法。
  it('當even為false,秀出奇數', () => {
    const localThis = { even: false }
    expect(NumberRenderer.computed.numbers.call(localThis)).toBe('1, 3, 5, 7, 9')
  })
})
