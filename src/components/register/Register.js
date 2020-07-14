import React, { Component } from 'react';
import Axios from 'axios'

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            userData:{
                firstName:"",
                lastName:"",
                email:"",
                password:""
            }
            
        }
    }

    updateChange =toUpdate=>(e)=>{
        this.setState({
            userData:{
                ...this.state.userData,
                [toUpdate]:e.target.value
            }
        })
    }

    handleSignUp =(e)=>{
        e.preventDefault()
        const {firstName, lastName,email,password} = this.state.userData
        const errMessage = document.querySelector("#error")
        const isEmpty = firstName === "" || lastName === "" || email === "" || password === ""
        function emptyError(){
            errMessage.textContent = ""
        }
        if(!isEmpty){
           Axios("https://my-json-server.typicode.com/typicode/demo/posts",this.state.userData)
                .then(data=>console.log(data))
                .catch(err=>console.log(err)) 

        }else{
            setTimeout(emptyError,4000)
            errMessage.textContent = "Please Fill in Missing Fields"
            
        }
        console.log(isEmpty)
        console.log(this.state)
    }
}

export default Register;
