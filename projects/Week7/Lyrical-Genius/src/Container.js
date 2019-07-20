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
            <div>
            <div className='main-container' 
            style={{backgroundImage:`url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f9f49d2-999e-4a87-897f-3ad19ba212a2/d7rw1io-52da48d0-40f4-442f-8cc6-1ea3604b83ea.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmOWY0OWQyLTk5OWUtNGE4Ny04OTdmLTNhZDE5YmEyMTJhMlwvZDdydzFpby01MmRhNDhkMC00MGY0LTQ0MmYtOGNjNi0xZWEzNjA0YjgzZWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aPi49PDFERADVZ5Xs4E2KcQc8TnrhtmFKzr3ruyitzk")`}}
            >
                <p className="signature">David Nielsen</p>


                <div className='search-box'>
                    <input type="text" placeholder='Artist' onChange={props.handleChange} autoComplete='off' value={props.artist} className='search-text' name='artist' ></input>

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
            </div>
        )
    }
        
export default withProvider(Container)
