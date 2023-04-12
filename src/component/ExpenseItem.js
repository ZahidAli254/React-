import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from './UI/Card';

function ExpenseItem (props){
     return( 
    <Card className='expense-item'>
        <ExpenseDate date={props.Data.date}></ExpenseDate> 
        <ExpenseDetails amount={props.Data.amount}
                        title={props.Data.title} 
                        LocationOfExpenditure={props.Data.LocationOfExpenditure}
                        ></ExpenseDetails>
    </Card>
    );
}
export default ExpenseItem;