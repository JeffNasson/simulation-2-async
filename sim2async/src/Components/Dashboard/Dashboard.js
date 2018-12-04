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
            <div className='display-properties-parent'>
                <h5>{property.property_name}</h5>
                <h5>{property.property_description}</h5>
                <hr />
                <h5>{property.address}</h5>
                <h5>{property.city}</h5>
                <h5>{property.desired_rent}</h5>
                <img src={property.image_url} alt='property-image' />
                <h5>{property.loan_amount}</h5>
                <h5>{property.monthly_mortgage}</h5>
                <h5>{property.state}</h5>
                <h5>{property.zip}</h5>
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