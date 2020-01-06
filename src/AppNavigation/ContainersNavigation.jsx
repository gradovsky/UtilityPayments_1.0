import React from 'react';
import ListOfUsersContainer from "../Components/UsersComponents/ListOfUsers/ListOfUsersContainer";
import ListEnergyContainer from "../Components/EnergyComponents/ListEnergy/ListEnergyContainer";
import ListExpensesContainer from "../Components/ExpensesComponents/ListExpenses/ListExpensesContainer";
import {Container} from "@material-ui/core";
const NavBar = (props) => {

    return (
        <Container>
            <ListOfUsersContainer history={props.history}/>
            <ListEnergyContainer history={props.history}/>
            <ListExpensesContainer history={props.history}/>
        </Container>

    );
};

export default NavBar;