import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import style from '../style'
import _ from 'lodash'
export class List extends React.Component {
  componentDidMount() {
    actions.global.setTitle('列表页')
    actions.rentHouse.fetchHouseList()
  }
  render() {
    const { houseList } = this.props
    return (
      <ul className='renthouse-list'>
        {
          !_.isEmpty(houseList) && houseList.map((item, index) => {
            return (
              <li className="renthouse-list__item" key={index}>
                {item.rentMode}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default smart(
  state => {
    return {
      houseList: state.rentHouse.houseList
    }
  }
)(List)
