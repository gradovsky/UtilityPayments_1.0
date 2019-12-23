import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './AddUser.module.css'

class AddUser extends React.Component {

    render() {
        return (
            <div className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Новий резидент</Typography>
                <form className={s.formContainer}>

                    <TextField type="text" placeholder="Ім'я" fullWidth margin="normal"
                               name="userName"
                               value={this.props.userName} onChange={this.props.onChangeUserName}/>

                    <TextField type="number" placeholder="Присутні дні" fullWidth margin="normal"
                               name="daysPresent"
                               value={this.props.daysPresent} onChange={this.props.onChangeDaysPresent}/>

                    <TextField type="number" placeholder="Сума за електроенергію" fullWidth margin="normal"
                               name="priceForEnergy"
                               value={this.props.priceForEnergy} onChange={this.props.onChangePriceForEnergy}/>

                    <TextField type="number" placeholder="CONST" fullWidth margin="normal"
                               name="consta"
                               value={this.props.consta} onChange={this.props.onChangeConsta}/>

                    <TextField type="number" placeholder="До оплати" fullWidth margin="normal"
                               name="toPay"
                               value={this.props.toPay} onChange={this.props.onChangeToPay}/>


                    <Button variant="contained" color="primary" onClick={this.props.saveUser}>Додати
                        резидент</Button>
                </form>
            </div>
        );
    }
}


export default AddUser;

