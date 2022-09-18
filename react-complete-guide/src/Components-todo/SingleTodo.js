import React, { Fragment } from 'react'
import './SingleTodo.css'
function SingleTodo(props) {
    const date = JSON.stringify(new Date());
    console.log(typeof (date));
    let ar = props.array;
    const deleteTask = (e) => {
        console.log(ar)
        ar = ar.splice(e, 1);
        console.log(ar)
    }
    return (
        <div className='singleTodo'>
            <h3>
                <button id={props.id}
                    className='delBtn'
                    onClick={(e) => deleteTask(e)}
                >delete</button>
                {props.task}
            </h3>
            <p>created At:{date}</p>
        </div>
    )
}

export default SingleTodo
