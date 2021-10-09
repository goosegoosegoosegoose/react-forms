import React, {useState} from "react";
import {v4 as uuid} from "uuid"
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    };
    console.log(todos);
    const remove = (e) => {
        e.preventDefault();
        e.target.closest("div").remove();
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <h3>Todo List</h3>
            {todos.map(({todo, id}) => 
                <Todo key={id} todo={todo} remove={remove} />
            )}
        </div>
    )
}

export default TodoList;