import { shallowMount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

const msg = 'submit'
//工廠函数
const factory = propsData => {
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  })
}
describe('SubmitButton.vue', () => {
  it('有管理權限時，秀出Admin Privileges字樣', () => {
    const wrapper = factory({ isAdmin: true })
    expect(wrapper.find('span').text()).toBe('Admin Privileges')
    expect(wrapper.find('button').text()).toBe('submit')
  })
  it('沒管理權限時，秀出Not Authorized',()=>{
      const wrapper = factory()
      expect(wrapper.find('span').text()).toBe('Not Authorized')
  })
})
