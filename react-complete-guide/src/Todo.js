import React, { useState } from 'react'
import InputTodo from './Components-todo/InputTodo'
import TodoLists from './Components-todo/TodoLists'
let ar = []

function Todo() {
    const [todo, setTodo] = useState();
    // ar.push(todo)
    console.log(todo)
    return (
        <div>
            <InputTodo saveTodo={(todo) => setTodo(ar.push(todo))} />
            <TodoLists todos={ar} />
        </div>
    )
}

export default Todo
