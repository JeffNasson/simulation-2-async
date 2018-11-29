import React, {Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom';



export default class Wizard extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div className='wizard-base-child'>
                    <div className='wizard-base-left'></div>
                    <div className='wizard-base-center'>
                        <div className='add-new-listing-cancel-button'>
                            <h1>Add New Listing</h1>
                            <button>Cancel</button>
                        </div>
                    </div>
                    <div className='wizard-base-right'></div>
                </div>
        )
    }
}