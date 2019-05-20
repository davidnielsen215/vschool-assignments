import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: 'David'
        }
    }

    handleChange = () => {
        this.setState(prevState => {
            return {
                name: 'Roger'
            }
        })
    }
  render() {
    return (
      <form>
         <input type='text' 
         placeholder='name' 
         value={this.state.name} 
         onChange={this.handleChange} />
      </form>
    )
  }
}
export default Form;