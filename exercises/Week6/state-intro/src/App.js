import React from 'react'
import NewGuy from './NewGuy'
 
class App extends React.Component {
    constructor() {
        super ()
        this.state = {
            whereAbout : false
        }
    }
    render(){
        let screwYou  
        if (this.state.whereAbout === true){
            screwYou = "you're here"
        } else {
            screwYou = "you're not here"
        }

        return(
            <div>
                <h1>Status: {screwYou}</h1>
                <NewGuy />
            </div>
        )
    }
}

export default App