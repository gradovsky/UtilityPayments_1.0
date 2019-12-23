import React from 'react'
import {UsersApi} from "../../../ApiService/ApiService";
import ListOfUsers from "./ListOfUsers";


class ListOfUsersContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.addCalculations = this.addCalculations.bind(this);
        this.reloadUsersList = this.reloadUsersList.bind(this);
    };

    componentDidMount() {
        this.reloadUsersList();
    };

    reloadUsersList() {
        UsersApi.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    };

    deleteUser(userId) {
        UsersApi.deleteUser(userId)
            .then(res => {
                this.setState({users: this.state.users.filter(users => users.id !== userId)});
            });
    };

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }


    addUser() {
        this.props.history.push('/add-user');
    };


    addCalculations() {
        this.props.history.push('/calculations');
    }

    render() {
        return (
            <div>
                <ListOfUsers state={this.state}
                             energyPriceOneDay={this.state.energyPriceOneDay}
                             addUser={this.addUser}
                             editUser={this.editUser}
                             deleteUser={this.deleteUser}
                             addCalculations={this.addCalculations}/>
            </div>
        );
    }

}


export default ListOfUsersContainer;