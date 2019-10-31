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
                <header>
                    <h1 className='title'>Register a new parent</h1>
                </header>
            <div className='register-container'>
                <div className='titleHdr'>
                {/* <h1 className='registerTitle'>Register a new parent</h1> */}
                </div>
                <input className='input' placeholder='Name'></input>
                <input className='input' placeholder='Email'></input>
                <input className='input' placeholder='Password'></input>
                <Link className='registerLink' to='/'> <button className='registerBtn'>Register</button> </Link>
                {/* <Link className='registerLink' to='/'> <button className='registerBtn'>Login</button> </Link> */}
            </div>
            </div>
        )
    }
}
