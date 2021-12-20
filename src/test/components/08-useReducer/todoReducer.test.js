import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodo";

describe("pruebas en todoReducer", () => {
    test("debe de retornar el estado por defecto", () => {
        const state = todoReducer(demoTodo, {});
        expect(state).toEqual(demoTodo);
    });

    test("debe de agregar un todo", () => {
        const newTodo = {
            id: 3,
            desc: "Aprender Docker",
            done: false,
        };
        const action = {
            type: "add",
            payload: newTodo,
        };
        const state = todoReducer(demoTodo, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodo, newTodo]);
    });

    test("debe de eliminar un todo", () => {
        const id = 2;
        const action = {
            type: "delete",
            payload: id,
        };
        const state = todoReducer(demoTodo, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([{
            id: 1,
            desc: "Aprender react",
            done: false,
        }]);
    });

    test("debe de cambiar el toggle", () => {
        const id = 2;
        const action = {
            type: "toggle",
            payload: id,
        };
        const state = todoReducer(demoTodo, action);
        expect(state[1].done).toBeTruthy();
        expect(state[0].done).toBeFalsy();
    });
});
