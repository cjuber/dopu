import React, { Component } from 'react'
import Kids from '../kids/Kids'
import Balance from '../balance/Balance'

export default class Display extends Component {
    constructor(){
        super()
        this.state = {
            list: []
        }
    }
    render() {
        const kidslist = this.state.list.map((list, i) => {
            return(
                <Kids key={i} list={list}/>
            )
        })
        return (
            <div>
               <p>display</p>
                {kidslist}
                <Balance/>
            </div>
        )
    }
}
