import React from 'react'
import Form from "./Form" 

function App () {
    return(
        <div className='contacts'>
            <Form name="John" phone="(474)944-8711" email="john@john.com"/>
            <Form name="David" phone="5759976631" email="thisemail.com"/>
            <Form name="Luis" phone="5756868324" email="yourmom.com"/>
            <Form/>
        </div>
    )
}

export default App