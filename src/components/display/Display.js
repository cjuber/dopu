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
            <header>
                    <h1 className='title'>Children and balance</h1>
                </header>
            <div className='display-container'>
                <div className='disTitleHdr'>
               <p className='smallTitle'>Children</p>
               </div>
               <div className='kidList'>
                   <div className='childrenTitle'>
                   <p className='children'>Children</p>
                   <button className='addKidBtn'>Add New Child</button>
                   </div>
                {kidslist}

                
                </div>
                <div className='disTitleHdr'>
               <p className='smallTitle'>Balance</p>
               </div>
                <div className='balance'>
                <Balance/>
                </div>
            </div>
            </div>
        )
    }
}
