import './Button.css'

const Button = ({funcionClick}) => {
    return (
        <button className='button' onClick={funcionClick}>Button</button>
    )
}

export default Button;