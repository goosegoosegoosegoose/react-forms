import React from "react";

const Todo = ({todo, remove}) => {
    console.log(todo);
    return (
        <div className="todo">
            <p>
                {todo} <button onClick={remove}>X</button>
            </p>
            
        </div>
    )
}

export default Todo;