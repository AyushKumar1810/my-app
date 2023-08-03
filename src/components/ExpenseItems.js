import "./ExpenseItems.css";
function ExpenseItems(){
    // const expensedate=new Date(2023,8,3);
    // const expenseitem="car insurance";
    // const expenseprice=300;
    return (
    <div className="expense-item">
    <div>August 3rd 2023</div>
        <div className = "expense-item__description" >
        <h2>car insurance</h2>
        </div>
     <div className = "expense-item__price">$300</div>
    </div>);
}
export default ExpenseItems