import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import style from '../style'

export class List extends React.Component {
  componentDidMount() {
    actions.global.setTitle('外卖商品列表页')
    actions.takeout.getProductList()
  }

  buy(ele) {
    if (!ele.num) return
    if (ele.id) {
      actions.routing.push(`/list/${ele.id}`)
    } else {
      // alert('w')
    }
  }
  render() {
    const productList = this.props.productList || []
    return (
      <div>
        <ul className={style.takeoutList}>
          {productList.length
            ? productList.map((ele, index) => {
              return (<li key={index} className={`${style.takeoutList_item} ${ele.num === 0 ? 'disable' : ''}`}>
                <p className={`${style.takeoutList_img}`} style={{ backgroundImage: `url(${ele.src})` }} />
                <dl className={style.takeoutList_detail}>
                  <dt className={style.takeoutList_title}>{ele.title}</dt>
                  <dd className={style.takeoutList_num}>{ele.num}</dd>
                  <dd className={style.takeoutList_subtitle}>{ele.describe}</dd>
                  <dd className={style.takeoutList_price}>￥ {ele.price}</dd>
                  <dd className={style.takeoutList_btn} onClick={() => { this.buy(ele) }}>购买</dd>
                </dl>
              </li>)
            })
            : null
          }
        </ul>
      </div>
    )
  }
}

export default smart(
  state => {
    return {
      productList: state.takeout.productList
    }
  }
)(List)
