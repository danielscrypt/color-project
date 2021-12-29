import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './styles/Palate.css'
import Navbar from './Navbar';


class Palate extends Component {
    constructor(props) {
        super(props) ; 
        this.state = {
            level : 400 ,
            format : 'hex' ,
            snackBarOpen : false

        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
        this.handleClosePopUp = this.handleClosePopUp.bind(this)
        
    }

    changeLevel(e) {
        this.setState({
          level: e
        })
    }

     changeFormat(e) {
        this.setState({format : e.target.value , snackBarOpen : true})
        setTimeout(() => {
            this.setState({snackBarOpen : false})
        } ,  3000)
    }

    handleClosePopUp () {
        if (this.state.snackBarOpen) {
            this.setState({snackBarOpen : false})
        }
    }


    render() {
        const {snackBarOpen , level , format} = this.state
        const {paletteName , colors , id } = this.props.palate
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
            bg={color[format]} 
            name={color.name} 
            key={color.name}
            paleteName={id}
            colorId={color.id}
            showLink />
        ))
        

        return (
            <div className="palate">
              <Navbar  
               changeFormat={this.changeFormat}
               level={level}
               changeLevel={this.changeLevel}
               snackBarOpen={snackBarOpen}
               handleClose={this.handleClosePopUp}
               showSlider
                />
                <div className='palate-color'>
                    {colorBoxes}
                </div>
                <footer className='palate-footer'>
                   hey {paletteName}
                </footer>
            </div>
        )
    }
} 

export default Palate