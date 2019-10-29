import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import Display from '../components/display/Display'


export default (

    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/display' component={Display} />
    </Switch>
)