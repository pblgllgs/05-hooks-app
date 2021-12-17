import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
    //carga de los items desde el localstorage
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
    //reducer para cambiar el estado del los datos
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    //gugardar en el local storge
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    //eliminacion de items
    const handleDelete = (todoId) => {
        //crea la accion
        const action = {
            type: "delete",
            payload: todoId,
        };
        //ejecucion de la accion
        dispatch(action);
    };
    //tacha el item seleccionado
    const handleToggle = (todoId) => {
        //enviamos el action dentro del dispatch y cambiamos el done 
        dispatch({
            type:'toggle',
            payload: todoId
        })
    }
    const handleAddTodo= (newTodo)=> {
        //action
        dispatch({
            type: "add",
            payload: newTodo,
        });
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                    />

                    {(todos.length === 0) &&
                        <div>
                            <h4>No hay elementos</h4>
                            <div className="alert alert-info">No se encontraron Todos!!!</div>
                        </div>
                    }
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo} 
                    />
                </div>

            </div>
        </div>
    );
};
