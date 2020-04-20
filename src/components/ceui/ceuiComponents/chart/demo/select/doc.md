---
test-front-matter: 'Chart'
imports:
  Chart: './../../index.jsx'
---
# 基本

设置基本的option

```render html
<Chart chartId='mychart2' option={
  {
    title: { text: '销量统计2' },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '成本',
      type: 'bar',
      data: [12, 22, 41, 14, 8, 60]
    }]
  }
} />
```