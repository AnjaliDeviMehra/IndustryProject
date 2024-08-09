import './Button.scss'

function Button(props) {
    return (
        <button type={props.type} className={`custom-button ${props.className}`} onClick={props.onClick}>
            <span className={`custom-button__text ${props.className}__text`}>{props.text}</span>
        </button>
    )
}

export default Button
