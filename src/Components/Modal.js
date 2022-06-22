import './Modal.css';
/**
 * the modal error is for the search bar limit length 20 characters. 
 * @param {boolean} props this is a state that pass as a props
 * @returns modal box
 */
function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className='modal' onClick={props.closeButton}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <div className='button' onClick={props.closeButton}>
            X
          </div>

          <h4 className='modal-title'>ERROR!!!</h4>
        </div>
        <div className='modal-body'>
          <h2>Exceed search character limit, invalid search.</h2>
        </div>
        <div className='modal-footer'></div>
      </div>
    </div>
  );
}
export default Modal;
