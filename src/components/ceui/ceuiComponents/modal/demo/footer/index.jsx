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
          <button className='com-btn com-btn-main' onClick={()=>{ this.showModal() }}>显示自定义页脚对话框</button>
          <Modal onRef={c=>this.Modal=c} footer={(
            <button className='com-btn com-btn-main'>知道了</button>
          )}>
            <p>这是自定义文本</p>
            <p>这是自定义文本</p>
            <p>这是自定义文本</p>
          </Modal>
        </div>
      </div>
    )
  }
}
export default Demo
 
