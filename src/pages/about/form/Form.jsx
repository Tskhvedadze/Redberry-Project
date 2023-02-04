import React from 'react'
import { useFormik } from 'formik'

import './form.scss'
import { Button } from '../../../components'
import { basicSchema } from './schema'

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    actions.resetForm()
}

export const Form = () => {
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    return (
        <>
            <form className='form' onSubmit={handleSubmit} autoComplete='off'>
                <div className='form__inputContainer'>
                    <div className='form__inputContainer--firstInput'>
                        <label htmlFor='firstName'>სახელი</label>
                        <input
                            id='firstName'
                            type='text'
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='form__inputContainer--firstName'
                        />
                    </div>
                    <div className='form__inputContainer--secondInput'>
                        <label htmlFor='lastName'>გვარი</label>
                        <input
                            id='lastName'
                            type='text'
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='form__inputContainer--lastName'
                        />
                    </div>
                </div>
                <label htmlFor='email'>ელ.ფოსტა</label>
                <input
                    id='email'
                    type='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.email && touched.email
                            ? 'input-error'
                            : 'form--email'
                    }
                />
                <label htmlFor='phoneNumber'>მობილურის ნომერი</label>
                <input
                    id='phoneNumber'
                    type='number'
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='form--phoneNumber'
                />
            </form>
            <Button disabled={isSubmitting} type='submit'>
                შემდეგი
            </Button>
        </>
    )
}
