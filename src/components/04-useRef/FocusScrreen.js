import React, { useRef } from 'react'
import '../01-useState/styles.css'

export const FocusScrreen = () => {

    const inputRef = useRef()

    const handleclick = () =>{
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr/>
            <input ref={inputRef} className='form-comtrol' placeholder='Su nombre'/>
            <button className='btn btn-outline-primary' onClick={handleclick}>Focus</button>
        </>
    )
}
 