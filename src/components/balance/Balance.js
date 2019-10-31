import React, { Component } from 'react'

export default class Balance extends Component {
    render() {
        return (
            <div>
                <p className='dopuTitle'>drop-offs</p>
                <div className='dopuList'>
                <p className='dopuListTitle'>name</p>
                <p className='dopuListTitle'>date</p>
                <p className='dopuListTitle'>hours</p>
                <p className='dopuListTitle'>price</p>
                </div>
                <p className='totalTitle'>Total Balance</p>
            </div>
        )
    }
}
