import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Container from './Container'
import {withProvider} from './GlobalProvider'
import Display from './Display'
import Saved from './Saved'


class App extends Component {
  render() {
    return (
         <>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Container}/>
              <Route exact path="/lyrics" component={Display} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
            
         </>      
      
    )
  }
}

export default withProvider(App)