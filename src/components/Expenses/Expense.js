import Card from "../UI/Card";
import ExpenseItems from "../Expenses/ExpenseItems";
import "../Expenses/Expenses.css"
function Expenses(props){
    return (
        <Card className='expenses'>
            <ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
        </Card>
    )
}
export default Expenses