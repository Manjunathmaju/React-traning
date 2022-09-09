import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {
    // let title = props.title;
    const [title, setTitle] = useState(props.title);
    //useState() returens an array, first value is value itself and second value is the updating function
    // setTitle is not a built-in function
    // it is user defined function 
    // another thing is, always use first variable name, same as second variable name wilt some action adding, like line number 8th in above

    const clickHandler = () => {
        //By doing like
        //title="updated!!"
        //it doesn't work, we have to call the setTitle('value-to-be-update')

        setTitle('updateed!!')

        console.log(title);//THIS IS "NOT" UPDATING WHEN CLICKED ON THE BUTTON 

        //BECAUSE React doesn't work like that
        //React is execute only once in initial state and if we triger/call any one function after all execution completed then, it will execute only that one, NOT all the component of react

        //So, to tell to run again, we have to import the libarary "import {useState} from 'react'; " and useState is a function avalibe in react
        //who do we use the function?
        //it will call or initilsion our function once again.
        //Inside the our function "NOT OUTSIDE OF FUNCTION" we just call useState and it is a one-of react HOOKS.
        //"useState()" requres a default value, 

    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={() => { console.log('Hi this is inLine function ') }}>Change Title</button>

        </Card>
    );
    // we have to avoid using Arrow function in onClick, like in above 31st line
    //we not call the funciton in onClik in button like clickHandler() 
    // we have to just point the function like clickHandler
    //if we declare the function for onClik or any event the use "Hankler" in the function name
}



export default ExpenseItem;