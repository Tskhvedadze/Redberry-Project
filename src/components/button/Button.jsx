import React from 'react'
import './button.scss'

const Button = ({ children, onClick }) => {
    return (
        <button className='btn' onClick={onClick} type='button'>
            {children}
        </button>
    )
}

export default Button
