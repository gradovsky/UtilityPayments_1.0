import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './EditExpense.module.css'
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class EditExpense extends Component {
    render() {

        return (
            <Container maxWidth='md' className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Редагувати витрати</Typography>
                <form>

                    <TextField type="number"
                               color='secondary'
                               variant="outlined"
                               label="Центральне опалення"
                               fullWidth margin="normal"
                               name="centralHeating"
                               value={this.props.centralHeating}
                               onChange={this.props.onChange}/>

                    <TextField type="number"
                               color='secondary'
                               variant="outlined"
                               label="Утримання будинку"
                               fullWidth margin="normal"
                               name="keepingTheBuilding"
                               value={this.props.keepingTheBuilding}
                               onChange={this.props.onChange}/>

                    <TextField type="number"
                               color='secondary'
                               variant="outlined"
                               label="Вода"
                               fullWidth margin="normal"
                               name="water"
                               value={this.props.water}
                               onChange={this.props.onChange}/>

                    <TextField type="number"
                               color='secondary'
                               variant="outlined"
                               label="Прибирання"
                               fullWidth margin="normal"
                               name="cleaning"
                               value={this.props.cleaning}
                               onChange={this.props.onChange}/>

                    <TextField type="number"
                               variant="outlined"
                               label="Інтернет"
                               fullWidth margin="normal"
                               name="internet"
                               value={this.props.internet}
                               onChange={this.props.onChange}/>

                    <TextField type="number"
                               color='secondary'
                               variant="outlined"
                               label="Засоби для прибирання"
                               fullWidth margin="normal"
                               name="cleaningProducts"
                               value={this.props.cleaningProducts}
                               onChange={this.props.onChange}/>

                    <div className={s.centerBtn}>
                        <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
                            <Button onClick={this.props.saveExpense}>Зберегти</Button>
                            <Button onClick={this.props.backHome}>Назад</Button>
                        </ButtonGroup>
                    </div>
                </form>
            </Container>
        );
    }
}


export default EditExpense;