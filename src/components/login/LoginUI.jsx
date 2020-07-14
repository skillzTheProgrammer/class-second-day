import React, { Component } from 'react';
import Login from './Login';
import { database } from '../../database/database';
import { ViewOnLog } from '../../globals';

class LoginUI extends Login {

    render() {
        ViewOnLog(this.state);
        ViewOnLog(database)
        const stylesheet ={
            form:{
                width: 150,
                marginLeft: 20
            },
            button:{
                marginTop: 20,
                border: 0,
                padding: 10,
                backgroundColor: "red",
                color: "white"
            },
            error:{
                color:"red",
            }
        }
        return (
            <div>
                <h1>Login</h1>
                <form style={stylesheet.form} >
                    <label>Email</label><input onChange = {this.handleInputChange( 'email')} /> <br />
                    <label>password</label><input onChange= { this.handleInputChange( 'password')} /> <br />
                    <p id="error" style={stylesheet.error}> </p>
                    <button style={stylesheet.button} onClick={this.handleSignIn} >Sign in</button>
                </form>
            </div>
        );
    }
}

export default LoginUI;
