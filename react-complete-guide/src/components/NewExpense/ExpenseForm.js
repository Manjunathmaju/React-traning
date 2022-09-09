import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

    // const [enteredtitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    // Instud of writing 3 lind write in one line link below;
    const [userInput, setUserInput] = useState({
        enteredtitle: '',
        enteredAmount: '',
        enteredDate: ''
    })
    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredtitle: event.target, value,
        });
    };

    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target, value,
        // });
        //Defference b/w above & below 
        // in above the react scludeler will be confused and getting missed data or worng data
        // in below the react scludeler wili not confused and always gives a latest value and update the latest value

        // you should use this arrow function syntax when state update dependes previous state
        setUserInput((prevState) => {
            return { ...prevState, enteredtitle: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value)
        setUserInput({
            ...userInput,
            enteredDate: event.target, value,
        });
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-20' max='2022-12-31' onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;