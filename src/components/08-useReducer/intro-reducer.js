//estado inicial
const initialState = [
    {
        id: 1,
        todo: "Comprar leche",
        done: false,
    }
];

//reducer
const todoReducer = (state = initialState, action) =>{
    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }
    return state;
}

//nuevo estado
const newTodo = [
    {
        id: 2,
        todo: "Comprar leche",
        done: false,
    }
];

//accion que acompaña al nuevo
const agregarTodoAction = {
    type:'agregar',
    payload: newTodo
}

let todos = todoReducer();
todos = todoReducer(todos, agregarTodoAction)

console.log(todos)