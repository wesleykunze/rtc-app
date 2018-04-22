import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/> 
        <ExpensesSummary/>
    </div>
);

export default ExpenseDashboardPage;