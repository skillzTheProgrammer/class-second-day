import React, { Component } from 'react';
import Register from './Register';
import { ViewOnLog } from '../../globals';

class RegisterMyUi extends Register {
    render() {
        const stylesheet ={
            form:{
                width: 210,
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
        ViewOnLog(this.state)
        return (
            <div >
                <h1>Register</h1>
                <form style={stylesheet.form} >
                    <label>First Name</label><input  onChange={this.updateChange("firstName")} /> <br />
                    <label>Last Name</label><input onChange={this.updateChange("lastName")} /> <br />
                    <label>Email</label><input onChange={this.updateChange("email")}  /> <br />
                    <label>password</label><input onChange={this.updateChange("password")} /> <br />
                    <p id="error" style={stylesheet.error}> </p>
                    <button style={stylesheet.button} onClick={this.handleSignUp}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default RegisterMyUi;
