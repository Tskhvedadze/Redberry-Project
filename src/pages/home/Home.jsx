import React from 'react'
import './home.scss'

import logo from '../../assets/images/redberry.png'
import shutterstock from '../../assets/images/shutterstock.png'
import { Button, Header } from '../../components'

const Home = () => {
    return (
        <>
            <img className='img' src={shutterstock} alt='shutterstock' />
            <main className='main'>
                <Header>
                    <img className='main__logo' src={logo} alt='redberry' />
                </Header>
                <Button className='main__btn'>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Button>
            </main>
        </>
    )
}

export default Home
