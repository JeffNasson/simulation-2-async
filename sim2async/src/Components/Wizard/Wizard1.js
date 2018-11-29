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
                        <div className='wizard1-parent'>
                            <h3>Step 1</h3>
                            <div className='wizard1-dots'>
                                <div className='wizard1-background-dots1'></div>
                                <div className='wizard1-background-dots'></div>
                                <div className='wizard1-background-dots'></div>
                                <div className='wizard1-background-dots'></div>
                                <div className='wizard1-background-dots'></div>
                            </div>
                            <div className='wizard1-property-name-description'>
                                <h2>Property Name</h2><input className='wizard1-property-name' type='text' />
                                <h2>Property Description</h2><input className='wizard1-property-description' type='text' />
                            </div>
                           <Link to='/wizard/2'><button className='wizard1-next-button'>Next Step</button></Link>
                        </div>
                    </div>
                    <div className='wizard-base-right'></div>
                </div>
        )
    }
}