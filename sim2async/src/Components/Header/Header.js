import React,{Component} from 'react';
import axios from 'axios';
import {Link,withRouter} from 'react-router-dom';

import House from '../../images/assets/header_logo.png';

class Header extends Component{
    constructor(){
        super()
        this.state={}
        this.logout=this.logout.bind(this);
    }

    logout(){
        console.log(this.props)
        axios.get(`/api/logout`)
             .then(res=>{
                 this.props.history.push(`/`)
             })
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
                    <h3 onClick={this.logout} className='logout-text'>Logout</h3>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);