import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas sobre useCounter", () => {
    test("Debe de retornar valores por defecto", () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.reset).toBe("function");
    });

    test("Debe de tener el counter en 100", () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test("Debe de incrementar el counter en 1", () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;
        //ejecucion de funciones dentro del cuerpo de un test
        act(() => {
            increment();
        });
        const { counter } = result.current;
        expect(counter).toBe(11);
    });

    test("Debe de decrementar el counter en 1", () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;
        //ejecucion de funciones dentro del cuerpo de un test
        act(() => {
            decrement();
        });
        const { counter } = result.current;
        expect(counter).toBe(9);
    });

    test("Debe de dar reset", () => {
        const { result } = renderHook(() => useCounter());
        const { reset, increment } = result.current;
        //ejecucion de funciones dentro del cuerpo de un test
        act(() => {
            increment();
            reset();
        });
        const { counter } = result.current;
        expect(counter).toBe(10);
    });
});
