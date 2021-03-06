import React from 'react'
import {UsersApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import EditUser from "./EditUser";

class EditUserContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            userName: '',
            daysPresent: '',
            priceForEnergy: '',
            consta: '',
            toPay: ''
        };
        this.loadUser = this.loadUser.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        UsersApi.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                this.setState({
                    id: res.data.id,
                    userName: res.data.userName,
                    daysPresent: res.data.daysPresent,
                    priceForEnergy: res.data.priceForEnergy,
                    consta: res.data.consta,
                    toPay: res.data.toPay
                })
            });
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            id: this.state.id,
            userName: this.state.userName,
            daysPresent: this.state.daysPresent,
            priceForEnergy: this.state.priceForEnergy,
            consta: this.state.consta,
            toPay: this.state.toPay,
        };
        UsersApi.editUser(user)
            .then(res => {
                this.props.history.push('/');
            });
    };

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value});

    backHome = () => {
        this.props.history.push('/');
    };


    render() {
        return (
            <EditUser userName={this.state.userName}
                      daysPresent={this.state.daysPresent}
                      saveUser={this.saveUser}
                      backHome={this.backHome}
                      onChange={this.onChange}
            />
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

export default connect(mapStateToProps)(EditUserContainer)