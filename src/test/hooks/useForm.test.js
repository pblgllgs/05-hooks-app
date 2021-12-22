import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruevas en useForm", () => {

    //estado inicial
    const initialForms = {
        name: "pablo",
        email: "pbl.gllgs@gmail.com",
    };

    test("Debe de regresar un formulario por defecto", () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result } = renderHook(() => useForm(initialForms));
        //desestructuracion nuevamente
        const [values, handleInputChange, reset] = result.current;
        //se esperan los siguentes valores
        expect(values).toEqual(initialForms);
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");
    });

    test("Debe de cambiar el valor del formulario, cambiar name", () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result } = renderHook(() => useForm(initialForms));
        //desestructuracion de arreglo en su segunda posicion, omitiendo la primera
        const [, handleInputChange] = result.current;
        //se ejecuta una funcion con parametro
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'antonio'
                }
            });
        });
        //se captura la nueva respuesta
        const [values] = result.current;
        //se espera un cambio en el estado inicial, en el nombre
        expect(values).toEqual({
            name: "antonio",
            email: "pbl.gllgs@gmail.com",
        });
    });

    test("Debe de restablecer el formulario con reset", () => {
        //desestructuracion de la respuesta al renderizar el hook
        const { result } = renderHook(() => useForm(initialForms));
        //desestructuracion de arreglo en su segunda posicion, omitiendo la primera
        const [, handleInputChange, reset] = result.current;
        //se ejecuta una funcion con parametro
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'antonio'
                }
            });
        });
        //se ejecuta la funcion reset del hook
        act(() => {
            reset();
        });
        //se captura la nueva respuesta
        const [resetValues] = result.current;
        //se espera que el state sea igual que el  initialForms
        expect(resetValues).toEqual(initialForms);
    });
});
