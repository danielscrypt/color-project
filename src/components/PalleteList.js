import React, { Component } from 'react'
// import {Link } from 'react-router-dom'
import MiniPallete from './MiniPallete'
import './styles/MiniPal.css'
import { Link } from 'react-router-dom'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

 class PalleteList extends Component {
    render() {
        return (
            <div className="palete-container">
                <div className="main-header">
                    <h1>COLORSSSSS</h1>
                    <Link to='/pallete/new' className="create-btn">create palete</Link>
                </div>
                <TransitionGroup className="palete-list">
                {this.props.palletes.map(pallete => (
                    <CSSTransition
                    key={pallete.id}
                    timeout={300}
                    classNames="item">
                    <MiniPallete 
                    key={`mini-${pallete.id}`} 
                    handleDelete={this.props.deletePallete}
                    {...pallete} />
                    </CSSTransition>
                ))}
                </TransitionGroup>
            </div>
        )
    }
}

export default PalleteList