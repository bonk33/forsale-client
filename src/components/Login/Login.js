import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { requestWithCSRF } from '../../utils/resquests';
import { loginEndpoint } from '../../utils/authEndpoints';
import './Login.css';


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            failed: false,
            fireRedirect: false
        }

        this.handleUsernameField = this.handleUsernameField.bind(this);
        this.handlePasswordField = this.handlePasswordField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameField(event) {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordField(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event) {
        const data = {
            username: this.state.username, 
            password: this.state.password
        }
        event.preventDefault();
        requestWithCSRF.post(loginEndpoint, data)
            .then((response) => {
                const AUTHTOKEN = response.data.key;
                console.log("success", AUTHTOKEN);
                localStorage.setItem('AUTHTOKEN', AUTHTOKEN)
                this.props.setLogin();
                this.setState({
                    username: '',
                    password: '',
                    fireRedirect: true
                });
                
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    failed: true
                })
            })
    }

    render() {
        const { from } = '/login';
        const { fireRedirect, failed } = this.state
        return (
            <div className="login-page">
                {failed && <div className="login-error">Login failed</div>}
                <h1>Login</h1>
                <form className="login-form"onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input className="login-form-input" onChange={this.handleUsernameField} type="text" name="username" value={this.state.username} />
                    <label>Password</label>
                    <input className="login-form-input" onChange={this.handlePasswordField} type="password" name="password" value={this.state.password} />
                    <input className="login-button" type="submit" value="Login" /> 
                </form>
                {fireRedirect && (
                    <Redirect to={from || '/'} />
                )}
            </div>           
        )
    }
}
