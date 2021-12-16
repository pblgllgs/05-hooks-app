import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/quotes/1")
            .then((resp) => resp.json())
            .then((data) => {
                setState({
                    loading: false,
                    error: null,
                    data,
                });
            });
    }, [url]);

    return state;
};