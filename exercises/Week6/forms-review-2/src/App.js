import React from 'react'
import Form from "./Form" 

function App () {
    return(
        <div className='contacts'>
            <Form name="Peter" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiAmMG2TNs4hPbbvqD8XyhQqYp73YpOnw88Ei1cc9xpWWM7kO"phone="(474)944-8711" email="john@john.com" />
            <Form name="Strauss" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-ee0R2uauzm8YMRgYVpZmFUiJT5x-73xyeIKwZlSTcZ49ueoag"phone="5759976631" email="thisemail.com"/>
            <Form name="Alex"Url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoS7Zm13DwLQ4TE6bjU7LpYvhvBZ7SeeC0DL5R-Bga1Fz7qy89"phone="5756868324" email="yourmom.com"/>
            <Form/>
        </div>
    )
}

export default App