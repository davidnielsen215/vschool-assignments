import React, {Component} from 'react'
import {withProvider} from './GlobalProvider'
import {Link} from 'react-router-dom'

const Display = (props) => {
    
        return(
            <div >
                <Link to='/' className='btn1' >New Search</Link> 
                <Link to='/Saved' className='btn2' onClick={props.handleSave}>Save</Link> 
                <h1 className='lyric-artist'>{props.artist}</h1>
                <h2 className='lyric-song'>{props.song}</h2>
                <p className="lyrics-container">{props.lyric}</p>
                <p className="error-container">{props.noLyric}</p>
                
            </div>
            
        )
    
}

export default withProvider(Display)
