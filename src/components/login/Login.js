import React, { Component } from 'react';
import { ViewOnLog } from '../../globals';
import { database } from '../../database/database';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {
                // email: '',
                // password: ''
            }
        }
    }
    handleInputChange = theState => (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [theState]: event.target.value
            }
        })
        ViewOnLog(this.state);
    }

    handleSignIn = (e) => {
        e.preventDefault()
        ViewOnLog("database",database)
        const error = document.getElementById('error');
        const { email, password } = this.state.user;
        function emptyError(){
            error.textContent = ""
        }
        if(!email || !password){
            setTimeout(emptyError,4000)
            error.innerHTML = "All fields are required";
        }else {
           const confirmedUser = database.filter(userObj=>userObj.email === email && userObj.username === password)
           ViewOnLog("confirmed user",confirmedUser.length)
           ViewOnLog(this.props)
           if (confirmedUser.length === 1){
               this.props.history.push(`/dashboard/${confirmedUser[0].username}`)
           }else{
               setTimeout(emptyError,4000)
               error.textContent = "User does not exist"
           }

           
        }
        
    }

}

export default Login;
