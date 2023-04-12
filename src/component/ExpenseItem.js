import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem (props){
     return( 
    <div className='expense-item'>
        <ExpenseDate date={props.Data.date}></ExpenseDate> 
<ExpenseDetails amount={props.Data.Amount}
title={props.Data.title} LocationOfExpenditure={props.Data.LocationOfExpenditure}></ExpenseDetails>
    </div>
    );
}
export default ExpenseItem;