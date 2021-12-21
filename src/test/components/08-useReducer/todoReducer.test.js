import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodo";

describe("pruebas en todoReducer", () => {
    test("debe de retornar el estado por defecto", () => {
        //se ejecuta el reducer
        const state = todoReducer(demoTodo, {});
        //se espera que retorne un estado por defecto, no se envio action
        expect(state).toEqual(demoTodo);
    });

    test("debe de agregar un todo", () => {
        //se crea un todo
        const newTodo = {
            id: 3,
            desc: "Aprender Docker",
            done: false,
        };
        //se crea un action
        const action = {
            type: "add",
            payload: newTodo,
        };
        // se ejecuta el reducer
        const state = todoReducer(demoTodo, action);
        //se espera que el largo del state, que es un arreglo de elementos, sea 3
        expect(state.length).toBe(3);
        //se espera que state sea igual que el el estado anterior, utilizando el operador spread, mas el nuevo estado juntos
        expect(state).toEqual([...demoTodo, newTodo]);
    });

    test("debe de eliminar un todo", () => {
        const id = 2;
        //se crea un action
        const action = {
            type: "delete",
            payload: id,
        };
        //se ejecuta el reducer
        const state = todoReducer(demoTodo, action);
        //se espera que el largo del state sea 1
        expect(state.length).toBe(1);
        // se espera que state sea identico a el elemento entregado
        expect(state).toEqual([{
            id: 1,
            desc: "Aprender react",
            done: false,
        }]);
    });

    test("debe de cambiar el toggle", () => {
        const id = 2;
        //se crea un action
        const action = {
            type: "toggle",
            payload: id
        };
        //se ejecuta el reducer
        const state = todoReducer(demoTodo, action);
        //se espera que done del state[1] sea true
        expect(state[1].done).toBeTruthy();
        //se espera que done del state[0] sea falso
        expect(state[0].done).toBeFalsy();
    });
});
