import { shallowMount } from '@vue/test-utils' // 使用shallow可以只foucs在要測試的元件，保証隔離了子元件，如果要一併測試子元件的話，需要使用mount
import TestForm from '@/components/TestForm.vue'

describe('TestForm', () => {
  let wrapper = shallowMount(TestForm)
  let vm = wrapper.vm

  //alert 宣告
  //https://t.codebug.vip/questions-1150586.htm

  window.alert = jest.fn()
  test('login api resolves true', () => {
    window.alert.mockClear()
    /* ... */
  })

  it('總分為所有節數加起來的分數', () => {
    // vm.scores = {
    //   firstSection: 1,
    //   twoSection: 2,
    //   threeSection: 3,
    //   fourSection: 5,
    //   extendSection: 0
    // }
    // 你也可以用上面的方式來改變，但官方建議是用如下的方式，wrapper有很多方法可以使用，詳請可以參考(https://vue-test-utils.vuejs.org/en/)

    wrapper.setData({
      scores: {
        firstSection: 1,
        twoSection: 2,
        threeSection: 3,
        fourSection: 5,
        extendSection: 0
      }
    })
    expect(vm.total).toEqual(11) // 這邊的expect是使用jest的，對我來說很夠用了
  })

  it('不可以加或減超過一分', () => {
    vm.scores.firstSection = 2
    vm.submit()
    expect(alert.mock.calls[0][0]).toEqual('只能增加或減少一分')
  })
  it('只能更新一節的分數', () => {
    vm.scores.firstSection = 1
    vm.scores.twoSection = 1
    vm.submit()
    expect(alert.mock.calls[0][0]).toEqual('只能增加或減少一分')
  })

  it('不可以加或減超過一分且只能更新一節的數分', () => {
    vm.scores.firstSection = 2
    vm.scores.twoSection = 1
    vm.submit()
    expect(alert.mock.calls[0][0]).toEqual('只能增加或減少一分')
    expect(alert.mock.calls[1][0]).toEqual('只能更新一節的分數')
  })
})
