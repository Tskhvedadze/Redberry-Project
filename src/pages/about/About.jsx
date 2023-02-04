import React from 'react'

import { Form } from './form'
import { Header } from '../../components'

const About = () => {
    return (
        <section className='section'>
            <Header className='section__header'>
                <h1 className='section__header--title'>პირადი ინფო</h1>
                <p className='section__header--paragraph'>1/3</p>
            </Header>
            <Form className='section--form' />
        </section>
    )
}

export default About
