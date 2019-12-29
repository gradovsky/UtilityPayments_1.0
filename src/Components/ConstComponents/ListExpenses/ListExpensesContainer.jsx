import React from 'react'
import {ReceiptApi} from "../../../ApiService/ApiService";
import ListReceipts from "./ListReceipts";

class ListReceiptsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            receipt: [],
        };
        this.deleteReceipt = this.deleteReceipt.bind(this);
        this.editReceipt = this.editReceipt.bind(this);
        this.addExpense = this.addExpense.bind(this);
        this.reloadReceiptList = this.reloadReceiptList.bind(this);
    };

    componentDidMount() {
        this.reloadReceiptList();
    };

    reloadReceiptList() {
        ReceiptApi.fetchReceipt()
            .then((res) => {
                this.setState({receipt: res.data})
            });
    };

    deleteReceipt(receiptId) {
        ReceiptApi.deleteReceipt(receiptId)
            .then(res => {
                this.setState({receipt: this.state.receipt.filter(receipt => receipt.id !== receiptId)});
            });
    };

    editReceipt(id) {
        window.localStorage.setItem("receiptId", id);
        this.props.history.push('/edit-receipt');
    }

    addExpense() {
        this.props.history.push('/add-expense');
    };

    render() {
        return (
            <div>
                <ListReceipts state={this.state}
                              addExpense={this.addExpense}
                              editReceipt={this.editReceipt}
                              deleteReceipt={this.deleteReceipt}
                />
            </div>
        );
    };
};

export default ListReceiptsContainer;