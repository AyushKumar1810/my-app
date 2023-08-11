// import ExpenseItems from "./components/Expenses/ExpenseItems";
import React from "react";
import NewExpense from './components/Newexpense/NewExpense'
import Expenses from "./components/Expenses/Expense";
//we can't simply pass data from their sibligs to siblings (App is parent and newexpense and expense is their child ) so we can't transfer the data from newExpense To expense , for that we have to send data to parent (App.js) and then Parent will send the data to Chldren . data can be only Transfer from Child To parents or vise-versa..(That is Lifting-the-state-Up) then app.js will send data to expense.js via Props .. the data Transfer is like that NewExpense.js form sending to Expense Then to App.js then it will go to Expense.js
const   App =  ()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },

    { id: 'e2',
     title: 'New TV',
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
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
  const addExpenseHandler = expense =>{
    console.log("in App.js");
    console.log(expense);
  }
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
     
   
      {/* <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItems
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </div>
  );
}


export default App;

