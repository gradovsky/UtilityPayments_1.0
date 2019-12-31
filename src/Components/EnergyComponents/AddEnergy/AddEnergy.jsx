import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './AddEnergy.module.css'
import {Container} from "@material-ui/core";
import LinkButton from "../../../AppNavigation/LinkButton";

class AddUserComponent extends React.Component {

    render() {
        return (
            <Container className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Додати показники</Typography>
                <form className={s.formContainer}>
                    <TextField type="number"
                               variant="outlined"
                               label="Поточний показник"
                               fullWidth margin="normal"
                               name="currentValue"
                               value={this.props.currentValue}
                               onChange={this.props.onChangeCurrentValue}/>

                    <TextField type="number"
                               variant="outlined"
                               label="Останній показник"
                               fullWidth margin="normal"
                               name="lastValue"
                               value={this.props.lastValue}
                               onChange={this.props.onChangeLastValue}/>

                    <div className={s.centerBtn}>
                        <p><Button variant="contained" color="primary" onClick={this.props.saveEnergy}>Зберегти</Button></p>
                        <LinkButton to='/'>Назад</LinkButton>
                    </div>


                </form>
            </Container>
        );
    }
}

export default AddUserComponent;

