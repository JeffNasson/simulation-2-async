import React, {Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateDesiredRent} from '../../dux/reducer.js'; 



class Wizard5 extends Component{
    constructor(){
        super();
        this.state={}

        this.submitProperty=this.submitProperty.bind(this);
    }

    submitProperty(){
        const {desiredRent,monthlyMortgage,propertyName,propertyDescription,address,city,province,zip,image,loanAmount,user} = this.props
        axios.post(`/api/properties`,{desiredRent,monthlyMortgage,propertyName,propertyDescription,address,city,province,zip,image,loanAmount,user})
             .then(()=>{
                 this.props.history.push('/dashboard')
             })
    }

    render(){
        const {updateDesiredRent} = this.props
        console.log(this.props)
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
                            <h4>Recommended Rent $ {this.props.monthlyMortgage*1.25} </h4>
                            <div className='wizard5-desired-rent'>
                                <h2>Desired Rent</h2>
                                <input className='wizard5-desired-rent-input' type='text' value={this.props.desiredRent} onChange={(e)=>updateDesiredRent(e.target.value)}  />
                            </div>
                            <div className='wizard5-step-buttons'>
                                <Link to='/wizard/4'><button className='wizard5-previous-button'>Previous Step</button></Link>
                                <button className='wizard5-next-button' onClick={this.submitProperty}>Complete</button>
                            </div>
                        </div>
                    </div>
                    <div className='wizard-base-right'></div>
                </div>
        )
    }
}

function mapStateToProps(state){
    const {desiredRent,monthlyMortgage,propertyName,propertyDescription,address,city,province,zip,image,loanAmount,user} = state
    return {
        desiredRent,
        monthlyMortgage,
        propertyName,
        propertyDescription,
        address,
        city,
        province,
        zip,
        image,
        loanAmount,
        user
    }
}

export default connect(mapStateToProps,{updateDesiredRent})(Wizard5);