import React from 'react'
import Modal from '../../index'

class Demo extends React.Component {
  /**
 * 打开弹窗
 */
  showModal = () => {
    if(this.Modal){
      this.Modal._openModal() 
    }
  };

  render() {
    return (
      <div className="ceui-demo">
        <div className="ceui-democontent">
          <button className='com-btn com-btn-main' onClick={()=>{ this.showModal() }}>显示自定义宽度对话框</button>
          <Modal onRef={c=>this.Modal=c} width='1000px'>
            <p>这是自定义文本</p>
          </Modal>
        </div>
      </div>
    )
  }
}
export default Demo
  
 