import React from 'react'
import {EnergyApi} from "../../../ApiService/ApiService";
import ListEnergy from "./ListEnergy";

class ListEnergyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            energy: [],
        };
        this.deleteEnergy = this.deleteEnergy.bind(this);
        this.editEnergy = this.editEnergy.bind(this);
        this.addEnergy = this.addEnergy.bind(this);
        this.reloadEnergyList = this.reloadEnergyList.bind(this);
        this.usersList = this.usersList.bind(this);
    };

    componentDidMount() {
        this.reloadEnergyList();
    };

    reloadEnergyList() {
        EnergyApi.fetchEnergy()
            .then((res) => {
                this.setState({energy: res.data})
            });
    };

    deleteEnergy(energyId) {
        EnergyApi.deleteEnergy(energyId)
            .then(res => {
                this.setState({energy: this.state.energy.filter(energy => energy.id !== energyId)});
            });
    };

    editEnergy(id) {
        window.localStorage.setItem("energyId", id);
        this.props.history.push('/edit-energy');
    }

    addEnergy() {
        console.log(this.props.state)
        this.props.history.push('/add-energy');
    };


    usersList() {
        this.props.history.push('/');
    }






    render() {
        return (
            <div>
                <ListEnergy state={this.state}
                            addEnergy={this.addEnergy}
                            editEnergy={this.editEnergy}
                            deleteEnergy={this.deleteEnergy}
                            usersList={this.usersList}
                />
            </div>
        );
    };
};

export default ListEnergyContainer;