import React,{Component} from 'react';

import House from '../../images/assets/header_logo.png';

export default class Header extends Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div className='header-parent'>
                <div className='houser-header-textlogo'>
                    <img className='house-logo' src={House} />
                    <h1 className='houser-bold'>Houser</h1>
                    <h1 className='dashboard'>Dashboard</h1>
                </div>
                <div className='logout-parent'>
                    <h3 className='logout-text'>Logout</h3>
                </div>
            </div>
        )
    }
}