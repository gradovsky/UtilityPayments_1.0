import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './EditEnergy.module.css'

class EditEnergy extends Component {

    render() {
        return (
            <div className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Редагувати показники</Typography>
                <form>

                    <TextField type="number" placeholder="Поточний показник" fullWidth margin="normal"
                               name="currentValue"
                               value={this.props.currentValue} onChange={this.props.onChange}/>

                    <TextField type="number" placeholder="Останній показник" fullWidth margin="normal" name="lastValue"
                               value={this.props.lastValue} onChange={this.props.onChange}/>

                    <TextField type="number" placeholder="Використано електроенергії,кВт" fullWidth margin="normal"
                               name="energyUsedKw"
                               value={this.props.energyUsedKw} onClick={this.props.onChangeEnergyUsedKw}/>

                    <TextField type="number" placeholder="Вартість електроенергії" fullWidth margin="normal"
                               name="energyPrice"
                               value={this.props.energyPrice} onClick={this.props.onChangeEnergyPrice}/>


                    <Button variant="contained" color="primary" onClick={this.props.saveEnergy}>Зберегти
                        показники</Button>
                </form>
            </div>
        );
    }
}


export default EditEnergy;