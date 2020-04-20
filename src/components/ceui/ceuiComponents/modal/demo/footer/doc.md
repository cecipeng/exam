---
test-front-matter: 'Modal'
imports:
  Modal: './../../index.jsx'
---
# 自定义页脚

通过footer属性自定义页脚，支持string/ReactNode

```render html
<Modal footer={(
  <button className='com-btn com-btn-main'>知道了</button>
)}>
  <p>这是自定义文本</p>
</Modal>
```