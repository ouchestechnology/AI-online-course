import React from "react"

const AppTextarea = (props) =>{
    const { onChange, text, placeholder, value, error, className } = props
    return (
        <div className={className}>
            <textarea
                onChange={onChange}
                type={text}
                placeholder={placeholder}
                value={value}
                error={error}
                className={'form-control'}
                style={error && { border: 'solid 1px red' }}
            />
            <span > {error}  </span>

        </div>
    )
}


export default AppTextarea;