import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Pruebas sobre useFetch", () => {
    test("debe de retornar la informacion por defecto", () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result } = renderHook(() =>
            useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
        );
        //desestructuracion nuevamente
        const { data, loading, error } = result.current;
        //se esperan los siguiente valores por defecto
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test("debe de retornar la informacion correcta", async () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
        );
        //actualizacion del renderizado inicial
        await waitForNextUpdate({ timeout: 2500 })
        //captura de la respuesta al renderizar el hook y esperar informacion de vuelta
        const { data, loading, error } = result.current;
        //se esperan los siguientes datos
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test("debe de manejar el error", async () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetch(`https://reqres.in/apid/users?page=2`)
        );
        //actualizacion del renderizado inicial
        await waitForNextUpdate({ timeout: 2500 })
        //captura de la respuesta al renderizar el hook y esperar informacion de vuelta
        const { data, loading, error } = result.current;
        //se espera esta respuesta al renderizar una respuesta con una url de api erronea
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar!!');
    });
});
