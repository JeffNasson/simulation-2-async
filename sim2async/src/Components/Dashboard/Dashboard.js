import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from '../Header/Header.js'

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            properties:[],
            val:''
        }
        this.deleteHouse=this.deleteHouse.bind(this);
        this.filterHouses=this.filterHouses.bind(this);
        this.handleFilterText=this.handleFilterText.bind(this);
        this.resetPage=this.resetPage.bind(this);
    }

    componentDidMount(){
        axios.get(`/api/properties`)
             .then((res)=>{
                 console.log(res.data)
                 this.setState({properties:res.data})
             })
    }

    filterHouses(val){
        axios.get(`/api/properties/${val}`)
             .then((res)=>{
                 this.setState({properties:res.data})
             })
    }

    deleteHouse(id){
        axios.delete(`/api/properties/${id}`)
             .then((res)=>console.log(res.data)||this.setState({properties:res.data}))
    }

    handleFilterText(val){
        this.setState({val:val})
    }

    resetPage(){
        let val='0'
        this.setState({val:val})
        window.location.reload()
    }


    render(){

        let displayProperties = this.state.properties.map((property,i)=>{
            // console.log(property)
            return(
            <div className='display-properties-parent' key={i}>
            {
                property.image_url ? (<img src={property.image_url} alt='150x150' />) : 
                        (<img src='https://montereywines.org/wp-content/uploads/2018/09/placeholder-1.png' />)
            }
                <div className='display-properties-info-center'>
                    <h5>{property.property_name}</h5>
                    <h6>{property.property_description}</h6>
                </div>
                <hr />
                <div className='display-properties-info-right'>
                    <h5>Loan: ${property.loan_amount}</h5>
                    <h5>Monthly Mortgage: ${property.monthly_mortgage}</h5>
                    {/* <h5>Recommended Rent: ${property.recommended_rent}</h5> */}
                    <h5>Desired Rent: ${property.desired_rent}</h5>
                    <h5>Address: {property.address}</h5>
                    <h5>City: {property.city}</h5>
                    <h5>State: {property.state}</h5>
                    <h5>Zip: {property.zip}</h5>
                </div>
                <div className='display-properties-info-far-right'>
                    <button className='delete-property-button' onClick={()=>this.deleteHouse(property.id)} >X</button>
                </div>
            </div>
            )
        })

        console.log(displayProperties.desired_rent)

        return(
            <div className='dashboard-parent'>
                <Header /> 
                <div className='dashboard-child'>
                    <div className='dashboard-child-left'>
                    </div>
                    <div className='dashboard-child-center'>
                        <Link to='/wizard/1'><button className='add-new-property-button'>Add New Property</button></Link>
                        <div className='desired-rent-filter-reset'>
                            List properties with "desired rent" greater than: $<input placeholder='0' value={this.state.val} onChange={(e)=>this.handleFilterText(e.target.value)} />

                            <button className='filter-button' onClick={()=>this.filterHouses(this.state.val)} >Filter</button>
                            <button className='reset-button' onClick={()=>this.resetPage()} >Reset</button>
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

