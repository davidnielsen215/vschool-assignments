import React from 'react'

const Color = (props) => {

    const styles = {
        backgroundColor: props.backgroundColor;
    }

    return (
        <div sytle={styles}>
        <h1>Color box component</h1>
        <p>this is color box number {props.number}</p>
        <img src={props.pic} />
        </div>
    )
}

export default Color;