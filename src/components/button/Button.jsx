import React from 'react'
import './button.scss'

const Button = ({ children, onClick, className, type, disabled }) => {
    return (
        <button
            className={`${className || 'btn'}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
