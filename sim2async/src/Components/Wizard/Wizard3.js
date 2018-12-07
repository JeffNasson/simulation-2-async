import React, {Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {updateImage,clearState} from '../../dux/reducer.js';



class Wizard3 extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        const {updateImage,image} = this.props
        return(
            <div className='wizard-base-child'>
                    <div className='wizard-base-left'></div>
                    <div className='wizard-base-center'>
                        <div className='add-new-listing-cancel-button'>
                            <h1>Add New Listing</h1>
                            <button onClick={()=>this.props.clearState(this.props.history.push('/dashboard'))}>Cancel</button>
                        </div>
                        <div className='wizard3-parent'>
                            <h3>Step 3</h3>
                            <div className='wizard3-dots'>
                                <div className='checkmark'></div>
                                <div className='checkmark'></div>
                                <div className='wizard2-background-dots1'></div>
                                <div className='wizard2-background-dots2'></div>
                                <div className='wizard2-background-dots2'></div>
                            </div>
                            {
                                image ? (
                                    <div className='wizard3-preview-image'>
                                        <img src={image} />
                                    </div>
                                ) 
                                : 
                                (
                                    <div className='wizard3-preview-image'>
                                        <img src='https://www.syncron.com/wp-content/uploads/2017/03/img-placeholder.png' />
                                    </div>
                                )
                            }
                            
                            <div className='wizard3-imageurl-parent'>
                                <h2>Image URL</h2>
                                <input className='wizard3-imageurl' type='text' alternate='home image' value={this.props.image} onChange={(e)=>updateImage(e.target.value)} />
                            </div>
                            
                            <div className='wizard2-step-buttons'>
                                <Link to='/wizard/2'><button className='wizard2-previous-button'>Previous Step</button></Link>
                                <Link to ='/wizard/4'><button className='wizard2-next-button'>Next Step</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='wizard-base-right'></div>
                </div>
        )
    }
}

function mapStateToProps(state){
    const {image} = state
    return{
        image
    }
}

export default connect(mapStateToProps,{updateImage,clearState})(Wizard3);