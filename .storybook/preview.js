import '../src/assets/index.css'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  //設置全域色基底
  //手動加入 官方目前提供二組 viewport INITIAL_VIEWPORTS 及 MINIMAL_VIEWPORTS(預設)
  viewport: {
    viewports: INITIAL_VIEWPORTS
    // your own default viewport
    //defaultViewport: 'iphone6',
  },

  backgrounds: {
    values: [
      { name: 'story-red', value: 'pink' },
      { name: 'story-green', value: 'olive' }
    ]
  }
}

//把.jest-test-results.json 的結果 使用 Decorator 加入到整個 Storybook 的設定
import { addDecorator } from '@storybook/vue'
import { withTests } from '@storybook/addon-jest'
import results from '../.jest-test-results.json'

addDecorator(
  withTests({
    results
  })
)
