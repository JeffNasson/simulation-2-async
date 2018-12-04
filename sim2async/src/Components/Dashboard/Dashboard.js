import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from '../Header/Header.js'

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            properties:[],
        }
    }

    componentDidMount(){
        axios.get(`/api/properties`)
             .then((res)=>{
                 console.log(res.data)
                 this.setState({properties:res.data})
             })
    }

    render(){
        let displayProperties = this.state.properties.map((property,i)=>{
            return(
            // console.log(property)
            <div className='display-properties-parent' key={i}>
                <img src={property.image_url} alt='property-image' />
                <div className='display-properties-info-center'>
                    <h5>{property.property_name}</h5>
                    <h5>{property.property_description}</h5>
                </div>
                <hr />
                <div className='display-properties-info-right'>
                    <h5>Loan: ${property.loan_amount}</h5>
                    <h5>Monthly Mortgage: ${property.monthly_mortgage}</h5>
                    <h5>Recommended Rent: ${property.recommended_rent}</h5>
                    <h5>Desired Rent: ${property.desired_rent}</h5>
                    <h5>Address: {property.address}</h5>
                    <h5>City: {property.city}</h5>
                </div>
            </div>
            )
        })

        return(
            <div className='dashboard-parent'>
                <Header /> 
                <div className='dashboard-child'>
                    <div className='dashboard-child-left'>
                    </div>
                    <div className='dashboard-child-center'>
                        <Link to='/wizard/1'><button className='add-new-property-button'>Add New Property</button></Link>
                        <div className='desired-rent-filter-reset'>
                            List properties with "desired rent" greater than: $<input placeholder='0' />
                            <button className='filter-button'>Filter</button>
                            <button className='reset-button'>Reset</button>
                        <hr />
                        </div> 
                        <h1>Home Listings</h1>
                        {displayProperties}
                    </div>
                    <div className='dashboard-child-right'>
                    </div>
                </div>
            </div>
        )
    }
}