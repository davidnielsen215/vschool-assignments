import React, {Component} from 'react'
import {withProvider} from './GlobalProvider'
import {Link} from 'react-router-dom'

const Container = props => {
    // constructor(){
    //     super()
    //     this.state =  {
    //         artist: '',
    //         song: '',
    //         lyric: ''
    //     }
    // }


    // console.log(props)
        return (
            <div className='main-container'>
                <div className='search-box'>
                    <input type="text" placeholder='Artist' onChange={props.handleChange} autoComplete='off' value={props.artist} className='search-text' name='artist'></input>

                    <a className='search-btn' href='#'>
                        <i className="fas fa-search"></i>
                    </a>
                    
                </div>
                <div className='search-box2'>
                    <input type="text" placeholder='Song' onChange={props.handleChange} autoComplete='off' value={props.song} className='search-text2' name='song'></input>

                    <a className='search-btn' href='#'>
                        <i className="fas fa-search"></i>
                    </a>
                </div>
                <div className='middle' onClick={props.handleSubmit}>
                    <Link to='/lyrics' className="submit-btn">SEARCH</Link>
                    
                </div>
                
                
                

                
            </div>
        )
    }
        
export default withProvider(Container)
