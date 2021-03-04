import { shallowMount } from '@vue/test-utils'
import FormSubmitter from '@/components/FormSubmitter.vue'
import flushPromises from "flush-promises"

let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve()
    })
  }
}

describe('FormSubmitter', () => {
  it('當按下送出時要出現下方文字', async () => {
    const wrapper = shallowMount(FormSubmitter, {
        mocks: {
          $http: mockHttp
        }
      })

      wrapper.find('[data-username]').setValue('alice')
      wrapper.find('form').trigger('submit.prevent')

      //一个立即 resolve 所有 pending 中的 promise 的简单 Node.js 模块，能确保包括 nextTick 在内的所有 promises 都被 resolve，并且 Vue 也会更新 DOM
      await flushPromises()

      expect(url).toBe("/api/v1/register")
      expect(data).toEqual({ username: "alice" })
    })
})

