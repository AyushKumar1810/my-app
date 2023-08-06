import React from 'react';
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/ExpenseItems.css";
const ExpenseItems = (props) =>
{
    // const expenseDate=new Date(2023,8,3);
    // const expenseTitle="car insurance";
    // const expenseAmount=300;
//NOTE: we have remove hardcode data and make it very easy , now we will see how could we see that things again and again ? the Answer is using "Props {properties}"

//All react events starts from "on" like onclick etc "on" + "Event named" that we want to be happen
    let title= props.title
    const clickHandler = ()=> { //for naming function try to Named as "event name + Handler" for example here is evet name is Click so we named function as clickHandler
        title="updated" //as we have updated the title value but in browser Nothing changes , so we hsve to import react liberery called {usestate} function so that we can change the state and use it..
        console.log(title);
    };
    return (
    <Card className="expense-item">
       <ExpenseDate date={props.date}/>
        
   
        <div className = "expense-item__description" >
            <h2>{title}</h2>
       
            <div className = "expense-item__price">${props.amount}</div>
        </div> 
        <button onClick={clickHandler}>Change Title</button> {/* /* /* we have defined a event "onclick" now we have to add the callback function what  does that function do  */ }
        
        
    </Card>
    );
}
export default ExpenseItems