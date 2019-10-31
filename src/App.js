import React, { Component } from 'react'

import './css/styles.css'
import router from './router/router'



export default class App extends Component {
  render() {
    const logo= require('./assets/Love2Learn-05.png')
    return (
      <div >
      
        {/* <div className='app-container'>
        <img className='logo' src={logo} alt=''></img>
        <div className='title-container'>
        <h1 className='hdrTitle'>Love 2 Learn </h1>
        <h1 className='hdrTitle2'>drop-off / pick-up</h1>
        </div>
        </div> */}
        {router}
      </div>
    )
  }
}
