import React from 'react'
import {EnergyApi, ExpensesApi, UsersApi} from "../../../ApiService/ApiService";
import ListOfUsers from "./ListOfUsers";


class ListOfUsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            energy: [],
            energyPrice: '',
            totalExpenses: '',
            totalEnergyPrice: ''
        };
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
    };

    componentDidMount() {
        this.fetchUsers();
        this.fetchExpense();
        this.fetchEnergyPrice();
    };

    componentDidUpdate(nextProps, nextState) {
        if (nextState.users.length !== this.state.users.length) {
            this.calculateTotalPresentDays();
        }
    };

    fetchUsers() {
        UsersApi.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    };

    fetchEnergyPrice() {
        EnergyApi.fetchEnergy()
            .then((res) => {
                this.setState({totalEnergyPrice: res.data.length ? res.data[0].energyPrice : null})
            })
    }

    fetchExpense() {
        ExpensesApi.fetchExpense()
            .then((res) => {
                this.setState({totalExpenses: res.data.length ? res.data[0].totalExpenses : null})
            });
    };



    calculateTotalPresentDays() {
        let totalPresentDays = this.state.users.reduce((total, days) => {
            return total += parseInt(days.daysPresent)
        }, 0);
        this.setState({totalPresentDays: totalPresentDays});
    };

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

    render() {
console.log(this.state)
        return (
            <div>
                <ListOfUsers state={this.state}
                             totalEnergyPrice={this.state.totalEnergyPrice}
                             totalPresentDays={this.state.totalPresentDays}
                             totalExpenses={this.state.totalExpenses}
                             addUser={this.addUser}
                             editUser={this.editUser}
                             deleteUser={this.deleteUser}
                />
            </div>
        );
    }
}

export default ListOfUsersContainer;