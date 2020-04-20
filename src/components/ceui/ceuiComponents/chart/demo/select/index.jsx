import React from 'react'
import Chart from '../../index'

const dataSource = [
  {
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  },
  {
    name: '售价',
    type: 'bar',
    data: [23, 46, 47, 22, 15, 84]
  },
  {
    name: '成本',
    type: 'bar',
    data: [12, 22, 41, 14, 8, 60]
  },
]
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _option: dataSource[0]
    }
  }
  handleChange = (e) => {
    const _option = dataSource[e.target.value]
    this.setState({
      _option: _option
    })
  }
  render() {
    const { _option } = this.state
    return (
      <div className="ceui-demo">
        <div className="ceui-democontent">
          <select defaultValue='0' onChange={(e) => {this.handleChange(e)}}>
            {
              dataSource && dataSource.map((item,index) => {
                return <option key={index} value={index}>{item.name}</option>
              })
            }
          </select>
          <Chart chartId='mychart2' option={
            {
              title: { text: '销量统计1' },
              xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
              },
              yAxis: {},
              series: [_option]
            }
          } />
        </div>
      </div>
    )
  }
}
 export default Demo
