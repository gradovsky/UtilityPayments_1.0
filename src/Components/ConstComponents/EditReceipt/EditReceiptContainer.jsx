import React from 'react'
import {ReceiptApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import EditReceipt from "./EditReceipt";

class EditReceiptContainer extends React.Component {

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
            totalAmount: ''

        };
        this.saveReceipt = this.saveReceipt.bind(this);
        this.loadReceipt = this.loadReceipt.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeTotalAmount = this.onChangeTotalAmount.bind(this);
    }

    componentDidMount() {
        this.loadReceipt();
    }

    loadReceipt() {
        ReceiptApi.fetchReceiptById(window.localStorage.getItem("receiptId"))
            .then((res) => {
                this.setState({
                    id: res.data.id,
                    centralHeating: res.data.centralHeating,
                    keepingTheBuilding: res.data.keepingTheBuilding,
                    water: res.data.water,
                    cleaning: res.data.cleaning,
                    internet: res.data.internet,
                    cleaningProducts: res.data.cleaningProducts,
                    totalAmount: res.data.totalAmount
                })
            });
    }

    saveReceipt = (e) => {
        e.preventDefault();
        let receipt = {
            id: this.state.id,
            centralHeating: this.state.centralHeating,
            keepingTheBuilding: this.state.keepingTheBuilding,
            water: this.state.water,
            internet: this.state.internet,
            cleaning: this.state.cleaning,
            cleaningProducts: this.state.cleaningProducts,
            totalAmount: this.state.totalAmount
        };
        ReceiptApi.editReceipt(receipt)
            .then(res => {
                this.props.history.push('/calculations');
            });
    };

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value});

    onChangeTotalAmount(e) {

        this.setState({
            [e.target.name]:
            +this.state.centralHeating +
            +this.state.keepingTheBuilding +
            +this.state.water +
            +this.state.cleaning +
            +this.state.cleaningProducts
        });
    }

    render() {

        return (
            <EditReceipt centralHeating={this.state.centralHeating}
                         keepingTheBuilding={this.state.keepingTheBuilding}
                         water={this.state.water}
                         cleaning={this.state.cleaning}
                         internet={this.state.internet}
                         cleaningProducts={this.state.cleaningProducts}
                         totalAmount={this.state.totalAmount}

                         saveReceipt={this.saveReceipt}
                         onChange={this.onChange}
                         onChangeTotalAmount={this.onChangeTotalAmount}
            />
        );
    }
}


export const mapStateToProps = (state) => ({
    centralHeating: state.receiptAdd.centralHeating,
    keepingTheBuilding: state.receiptAdd.keepingTheBuilding,
    water: state.receiptAdd.water,
    cleaning: state.receiptAdd.cleaning,
    internet: state.receiptAdd.internet,
    cleaningProducts: state.receiptAdd.cleaningProducts,
    totalAmount: state.receiptAdd.totalAmount
});

export default connect(mapStateToProps)(EditReceiptContainer)