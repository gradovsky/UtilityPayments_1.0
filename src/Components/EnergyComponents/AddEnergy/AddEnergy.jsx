import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './AddEnergy.module.css'

class AddUserComponent extends React.Component {

    render() {
        return (
            <div className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Додати показники</Typography>
                <form className={s.formContainer}>

                    <TextField type="number" placeholder="Поточний показник" fullWidth margin="normal"
                               name="currentValue"
                               value={this.props.currentValue} onChange={this.props.onChangeCurrentValue}/>

                    <TextField type="number" placeholder="Останній показник" fullWidth margin="normal" name="lastValue"
                               value={this.props.lastValue} onChange={this.props.onChangeLastValue}/>

                    <TextField type="number" placeholder="Використано електроенергії,кВт" fullWidth margin="normal"
                               name="energyUsedKw"
                               value={this.props.energyUsedKw} onClick={this.props.onChangeEnergyUsedKw}/>

                    <TextField type="number" placeholder="Вартість електроенергії" fullWidth margin="normal"
                               name="energyPrice"
                               value={this.props.energyPrice} onClick={this.props.onChangeEnergyPrice}/>

                    <TextField type="number" placeholder="Кількість днів в місяці" fullWidth margin="normal"
                               name="countDaysInMonth"
                               value={this.props.countDaysInMonth} onChange={this.props.onChangeCountDaysInMonth}/>

                    <TextField type="number" placeholder="Вартість електроенергії за 1 день, грн" fullWidth
                               margin="normal" name="energyPriceOneDay"
                               value={this.props.energyPriceOneDay}
                               onClick={this.props.onChangeEnergyPriceOneDay}/>

                    <Button variant="contained" color="primary" onClick={this.props.saveEnergy}>Зберегти
                        показники</Button>
                </form>
            </div>
        );
    }
}



export default AddUserComponent;

