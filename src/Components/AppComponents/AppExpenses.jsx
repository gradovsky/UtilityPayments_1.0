import React from 'react';
import ListEnergyContainer from "../EnergyComponents/ListEnergy/ListEnergyContainer";
import ListExpensesContainer from "../ExpensesComponents/ListExpenses/ListExpensesContainer";


const AppExpenses = (props) => {
    return (
        <div>
            <ListEnergyContainer history={props.history}/>
            <ListExpensesContainer history={props.history}/>
        </div>
    )
};


