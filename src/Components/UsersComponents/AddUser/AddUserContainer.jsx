import React from 'react'
import {EnergyApi, UsersApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import {addConsta, addDaysPresent, addPriceForEnergy, addToPay, addUserName} from "../../../redux/users-reducer";
import AddUser from "./AddUser";

class AddUserContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            userName: '',
            daysPresent: '',
            priceForEnergy: '',
            consta: '',
            toPay: '',
            energyPriceOneDay:''
        };
        this.saveUser = this.saveUser.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDaysPresent = this.onChangeDaysPresent.bind(this);
        this.onChangePriceForEnergy = this.onChangePriceForEnergy.bind(this);
        this.onChangeConsta = this.onChangeConsta.bind(this);
        this.onChangeToPay = this.onChangeToPay.bind(this);
        this.loadEnergyPriceOneDay = this.loadEnergyPriceOneDay.bind(this);
    }

    componentDidMount() {
        this.loadEnergyPriceOneDay();
    };

    loadEnergyPriceOneDay() {
        EnergyApi.fetchEnergy()
            .then((res) => {
                this.setState({energyPriceOneDay: res.data[0].energyPriceOneDay})
            })
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            userName: this.state.userName,
            daysPresent: this.state.daysPresent,
            priceForEnergy: this.state.priceForEnergy,
            consta: this.state.consta,
            toPay: this.state.toPay
        };
        UsersApi.addUser(user)
            .then(res => {
                this.props.history.push('/');
            });
    };


    onChangeUserName (e) {
        this.props.addUserName(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeDaysPresent(e) {
        this.props.addDaysPresent(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onChangePriceForEnergy(e) {
        this.setState({[e.target.name]: ((this.state.energyPriceOneDay / 2) * this.state.daysPresent).toFixed(3) });
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
        console.log(this.state)
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

