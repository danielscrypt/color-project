import React from 'react'
import './styles/MiniPal.css';
import {Link} from 'react-router-dom'

function MiniPallete(props) {

    const {id , paletteName ,colors} = props

    return (
        <div className="container">
            <div className="colors">
                {colors.map(color => (
                    <div style={{background : `${color.color}`  , 
                    width : '35px' ,
                     height : '35px'}}>
            </div>
                ))}
            </div>
            <span><Link key={id} to={`./pallete/${id}`}>
                    {paletteName}
                    </Link></span>
        </div>
    )
}

export default MiniPallete
