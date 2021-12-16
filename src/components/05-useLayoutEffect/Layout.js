import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import './style.css'

export const Layout = () => {
    const { counter, increment } = useCounter(1);

    const [boxsize, setBoxsize] = useState()

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //si existe la data extrae en la posicion 0 de la data
    const { quote } = !!data && data[0];

    const pTag = useRef()

    useLayoutEffect(() => {
        setBoxsize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr></hr>
            <figure className="text-end">
                <blockquote className="blockquote">
                    <p className="mb-0" ref={pTag}>{quote}</p>
                </blockquote>
            </figure>

            <pre>{JSON.stringify(boxsize,null,3)}</pre>

            <button className="btn btn-primary" onClick={increment}>
                Next quote
            </button>
        </div>
    );
};
