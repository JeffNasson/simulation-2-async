import React, {Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateLoanAmount,updateMonthlyMortgage} from '../../dux/reducer.js';



class Wizard4 extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        const {updateLoanAmount,updateMonthlyMortgage} = this.props
        return(
            <div className='wizard-base-child'>
                    <div className='wizard-base-left'></div>
                    <div className='wizard-base-center'>
                        <div className='add-new-listing-cancel-button'>
                            <h1>Add New Listing</h1>
                            <button>Cancel</button>
                        </div>
                        <div className='wizard4-parent'>
                            <h3>Step 4</h3>
                            <div className='wizard4-dots'>
                                <div className='checkmark'></div>
                                <div className='checkmark'></div>
                                <div className='checkmark'></div>
                                <div className='wizard2-background-dots1'></div>
                                <div className='wizard2-background-dots2'></div>
                            </div>
                            <div className='wizard4-loan-amount'>
                                <h2>Loan Amount</h2>
                                <input className='wizard4-loan-input' type='text' value={this.props.loanAmount} onChange={(e)=>updateLoanAmount(e.target.value)}/>
                            </div>

                            <div className='wizard4-monthly-mortgage'>
                                <h2>Monthly Mortgage</h2>
                                <input className='wizard4-mortgage-input' type='text' value={this.props.monthlyMortgage} onChange={(e)=>updateMonthlyMortgage(e.target.value)} />
                            </div>
                            <div className='wizard2-step-buttons'>
                                <Link to='/wizard/3'><button className='wizard2-previous-button'>Previous Step</button></Link>
                                <Link to ='/wizard/5'><button className='wizard2-next-button'>Next Step</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='wizard-base-right'></div>
                </div>
        )
    }
}

function mapStateToProps(state){
    const {loanAmount,monthlyMortgage} = state
    return{
        loanAmount,
        monthlyMortgage
    }
}

export default connect(mapStateToProps,{updateLoanAmount,updateMonthlyMortgage})(Wizard4)