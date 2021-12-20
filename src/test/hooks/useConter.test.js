import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";


describe('Pruebas sobre useCounter', () => {
    test('Debe de retornar valores por defecto ', () => {

        const {re} = renderHook( ()=>  useCounter());

    })
    
})
