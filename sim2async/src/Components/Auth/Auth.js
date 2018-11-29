import React, {Component} from 'react';

import HouseLogo from '../../images/assets/auth_logo.png';

export default class Auth extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div className='auth-parent'>
                <div className='auth-child'>
                    <div className='auth-child-left'></div>
                    <div className='auth-child-center'>
                        <img className='auth-house-logo' src={HouseLogo} />
                        <div className='username-password-inputs'>
                            <h1>Username</h1><input className='username-input' type='text' />
                            <h1>Password</h1><input className='password-input' type='text' />
                        </div>
                        <div className='auth-login-register-buttons'>
                            <button className='auth-login-button'>Login</button>
                            <button className='auth-register-button'>Register</button>
                        </div>
                    </div>
                    <div className='auth-child-right'></div> 
                </div>
            </div>
        )
    }
}