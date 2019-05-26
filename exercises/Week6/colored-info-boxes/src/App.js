
import React from 'react'
import ColorBox from './ColorBox'
import "./style.css"

const App = () => {
    return(
        <div>
            
            <ColorBox color="Blue"  
            title="calm color" 
            description="this is a calm color like the sky" 
            backgroundColor="blue"/>

            <ColorBox color="Red"  
            title="violent color" 
            description="this is a violent color like blood" 
            backgroundColor="red"/>
        
            <ColorBox color="green"  
            title="cool color" 
            description="this is a cool color like grass" 
            backgroundColor="green"/>

            <ColorBox color="yellow"  
            title="lame color" 
            description="this is a lame color like ducks" 
            backgroundColor="yellow"/>
            </div>
    )
}

export default App