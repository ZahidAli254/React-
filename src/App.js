import ExpenseItem from "./component/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      LocationOfExpenditure: 'Lucknow',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
    title: 'New TV',
    LocationOfExpenditure: 'Home',
     amount: 799.49, 
     date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      LocationOfExpenditure: 'Kanpur',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      LocationOfExpenditure: 'aliganj',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
   return (
    <div>
      <h2>Let's get started!</h2>
      {
        expenses.map((items)=> <ExpenseItem Data={items}></ExpenseItem>)
      }
    {/* <ExpenseItem title={expenses[0].title} Location={expenses[0].LocationOfExpenditure} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} Location={expenses[1].LocationOfExpenditure} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} Location={expenses[2].LocationOfExpenditure} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} Location={expenses[3].LocationOfExpenditure} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>  */}
    </div> 
  );
}

export default App;
