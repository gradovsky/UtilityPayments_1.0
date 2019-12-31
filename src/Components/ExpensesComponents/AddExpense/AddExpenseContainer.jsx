import React from 'react'
import {ExpenseApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import {
    addCentralHeating,
    addCleaning,
    addCleaningProducts,
    addInternet,
    addKeepingTheBuilding,
    addWater
} from "../../../redux/expenses-reducer";
import AddExpense from "./AddExpense";

class AddExpenseContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.saveExpense = this.saveExpense.bind(this);
        this.onChangeCentralHeating = this.onChangeCentralHeating.bind(this);
        this.onChangeKeepingTheBuilding = this.onChangeKeepingTheBuilding.bind(this);
        this.onChangeWater = this.onChangeWater.bind(this);
        this.onChangeCleaning = this.onChangeCleaning.bind(this);
        this.onChangeInternet = this.onChangeInternet.bind(this);
        this.onChangeCleaningProducts = this.onChangeCleaningProducts.bind(this);
    }

    saveExpense = (e) => {
        e.preventDefault();
        let expenses = {
            id: this.props.id,
            centralHeating: this.props.centralHeating,
            keepingTheBuilding: this.props.keepingTheBuilding,
            water: this.props.water,
            cleaning: this.props.cleaning,
            internet: this.props.internet,
            cleaningProducts: this.props.cleaningProducts,
            totalAmountOfExpenses: this.props.totalAmountOfExpenses
        };
        ExpenseApi.addExpense(expenses)
            .then(res => {
                this.props.history.push('/');
            });

    };

    onChangeCentralHeating(e) {
        this.props.addCentralHeating(e.target.value);
    }

    onChangeKeepingTheBuilding(e) {
        this.props.addKeepingTheBuilding(e.target.value);
    }

    onChangeWater(e) {
        this.props.addWater(e.target.value);
    }

    onChangeCleaning(e) {
        this.props.addCleaning(e.target.value);
    }

    onChangeInternet(e) {
        this.props.addInternet(e.target.value);
    }
    onChangeCleaningProducts(e) {
        this.props.addCleaningProducts(e.target.value);

    }

    render() {
        return (
            <div>
                <AddExpense centralHeating={this.state.centralHeating}
                            keepingTheBuilding={this.state.keepingTheBuilding}
                            water={this.state.water}
                            cleaning={this.state.cleaning}
                            internet={this.state.internet}
                            cleaningProducts={this.state.cleaningProducts}

                            onChangeCentralHeating={this.onChangeCentralHeating}
                            onChangeKeepingTheBuilding={this.onChangeKeepingTheBuilding}
                            onChangeWater={this.onChangeWater}
                            onChangeCleaning={this.onChangeCleaning}
                            onChangeInternet={this.onChangeInternet}
                            onChangeCleaningProducts={this.onChangeCleaningProducts}
                            saveExpense={this.saveExpense}
                />
            </div>
        );
    }
}


export const mapStateToProps = (state) => ({
    centralHeating: state.expensesAdd.centralHeating,
    keepingTheBuilding: state.expensesAdd.keepingTheBuilding,
    water: state.expensesAdd.water,
    cleaning: state.expensesAdd.cleaning,
    internet: state.expensesAdd.internet,
    cleaningProducts: state.expensesAdd.cleaningProducts,
    totalAmountOfExpenses: state.expensesAdd.totalAmountOfExpenses
});

export const mapDispatchToProps = {
    addCentralHeating,
    addKeepingTheBuilding,
    addWater,
    addCleaning,
    addInternet,
    addCleaningProducts,
};


export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseContainer)

