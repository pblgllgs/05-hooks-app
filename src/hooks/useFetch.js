import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    const estaMontado = useRef(true);

    useEffect(() => {
        return () => {
            estaMontado.current = false;
        };
    }, []);

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null,
        });
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                if(estaMontado.current){
                    setState({
                        loading: false,
                        error: null,
                        data,
                    });
                }
            })
            .catch(()=> {
                setState({
                    data: null,
                    loading: false,
                    error:'No se pudo cargar!!'
                })
            })
    }, [url]);

    return state;
};
