import React from 'react'
import './home.scss'

import logo from '../../assets/images/png/redberry.png'

const Home = () => {
    return (
        <>
            <main className='main__section'>
                <header className='main__section__header'>
                    <img
                        className='main__section__header--logo'
                        src={logo}
                        alt='redberry'
                    />
                    <div className='main__section__header--underline' />
                </header>
                <button className='main__section--btn'>
                    რეზიუმეს დამატება
                </button>
            </main>
        </>
    )
}

export default Home
