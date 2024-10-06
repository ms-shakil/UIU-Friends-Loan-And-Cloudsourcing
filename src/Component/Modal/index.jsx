// import LoanApplication from '../aboutLoan/LoanApplication'
import "./modal.css";
const Modal = (props) => {
  const { isOpen, children, closeModal, title } = props;
  return (
    <div style={{ display: isOpen === true ? "block" : "none" }}>
      <div className="background_layer"></div>
      <div className="modal_container">
        <div className="modal__header">
            {title ? <div className="modal__title">{title}</div> : <div></div>}
            <div className="close" onClick={() => closeModal(false)}>
              <span>X</span>
            </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
