import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './AddEnergy.module.css'
import {Container} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class AddUserComponent extends React.Component {

    render() {
        return (
            <Container maxWidth='lg' className={s.marginTop}>
                <Typography variant="h4" className={s.text}>Додати показники</Typography>
                <form className={s.formContainer}>
                    <TextField label="Поточний показник"
                               id="outlined-start-adornment"
                               fullWidth margin="normal"
                               InputProps={{
                                   startAdornment: <InputAdornment position="start">кВт</InputAdornment>,
                               }}
                               variant="outlined"
                               name="currentValue"
                               value={this.props.currentValue}
                               onChange={this.props.onChangeCurrentValue}/>


                    <TextField label="Останній показник"
                               id="outlined-start-adornment"
                               fullWidth margin="normal"
                               InputProps={{
                                   startAdornment: <InputAdornment position="start">кВт</InputAdornment>,
                               }}
                               variant="outlined"
                               name="lastValue"
                               value={this.props.lastValue}
                               onChange={this.props.onChangeLastValue}/>

                    <div className={s.centerBtn}>
                        <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
                            <Button onClick={this.props.saveEnergy}>Зберегти</Button>
                            <Button onClick={this.props.backHome}>Назад</Button>
                        </ButtonGroup>
                    </div>


                </form>
            </Container>
        );
    }
}

export default AddUserComponent;

