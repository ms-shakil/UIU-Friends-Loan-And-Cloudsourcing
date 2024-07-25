// import LoanApplication from '../aboutLoan/LoanApplication'
import './modal.css'
const Modal = (props) => {
    const {isOpen, children, closeModal} = props
    return (
        <div style={{display: isOpen === true ? "block" : "none"}}>
            <div className='background_layer'></div>
                <div className='modal_container'>
                 <div className='close' onClick={() => closeModal(false)}>
                    <span>X</span>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal