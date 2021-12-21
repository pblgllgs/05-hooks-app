import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import { shallow } from "enzyme";

describe("pruebas en <TodoAdd />", () => {
    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test("debe de mostrarse correctamente", () => {
        //se compara con un snapshot el codifo generado
        expect(wrapper).toMatchSnapshot();
    });

    test("no debe de llamar a todo", () => {
        //se envia el formulario y se espera que no se ejecute ninguna funcion, porque no se envia nada
        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault() { } });
        //se ejecutó la funcion 0 veces
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test("debe de llamar la funcion handleAddTodo", () => {
        const value = "Aprender shell";
        //se simula un inigreso en el input
        wrapper.find("input").simulate("change", {
            target: {
                value,
                name: "description",
            },
        });
        // se envia el formulario
        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault() { } });
        //se ejecutó la funcion porque se envió informacion en el input
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        //se espera la llamada a la funcion con un elemento de tipo Object
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        //se espera que el objeto que se esta enviando tenga un id que es de tipo Number
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        //se espera que el input se limpie con el metodo reset al ejecutarse correctamente
        expect(wrapper.find('input').prop('value')).toBe('')
    });
});
