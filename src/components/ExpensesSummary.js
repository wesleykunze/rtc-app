import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpensesSummary = ({sum,count}) => {
const plurial = count >1 ? ('expenses'):('expense');
return (
<div>
<h1>
Viewing {count} {plurial} totalling {numeral(sum / 100).format('$0,0.00')} 
</h1>

</div>

)};

const mapStateToProps = (state) =>{
    return{
        sum: selectExpensesTotal(selectExpenses(state.expenses, state.filters)),
        count: selectExpenses(state.expenses, state.filters).length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);