import './Buttons.css'

const Button = ({funcionClick}) => {
    return (
        <button className='button' onClick={funcionClick}></button>
    )
}

export default Button;