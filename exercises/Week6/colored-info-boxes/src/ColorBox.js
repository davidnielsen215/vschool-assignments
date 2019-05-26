import React from 'react'

const ColorBox = (props) => {
    
    return(
        <div className="color-container">
           <div style={{backgroundColor: props.backgroundColor}}>
            <h1> Color: {props.color} </h1>
            <h2> title: {props.title} </h2>
            <p> Description: {props.description}</p>
            </div>
        </div>
    )
}

export default ColorBox