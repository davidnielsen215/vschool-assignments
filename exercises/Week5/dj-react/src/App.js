import React from 'react'
import Box from './Box'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        squares: ['white', 'white', 'white', 'white']
    }
  }

  render(){
    return(
      <>
      <div className = 'square-container'>
      <Box color={this.state.squares[0]}/>
      <Box color={this.state.squares[1]}/>
      <Box color={this.state.squares[2]}/>
      <Box color={this.state.squares[3]}/>
      </div>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      </>
    );
  
  }
}



export default App;