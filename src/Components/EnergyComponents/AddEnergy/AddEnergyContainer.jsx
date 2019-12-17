import React from 'react'
import {EnergyApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import AddEnergy from "./AddEnergy";
import {
    addCountDaysInMonth,
    addCurrentValue,
    addEnergyPrice,
    addEnergyPriceOneDay,
    addEnergyUsedKw,
    addLastValue
} from "../../../redux/energy-reducer";

class AddEnergyContainer extends React.Component {

    constructor(props) {
        super(props);

        this.saveEnergy = this.saveEnergy.bind(this);
        this.onChangeCurrentValue = this.onChangeCurrentValue.bind(this);
        this.onChangeLastValue = this.onChangeLastValue.bind(this);
        this.onChangeEnergyUsedKw = this.onChangeEnergyUsedKw.bind(this);
        this.onChangeEnergyPrice = this.onChangeEnergyPrice.bind(this);
        this.onChangeEnergyPriceOneDay = this.onChangeEnergyPriceOneDay.bind(this);
        this.onChangeCountDaysInMonth = this.onChangeCountDaysInMonth.bind(this);
    }

    saveEnergy = (e) => {
        e.preventDefault();
        let energy = {
            currentValue: this.props.currentValue,
            lastValue: this.props.lastValue,
            energyUsedKw: this.props.energyUsedKw,
            energyPrice: this.props.energyPrice,
            countDaysInMonth: this.props.countDaysInMonth,
            energyPriceOneDay: this.props.energyPriceOneDay
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
        this.setState({[e.target.name]: e.target.value});
    }
    onChangeEnergyPrice(e){
        this.props.addEnergyPrice(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }
    onChangeCountDaysInMonth(e){
        this.props.addCountDaysInMonth(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }
    onChangeEnergyPriceOneDay(e){
        this.props.addEnergyPriceOneDay(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        return (
            <div>
                <AddEnergy currentValue={this.props.currentValue}
                           lastValue={this.props.lastValue}
                           energyUsedKw={this.props.energyUsedKw}
                           energyPrice={this.props.energyPrice}
                           countDaysInMonth={this.props.countDaysInMonth}
                           energyPriceOneDay={this.props.energyPriceOneDay}
                           onChangeCurrentValue={this.onChangeCurrentValue}
                           onChangeLastValue={this.onChangeLastValue}
                           onChangeEnergyUsedKw={this.onChangeEnergyUsedKw}
                           onChangeEnergyPrice={this.onChangeEnergyPrice}
                           onChangeCountDaysInMonth={this.onChangeCountDaysInMonth}
                           onChangeEnergyPriceOneDay={this.onChangeEnergyPriceOneDay}
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
    countDaysInMonth: state.energyAdd.countDaysInMonth,
    energyPriceOneDay: state.energyAdd.energyPriceOneDay
});

export const mapDispatchToProps = {
    addCurrentValue,
    addLastValue,
    addEnergyUsedKw,
    addEnergyPrice,
    addCountDaysInMonth,
    addEnergyPriceOneDay
};


export default connect(mapStateToProps, mapDispatchToProps)(AddEnergyContainer)

