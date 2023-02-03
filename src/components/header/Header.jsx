import React from 'react'
import './header.scss'

const Header = ({ children, className }) => {
    return (
        <header className={`header ${className}`}>
            {children}
            <div className='header__underline' />
        </header>
    )
}

export default Header
