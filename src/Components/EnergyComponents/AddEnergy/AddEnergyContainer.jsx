import React from 'react'
import {EnergyApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import AddEnergy from "./AddEnergy";
import {addCurrentValue, addEnergyPrice, addEnergyUsedKw, addLastValue} from "../../../redux/energy-reducer";

class AddEnergyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            lastValue: '',
            energyUsedKw: '',
            energyPrice: '',
        };
        this.saveEnergy = this.saveEnergy.bind(this);
        this.onChangeCurrentValue = this.onChangeCurrentValue.bind(this);
        this.onChangeLastValue = this.onChangeLastValue.bind(this);
        this.onChangeEnergyUsedKw = this.onChangeEnergyUsedKw.bind(this);
        this.onChangeEnergyPrice = this.onChangeEnergyPrice.bind(this);
    }

    saveEnergy = (e) => {
        e.preventDefault();
        let energy = {
            currentValue: this.state.currentValue,
            lastValue: this.state.lastValue,
            energyUsedKw: this.state.energyUsedKw,
            energyPrice: this.state.energyPrice
        };
        EnergyApi.addEnergy(energy)
            .then(res => {
                this.props.history.push('/calculations');
            });

    };

    onChangeCurrentValue(e) {
        this.props.addCurrentValue(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }
    onChangeLastValue(e) {
        this.props.addLastValue(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }
    onChangeEnergyUsedKw(e) {
        this.props.addEnergyUsedKw(e.target.value);
        this.setState({[e.target.name]: this.state.currentValue - this.state.lastValue});
    }
    onChangeEnergyPrice(e){
        this.props.addEnergyPrice(e.target.value);
        this.setState({[e.target.name]: this.state.energyUsedKw * 1.68});
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <AddEnergy currentValue={this.state.currentValue}
                           lastValue={this.state.lastValue}
                           energyUsedKw={this.state.energyUsedKw}
                           energyPrice={this.state.energyPrice}

                           onChangeCurrentValue={this.onChangeCurrentValue}
                           onChangeLastValue={this.onChangeLastValue}
                           onChangeEnergyUsedKw={this.onChangeEnergyUsedKw}
                           onChangeEnergyPrice={this.onChangeEnergyPrice}

                           saveEnergy={this.saveEnergy}
                />
            </div>
        );
    }
}


export const mapStateToProps = (state) => ({
    currentDate: state.energyAdd.currentDate,
    currentValue: state.energyAdd.currentValue,
    lastValue: state.energyAdd.lastValue,
    energyUsedKw: state.energyAdd.energyUsedKw,
    energyPrice: state.energyAdd.energyPrice,
});

export const mapDispatchToProps = {
    addCurrentValue,
    addLastValue,
    addEnergyUsedKw,
    addEnergyPrice,
};


export default connect(mapStateToProps, mapDispatchToProps)(AddEnergyContainer)

