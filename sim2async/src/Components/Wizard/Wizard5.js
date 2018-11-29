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
                        <div className='wizard5-parent'>
                            <h3>Step 5</h3>
                            <div className='wizard5-dots'>
                                <div className='checkmark'></div>
                                <div className='checkmark'></div>
                                <div className='checkmark'></div>
                                <div className='checkmark'></div>
                                <div className='wizard2-background-dots1'></div>
                            </div>
                            <h4>Recommended Rent $Enter Variable In JSX on wizard5 line 30</h4>
                            <div className='wizard5-desired-rent'>
                                <h2>Desired Rent</h2>
                                <input className='wizard5-desired-rent-input' type='text' />
                            </div>
                            <div className='wizard5-step-buttons'>
                                <Link to='/wizard/4'><button className='wizard5-previous-button'>Previous Step</button></Link>
                                <Link to ='/dashboard'><button className='wizard5-next-button'>Complete</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='wizard-base-right'></div>
                </div>
        )
    }
}