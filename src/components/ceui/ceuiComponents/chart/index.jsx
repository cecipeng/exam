import React from 'react'
import echarts from 'echarts'
import './style'

class Chart extends React.Component {
  static defaultProps = {
    option: {},
    chartId: ''
  }
  componentDidMount() {
    const { option, chartId } = this.props
    this.chart = echarts.init(document.getElementById(chartId))
    this.chart.setOption(option)
  }

  render() {
    const { chartId } = this.props
    return (
      <div id={chartId} style={{height: '500px'}}></div>
    )
  }
}
 export default Chart
