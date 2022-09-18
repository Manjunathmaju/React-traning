import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)

        const submitHandler = (event) => {
            event.preventDefault();//if we not writen this preventDefault then, the page will relode when ever i clicked on the button
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            };
            props.onSaveExpenseData(expenseData);//this function is declerad in NewExpense Component and we are calling here
            //this is how communicate one component to another like, parent to child
            //this is a super imponent concept
            setEnteredAmount('');
            setEnteredTitle('');
            setEnteredDate('');
        };
        //when the Add Expense button is clicked the form will execute and call te submitHanbler
        return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={enteredDate} min='2019-01-20' max='2022-12-31' onChange={dateChangeHandler}></input>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit' >Add Expense</button>
                </div>
            </form>
        );
    }

    export default ExpenseForm;