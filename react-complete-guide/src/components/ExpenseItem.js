
//starting letter should by in captial letter
//A component is a just a Js function, a spical function

// Again the file name should be same as file name
import './ExpenseItem.css'
function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    )
}

export default ExpenseItem;