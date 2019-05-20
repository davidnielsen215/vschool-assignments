import React from 'react';
// import Color from './Color'


class ColorBox extends React.Component {
    render() {
      return <div>
          <div style={{backgroundColor: this.props.backgroundColor}}>
              <h1> {this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>
              <p>{this.props.information}</p>



          </div>
          </div>;
    }
  }

export default ColorBox;