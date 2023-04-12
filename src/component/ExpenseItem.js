import './ExpenseItem.css';

function ExpenseItem (props){
  
   
    return( 
    <div className='expense-item'>
    <div >{props.data.date.toISOString()}</div>
    <div className='expense-item__description'>
        <h2>{props.data.title}</h2>
        <h2 className='expense-item__description'>{props.data.Location}</h2>
        <div className='expense-item__price'>Rs{props.data.amount}</div>
      </div>
    </div>
    )
}
export default ExpenseItem;