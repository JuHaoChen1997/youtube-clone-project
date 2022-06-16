function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="button" onClick={props.closeButton}>
            X
          </div>
          <h4 className="modal-title">ERROR!!!</h4>
        </div>
        <div className="modal-body">Exceed limit search character</div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}

export default Modal;
