import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Body.css'

class Body extends Component  {

    render() {
        return(
            <div>
                <div className='land-txt'>
                    
                    <h1>My Name is David Nielsen, <br>    
                    </br>I'm a Jr. Web Developer     
                    </h1>
                </div>
    
                <div className='body-pt'>
                    <p className='bp-1'>
                        here is where one of the paragraphs describing what im doing. 
                        Maybe some fo the cool stuff Ive been able to do with coding and
                        programming. Im not exactly sure what to put in here or how long
                        this section of the page is going to be but Im just typing in 
                        letter to get an overall look of what this section is supposed to 
                        look like.
                    </p>
                    <p className='bp-2'>
                        this is a small variation from the first paragraph just to get 
                        feel of how and where I wan to position these paragraphs in the body. 
                        Maybe some fo the cool stuff Ive been able to do with coding and
                        programming. Im not exactly sure what to put in here or how long
                        this section of the page is going to be but Im just typing in 
                        letter to get an overall look of what this section is supposed to 
                        look like.
                    </p>
                    <p className='bp-3'>
                        This might be the last paragraph but im still not sure. 
                        Maybe some fo the cool stuff Ive been able to do with coding and
                        programming. Im not exactly sure what to put in here or how long
                        this section of the page is going to be but Im just typing in 
                        letter to get an overall look of what this section is supposed to 
                        look like.
                    </p>
                </div>
                <div className='next-box'> 
                    <div className='pro-box'><Link to='/Projects' className='pro-lnk'>Projects</Link></div>
                    <div className='res-box'><Link to='/Resume' className='res-lnk'>Resume</Link></div>
                </div>
                
            </div>
        )
    }
    
}

export default Body