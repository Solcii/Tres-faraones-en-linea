import './Button.css'

const Button = ({onClick, buttonTextContent}) => {
    return (
        <button className='button' onClick={()=> onClick()}>{buttonTextContent}</button>
    )
}

export default Button;