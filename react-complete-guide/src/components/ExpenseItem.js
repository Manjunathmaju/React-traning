
//starting letter should by in captial letter
//A component is a just a Js function, a spical function

import './ExpenseItem.css'
function ExpenseItem() {// Again the file name should be same as file name
    const expenseDate = new Date(2021, 3, 8);
    const expenseTitle = 'car Insurance';
    const expenseAmount = 300000;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'><h2>{expenseTitle}</h2></div>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    )
}

export default ExpenseItem;