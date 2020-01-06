import React from 'react'
import {EnergyApi} from "../../../ApiService/ApiService";
import EditEnergy from "./EditEnergy";

class EditEnergyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            currentValue: '',
            lastValue: '',
            energyUsedKw: '',
            energyPrice: '',
        };
        this.onChangeCurrentValue = this.onChangeCurrentValue.bind(this);
        this.onChangeLastValue = this.onChangeLastValue.bind(this);

    }

    componentDidMount() {
        this.loadEnergy();
    };

    loadEnergy() {
        EnergyApi.fetchEnergyById(window.localStorage.getItem("energyId"))
            .then((res) => {
                this.setState({
                    id: res.data.id,
                    currentValue: res.data.currentValue,
                    lastValue: res.data.lastValue,
                    energyUsedKw: res.data.energyUsedKw,
                    energyPrice: res.data.energyPrice,
                })
            });
    };

    saveEnergy = (e) => {
        e.preventDefault();
        let energy = {
            id: this.state.id,
            currentValue: this.state.currentValue,
            lastValue: this.state.lastValue,
            energyUsedKw: this.state.currentValue - this.state.lastValue,
            energyPrice: ((this.state.currentValue - this.state.lastValue) * 1.68).toFixed(2)
        };
        EnergyApi.editEnergy(energy)
            .then(res => {
                this.props.history.push('/');
            });
    };

    backHome = () => {
        this.props.history.push('/');
    };


    onChangeCurrentValue(e) {
        this.setState({[e.target.name]: e.target.value})
    };

    onChangeLastValue(e) {
        this.setState({[e.target.name]: e.target.value})
    };

    render() {
        return (
            <EditEnergy currentValue={this.state.currentValue}
                        lastValue={this.state.lastValue}
                        onChangeCurrentValue={this.onChangeCurrentValue}
                        onChangeLastValue={this.onChangeLastValue}
                        saveEnergy={this.saveEnergy}
                        backHome={this.backHome}
            />
        );
    };
};

export default EditEnergyContainer;