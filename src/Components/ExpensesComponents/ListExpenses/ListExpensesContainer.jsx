import React from 'react'
import {ExpensesApi} from "../../../ApiService/ApiService";
import ListExpenses from "./ListExpenses";

class ListExpensesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
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
        ExpensesApi.fetchExpense()
            .then((res) => {
                this.setState({expenses: res.data})
            });
    };

    deleteExpense(expenseId) {
        ExpensesApi.deleteExpense(expenseId)
            .then(res => {
                this.setState({expenses: this.state.expenses.filter(expense => expense.id !== expenseId)});
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