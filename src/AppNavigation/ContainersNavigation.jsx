import React from 'react';
import ListOfUsersContainer from "../Components/UsersComponents/ListOfUsers/ListOfUsersContainer";
import ListEnergyContainer from "../Components/EnergyComponents/ListEnergy/ListEnergyContainer";
import ListExpensesContainer from "../Components/ExpensesComponents/ListExpenses/ListExpensesContainer";
const NavBar = (props) => {

    return (
        <div>
            <ListOfUsersContainer history={props.history}/>
            <ListEnergyContainer history={props.history}/>
            <ListExpensesContainer history={props.history}/>
        </div>

    );
};

export default NavBar;