import React from 'react'
import { useForm } from '../../hooks/useForms';

export const TodoAdd = ({ handleAddTodo }) => {

    //hook que maneja el formulario, reset, handle e inicializacion del input
    const [{ description }, handleInputChange, reset] = useForm({
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length <= 2) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };
        handleAddTodo(newTodo);
        reset();
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button className="btn btn-outline-primary" type="submit">
                    Agregar
                </button>
            </form>
        </>
    )
}
