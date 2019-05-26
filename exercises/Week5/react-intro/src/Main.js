import React from 'react'
    

function Main () {
    return(
        <div style={{backgroundColor: 'yellow'}}>
            <p style ={{backgroundColor: "orange"}}>
            This is the middle section of the web page and where most of the body content is going to go...
            </p>
            <a href="https://google.com">Click here to go to GOOGLE</a>
            <ul style={{color: 'blue'}}>We're also going to add a list of random stuff for fun</ul>
            <li>Random 1</li>
            <li>Random 2 </li>
            <li>Random 3</li>
            <p>This is the 1st input</p>
            <input type="checkbox"/>
            <p>This is the 2nd input</p>
            <input type="checkbox"/>
            <p>This is the 3rd input</p>
            <input type="checkbox"/>
            
        </div>
    )
}

export default Main

