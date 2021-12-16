import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './styles.css'

export const FormWithCustomHook = () => {
    
    const [formValues, handleInputChange] = useForm({
        name:'Pablo',
        email:'pbl.gllgs@gmail.com',
        password: '123'
    })
    const {name,email,password} = formValues;

    useEffect(() => {
        console.log('Email cambio')
    }, [email])

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={handlesubmit}>
            <h1>FormWithCustomHook</h1>
            <hr></hr>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email...'
                    value={email}
                    onChange={handleInputChange}
                ></input>
            </div>

            <div className='form-group'>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                ></input>
            </div>
            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>
        </form>
    )
}