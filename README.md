# vue-storybook-sample


## 參考資料

[Storybook官方文件](https://storybook.js.org/docs/vue/get-started/install)

[玩轉 Storybook](https://ithelp.ithome.com.tw/articles/10237430)

[Component Driven 理念](https://www.componentdriven.org/)

[Vue 组件的单元测试(Vue Cookbook)](https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%B5%8B%E8%AF%95%EF%BC%9F)

[Vue測試指南](https://lmiller1990.github.io/vue-testing-handbook/zh-CN/)

## 3 steps of Unit test：
- 安排（Arrange）：为测试做好设置。在我们的用例中，是渲染了组件
- 行动（Act）：对系统执行操作
- 断言（Assert）：确保真实的结果匹配你的期望

## kinanson的單元測試技術回憶3篇

[vue-如何為vue補上單元測試來確保品質](https://dotblogs.com.tw/kinanson/2017/07/24/211543)

[vue-如何寫一個可測試的組件](https://dotblogs.com.tw/kinanson/2017/07/24/211543)

[vue-使用jest和官方的vue test utils來寫單元測試](https://dotblogs.com.tw/kinanson/2017/10/17/222548)

## 其他vue測試參考案例
[讓我們使用 Cypress 開始為 LIFF app 撰寫單元測試](https://engineering.linecorp.com/zh-hant/blog/cypress-liff-unit-test/)

[Cypress 官方文件](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)



- - -
&nbsp;
## 指令

#### 1.啟動storybook

```
npm run storybook
```
&nbsp;
#### 2.build storybook-static
建立靜態網頁，可在資料夾中直接檢視規格頁 

```
npm run build-storybook
```
&nbsp;
#### 3.Accessibility (A11y)
這個 Addon 沒有在 Essentials addon 裡面，所以必需要另外安裝，它可以幫助我們在開發時快速的檢測元件是否符合無障礙設計的規範

```
npm install @storybook/addon-a11y -D
```
&nbsp;
#### 4.Vue Test Utils
Vue 官方提供的測試套件，在vue cli 環境安裝
```
vue add @vue/unit-jest
```
&nbsp;
#### 5.Storybook addon Jest
加上這個 Addon 後我們可以在 Storybook 上看到測試結果，並搭配元件當下呈現的畫面。
```
npm install --save-dev @storybook/addon-jest
```

#### 6.[Chromatic](https://www.chromatic.com/)
可連動做自動的視覺回溯測試 
```
npm install --save-dev chromatic
```

#### 7.[Cypress E2E自動化測試工具](https://www.cypress.io/)
```
npm install cypress
node_modules/.bin/cypress open
node_modules/.bin/cypress run --record --key 一組序號

```
