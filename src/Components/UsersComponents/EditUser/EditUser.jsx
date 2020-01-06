import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './EditUser.module.css'
import {Container} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class EditUser extends Component {
    render() {
        return (
            <Container maxWidth='md' className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Редагувати жителя</Typography>
                <form>
                    <TextField
                        color='secondary'
                        type="text"
                        variant="outlined"
                        label="Ім'я"
                        name="userName"
                        fullWidth margin="normal"
                        value={this.props.userName}
                        onChange={this.props.onChange}/>

                    <TextField
                        color='secondary'
                        type="number"
                        variant="outlined"
                        label="Присутні дні"
                        name="daysPresent"
                        fullWidth margin="normal"
                        value={this.props.daysPresent}
                        onChange={this.props.onChange}/>


                    <div className={s.centerBtn}>
                        <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
                            <Button onClick={this.props.saveUser}>Зберегти</Button>
                            <Button onClick={this.props.backHome}>Назад</Button>
                        </ButtonGroup>
                    </div>


                </form>
            </Container>
        );
    }
}

export default EditUser;