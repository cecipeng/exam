import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import request from '@gem-mine/request'
import style from '../style'
const { takeout } = request

export class MyOrder extends React.Component {
  componentDidMount() {
    actions.global.setTitle('所有订单')
    takeout.get('/order')
      .then(res => {
        actions.takeout.setUserOrders(res)
      })
  }
  render() {
    const userOrders = this.props.userOrders || []
    console.log(userOrders)
    return (
      <div className={style.order}>
        {
          userOrders.map((ele, index) => {
            let time = new Date(ele.time).toLocaleString()
            return (<dl key={index} className={style.order_item}>
              <dt>{ele.title}</dt>
              <dd>
                <p><span>时间：</span>{time}</p>
                <p><span>价格: </span> ￥{ele.total}</p>
                <p><span>明细：</span>{ele.describe}</p>
              </dd>
            </dl>)
          })
        }
      </div>
    )
  }
}

export default smart(
  state => {
    return {
      userOrders: state.takeout.userOrders
    }
  }
)(MyOrder)
