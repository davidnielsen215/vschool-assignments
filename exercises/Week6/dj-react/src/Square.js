import React from 'react'

class Square extends React.Component {
   
    render() {
        return(
            <div>
                <div className="box" style={{backgroundColor : this.props.colorName}}></div>
            </div>
        )
    }
    
}

export default Square