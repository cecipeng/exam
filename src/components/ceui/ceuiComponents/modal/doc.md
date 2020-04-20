---
test-front-matter: 'Modal'
imports:
  Modal: './index.jsx'
---
# Modal弹窗

模态对话框

## 参数说明
| 参数 | 说明 | 数据类型 | 默认值 |
| - | - | - | - |
| title | 标题内容 | string/ReactNode | '标题' |
| okBtn | 确认按钮内容 | string/ReactNode | '确定' |
| cancelBtn | 取消按钮内容 | string/ReactNode | '取消' |
| isVisible | 弹窗是否可见 | boolean | false |
| custormStyle | modal的自定义样式 | object | {} |
| bodyStyle | body的自定义样式 | object | {} |
| width | 宽度 | string/number | 520 |
| footer | 自定义底部 | string/ReactNode | - |
| isCentered | 是否垂直居中显示 | boolean | true |
| okBtnCallback | 确定按钮的回调 | function | null |
| cancelBtnCallback | 点击遮罩层或右上角叉或取消按钮的回调 | function | null |
| afterCloseCallback | 完全关闭后的回调 | function | null |