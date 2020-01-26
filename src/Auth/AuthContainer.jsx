import React from 'react'
import s from './Auth.module.css'
import Button from "@material-ui/core/Button";
import Input from './../UI/Input/Input'
import is from 'is_js'

class Auth extends React.Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введіть коректний email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                
                label: 'Пароль',
                errorMessage: 'Введіть коректний пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };


    loginHandler = () => {

    };

    registerHandler = () => {

    };

    submitHandler = event => {
        event.preventDefault()
    };

    validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid

        }

        if (validation.minLength) {
            isValid = value.length  >= validation.minLength && isValid
        }


        return isValid
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value)
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls
        })
    };


    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input key={controlName + index}
                       type={control.type}
                       value={control.value}
                       valid={control.valid}
                       touched={control.touched}
                       label={control.label}
                       erroressage={control.errorMessage}
                       shouldValidate={!!control.validation}
                       onChange={event => this.onChangeHandler(event, controlName)}/>

            )
        })

    }

    render() {

        return (
            <div className={s.Auth}>

                <form onSubmit={this.submitHandler} className={s.AuthForm}>
                    <h1>Авторизація</h1>

                    {this.renderInputs()}

                    <Button variant="contained" color="secondary" onClick={this.loginHandler}>Ввійти</Button>
                    <Button variant="contained" color="primary" onClick={this.registerHandler}>Зареєструватися</Button>
                </form>
            </div>
        )
    }
}

export default Auth;