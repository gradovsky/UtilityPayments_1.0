import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './EditReceipt.module.css'

class EditReceipt extends Component {
    render() {

        return (
            <div className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Редагувати витрати</Typography>
                <form>

                    <TextField type="number" placeholder="Поточний показник" fullWidth margin="normal"
                               name="centralHeating"
                               value={this.props.centralHeating} onChange={this.props.onChange}/>

                    <TextField type="number" placeholder="Утримання будинку" fullWidth margin="normal" name="keepingTheBuilding"
                               value={this.props.keepingTheBuilding} onChange={this.props.onChange}/>

                    <TextField type="number" placeholder="Вода" fullWidth margin="normal"
                               name="water"
                               value={this.props.water} onChange={this.props.onChange}/>

                    <TextField type="number" placeholder="Прибирання" fullWidth margin="normal"
                               name="cleaning"
                               value={this.props.cleaning} onChange={this.props.onChange}/>

                    <TextField type="number" placeholder="Інтернет" fullWidth margin="normal"
                               name="internet"
                               value={this.props.internet} onChange={this.props.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.props.saveReceipt}>Зберегти
                        витрати</Button>
                </form>
            </div>
        );
    }
}



export default EditReceipt;