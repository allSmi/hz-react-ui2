## 一个基础的手机端 ui 组件库，包括的组件有：

### Upload 选择图片并返显

### Picker picker 弹窗，单列

### Item 简单的文字和输入框的组合

### List 下拉刷新，下拉加载

### Toast 页面提示

### Modal 页面确认窗

### Overlay 页面蒙版

### Img 图片 load 后显示

### Lazyload 懒加载（借鉴 react-lazy-load 这个库）

### Tab TabItem 标签切换

---

## 如果你想试一下这个 ui，那么你需要有以下配置

```
npm install hz-react-ui -S
npm install babel-plugin-import -D
```

```js
// babel.config.js
"presets": [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "usage",
      "corejs": 3
    }
  ]
],
"plugins": [
  ['import', {
    libraryName: 'hz-react-ui',
    libraryDirectory: 'lib',
    style: true
  }, 'hz-react-ui']
]
```

## 目前库中的样式使用 scss 写的，并没有编译为 css,需要自行安装和配置 scss 相关的 npm 包和 webpack 配置,源码中 src 文件夹为源代码，lib 文件夹是用 bable 编译后的代码

---

## 目前组件相关的说明还没有，后续有时间还会慢慢加上以及增加一些功能（实用的组件，国际化等）
