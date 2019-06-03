import React, {Component} from 'react'
import {withProvider} from './GlobalProvider'
import {Link} from 'react-router-dom'

const Saved = (props) => {
    return(
        <div>
            <Link to='/' className='btn1' >New Search</Link> 
        </div>
    )
}

export default withProvider(Saved)