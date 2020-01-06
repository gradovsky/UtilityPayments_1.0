import React from 'react'
import {ExpensesApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import EditExpense from "./EditExpense";

class EditExpenseContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            centralHeating: '',
            keepingTheBuilding: '',
            water: '',
            cleaning: '',
            internet: '',
            cleaningProducts: '',
            totalAmountOfExpenses: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.loadExpense();
    }

    loadExpense() {
        ExpensesApi.fetchExpenseById(window.localStorage.getItem("expenseId"))
            .then((res) => {
                this.setState({
                    id: res.data.id,
                    centralHeating: res.data.centralHeating,
                    keepingTheBuilding: res.data.keepingTheBuilding,
                    water: res.data.water,
                    cleaning: res.data.cleaning,
                    internet: res.data.internet,
                    cleaningProducts: res.data.cleaningProducts,
                    totalAmountOfExpenses: res.data.totalAmountOfExpenses
                })
            });
    }

    saveExpense = (e) => {
        e.preventDefault();
        let expense = {
            id: this.state.id,
            centralHeating: this.state.centralHeating,
            keepingTheBuilding: this.state.keepingTheBuilding,
            water: this.state.water,
            internet: this.state.internet,
            cleaning: this.state.cleaning,
            cleaningProducts: this.state.cleaningProducts,
            totalExpenses:
                +this.state.centralHeating +
                +this.state.keepingTheBuilding +
                +this.state.water +
                +this.state.internet +
                +this.state.cleaning +
                +this.state.cleaningProducts
        };
        ExpensesApi.editExpense(expense)
            .then(res => {
                this.props.history.push('/');
            });
    };

    backHome = () => {
        this.props.history.push('/');
    };

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value});


    render() {
        return (
            <EditExpense centralHeating={this.state.centralHeating}
                         keepingTheBuilding={this.state.keepingTheBuilding}
                         water={this.state.water}
                         cleaning={this.state.cleaning}
                         internet={this.state.internet}
                         cleaningProducts={this.state.cleaningProducts}
                         saveExpense={this.saveExpense}
                         backHome={this.backHome}
                         onChange={this.onChange}
            />
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

export default connect(mapStateToProps)(EditExpenseContainer)