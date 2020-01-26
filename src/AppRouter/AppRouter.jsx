import React from "react";
import Container from "@material-ui/core/Container";
import ContainersNavigation from "../AppNavigation/ContainersNavigation";
import AddUserContainer from "../Components/UsersComponents/AddUser/AddUserContainer";
import AddEnergyContainer from "../Components/EnergyComponents/AddEnergy/AddEnergyContainer";
import AddExpenseContainer from "../Components/ExpensesComponents/AddExpense/AddExpenseContainer";
import EditExpenseContainer from "../Components/ExpensesComponents/EditExpense/EditExpenseContainer";
import EditEnergyContainer from "../Components/EnergyComponents/EditEnergy/EditEnergyContainer";
import EditUserContainer from "../Components/UsersComponents/EditUser/EditUserContainer";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Auth from "../Auth/AuthContainer";

const AppRouter = (props) => {
    return (
        <Container>
            <Router>
                <Route path="/" exact component={ContainersNavigation}/>
                <Route path="/login" exact component={Auth}/>

                <Route path="/add-user" component={AddUserContainer}/>
                <Route path="/edit-user" component={EditUserContainer}/>

                <Route path="/add-energy" component={AddEnergyContainer}/>
                <Route path="/edit-energy" component={EditEnergyContainer}/>


                <Route path="/add-expense" component={AddExpenseContainer}/>
                <Route path="/edit-expense" component={EditExpenseContainer}/>
            </Router>

        </Container>

    )
};

export default AppRouter;
