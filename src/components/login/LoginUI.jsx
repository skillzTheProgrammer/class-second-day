import React, { Component } from 'react';
import Login from './Login';
import { database } from '../../database/database';
import { ViewOnLog } from '../../globals';

class LoginUI extends Login {
    render() {
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
                    <label>Email</label><input   /> <br />
                    <label>password</label><input  /> <br />
                    <p id="error" style={stylesheet.error}> </p>
                    <button style={stylesheet.button} onClick={this.handleSignUp}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default LoginUI;
