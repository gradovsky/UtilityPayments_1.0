import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './AddExpense.module.css'
import Container from "@material-ui/core/Container";
import LinkButton from "../../../AppNavigation/LinkButton";

class AddExpense extends React.Component {

    render() {
        return (
            <Container className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Додати витрати</Typography>
                <form className={s.formContainer}>

                    <TextField type="number"
                               variant="outlined"
                               label="Центральне опалення"
                               fullWidth margin="normal"
                               name="centralHeating"
                               value={this.props.centralHeating}
                               onChange={this.props.onChangeCentralHeating}/>

                    <TextField type="number"

                               variant="outlined"
                               label="Утримання будинку"
                               fullWidth margin="normal"
                               name="keepingTheBuilding"
                               value={this.props.keepingTheBuilding}
                               onChange={this.props.onChangeKeepingTheBuilding}/>

                    <TextField type="number"
                               variant="outlined"
                               label="Вода"
                               fullWidth margin="normal"
                               name="water"
                               value={this.props.water}
                               onChange={this.props.onChangeWater}/>

                    <TextField type="number"

                               variant="outlined"
                               label="Прибирання"
                               fullWidth margin="normal"
                               name="cleaning"
                               value={this.props.cleaning}
                               onChange={this.props.onChangeCleaning}/>

                    <TextField type="number"
                               variant="outlined"
                               label="Інтернет"
                               fullWidth margin="normal"
                               name="internet"
                               value={this.props.internet}
                               onChange={this.props.onChangeInternet}/>

                    <TextField type="number"
                               variant="outlined"
                               label="Засоби для прибирання"
                               fullWidth margin="normal"
                               name="cleaningProducts"
                               value={this.props.cleaningProducts}
                               onChange={this.props.onChangeCleaningProducts}/>

                    <div className={s.centerBtn}>
                        <p><Button variant="contained" color="primary" onClick={this.props.saveExpense}>Зберегти</Button></p>
                        <LinkButton to='/'>Назад</LinkButton>
                    </div>
                </form>
            </Container>
        );
    }
}

export default AddExpense;

