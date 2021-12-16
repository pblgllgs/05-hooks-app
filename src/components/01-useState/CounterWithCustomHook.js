import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './styles.css'

const CounterWithCustomHook = () => {

    const { state, decrement, increment,reset } = useCounter(100)

    return (
        <>
            <h1>Coutner with hook: {state}</h1>
            <hr></hr>
            <button className='btn btn-warning' onClick={() => decrement(2)}>-1</button>
            <button className='btn btn-secondary' onClick={reset}>Reset</button>
            <button className='btn btn-primary' onClick={() => increment(2)}>+1</button>
        </>
    )
}

export default CounterWithCustomHook