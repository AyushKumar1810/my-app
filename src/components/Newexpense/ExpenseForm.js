//this file is created so that user can enter title , Amount and date so for that we need To craete 1 form in which 3 div will be imbbeded inside form container and lst we will craete a buttom for submit 

import React, { useState } from "react";
import './Expenseform.css'
const ExpenseForm =(props)=> {
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount]= useState('');
    const [enteredDate,setEnteredDate] = useState('')
     
    
    //we have creadted use state to change the value , as initial Tital box will be empty so that's why we are taking "" inside usestate , we will store the ""entered value""" inside "setEnteredTitle ""
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); //Here we have added an event that will show what we are writing in our text ... 
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler =(event)=>{
        event.preventDefault(); //Here after clicking submit our page is reloading so for preventing we will use "event.preventDefault() " 
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData); 
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                
                    <label>Date</label>
                    <input type="date" min='2022-01-01' max='2025-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
               

        </form>
    )
};
export default ExpenseForm;