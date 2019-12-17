import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './AddReceipt.module.css'
import TableCell from "@material-ui/core/TableCell";

class AddReceipt extends React.Component {

    render() {
        return (
            <div className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Додати витрати</Typography>
                <form className={s.formContainer}>

                    <TextField type="number" placeholder="Центральне опалення" fullWidth margin="normal"
                               name="centralHeating"
                               value={this.props.centralHeating} onChange={this.props.onChangeCentralHeating}/>

                    <TextField type="number" placeholder="Утримання будинку" fullWidth margin="normal"
                               name="keepingTheBuilding"
                               value={this.props.keepingTheBuilding} onChange={this.props.onChangeKeepingTheBuilding}/>

                    <TextField type="number" placeholder="Вода" fullWidth margin="normal"
                               name="water"
                               value={this.props.water} onChange={this.props.onChangeWater}/>

                    <TextField type="number" placeholder="Прибирання" fullWidth margin="normal"
                               name="cleaning"
                               value={this.props.cleaning} onChange={this.props.onChangeCleaning}/>

                    <TextField type="number" placeholder="Інтернет" fullWidth margin="normal"
                               name="internet"
                               value={this.props.internet} onChange={this.props.onChangeInternet}/>

                    <TextField type="number" placeholder="Засоби для прибирання" fullWidth margin="normal"
                               name="cleaningProducts"
                               value={this.props.cleaningProducts} onChange={this.props.onChangeCleaningProducts}/>


                    <Button variant="contained" color="primary" onClick={this.props.saveReceipt}>Зберегти
                        витрати</Button>
                </form>
            </div>
        );
    }
}


export default AddReceipt;

