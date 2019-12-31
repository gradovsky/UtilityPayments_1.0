import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './AddUser.module.css'
import Container from "@material-ui/core/Container";
import LinkButton from "../../../AppNavigation/LinkButton";


class AddUser extends React.Component {

    render() {
        return (
            <Container className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Додати жителя</Typography>
                <form className={s.formContainer}>

                    <TextField type="text"
                               variant="outlined"
                               label="Ім'я"
                               fullWidth margin="normal"
                               name="userName"
                               value={this.props.userName}
                               onChange={this.props.onChangeUserName}/>

                    <TextField type="text"
                               variant="outlined"
                               label="Присутні дні"
                               fullWidth margin="normal"
                               name="daysPresent"
                               value={this.props.daysPresent}
                               onChange={this.props.onChangeDaysPresent}/>

                    <div className={s.centerBtn}>
                        <p><Button variant="contained" color="primary" onClick={this.props.saveUser}>Зберегти</Button></p>

                        <LinkButton to='/'>Назад</LinkButton>
                    </div>
                </form>
            </Container>
        );
    }
}


export default AddUser;

