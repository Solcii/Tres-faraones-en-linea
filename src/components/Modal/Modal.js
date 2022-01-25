import Button from '../Button/Button'
import './Modal.css'
import Beetle from '../Beetle/Beetle'

const Modal = () => {
    return (
        <div className='modal-container'>
            <Beetle />
            <div className='pharaoh'></div>
            <div className='modal-body'>
                <h1 className='modal-title'>REGLAS DEL JUEGO</h1>
                <p className='modal-info'>El primer jugador coloca la ficha en cualquiera de los casilleros del tablero. El segundo hará lo mismo con su primera ficha. Se continúa las otras jugadas respetando los turnos, si el jugador consigue alinear tres marcas del mismo tipo, ese jugador hace ¡TA – TE – TI!
                <br/>Cada vez que gane, el jugador obtiene un escarabajo para el Faraón
                <br/>¡Consigue tres escarabajos para convertirte en el campeón!</p>
                <Button />
            </div>
        </div>
    )
}

export default Modal;