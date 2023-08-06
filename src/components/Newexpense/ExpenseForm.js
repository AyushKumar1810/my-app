//this file is created so that user can enter title , Amount and date so for that we need To craete 1 form in which 3 div will be imbbeded inside form container and lst we will craete a buttom for submit 

import React from "react";
import './Expenseform.css'
const ExpenseForm =()=> {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__controls">
                
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' />
                </div>
                <div className="new-expense__controls">
                
                    <label>Date</label>
                    <input type="date" min='2022-01-01' max='2025-12-31' />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
               

        </form>
    )
};
export default ExpenseForm;