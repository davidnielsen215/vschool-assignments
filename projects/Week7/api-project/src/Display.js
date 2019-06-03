import React, {Component} from 'react'
import {withProvider} from './GlobalProvider'
import {Link} from 'react-router-dom'

const Display = (props) => {
    
        return(
            <div >
                <Link to='/' className='btn1' >New Search</Link> 
                <h1 className='lyric-artist'>{props.artist}</h1>
                <h2 className='lyric-song'>{props.song}</h2>
                <h1 className="lyrics-container">{props.lyric}</h1>
                
            </div>
            
        )
    
}

export default withProvider(Display)
