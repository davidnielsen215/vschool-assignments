import React from 'react';


class ColorBox extends React.Component {
    render() {
      console.log(this.props)
      return (
      <div className="grid-container">
          <div style={{backgroundColor: this.props.backgroundColor}}>
              <h1> {this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>
              <p>{this.props.information}</p>
          </div>
    
        </div>
      )
      
    }
  }

export default ColorBox;