export const Button = ({children, type, disabled}) => {
    return (
        <button type={type}
                disabled={disabled}>
            {children}
        </button>
    )
}