import React from 'react'

// import React, { Component } from 'react'

 export default class NewGuy extends React.Component {
    constructor(){
        super()
        this.state ={
            status: true
        }
    }
    
    render() {
        let noWay 
        if (this.state.status === false){
            noWay = "your mom bruh"
        }else {
            noWay = "def not your mom bruh"
            
        }
        return (
            <div>
                <h1>Check this out: {noWay}</h1>
            </div>
        )
    }
}

// export default NewGuy