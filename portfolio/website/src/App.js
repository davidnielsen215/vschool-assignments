import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import Body from './Body'
import Projects from './Projects'
import Resume from './Resume'

class App extends Component {
    render() {
        return(
            <>
            <Navbar />
            <Switch>
                
                <Route exact path='/' component={Body} />
                
                
                <Route exact path='/Projects' component={Projects} />
                <Route exact path='/Resume' component={Resume} />
            </Switch>
            
            </>
        )
    }
    
}

export default App;