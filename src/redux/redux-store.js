import {applyMiddleware, combineReducers, createStore} from 'redux';
import addEnergyValuesReducer from "./energy-reducer";
import addUsersReducer from "./users-reducer";
import addExpensesReducer from "./expenses-reducer";
import logger from 'redux-logger'

export const reducers = combineReducers({
    energyAdd: addEnergyValuesReducer,
    usersAdd: addUsersReducer,
    expensesAdd: addExpensesReducer
});

export const store = createStore(reducers,applyMiddleware(logger));


export default store;
