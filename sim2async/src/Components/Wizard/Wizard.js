import React, {Component} from 'react';

import Header from '../Header/Header.js'

export default class Wizard extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div className='wizard-parent'>
                <Header />
                Wizard
            </div>
        )
    }
}