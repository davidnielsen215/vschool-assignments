import React from 'react'
import Square from './Square'

class App extends React.Component {
    constructor () {
        super ()
        this.state = {
            colors: ['#00B2EE', 'red', 'yellow', 'green','pink']
        }
    }

    handleWhiteOrBlack = () =>  {
        if (this.state.colors[0] !== 'white') {
            this.setState({colors: ['white', 'white', 'white', 'white','white']});
        } else {
            this.setState({colors: ['black', 'black', 'black', 'black','black']})
        }
    }

    render() {


        return(
            <div>
                <div className="wrapper">
                    <button onClick={this.handleWhiteOrBlack}>White or Black</button>
                    {this.state.colors.map(color => (
                        <Square key={this.state.colors.indexOf(color)} colorName={color} />
                      ))}
                </div>
            </div>
        )
    }
   
}

export default App