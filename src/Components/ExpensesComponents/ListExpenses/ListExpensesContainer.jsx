import React from 'react'
import {ExpenseApi} from "../../../ApiService/ApiService";
import ListExpenses from "./ListExpenses";

class ListExpensesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expense: [],
        };
        this.deleteExpense = this.deleteExpense.bind(this);
        this.editExpense = this.editExpense.bind(this);
        this.addExpense = this.addExpense.bind(this);
        this.reloadReceiptList = this.reloadReceiptList.bind(this);
    };

    componentDidMount() {
        this.reloadReceiptList();
    };



    reloadReceiptList() {
        ExpenseApi.fetchExpense()
            .then((res) => {
                this.setState({expense: res.data})
            });
    };

    deleteExpense(expenseId) {
        ExpenseApi.deleteExpense(expenseId)
            .then(res => {
                this.setState({expense: this.state.expense.filter(expense => expense.id !== expenseId)});
            });
    };

    editExpense(id) {
        window.localStorage.setItem("expenseId", id);
        this.props.history.push('/edit-expense');
    }

    addExpense() {
        this.props.history.push('/add-expense');
    };



    render() {
console.log(this.state)
        return (

            <div>
                <ListExpenses state={this.state}
                              addExpense={this.addExpense}
                              editExpense={this.editExpense}
                              deleteExpense={this.deleteExpense}
                />
            </div>
        );
    };
};

export default ListExpensesContainer;