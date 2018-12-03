import React, {Component} from 'react';
import axios from 'axios';

import HouseLogo from '../../images/assets/auth_logo.png';

export default class Auth extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: '',
            loggedIn: '',
            error: ''
        }
        this.addUsername=this.addUsername.bind(this);
        this.addPassword=this.addPassword.bind(this);
        this.registerUser=this.registerUser.bind(this);
        this.loginUser=this.loginUser.bind(this);
    }

    registerUser(){
        let {username,password} = this.state
        axios.post(`/api/register`,{username,password})
             .then(()=>alert('Successfully Registered!')||window.location.assign('/#/dashboard')) 
    }

    loginUser() {
        const {username, password} = this.state
        if(username && password) {
          axios.post('/api/login', {username: username.toLowerCase(), password: password}).then(res => {
            console.log(res.data)
            if (res.data.length !== 0) {
                        this.setState({ error: res.data })
                    } else {
                        alert('Successfully Logged In!')||window.location.assign('/#/dashboard')
                    }
          })
        } else {
          this.setState({error: 'Please fill in both fields'})
        }
      }

    addUsername(val){
        this.setState({username:val})
    }
    addPassword(val){
        this.setState({password:val})
    }



    render(){
        return(
            <div className='auth-parent'>
                <div className='auth-child'>
                    <div className='auth-child-left'></div>
                    <div className='auth-child-center'>
                        <img className='auth-house-logo' src={HouseLogo} />
                        <div className='username-password-inputs'>
                            <h1>Username</h1><input className='username-input' type='text' value={this.state.username} onChange={(event)=>{this.addUsername(event.target.value)}} />
                            <h1>Password</h1><input className='password-input' type='text' value={this.state.password} onChange={(event)=>{this.addPassword(event.target.value)}} />
                        </div>
                        <div className='auth-login-register-buttons'>
                            <button onClick={()=>this.loginUser()} className='auth-login-button'>Login</button>
                            <button onClick={this.registerUser} className='auth-register-button'>Register</button>
                        </div>
                    </div>
                    <div className='auth-child-right'></div> 
                </div>
            </div>
        )
    }
}