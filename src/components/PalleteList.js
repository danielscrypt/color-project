import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import MiniPallete from './MiniPallete'
import './MiniPal.css'

 class PalleteList extends Component {
    render() {
        return (
            <div className="palete-container">
                <div className="main-header">
                    <h1>COLORSSSSS</h1>
                    <span className="create-btn">create palete</span>
                </div>
            <div className="palete-list">
                {this.props.palletes.map(pallete => (
                    // <p>
                    // <Link to={`./pallete/${pallete.id}`}>
                    //   hey  {pallete.paletteName}
                    // </Link>
                    // </p>
                    <MiniPallete key={`mini-${pallete.id}`} {...pallete} />
                ))}
            </div>
            </div>
        )
    }
}

export default PalleteList