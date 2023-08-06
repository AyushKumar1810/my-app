import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/ExpenseItems.css";
function ExpenseItems(props){
    // const expenseDate=new Date(2023,8,3);
    // const expenseTitle="car insurance";
    // const expenseAmount=300;
//NOTE: we have remove hardcode data and make it very easy , now we will see how could we see that things again and again ? the Answer is using "Props {properties}"
  
    return (
    <Card className="expense-item">
       <ExpenseDate date={props.date}/>
        
   
        <div className = "expense-item__description" >
            <h2>{props.title}</h2>
       
            <div className = "expense-item__price">${props.amount}</div>
        </div> 
    </Card>
    );
}
export default ExpenseItems