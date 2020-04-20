---
test-front-matter: 'Chart'
imports:
  Chart: './../../index.jsx'
---
# 基本

设置基本的option

```render html
<Chart chartId='mychart1' option={
  {
    title: { text: '销量统计3' },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
  }
} />
```