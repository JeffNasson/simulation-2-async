import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import Header from '../Header/Header.js'
import Wizard1 from './Wizard1.js';
import Wizard2 from './Wizard2.js';
import Wizard3 from './Wizard3.js';
import Wizard4 from './Wizard4.js';
import Wizard5 from './Wizard5.js';

export default class Wizard extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div className='wizard-parent'>
                <Header />
                    <Switch>
                        <Route path='/wizard/1' component={Wizard1} />
                        <Route path='/wizard/2' component={Wizard2} />
                        <Route path='/wizard/3' component={Wizard3} />
                        <Route path='/wizard/4' component={Wizard4} />
                        <Route path='/wizard/5' component={Wizard5} />
                    </Switch>
                {/* <div className='wizard-base-child'>
                    <div className='wizard-base-left'>left</div>
                    <div className='wizard-base-center'>center</div>
                    <div className='wizard-base-right'>right</div>
                </div> */}
            </div>
        )
    }
}