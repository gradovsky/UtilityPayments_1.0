import React from 'react'
import {UsersApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import {addConsta, addDaysPresent, addPriceForEnergy, addToPay, addUserName} from "../../../redux/users-reducer";
import AddUser from "./AddUser";

class AddUserContainer extends React.Component {

    constructor(props) {
        super(props);

        this.saveEnergy = this.saveEnergy.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDaysPresent = this.onChangeDaysPresent.bind(this);
        this.onChangePriceForEnergy = this.onChangePriceForEnergy.bind(this);
        this.onChangeConsta = this.onChangeConsta.bind(this);
        this.onChangeToPay = this.onChangeToPay.bind(this);
    }

    saveEnergy = (e) => {
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
                this.props.history.push('/app');
            });
    };

    onChangeUserName(e) {
        this.props.addUserName(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeDaysPresent(e) {
        this.props.addDaysPresent(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onChangePriceForEnergy(e) {
        this.props.addPriceForEnergy(e.target.value);
        this.setState({[e.target.name]: this.state.daysPresent * (this.state.energyPriceOneDay / 13)});
    }

    onChangeConsta(e) {
        this.props.addConsta(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeToPay(e) {
        this.props.addToPay(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        return (
            <div>
                <AddUser userName={this.props.userName}
                         daysPresent={this.props.daysPresent}
                         priceForEnergy={this.props.priceForEnergy}
                         consta={this.props.consta}
                         toPay={this.props.toPay}

                         onChangeUserName={this.onChangeUserName}
                         onChangeDaysPresent={this.onChangeDaysPresent}
                         onChangePriceForEnergy={this.onChangePriceForEnergy}
                         onChangeConsta={this.onChangeConsta}
                         onChangeToPay={this.onChangeToPay}

                         saveEnergy={this.saveEnergy}
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
    toPay: state.usersAdd.toPay
});

export const mapDispatchToProps = {
    addUserName,
    addDaysPresent,
    addPriceForEnergy,
    addConsta,
    addToPay
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer)

