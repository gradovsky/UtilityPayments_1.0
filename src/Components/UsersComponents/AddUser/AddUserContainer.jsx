import React from 'react'
import {UsersApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import {addDaysPresent, addExpenses, addPriceForEnergy, addToPay, addUserName} from "../../../redux/users-reducer";
import AddUser from "./AddUser";

class AddUserContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDaysPresent = this.onChangeDaysPresent.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            userName: this.props.userName,
            daysPresent: this.props.daysPresent
        };
        UsersApi.addUser(user)
            .then(res => {
                this.props.history.push('/');
            });
    };

    backHome = () => {
        this.props.history.push('/');
    };

    onChangeUserName(e) {
        this.props.addUserName(e.target.value);
    };

    onChangeDaysPresent(e) {
        this.props.addDaysPresent(e.target.value);
    };

    render() {
        return (
            <div>
                <AddUser userName={this.state.userName}
                         daysPresent={this.state.daysPresent}
                         onChangeUserName={this.onChangeUserName}
                         onChangeDaysPresent={this.onChangeDaysPresent}
                         saveUser={this.saveUser}
                         backHome={this.backHome}/>
            </div>
        );
    }
}

export const mapStateToProps = (state) => ({
    userName: state.usersAdd.userName,
    daysPresent: state.usersAdd.daysPresent,
    priceForEnergy: state.usersAdd.priceForEnergy,
    consta: state.usersAdd.consta,
    toPay: state.usersAdd.toPay,
    energyPriceOneDay: state.usersAdd.energyPriceOneDay
});

export const mapDispatchToProps = {
    addUserName,
    addDaysPresent,
    addPriceForEnergy,
    addExpenses,
    addToPay
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer)

