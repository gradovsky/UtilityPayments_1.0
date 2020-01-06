import React from 'react'
import {EnergyApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import AddEnergy from "./AddEnergy";
import {addCurrentValue, addEnergyPrice, addEnergyUsedKw, addLastValue} from "../../../redux/energy-reducer";

class AddEnergyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onChangeCurrentValue = this.onChangeCurrentValue.bind(this);
        this.onChangeLastValue = this.onChangeLastValue.bind(this);
    }

    saveEnergy = (e) => {
        e.preventDefault();
        let energy = {
            currentValue: this.props.currentValue,
            lastValue: this.props.lastValue,
            energyUsedKw: this.props.energyUsedKw,
            energyPrice: this.props.energyPrice
        };
        EnergyApi.addEnergy(energy)
            .then(res => {
                this.props.history.push('/');
            });
    };

    backHome = () => {
        this.props.history.push('/');
    };

    onChangeCurrentValue(e) {
        this.props.addCurrentValue(e.target.value);
        this.props.addEnergyUsedKw();
        this.props.addEnergyPrice();
    };

    onChangeLastValue(e) {
        this.props.addLastValue(e.target.value);
        this.props.addEnergyUsedKw();
        this.props.addEnergyPrice();
    };

    render() {
        return (
            <div>
                <AddEnergy currentValue={this.state.currentValue}
                           lastValue={this.state.lastValue}
                           onChangeCurrentValue={this.onChangeCurrentValue}
                           onChangeLastValue={this.onChangeLastValue}
                           saveEnergy={this.saveEnergy}
                           backHome={this.backHome}

                />
            </div>
        );
    }
}


export const mapStateToProps = (state) => ({
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

