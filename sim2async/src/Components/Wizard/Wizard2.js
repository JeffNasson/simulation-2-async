import React, {Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import{updateAddress,updateCity,updateProvince,updateZip,clearState} from '../../dux/reducer.js';



class Wizard2 extends Component{
    // constructor(){
    //     super();
    //     this.state={}
    // }

    render(){
        const {updateAddress,updateCity,updateProvince,updateZip} = this.props
        console.log(this.props)
        return(
            <div className='wizard-base-child'>
                    <div className='wizard-base-left'></div>
                    <div className='wizard-base-center'>
                        <div className='add-new-listing-cancel-button'>
                            <h1>Add New Listing</h1>
                            <button onClick={()=>this.props.clearState(this.props.history.push('/dashboard'))}>Cancel</button>
                        </div>
                        <div className='wizard2-parent'>
                            <h3>Step 2</h3>
                            <div className='wizard2-dots'>
                                <div className='checkmark'></div>
                                <div className='wizard2-background-dots1'></div>
                                <div className='wizard2-background-dots2'></div>
                                <div className='wizard2-background-dots2'></div>
                                <div className='wizard2-background-dots2'></div>
                            </div>
                            <div className='wizard2-address-parent'>
                                <h2>Address</h2> <input className='wizard2-address' type='text' value={this.props.address} onChange={(e)=>updateAddress(e.target.value)} />
                            </div>
                            <div className='wizard2-city-state-h2'>
                                <h2>City</h2>
                                <h2>State</h2>
                            </div>
                            <div className='wizard2-city-state'>
                                 <input className='wizard2-city' type='text' value={this.props.city} onChange={(e)=>updateCity(e.target.value)} />
                                 <input className='wizard2-state' type='text' maxLength='2' value={this.props.province} onChange={(e)=>updateProvince(e.target.value)} />
                            </div>
                            <div className='wizard2-zip-parent'>
                                <h2>Zip</h2> <input className='wizard2-zip' type='text' maxLength='5' value={this.props.zip} onChange={(e)=>updateZip(e.target.value)} />
                            </div>
                            <div className='wizard2-step-buttons'>
                                <Link to='/wizard/1'><button className='wizard2-previous-button'>Previous Step</button></Link>
                                <Link to ='/wizard/3'><button className='wizard2-next-button'>Next Step</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='wizard-base-right'></div>
                </div>
        )
    }
}

function mapStateToProps(state){
    const {address,city,province,zip} = state
    return{
        address,
        city,
        province,
        zip
    }
}

export default connect(mapStateToProps,{updateAddress,updateCity,updateProvince,updateZip,clearState})(Wizard2)