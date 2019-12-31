import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './EditEnergy.module.css'

class EditUser extends Component {
    render() {
        return (
            <div className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Редагувати резидента</Typography>
                <form>
                    <TextField type="text" placeholder="Ім'я" fullWidth margin="normal"
                               name="userName"
                               value={this.props.userName} onChange={this.props.onChange}/>

                    <TextField type="number" placeholder="Присутні дні" fullWidth margin="normal" name="daysPresent"
                               value={this.props.daysPresent} onChange={this.props.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.props.saveUser}>Зберегти
                        резидента</Button>
                </form>
            </div>
        );
    }
}

export default EditUser;