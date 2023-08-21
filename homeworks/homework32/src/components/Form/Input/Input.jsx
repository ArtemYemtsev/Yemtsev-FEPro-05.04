import './Input.css'

export const Input = ({ label }) => {
    return (
        <div className="input__block">
            <label 
                htmlFor={label} 
                className="label">
                    {label}
            </label>
            <input 
                type={
                    label === 'phone' 
                    ? 
                    'tel' 
                    : 
                    label === 'email' 
                    ? 
                    label 
                    : 
                    'text'} 
                className="input" 
                name={label} 
                id={label} 
                autoComplete="off"/>
        </div>
    )
}