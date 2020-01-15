import React from "react"
const AppInput = ({
    onChange,
    name,
    type,
    placeholder,
    value,
    error,
    className,
    ...props
}) => {
    return (
        <div>
            <input
                onChange={onChange}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                error={error}
                className={className}
                style={error && { border: 'solid 1px red' }}
            />
            <span > {error && <p> {error} </p>}  </span>

        </div>
    )

}
export default AppInput