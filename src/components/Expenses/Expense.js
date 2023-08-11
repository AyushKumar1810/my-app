import React  , {useState} from 'react';
import Card from "../UI/Card";
import ExpenseItems from "../Expenses/ExpenseItems";
import "../Expenses/Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) =>{
  const [filteredYear,setFilterredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilterredYear(selectedYear);
  };


    return (
      <div>

        <Card className='expenses'>
          <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
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
        </div>

    )
}
export default Expenses
