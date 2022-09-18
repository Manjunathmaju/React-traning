import { render } from '@testing-library/react';
import React, { useState } from 'react'

function InputTodo(props) {
    let value = '';

    const handleAddBtn = () => {
        props.saveTodo(value)
        value = '';
    }

    return (
        <div>
            <h1>Todo</h1>
            <input type='text'
                onChange={(e) => { value = e.target.value }}
            />
            <button onClick={handleAddBtn}>Add</button>
        </div>
    );

}

export default InputTodo
