import React from 'react'
import './style'

class Modal extends React.Component {
  static defaultProps = {
    title: '', // 标题内容
    okBtn: '', // 确定按钮内容
    cancelBtn: '', // 取消按钮内容
    isVisible: false, // 弹窗是否可见
    custormStyle: {}, // modal的自定义样式
    bodyStyle: {}, // body的自定义样式
    width: 520, // 宽度
    isCentered: true, // 是否垂直居中显示
    okBtnCallback: () => {}, // 确定按钮的回调
    cancelBtnCallback: () => {}, // 点击遮罩层或右上角叉或取消按钮的回调
    afterCloseCallback: () => {} // 完全关闭后的回调
  }

  constructor(props) {
    super(props)
    this.state = {
      isVisible: props.isVisible // 弹窗是否可见
    }
    if(props.onRef){ //如果父组件传来该方法 则调用方法将子组件this指针传过去
      props.onRef(this)
    }
  }
  
  /**
   * 点击确认按钮
   */
  onOk = () => {
    const { okBtnCallback, afterCloseCallback } = this.props
    this._closeModal()
    typeof okBtnCallback === 'function' && okBtnCallback()
    typeof afterCloseCallback === 'function' && afterCloseCallback()
  }

  /**
   * 点击取消按钮
   */
  onCancel = () => {
    const { cancelBtnCallback, afterCloseCallback } = this.props
    this._closeModal()
    typeof cancelBtnCallback === 'function' && cancelBtnCallback()
    typeof afterCloseCallback === 'function' && afterCloseCallback()
  }

  /**
   * 点击弹窗外关闭弹窗
   */
  onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      this._closeModal()
    }
  }

  /**
   * 打开弹窗
   */
  _openModal = () => {
    this.setState({
      isVisible: true
    })
  }

  /**
   * 关闭弹窗
   */
  _closeModal = () => {
    this.setState({
      isVisible: false
    })
  }

  render() {
    const { custormStyle, width, isCentered, title, footer, bodyStyle, children, okBtn, cancelBtn } = this.props
    const { isVisible } = this.state

    return (
      <React.Fragment>
        {isVisible && (
          <div
            className='com-modal'
            onClick={this.onMaskClick}
            style={{
              custormStyle
            }}
          >
            <div
              style={{ width: width }}
              className={`modal-dialog ${isCentered && 'is-centered'}`}
            >
              <span className='close-modal' onClick={() => { this.onCancel() }} />
              {/* 头部 */}
              <div className='modal-header'>
                <p className='title'>{title || '标题'}</p>
              </div>

              {/* 内容区域 */}
              <div className='modal-body' style={bodyStyle}>
                {children ? (
                  children
                ) : (
                  <p className='notice'>modal.text</p>
                )}
              </div>

              {/* 尾部,操作按钮 */}
              <div className='modal-footer'>
                {
                  footer ? footer : (
                    <div>
                      <button onClick={() => { this.onCancel() }} className='com-btn com-btn-default'>
                        {cancelBtn || '取消'}
                      </button>
                      <button onClick={() => { this.onOk() }} className='com-btn com-btn-main'>
                        {okBtn || '确定'}
                      </button>
                    </div>
                  )
                }
                
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
 export default Modal
