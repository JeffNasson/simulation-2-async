import React, {Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updatePropertyDescription,updatePropertyName,clearState} from '../../dux/reducer.js';



class Wizard1 extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         propertyName:this.props.propertyName,
    //         propertyDescription:''
    //     }
    //     // this.updatePropertyName=this.updatePropertyName.bind(this);
    //     // this.updatePropertyDescription=this.updatePropertyDescription.bind(this);
    // }

    // updatePropertyName(val){
    //     this.setState({propertyName: val})
    // }
    // updatePropertyDescription(val){
    //     this.setState({propertyDescription: val})
    // }

    render(){
        const{updatePropertyDescription,updatePropertyName} = this.props;
        console.log(this.props)
        // console.log(updatePropertyDescription,updatePropertyName)
        return(
            <div className='wizard-base-child'>
                    <div className='wizard-base-left'></div>
                    <div className='wizard-base-center'>
                        <div className='add-new-listing-cancel-button'>
                            <h1>Add New Listing</h1>
                            <button onClick={()=>this.props.clearState(this.props.history.push('/dashboard'))}>Cancel</button>
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
                                <h2>Property Name</h2><input className='wizard1-property-name' type='text' value={this.props.propertyName} onChange={(event)=>updatePropertyName(event.target.value)} />
                                <h2>Property Description</h2><textarea className='wizard1-property-description' type='text' value={this.props.propertyDescription} onChange={(event)=>updatePropertyDescription(event.target.value)} />
                            </div>
                           <Link to='/wizard/2'><button className='wizard1-next-button'>Next Step</button></Link>
                        </div>
                    </div>
                    <div className='wizard-base-right'></div>
                </div>
        )
    }
}

function mapStateToProps(state){
    const {propertyName,propertyDescription} = state;
    return{
        propertyName,
        propertyDescription
    }
}

export default connect(mapStateToProps,{updatePropertyDescription,updatePropertyName,clearState})(Wizard1);