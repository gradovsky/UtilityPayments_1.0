import {combineReducers, createStore} from 'redux';
import addEnergyValuesReducer from "./energy-reducer";
import addUsersReducer from "./users-reducer";
import addConstReducer from "./receipt-reducer";


export const reducers = combineReducers({
    energyAdd: addEnergyValuesReducer,
    usersAdd: addUsersReducer,
    receiptAdd: addConstReducer
});


export const store = createStore(reducers);


