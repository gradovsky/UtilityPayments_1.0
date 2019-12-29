import React from 'react'
import {ReceiptApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import {
    addCentralHeating,
    addCleaning,
    addCleaningProducts,
    addInternet,
    addKeepingTheBuilding,
    addTotalAmountOfReceipts,
    addWater
} from "../../../redux/receipt-reducer";
import AddReceipt from "./AddReceipt";

class AddReceiptContainer extends React.Component {

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
        this.onChangeCentralHeating = this.onChangeCentralHeating.bind(this);
        this.onChangeKeepingTheBuilding = this.onChangeKeepingTheBuilding.bind(this);
        this.onChangeWater = this.onChangeWater.bind(this);
        this.onChangeCleaning = this.onChangeCleaning.bind(this);
        this.onChangeInternet = this.onChangeInternet.bind(this);
        this.onChangeCleaningProducts = this.onChangeCleaningProducts.bind(this);
        this.onChangeTotalAmount = this.onChangeTotalAmount.bind(this);
    }

    saveReceipt = (e) => {
        e.preventDefault();
        let receipts = {
            id: this.state.id,
            centralHeating: this.state.centralHeating,
            keepingTheBuilding: this.state.keepingTheBuilding,
            water: this.state.water,
            cleaning: this.state.cleaning,
            internet: this.state.internet,
            cleaningProducts: this.state.cleaningProducts,
            totalAmountOfReceipts: this.state.totalAmountOfReceipts
        };
        ReceiptApi.addReceipt(receipts)
            .then(res => {
                this.props.history.push('/calculations');
            });

    };

    onChangeCentralHeating(e) {
        this.props.addCentralHeating(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeKeepingTheBuilding(e) {
        this.props.addKeepingTheBuilding(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeWater(e) {
        this.props.addWater(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeCleaning(e) {
        this.props.addCleaning(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeInternet(e) {
        this.props.addInternet(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }
    onChangeCleaningProducts(e) {
        this.props.addCleaningProducts(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }
    onChangeTotalAmount(e) {
        this.props.addTotalAmountOfReceipts(e.target.value);
        this.setState({[e.target.name]: +this.state.centralHeating + +this.state.keepingTheBuilding + +this.state.water + +this.state.cleaning + +this.state.internet + +this.state.cleaningProducts});
    }




    render() {
        console.log(this.state)
        return (
            <div>
                <AddReceipt centralHeating={this.state.centralHeating}
                            keepingTheBuilding={this.state.keepingTheBuilding}
                            water={this.state.water}
                            cleaning={this.state.cleaning}
                            internet={this.state.internet}
                            cleaningProducts={this.state.cleaningProducts}
                            totalAmount={this.state.totalAmount}

                            onChangeCentralHeating={this.onChangeCentralHeating}
                            onChangeKeepingTheBuilding={this.onChangeKeepingTheBuilding}
                            onChangeWater={this.onChangeWater}
                            onChangeCleaning={this.onChangeCleaning}
                            onChangeInternet={this.onChangeInternet}
                            onChangeCleaningProducts={this.onChangeCleaningProducts}
                            onChangeTotalAmount={this.onChangeTotalAmount}
                            saveReceipt={this.saveReceipt}
                />
            </div>
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

export const mapDispatchToProps = {
    addCentralHeating,
    addKeepingTheBuilding,
    addWater,
    addCleaning,
    addInternet,
    addCleaningProducts,
    addTotalAmountOfReceipts
};


export default connect(mapStateToProps, mapDispatchToProps)(AddReceiptContainer)

