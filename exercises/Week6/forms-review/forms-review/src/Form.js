import React from 'react'

function Form (props) {
    console.log(props)
    return(
        <div className="contact-card">
        <h3>{props.name}</h3>
        <p>{props.phone}</p>
        <p>{props.email}</p>

        </div>
    )   
}

export default Form  