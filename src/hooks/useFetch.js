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
                setTimeout(() => {
                    if (estaMontado.current) {
                        setState({
                            loading: false,
                            error: null,
                            data,
                        });
                    }else{
                        console.log('No se llamó')
                    }
                }, 4000);
            });
    }, [url]);

    return state;
};
