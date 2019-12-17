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
            internet: ''
        };
        this.saveReceipt = this.saveReceipt.bind(this);
        this.loadReceipt = this.loadReceipt.bind(this);
        this.onChange = this.onChange.bind(this);
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
                    internet: res.data.internet
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
            cleaning: this.state.cleaning,
            internet: this.state.internet,
        };
        ReceiptApi.editReceipt(receipt)
            .then(res => {
                this.props.history.push('/calculations');
            });
    };

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value});


    render() {

        return (
            <EditReceipt centralHeating={this.state.centralHeating}
                         keepingTheBuilding={this.state.keepingTheBuilding}
                         water={this.state.water}
                         cleaning={this.state.cleaning}
                         internet={this.state.internet}
                         saveReceipt={this.saveReceipt}
                         onChange={this.onChange}
            />
        );
    }
}


export const mapStateToProps = (state) => ({
    centralHeating: state.receiptAdd.centralHeating,
    keepingTheBuilding: state.receiptAdd.keepingTheBuilding,
    water: state.receiptAdd.water,
    cleaning: state.receiptAdd.cleaning,
    internet: state.receiptAdd.internet
});


export default connect(mapStateToProps)(EditReceiptContainer)