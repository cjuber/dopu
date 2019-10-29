import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {

    }
    render() {
        return (
            <div className='login-container'>
                <h1 className='loginTitle'>Login</h1>
                <input className='input' type='email' placeholder='Email' 
                name='email'>
                </input>

                <input className='input' type='password' placeholder='Password' 
                name='password'>
                </input>

                <button className='submitBtn' onClick={this.submit}>Submit</button>

               <Link className='newParentLink' to='/register'> <button className='newParentBtn'>New Parent</button></Link>
            </div>
        )
    }
}
