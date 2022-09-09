
//starting letter should by in captial letter
//A component is a just a Js function, a spical function

import './ExpenseItem.css'
function ExpenseItem() {// Again the file name should be same as file name
    return (
        <div className='expense-item'>
            <div>now Date()</div>
            <div className='expense-item__description'><h2>Title</h2></div>
            <div className='expense-item__price'>Amount</div>
        </div>
    )
}

export default ExpenseItem;