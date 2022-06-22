import "./Modal.css";

//Display the error modal when url is not correct
function PathErrorModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.closeButton}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="button" onClick={props.closeButton}>
            X
          </div>

          <h4 className="modal-title">ERROR!!!</h4>
        </div>
        <div className="modal-body">
          <h2>The url path is invalid!</h2>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}
export default PathErrorModal;
