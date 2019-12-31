import React from 'react'
import {EnergyApi, UsersApi} from "../../../ApiService/ApiService";
import ListOfUsers from "./ListOfUsers";


class ListOfUsersContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],

        };
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.addExpense = this.addExpense.bind(this);
        this.loadUsersList = this.loadUsersList.bind(this);
    };

    componentDidMount() {
        this.loadUsersList();
        this.calculatePriceOneDayOneHuman();

    };

    componentDidUpdate(nextProps, nextState) {
        if (nextState.users.length !== this.state.users.length) {
            this.calculateAllPresentDays();
            this.lol();
        }
    };

    loadUsersList() {
        return UsersApi.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    };

    calculateAllPresentDays() {
        let totalPresentDays = 0;
        this.state.users.forEach(user => totalPresentDays += parseInt(user.daysPresent));
        this.setState({totalPresentDays: totalPresentDays});
    };

    calculatePriceOneDayOneHuman() {
        EnergyApi.fetchEnergy()
            .then((res) => {
                this.setState({priceOneDayOneHuman: (res.data[0].energyPrice / this.state.totalPresentDays).toFixed(2)})
            })
    }


    addUser() {
        this.props.history.push('/add-user');
    };

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    };

    deleteUser(userId) {
        UsersApi.deleteUser(userId)
            .then(res => {
                this.setState({users: this.state.users.filter(users => users.id !== userId)});
            })
    };

    addExpense() {
        this.props.history.push('/expenses');
    };

    lol() {

       const arr = this.state.users.map( user =>  {
           return user

       })
        console.log(arr)
    }









    render() {

        return (
            <div>
                <ListOfUsers state={this.state}
                             energyPriceOneDay={this.state.energyPriceOneDay}
                             totalPresentDays={this.state.totalPresentDays}
                             addUser={this.addUser}
                             editUser={this.editUser}
                             deleteUser={this.deleteUser}
                             addExpense={this.addExpense}
                />
            </div>
        );
    }

}

export default ListOfUsersContainer;