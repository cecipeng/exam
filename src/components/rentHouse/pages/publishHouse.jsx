import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import request from '@gem-mine/request'
import style from '../style'
const { rentHouse } = request

export class PublishHouse extends React.Component {
  constructor() {
    super()
    this.state = {
      product: {},
      total: 0,
      amount: 0,
      name: '',
      phone: '',
      addr: '',
      other: ''
    }
  }
  componentDidMount() {
    actions.global.setTitle('发布房源')
    const props = this.props
    const { id } = props.match.params
    if (id && props.productList.length) {
      this.setState({
        product: props.productList.find(ele => String(ele.id) === String(id))
      })
    } else {
      actions.routing.replace('/')
    }
  }

  inputChange(e, key) {
    this.setState({
      [key]: key === 'amount' ? (!isNaN(parseInt(e.target.value)) ? parseInt(e.target.value) : 0) : e.target.value
    })
  }

  submit(product) {
    const { name, amount, phone, addr } = this.state
    console.log(phone)
    if (!amount) {
      return alert('请输入数量')
    } else if (!/^\d+$/.test(amount)) {
      return alert('数量格式不正确')
    } else if (!name) {
      return alert('请输入姓名')
    } else if (!phone) {
      return alert('请输入电话')
    } else if (!/^\d{11}$/.test(phone)) {
      return alert('请输入11位电话号码')
    } else if (!addr) {
      return alert('请输入地址')
    }
    console.log(amount, product.price)
    takeout.post('/order', {
      data: {
        userId: '模拟用户',
        name,
        phone,
        addr,
        productId: product.id,
        time: new Date().getTime(),
        total: amount * product.price
      }
    }).then(res => {
      console.log(res)
      if (res) {
        actions.routing.push('/myOrder')
      }
    })
  }

  render() {
    const { product, amount } = this.state

    return (
      <div className='renthouse-publish'>
        
      
        {product && <ul className={style.form}>
          <li className={style.form_item}>
            <span className={style.form_label}>商品名称</span>
            <span className={style.form_content}>{product.title}</span>
          </li>
          <li className={style.form_item}>
            <span className={style.form_label}>商品描述</span>
            <span className={style.form_content}>{product.describe}</span>
          </li>
          <li className={style.form_item}>
            <span className={style.form_label}>商品价格</span>
            <span className={style.form_content}>￥ {product.price || 0}</span>
          </li>
        </ul>}
        <ul className={style.form}>
          <li className={style.form_item}>
            <span className={style.form_label}>数量</span>
            {/* <span className={style.form_label}>{this.state.amount}</span> */}
            <input className={style.form_input} value={this.state.amount} onChange={(e) => { this.inputChange(e, 'amount') }} placeholder={'请填写数量'} />
          </li>
          <li className={style.form_item}>
            <span className={style.form_label}>姓名</span>
            <input className={style.form_input} value={this.state.name} onChange={(e) => { this.inputChange(e, 'name') }} placeholder={'请填写姓名'} />
          </li>
          <li className={style.form_item}>
            <span className={style.form_label}>电话</span>
            <input className={style.form_input} value={this.state.phone} onChange={(e) => { this.inputChange(e, 'phone') }} placeholder={'请填写电话'} />
          </li>
          <li className={style.form_item}>
            <span className={style.form_label}>地址</span>
            <input className={style.form_input} value={this.state.addr} onChange={(e) => { this.inputChange(e, 'addr') }} placeholder={'请填写地址'} />
          </li>
          <li className={style.form_item}>
            <span className={style.form_label}>特殊要求</span>
            <input className={style.form_input} value={this.state.other} onChange={(e) => { this.inputChange(e, 'other') }} placeholder={'请填写特殊要求'} />
          </li>
        </ul>
        <div className={style.form_footer}>
          <span className={style.form_total}>￥ {!isNaN(product.price * amount) ? product.price * amount : 0}</span>
          <button className={style.form_btn} onClick={() => this.submit(product)}>确认购买</button>
        </div>
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
)(OrderForm)
