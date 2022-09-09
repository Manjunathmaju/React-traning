
//starting letter should by in captial letter
//A component is a just a Js function, a spical function

// Again the file name should be same as file name
/* <div>{props.date.toISOString('en-US',{month:'long'})}</div>
<div>Year</div>
<div>Day</div>
<div>{props.date.toISOString()}</div> */
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

// const ExpenseItem(props)=> {
// works same as below function, if we put the code here.
// }

function ExpenseItem(props) {

    const clickHandler = () => {
        console.log('Clicked!!!!!');
    };
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
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