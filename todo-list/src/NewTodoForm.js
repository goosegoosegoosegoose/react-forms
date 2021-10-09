import React, { useState } from "react";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        todo: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        console.log(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="todo">New Todo: </label>
            <input
                id="todo"
                placeholder="todo"
                type="text"
                name="todo"
                value={formData.todo}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;