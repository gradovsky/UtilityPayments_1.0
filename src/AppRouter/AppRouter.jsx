import {HashRouter, Route} from 'react-router-dom'
import React from "react";
import AddEnergyContainer from "../Components/EnergyComponents/AddEnergy/AddEnergyContainer";
import EditEnergyContainer from "../Components/EnergyComponents/EditEnergy/EditEnergyContainer";
import AddUserContainer from "../Components/UsersComponents/AddUser/AddUserContainer";
import EditUserContainer from "../Components/UsersComponents/EditUser/EditUserContainer";
import AddReceiptContainer from "../Components/ConstComponents/AddExpense/AddExpenseContainer";
import EditReceiptContainer from "../Components/ConstComponents/EditExpense/EditExpenseContainer";
import ListOfUsersContainer from "../Components/UsersComponents/ListOfUsers/ListOfUsersContainer";
import AppExpenses from "../Components/AppComponents/AppExpenses";
import Container from "@material-ui/core/Container";


const UsersRouter = () => {

    return (

        <Container>
            <HashRouter>
                <Route path="/" exact component={ListOfUsersContainer}/>
                {/*<Route path="/expenses" component={AppExpenses}/>*/}

                <Route path="/" component={AddUserContainer}/>
                <Route path="/edit-user" component={EditUserContainer}/>

                {/*<Route path="/add-energy" component={AddEnergyContainer}/>*/}
                {/*<Route path="/edit-energy" component={EditEnergyContainer}/>*/}


                {/*<Route path="/add-expense" component={AddReceiptContainer}/>*/}
                {/*<Route path="/edit-expense" component={EditReceiptContainer}/>*/}
            </HashRouter>
        </Container>

    )
};

export default UsersRouter;
