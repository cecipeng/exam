import React from 'react'
import Chart from '../../index'

class Demo extends React.Component {
  render() {
    return (
      <div className="ceui-demo">
        <div className="ceui-democontent">
          <Chart chartId='mychart1' option={
            {
              title: { text: '销量统计4' },
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
        </div>
      </div>
    )
  }
}
 export default Demo
