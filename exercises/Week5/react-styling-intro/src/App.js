import React from 'react'
import './styles.css'
import Navbar from './Navbar/navbar'

//functional componenet
const App = () => {
    return(
        <div className='main-container'>
            <div>Hello World</div>
            <div >I am here too</div>
            <Navbar />
        </div>
    )
}

export default App
