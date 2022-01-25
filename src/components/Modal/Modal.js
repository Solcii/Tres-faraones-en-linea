import Button from '../Button/Button'
import './Modal.css'
import Beetle from '../Beetle/Beetle'

const Modal = ({onClick, modalTitle, modalText, buttonTextContent}) => {
    return (
        <div className='modal-container'>
            <Beetle />
            <div className='pharaoh'></div>
            <div className='modal-body'>
                <h1 className='modal-title'>{modalTitle}</h1>
                <p className='modal-info'>{modalText}</p>
                <Button onClick={onClick} buttonTextContent={buttonTextContent}/>
            </div>
        </div>
    )
}

export default Modal;