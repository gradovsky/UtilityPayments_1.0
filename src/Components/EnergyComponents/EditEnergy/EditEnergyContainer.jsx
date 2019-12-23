import React from 'react'
import {EnergyApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
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
        this.onChangeEnergyUsedKw = this.onChangeEnergyUsedKw.bind(this);
        this.onChangeEnergyPrice = this.onChangeEnergyPrice.bind(this);
        this.onChangeEnergyPriceOneDay = this.onChangeEnergyPriceOneDay.bind(this);
        this.saveEnergy = this.saveEnergy.bind(this);
        this.loadEnergy = this.loadEnergy.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.loadEnergy();
    }

    loadEnergy() {
        EnergyApi.fetchEnergyById(window.localStorage.getItem("energyId"))
            .then((res) => {
                this.setState({
                    id: res.data.id,
                    currentValue: res.data.currentValue,
                    lastValue: res.data.lastValue,
                    energyUsedKw: res.data.energyUsedKw,
                    energyPrice: res.data.energyPrice,
                    countDaysInMonth: res.data.countDaysInMonth,
                    energyPriceOneDay: res.data.energyPriceOneDay
                })
            });
    }

    saveEnergy = (e) => {
        e.preventDefault();
        let energy = {
            id: this.state.id,
            currentValue: this.state.currentValue,
            lastValue: this.state.lastValue,
            energyUsedKw: this.state.energyUsedKw,
            energyPrice: this.state.energyPrice,
            countDaysInMonth: this.state.countDaysInMonth,
            energyPriceOneDay: this.state.energyPriceOneDay
        };
        EnergyApi.editEnergy(energy)
            .then(res => {
                this.props.history.push('/calculations');
            });
    };

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value});

    onChangeEnergyUsedKw(e) {
        this.setState({[e.target.name]: this.state.currentValue - this.state.lastValue})
    }

    onChangeEnergyPrice(e) {
        this.setState({[e.target.name]: this.state.energyUsedKw * 1.68})
    }

    onChangeEnergyPriceOneDay(e) {
        this.setState({[e.target.name]: (this.state.energyPrice / this.state.countDaysInMonth).toFixed(3)})
    }

    render() {
        console.log(this.state);
        return (
            <EditEnergy currentValue={this.state.currentValue}
                        lastValue={this.state.lastValue}
                        energyUsedKw={this.state.energyUsedKw}
                        energyPrice={this.state.energyPrice}

                        onChangeEnergyUsedKw={this.onChangeEnergyUsedKw}
                        onChangeEnergyPrice={this.onChangeEnergyPrice}
                        onChangeEnergyPriceOneDay={this.onChangeEnergyPriceOneDay}
                        saveEnergy={this.saveEnergy}
                        onChange={this.onChange}
            />
        );
    }
}


export const mapStateToProps = (state) => ({
    currentValue: state.energyAdd.currentValue,
    lastValue: state.energyAdd.lastValue,
    energyUsedKw: state.energyAdd.energyUsedKw,
    energyPrice: state.energyAdd.energyPrice,
    countDaysInMonth: state.energyAdd.countDaysInMonth,
    energyPriceOneDay: state.energyAdd.energyPriceOneDay
});


export default connect(mapStateToProps)(EditEnergyContainer)