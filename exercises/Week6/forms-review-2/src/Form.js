import React from 'react'

function Form (props) {
    return(
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h1>{props.name}</h1>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )   
}

export default Form  

