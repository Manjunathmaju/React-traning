import React from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//lower html elements are default html element 
//upper case html element us costume componte

//spicale feature JSX invented by react team
// if we writ more time of expenseItem then it can be reuse 
//but it is not efficient way 
//so, for that
//we can make out components reuseable by using concepts called as " props " in react

// const App=()=>{
// we can put the code of below "function App(){}" and it works same
// }  
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];



  return (//this is the JSX code and this is Modern React 
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

// react is componet and component is costume html element
// react is work as all costume components to normal js code
export default App;
