# vue-storybook-sample


## 參考資料

[storybook官方文件](https://storybook.js.org/docs/vue/get-started/install)

[玩轉 Storybook](https://ithelp.ithome.com.tw/articles/10237430)

[Component Driven 理念](https://www.componentdriven.org/)


## 指令

1. 啟動storybook

```
npm run storybook
```

2. build storybook-static：建立靜態網頁，可在資料夾中直接檢視規格頁 

```
npm run build-storybook
```

3. Accessibility (A11y)

這個 Addon 沒有在 Essentials addon 裡面，所以必需要另外安裝，它可以幫助我們在開發時快速的檢測元件是否符合無障礙設計的規範

```
npm install @storybook/addon-a11y -D
```

4. Vue Test Utils: Vue 官方提供的測試套件，在vue cli 環境安裝
```
vue add @vue/unit-jest
```

5. Storybook addon Jest: 加上這個 Addon 後我們可以在 Storybook 上看到測試結果，並搭配元件當下呈現的畫面。
```
npm install --save-dev @storybook/addon-jest
```
