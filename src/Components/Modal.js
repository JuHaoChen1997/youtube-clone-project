import './Modal.css'
function Modal(props) {
  if (!props.show) {
    return null
  }

  return (
    <div className='modal' onClick={props.closeButton}>
      <div className='modal-content' onClick={(e) => e.stopPropagation}>
        <div className='modal-header'>
          <div className='button' onClick={props.closeButton}>
            X
          </div>
          <h4 className='modal-title'>ERROR!!!</h4>
        </div>
        <div className='modal-body'>
          Exceed search character limit, invalid search.
        </div>
        <div className='modal-footer'></div>
      </div>
    </div>
  )
}
export default Modal
