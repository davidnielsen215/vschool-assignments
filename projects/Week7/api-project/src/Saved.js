import React, {Component} from 'react'
import {withProvider} from './GlobalProvider'
import {Link} from 'react-router-dom'

const Saved = (props) => {
    return(
        <div>
            <Link to='/' className='btn1' >New Search</Link> 
            <div className='saved-container'>
                <h1>{props.artist}</h1>
                <h2>{props.song}</h2>

            </div>
        </div>
    )
}

export default withProvider(Saved)