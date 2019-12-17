import {HashRouter, Route} from 'react-router-dom'
import React from "react";
import AddEnergyContainer from "../Components/EnergyComponents/AddEnergy/AddEnergyContainer";
import EditEnergyContainer from "../Components/EnergyComponents/EditEnergy/EditEnergyContainer";
import AddUserContainer from "../Components/UsersComponents/AddUser/AddUserContainer";
import EditUserContainer from "../Components/UsersComponents/EditUser/EditUserContainer";
import AppBody from "../Components/AppComponents/AppBody";
import AppCalculations from "../Components/AppComponents/AppCalculations";
import AddReceiptContainer from "../Components/ConstComponents/AddReceipt/AddReceiptContainer";
import EditReceiptContainer from "../Components/ConstComponents/EditReceipt/EditReceiptContainer";
import ListOfUsersContainer from "../Components/UsersComponents/ListOfUsers/ListOfUsersContainer";


const AppRouter = (props) => {

    return (
        <div>
            <HashRouter>
                <Route path="/" exact component={ListOfUsersContainer}/>
                <Route path="/app" exact component={ListOfUsersContainer}/>
                <Route path="/calculations" component={AppCalculations}/>

                <Route path="/add-user" component={AddUserContainer}/>
                <Route path="/edit-user" component={EditUserContainer}/>

                <Route path="/add-energy" component={AddEnergyContainer}/>
                <Route path="/edit-energy" component={EditEnergyContainer}/>


                <Route path="/add-receipt" component={AddReceiptContainer}/>
                <Route path="/edit-receipt" component={EditReceiptContainer}/>




            </HashRouter>
        </div>
    )
}


export default AppRouter;