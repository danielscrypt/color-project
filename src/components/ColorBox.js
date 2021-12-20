import React, { Component } from 'react'
import './styles/ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

class ColorBox extends Component{
    constructor(props) {
        super(props) ; 
        this.state = {
            copied : false
        }
        this.handleCopy = this.handleCopy.bind(this)
    }

    handleCopy () {
        this.setState ({copied : true} , () => {
            setTimeout(() => {
                this.setState({copied : false})
            } 
            ,1500)
        })
    }
    render() {
        const { bg , name , paleteName , colorId , showLink} = this.props
        const {copied} = this.state
        const isDark = chroma(bg).luminance() <= 0.08 ; 
        const islight = chroma(bg).luminance() >= 0.5; 

        return (
            <CopyToClipboard text={bg} onCopy={this.handleCopy}>
            <div style={{background : bg}} className='colorBox'>
                <div style={{background : bg}}
                 className={`copy-overlay ${copied ? 'show' : '' }`}/>
                 <div className={`copied-text ${copied ? 'show' : ''   }`}>
                     <h1 className={isDark ? 'is-dark' : '' }>COPIED !</h1>
                     <p className={isDark ? 'is-dark' : '' }>{bg} </p>
                 </div>
                <div className="copy-container">
                    
                    <div className="box-content">
                        <span className={isDark ? 'is-dark' : '' }>{name} </span>
                    </div>

                <button  className={`copy-btn ${islight ? 'is-light' : '' }`}>copy !</button>

                {showLink &&  (<Link to={`/pallete/${paleteName}/${colorId}`}> 
                <span className={`see-more ${islight ? 'is-light' : '' }`} 
                onClick={e => e.stopPropagation()}>MORE</span>
                </Link>)}

            </div>
         </div>
         </CopyToClipboard>
        )
    }
}

export default ColorBox
