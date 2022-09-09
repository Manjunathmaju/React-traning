
//starting letter should by in captial letter
//A component is a just a Js function, a spical function

// Again the file name should be same as file name
/* <div>{props.date.toISOString('en-US',{month:'long'})}</div>
<div>Year</div>
<div>Day</div>
<div>{props.date.toISOString()}</div> */
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    );
}



export default ExpenseItem;