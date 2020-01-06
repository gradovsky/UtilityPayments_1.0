import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './EditEnergy.module.css'
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class EditEnergy extends Component {

    render() {
        return (
            <Container maxWidth='md' className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Редагувати показники</Typography>
                <form>
                    <TextField label="Поточний показник"
                               color='secondary'
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
                               color='secondary'
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


export default EditEnergy;