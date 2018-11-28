import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';

import Auth from './Components/Auth/Auth.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Wizard from './Components/Wizard/Wizard.js';

export default(
    <Switch>  
        <Route exact path='/' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
    </Switch>
)