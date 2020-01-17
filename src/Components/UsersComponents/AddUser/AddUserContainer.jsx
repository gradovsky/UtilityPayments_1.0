import React from 'react'
import {UsersApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import {
    addDaysPresent,
    addExpenses,
    addFlat,
    addPriceForEnergy,
    addToPay,
    addUserName
} from "../../../redux/users-reducer";
import AddUser from "./AddUser";

class AddUserContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onChangeFlat = this.onChangeFlat.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDaysPresent = this.onChangeDaysPresent.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            userName: this.props.userName,
            daysPresent: this.props.daysPresent,
            flat: this.props.flat
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
    onChangeFlat(e) {
        this.props.addFlat(e.target.value);
    };

    render() {
        return (
            <div>
                <AddUser userName={this.state.userName}
                         daysPresent={this.state.daysPresent}
                         flat={this.state.flat}
                         onChangeFlat={this.onChangeFlat}
                         onChangeUserName={this.onChangeUserName}
                         onChangeDaysPresent={this.onChangeDaysPresent}
                         saveUser={this.saveUser}
                         backHome={this.backHome}/>
            </div>
        );
    }
}

export const mapStateToProps = (state) => ({
    flat: state.usersAdd.flat,
    userName: state.usersAdd.userName,
    daysPresent: state.usersAdd.daysPresent,
    priceForEnergy: state.usersAdd.priceForEnergy,
    consta: state.usersAdd.consta,
    toPay: state.usersAdd.toPay,
    energyPriceOneDay: state.usersAdd.energyPriceOneDay
});

export const mapDispatchToProps = {
    addFlat,
    addUserName,
    addDaysPresent,
    addPriceForEnergy,
    addExpenses,
    addToPay
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer)

