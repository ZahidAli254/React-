import './ExpenseItem.css';

function ExpenseItem (props){
  
   
    return( 
    <div className='expense-item'>
    <div >{props.Data.date.toISOString()}</div>
    <div className='expense-item__description'>
        <h2>{props.Data.title}</h2>
        <h2 className='expense-item__description'>{props.Data.Location}</h2>
        <div className='expense-item__price'>Rs{props.Data.amount}</div>
      </div>
    </div>
    )
}
export default ExpenseItem;