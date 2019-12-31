import React from 'react'
import {UsersApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import {addConsta, addDaysPresent, addPriceForEnergy, addToPay, addUserName} from "../../../redux/users-reducer";
import AddUser from "./AddUser";

class AddUserContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.saveUser = this.saveUser.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDaysPresent = this.onChangeDaysPresent.bind(this);
        this.onChangePriceForEnergy = this.onChangePriceForEnergy.bind(this);
        this.onChangeConsta = this.onChangeConsta.bind(this);
        this.onChangeToPay = this.onChangeToPay.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            userName: this.props.userName,
            daysPresent: this.props.daysPresent,
            priceForEnergy: this.props.priceForEnergy,
            consta: this.props.consta,
            toPay: this.props.toPay,

        };
        UsersApi.addUser(user)
            .then(res => {
                this.props.history.push('/');
            });
    };



    onChangeUserName(e) {
        this.props.addUserName(e.target.value);
    }

    onChangeDaysPresent(e) {
        this.props.addDaysPresent(e.target.value);
    }

    onChangePriceForEnergy(e) {
        this.props.addPriceForEnergy(e.target.value);
    }

    onChangeConsta(e) {
        this.props.addConsta(e.target.value);
    }

    onChangeToPay(e) {
        this.props.addToPay(e.target.value);
    }


    render() {
        return (
            <div>
                <AddUser userName={this.state.userName}
                         daysPresent={this.state.daysPresent}
                         priceForEnergy={this.state.priceForEnergy}
                         consta={this.state.consta}
                         toPay={this.state.toPay}

                         onChangeUserName={this.onChangeUserName}
                         onChangeDaysPresent={this.onChangeDaysPresent}
                         onChangePriceForEnergy={this.onChangePriceForEnergy}
                         onChangeConsta={this.onChangeConsta}
                         onChangeToPay={this.onChangeToPay}
                         saveUser={this.saveUser}
                />
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
    addConsta,
    addToPay
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer)

