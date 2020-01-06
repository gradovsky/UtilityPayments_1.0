import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './AddUser.module.css'
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class AddUser extends React.Component {

    render() {
        return (
            <Container maxWidth='md' className={s.marginTop}>
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


export default AddUser;

