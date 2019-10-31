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
            <div>
                <header>
                    <h1 className='title'>Login</h1>
                </header>
            <div className='login-container'>
                <div className='login-container2'>
                    <div className='titleHdr'>
                {/* <h1 className='loginTitle'>Login</h1> */}
                </div>
                <input className='input' type='email' placeholder='Email' 
                name='email'>
                </input>

                <input className='input' type='password' placeholder='Password' 
                name='password'>
                </input>

                <button className='submitBtn' onClick={this.submit}>Submit</button>

               {/* <Link className='newParentLink' to='/register'> <button className='newParentBtn'>New Parent</button></Link> */}
               </div>
            </div>
            </div>
        )
    }
}
