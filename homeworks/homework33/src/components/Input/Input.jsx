import classNames from 'classnames'

export const Input = ({id, label, name, type, onChange, onBlur, value, error}) => {
    
    let validation = error === false || error === undefined ? true : false

    const inputClass = classNames('input__field', {
        'invalid': validation === false
    })

    return (
        <div className="input__block">
            <label htmlFor={id} className="input__label">{label}</label>
            <div>
                {error && <span className="error">{error}</span>}
                <input 
                    id={id}
                    type={type}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    className={inputClass}
                        />
            </div>
        </div>
    )
}