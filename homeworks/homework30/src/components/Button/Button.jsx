import './Button.css'

export const Button = ( {children, hendlerClick} ) => {
    return (
        <button className="button" onClick={hendlerClick}>{children}</button>
    )
}