import React,{Component} from 'react'

import Header from '../Header/Header.js'

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div className='dashboard-parent'>
                <Header /> 
                <div className='dashboard-child'>
                    <div className='dashboard-child-left'>
                    </div>
                    <div className='dashboard-child-center'>
                        <button className='add-new-property-button'>Add New Property</button>
                        <div className='desired-rent-filter-reset'>
                            List properties with "desired rent" greater than: $<input placeholder='0' />
                            <button className='filter-button'>Filter</button>
                            <button className='reset-button'>Reset</button>
                        <hr />
                        </div> 
                        <h1>Home Listings</h1>
                    </div>
                    <div className='dashboard-child-right'>
                    </div>
                </div>
            </div>
        )
    }
}