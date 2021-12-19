import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './styles/Palate.css'

export default class SinglePalete extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format : 'hex' ,
            snackBarOpen : false

        }
        this.changeFormat = this.changeFormat.bind(this)
        this.handleClosePopUp = this.handleClosePopUp.bind(this)
      }



      gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
    
        for (let key in allColors) {
          shades = shades.concat(
            allColors[key].filter(color => color.id === colorToFilterBy)
          );
        }
        //return all shades of given color
        return shades.slice(1);
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
        const colorBoxes = this._shades.map(color => (
            <ColorBox
              key={color.name}
              name={color.name}
              bg={color[this.state.format]}
              showLink={false}
            />
          ));
        return (
        <div className='single-palate palate'>
            <Navbar showSlider={false} 
            changeFormat={this.changeFormat}
            snackBarOpen={this.state.snackBarOpen}
            handleClose={this.handleClosePopUp}
            />
        <div className='palate-color'>{colorBoxes}
        <div className='go-back color-box'>
            <Link className='go-back-btn' to={`/pallete/${this.props.palette.id}`}>
                go back
            </Link>
        </div>
        </div>
        
        <footer className='palate-footer'>
                    {this.props.palette.paletteName}
                </footer>
        </div>
        )
    }
}
