import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodo } from "../../fixtures/demoTodo";

describe("Pruebas en <TodoListItem />", () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodo[0]}
            index={1}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("debe de llamar la funcion borrar", () => {
        const button = wrapper.find("button");
        button.simulate("click");
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenLastCalledWith(demoTodo[0].id);
    });
    test("debe de llamar la funcion toggle", () => {
        const p = wrapper.find("p");
        p.simulate("click");
        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenLastCalledWith(demoTodo[0].id);
    });
    test("debe de mostrar el texto del parrafo correctamente", () => {
        const texto = wrapper.find("p");
        const contenido = texto.props().children;
        expect(contenido[0]).toBe(2);
        expect(contenido[2]).toBe("Aprender react");
        expect(contenido.toString().replace(/,/g, "")).toBe("2.Aprender react");
    });
    test('debe de tener la clase complete si el todo esta en true', () => {
        const todo = demoTodo[0]
        todo.done = true;
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                handleToggle={handleToggle}
            />
        );
        const p = wrapper.find("p");
        p.simulate("click");
        const props =  wrapper.find('p').props()
        const className = props.className
        expect(className).toBe('complete')
        expect(p.hasClass('complete')).toBeTruthy()
    })
    
});
