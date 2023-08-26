import './Button.css'

export const Button = ( {children, hendlerClick, type, className} ) => {
    return (
        <button 
            className={`button ${className}`} 
            type={ type } 
            onClick={hendlerClick}>
                {children}
        </button>
    )
}