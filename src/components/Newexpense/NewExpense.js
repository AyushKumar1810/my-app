import React from 'react';
import ExpenseForm  from './ExpenseForm';
import './NewExpense.css';

const NewExpense =(props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData={ // This will copy the data that we have fill in the form and will return that 
            ...enteredExpenseData ,
            id:Math.random().toString() //It will also gives unique id for every items added for .. 
        };
        props.onAddExpense(expenseData)
    };
    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
    </div>
    );
};
export default NewExpense