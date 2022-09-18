import React from 'react'
import SingleTodo from './SingleTodo'
function TodoLists(props) {
    console.log()
    const todos = props.todos
    const list = todos.map((per, index) => <SingleTodo key={index} task={per} id={index} array={todos} />)

    return (
        <div>

            {list}
        </div>
    )
}

export default TodoLists
