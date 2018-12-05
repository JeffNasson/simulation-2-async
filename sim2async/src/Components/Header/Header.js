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
        // console.log(this.props)
        axios.post(`/api/logout`)
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
                    <Link to='/dashboard'><button className='dashboard'>Dashboard</button></Link>
                </div>
                <div className='logout-parent'>
                    <button onClick={this.logout} className='logout-text'>Logout</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);