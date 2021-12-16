import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import './styles.css'

export const MultipleCustomHooks = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(state)

    return (
        <>
            <h1>CustomHooks</h1>
        </>
    )
}