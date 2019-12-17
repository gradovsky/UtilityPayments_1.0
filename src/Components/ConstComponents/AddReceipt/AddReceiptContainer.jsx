import React from 'react'
import {ReceiptApi} from "../../../ApiService/ApiService";
import {connect} from "react-redux";
import {
    addCentralHeating,
    addCleaning, addCleaningProducts,
    addInternet,
    addKeepingTheBuilding,
    addWater
} from "../../../redux/receipt-reducer";
import AddReceipt from "./AddReceipt";

class AddReceiptContainer extends React.Component {

    constructor(props) {
        super(props);

        this.saveReceipt = this.saveReceipt.bind(this);
        this.onChangeCentralHeating = this.onChangeCentralHeating.bind(this);
        this.onChangeKeepingTheBuilding = this.onChangeKeepingTheBuilding.bind(this);
        this.onChangeWater = this.onChangeWater.bind(this);
        this.onChangeCleaning = this.onChangeCleaning.bind(this);
        this.onChangeInternet = this.onChangeInternet.bind(this);
        this.onChangeCleaningProducts = this.onChangeCleaningProducts.bind(this);
    }

    saveReceipt = (e) => {
        e.preventDefault();
        let receipts = {
            id: this.props.id,
            centralHeating: this.props.centralHeating,
            keepingTheBuilding: this.props.keepingTheBuilding,
            water: this.props.water,
            cleaning: this.props.cleaning,
            internet: this.props.internet,
            cleaningProducts: this.props.cleaningProducts
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

    render() {

        return (
            <div>
                <AddReceipt centralHeating={this.props.centralHeating}
                            keepingTheBuilding={this.props.keepingTheBuilding}
                            water={this.props.water}
                            cleaning={this.props.cleaning}
                            internet={this.props.internet}
                            cleaningProducts={this.props.cleaningProducts}

                            onChangeCentralHeating={this.onChangeCentralHeating}
                            onChangeKeepingTheBuilding={this.onChangeKeepingTheBuilding}
                            onChangeWater={this.onChangeWater}
                            onChangeCleaning={this.onChangeCleaning}
                            onChangeInternet={this.onChangeInternet}
                            onChangeCleaningProducts={this.onChangeCleaningProducts}
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
    cleaningProducts: state.receiptAdd.cleaningProducts
});

export const mapDispatchToProps = {
    addCentralHeating,
    addKeepingTheBuilding,
    addWater,
    addCleaning,
    addInternet,
    addCleaningProducts
};


export default connect(mapStateToProps, mapDispatchToProps)(AddReceiptContainer)

