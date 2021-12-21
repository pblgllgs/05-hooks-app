import { shallow, mount } from "enzyme";
import { act } from "@testing-library/react";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodo } from "../../fixtures/demoTodo";

describe("pruebas en <TodoApp />", () => {
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn( () => {});

    test("debe de mostrarse correctamente", () => {
        //se compara un snapshot con el codigo generado
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un todo', () => {
        const wrapper = mount(<TodoApp />)
        act(()=> {
            //ejecuta dos veces la funcion para agregar un todo
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1])
        })
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2) items')
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('debe de eleminar un todo', () => {
        //en el componente TodoAdd llama la funcion handleAddTodo y agrega un todo
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0])
        //en la lista en el todo que se agregó recien, se llama la funcion y se elimina el todo recien agregado 
        wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id)
        //se espera que en la lista no se encuentren valores
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0) items')
    })
    
    
});
