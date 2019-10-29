import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Register extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            email: '',
            password: ''
        }
    }

    register = () => {

    }
    render() {
        return (
            <div>
                <h1>Register as a new parent</h1>
                <input placeholder='Name'></input>
                <input placeholder='Email'></input>
                <input placeholder='Password'></input>
                <Link to='/'> <button>Register</button> </Link>
                <Link to='/'> <button>Login</button> </Link>
            </div>
        )
    }
}
