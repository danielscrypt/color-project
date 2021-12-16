import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar  from '@material-ui/core/Snackbar';
import IconBtn  from '@material-ui/core/IconButton';
import Close  from '@material-ui/icons/Close';
import {NavLink } from 'react-router-dom'
import './Navbar.css'




class Navbar extends Component {
 
  render () {
    const {handleClose ,  snackBarOpen, changeFormat , level , changeLevel , showSlider} = this.props
    return (
        <div className="navbar">
              <div className="color-slider">
                    <NavLink to='/'><span>Color Slider</span></NavLink> 
                   {showSlider && (<p>{level}</p> )}
                {showSlider &&  (<Slider
                className="Slider"
                defaultValue={level} 
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
                railStyle={{
                    height: 5 
                  }}
                  handleStyle={{
                    height: 15,
                    width: 15 , 
                    backgroundColor: "green",
                    border: 0
                  }}
                  trackStyle={{
                    background: "none"
                  }}
              />)}
            </div>
              <div className="select-container">
             <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={changeFormat}
          defaultValue='hex'
            >
          
          <MenuItem value={'hex'}>hex - #ffffff</MenuItem>
          <MenuItem value={'rgb'}>rgb - (255, 255 , 255)</MenuItem>
          <MenuItem value={'rgba'}>rgba - (255, 255 , 255 , 1.0)</MenuItem>
        </Select>
              
          </div>
          <Snackbar
          anchorOrigin= {{vertical : 'bottom' , horizontal : 'left'}}
        open={snackBarOpen}
        autoHideDuration={6000}
        message="format changed !"
        action={
          <IconBtn onClick={handleClose}>
            <Close />
          </IconBtn>
        }
      />
        </div>
    )
  }
}

export default Navbar
