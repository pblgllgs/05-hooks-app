import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import { shallow } from "enzyme";

describe("pruebas en <TodoAdd />", () => {
    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("no debe de llamar a todo", () => {
        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault() { } });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test("debe de llamar la funcion handleAddTodo", () => {
        const value = "Aprender shell";
        wrapper.find("input").simulate("change", {
            target: {
                value,
                name: "description",
            },
        });
        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault() { } });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        expect(wrapper.find('input').prop('value')).toBe('')
    });
});
