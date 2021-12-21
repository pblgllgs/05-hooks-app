import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodo } from "../../fixtures/demoTodo";

describe("Pruebas en <TodoListItem />", () => {

    //se simulan funciones para ejecutar en los test
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    //se captura el componente montado
    const wrapper = shallow(
        <TodoListItem
            todo={demoTodo[0]}
            index={1}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test("debe de mostrarse correctamente", () => {
        //se comprara con un snapshot
        expect(wrapper).toMatchSnapshot();
    });
    test("debe de llamar la funcion borrar", () => {
        //se captura el boton
        const button = wrapper.find("button");
        //se simila un click
        button.simulate("click");
        //se espera que se jecute la funcion handleDelete 1 ves
        expect(handleDelete).toHaveBeenCalled();
        //se espera que se jecute la funcion handleDelete 1 ves con el parametro ncesario (id)
        expect(handleDelete).toHaveBeenLastCalledWith(demoTodo[0].id);
    });
    test("debe de llamar la funcion toggle", () => {
        //se captura el elemento
        const p = wrapper.find("p");
        //se simila un click
        p.simulate("click");
        //se espera que se jecute la funcion handleDelete 1 ves
        expect(handleToggle).toHaveBeenCalled();
        //se espera que se jecute la funcion handleDelete 1 ves con el parametro ncesario (id)
        expect(handleToggle).toHaveBeenLastCalledWith(demoTodo[0].id);
    });
    test("debe de mostrar el texto del parrafo correctamente", () => {
        //se captura el elemento
        const texto = wrapper.find("p");
        //se captura el contenido del elemento, que es un arreglo
        const contenido = texto.props().children;
        //se espera que el contenido sea un 2
        expect(contenido[0]).toBe(2);
        //se espera que el contenido del arreglo sea 'Aprender react'
        expect(contenido[2]).toBe("Aprender react");
        //se espera que el toString del contenido del arredlo sin las comas sea '2.Aprender react'
        expect(contenido.toString().replace(/,/g, "")).toBe("2.Aprender react");
    });
    test('debe de tener la clase complete si el todo esta en true', () => {
        //se establece el valor del done de un todo en true
        const todo = demoTodo[0]
        todo.done = true;
        //se captura el componente montado
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                handleToggle={handleToggle}
            />
        );
        //se captura el elemento 'p'
        const p = wrapper.find("p");
        //se simula un click
        p.simulate("click");
        //se camturan las props del elemento 'p'
        const props =  wrapper.find('p').props()
        //se captura los estilos del elemento 'p'
        const className = props.className
        //se espera que el className contenga 'complete'
        expect(className).toBe('complete')
        //otra manera de que el className contenga 'complete'
        expect(p.hasClass('complete')).toBeTruthy()
    })
    
});
