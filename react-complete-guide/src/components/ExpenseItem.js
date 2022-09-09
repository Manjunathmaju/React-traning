
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

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
        </Card>
    );
}



export default ExpenseItem;