import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruevas en useForm", () => {
    const initialForms = {
        name: "pablo",
        email: "pbl.gllgs@gmail.com",
    };

    test("Debe de regresar un formulario por defecto", () => {
        const { result } = renderHook(() => useForm(initialForms));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForms);
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");
    });

    test("Debe de cambiar el valor del formulario, cambiar name", () => {
        const { result } = renderHook(() => useForm(initialForms));
        const [, handleInputChange] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'antonio'
                }
            });
        });
        const [values] = result.current;
        expect(values).toEqual({
            name: "antonio",
            email: "pbl.gllgs@gmail.com",
        });
    });

    test("Debe de restablecer el formulario con reset", () => {
        const { result } = renderHook(() => useForm(initialForms));
        const [, handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'antonio'
                }
            });
        });
        const [values] = result.current;
        console.log(values)
        act(() => {
            reset();
        });
        const [resetValues] = result.current;
        console.log(resetValues)
        expect(resetValues).toEqual(initialForms);
    });
});
