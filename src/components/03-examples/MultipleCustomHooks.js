import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //si existe la data extrae en la posicion 0 de la data
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking bad Quotes</h1>
            <hr></hr>

            {loading ? (
                <div className="alert alert-info text-center">
                    <p>Loading...</p>
                </div>
            ) : (
                <figure className="text-end">
                    <blockquote className="blockquote">
                        <p className="mb-0">{quote}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">{author}</figcaption>
                </figure>
                
            )}

            <button className="btn btn-primary" onClick={increment}>
                Next quote
            </button>
        </div>
    );
};
