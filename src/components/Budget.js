
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget,expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        if(event.target.value> (budget-totalExpenses)){
            alert("The Value cannot exceed remaining funds: $" + (budget - totalExpenses));
        }else if(event.target.value===166){
            alert("You cannot reduce the budget value lower than the spending !!")
        }else{
            setNewBudget(event.target.value);
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;