import React from 'react'
import './home.scss'

import logo from '../../assets/images/redberry.png'
import shutterstock from '../../assets/images/shutterstock.png'
import { Header } from '../../components'

const Home = () => {
    return (
        <>
            <img className='img' src={shutterstock} alt='shutterstock' />
            <main className='main'>
                <Header>
                    <img
                        className={'main__section--logo'}
                        src={logo}
                        alt='redberry'
                    />
                </Header>
                <button className='main__section--btn'>
                    რეზიუმეს დამატება
                </button>
            </main>
        </>
    )
}

export default Home
