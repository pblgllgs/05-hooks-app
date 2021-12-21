import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodo } from "../../fixtures/demoTodo";

describe("pruebas en  <TodoList />", () => {
    //simulaciones de funciones para enviar en los componentes
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    //se guarda el componente montado
    const wrapper = shallow(
        <TodoList
            todos={demoTodo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test("debe de mostrarse correctamente", () => {
        //se hace una comparacion del componente montado con el snapshot
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener 2 < TodoListItem/>', () => {
        //secaptura el elemento del componente montado con nombre 'TodoListItem'
        const todoListItem = wrapper.find('TodoListItem')
        //se espera que el largo del objeto todoListItem debe ser igual al largo del elemento fuente
        expect(todoListItem.length).toBe(demoTodo.length)
        //se espera que el elemento '0' de todoListItem tenga un prop 'handleDelete' y sea una funcion
        expect(todoListItem.at(0).prop('handleDelete')).toEqual(expect.any(Function))
    })
    
});
