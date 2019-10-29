import React, { Component } from 'react'
import  Login from './components/login/Login'
import './css/styles.css'
import router from './router/router'
export default class App extends Component {
  render() {
    return (
      <div>
        
        {router}
      </div>
    )
  }
}
