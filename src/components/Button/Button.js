import './Button.css'

const Button = ({onClick}) => {
    return (
        <button className='button' onClick={()=> onClick()}>Button</button>
    )
}

export default Button;