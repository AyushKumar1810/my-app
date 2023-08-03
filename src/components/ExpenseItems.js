import "./ExpenseItems.css";
function ExpenseItems(){
    const expenseDate=new Date(2023,8,3);
    const expenseTitle="car insurance";
    const expenseAmount=300;
//NOTE: we have remove hardcode data and make it very easy , now we will see how could we sue that things again and again 
    return (
    <div className="expense-item">
    <div>{expenseDate.toISOString()}</div>
        <div className = "expense-item__description" >
        <h2>{expenseTitle}</h2>
        </div>
     <div className = "expense-item__price">${expenseAmount}</div>
    </div>);
}
export default ExpenseItems