import './ExpenseItem.css'

function ExpenseDetails(props){
    const amount=props.amount;
    const title= props.title;
    const location= props.LocationOfExpenditure;
    return(<div className='expense-item__description'>
    <h2 className='expense-item h2'>{title}</h2>
    <h2 className='expense-item h2'>{location}</h2>
    <div className='expense-item__price'>Rs{amount}</div>
  </div>)
}

export default ExpenseDetails