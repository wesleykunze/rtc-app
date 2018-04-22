import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpensesSummary = ({expenseCount,expenseTotal}) => {
const expenseWord = expenseCount === 1 ? ('expense'):('expenses');
const formattedExpensesTotal = numeral(expenseTotal/ 100).format('$0,0.00');
return (
<div>
<h1>
Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} 
</h1>

</div>

)};

const mapStateToProps = (state) =>{
    return{
        expenseTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters)),
        expenseCount: selectExpenses(state.expenses, state.filters).length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);