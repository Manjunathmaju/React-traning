
//starting letter should by in captial letter
//A component is a just a Js function, a spical function

// Again the file name should be same as file name
/* <div>{props.date.toISOString('en-US',{month:'long'})}</div>
<div>Year</div>
<div>Day</div>
<div>{props.date.toISOString()}</div> */
import './ExpenseItem.css'
function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    );
}



export default ExpenseItem;