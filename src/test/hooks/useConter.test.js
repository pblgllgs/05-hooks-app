import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas sobre useCounter", () => {
    test("Debe de retornar valores por defecto", () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result } = renderHook(() => useCounter());
        //el valor por extraido del counter debe eser 10 por defecto
        expect(result.current.counter).toBe(10);
        //se espera que los demas elementos que contiene la respuesta del hook sean funciones
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.reset).toBe("function");
    });

    test("Debe de tener el counter en 100", () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result } = renderHook(() => useCounter(100));
        //se espera que el valor del counter al renderizar el hook con valor dado sea 100
        expect(result.current.counter).toBe(100);
    });

    test("Debe de incrementar el counter en 1", () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result } = renderHook(() => useCounter());
        //desestructuracion nuevamente
        const { increment } = result.current;
        //ejecucion de funciones dentro del cuerpo de un test
        act(() => {
            increment();
        });
        //se captura la repusta al ejecutar la funcion increment
        const { counter } = result.current;
        //se espeta que el contador aumente en 1 y su valor sea 11
        expect(counter).toBe(11);
    });

    test("Debe de decrementar el counter en 1", () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result } = renderHook(() => useCounter());
        //desestructuracion nuevamente
        const { decrement } = result.current;
        //ejecucion de funciones dentro del cuerpo de un test
        act(() => {
            decrement();
        });
        //se captura la repusta al ejecutar la funcion decrement
        const { counter } = result.current;
        //se espeta que el contador disminuya en 1 y su valor sea *
        expect(counter).toBe(9);
    });

    test("Debe de dar reset", () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result } = renderHook(() => useCounter());
        //desestructuracion nuevamente
        const { reset, increment } = result.current;
        //ejecucion de funciones dentro del cuerpo de un test
        act(() => {
            increment();
            reset();
        });
        //se captura la repusta al ejecutar la funcion increment y luego reset
        const { counter } = result.current;
        //se espera que el valor dell counter aumente y luego se resetee a su valor por defecto
        expect(counter).toBe(10);
    });
});
