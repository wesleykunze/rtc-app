import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({ description: 'Gas Bill'}));
store.dispatch(addExpense({ description: 'Rent', amount: 10500}));

setTimeout(() =>{
    store.dispatch(setTextFilter(''));    
}, 3000)

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

const jsx = (
    <Provider store ={store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));