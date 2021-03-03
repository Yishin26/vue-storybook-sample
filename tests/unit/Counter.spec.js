import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  // 现在挂载组件，你便得到了这个包裹器
  const wrapper = shallowMount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })
  
 //button click should increment the count
  it('按鈕按下時會增加數字', async()=> {
    expect(wrapper.text()).toContain('0')
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.text()).toContain('1')
  })


})
