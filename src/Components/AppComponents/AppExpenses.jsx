import React from 'react';
import ListEnergyContainer from "../EnergyComponents/ListEnergy/ListEnergyContainer";
import ListReceiptsContainer from "../ConstComponents/ListReceipts/ListReceiptsContainer";


const AppExpenses = (props) => {

    return (
        <div>
            <ListEnergyContainer history={props.history}/>
            <ListReceiptsContainer history={props.history}/>
        </div>
    )
};

export default AppExpenses;