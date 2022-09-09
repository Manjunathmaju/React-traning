import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {

        setTitle('updateed!!')

        console.log(title);//THIS IS "NOT" UPDATING WHEN CLICKED ON THE BUTTON 

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