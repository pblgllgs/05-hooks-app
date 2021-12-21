import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodo } from "../../fixtures/demoTodo";

describe("pruebas en  <TodoList />", () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener 2 < TodoListItem/>', () => {
        const todoListItem = wrapper.find('TodoListItem')
        expect(todoListItem.length).toBe(demoTodo.length)
        expect(todoListItem.at(0).prop('handleDelete')).toEqual(expect.any(Function))
    })
    
});
