import Button from '../Button/Button'
import './Modal.css'

const Modal = () => {
    return (
        <div className='modal-container'>
            <Beetle />
            <h1 className='modal-title'></h1>
            <p className='modal-info'></p>
            <img className='pharaoh' src='../../images/faraon.jpg' alt='Faraon'/>
            <Button />
        </div>
    )
}

export default Modal;