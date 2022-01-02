import React from 'react'
import './styles/MiniPal.css';
import {Link} from 'react-router-dom'
import DeleteIcon from "@material-ui/icons/Delete";


function MiniPallete(props) {

    const {id , paletteName ,colors , handleDelete} = props


    const deletePalette = () =>  {
        handleDelete(id);
      }


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
            <div className='miniFooter'>
            <span><Link key={id} to={`./pallete/${id}`}>
                    {paletteName}
                    </Link></span>
        <div id='delete'>
        <DeleteIcon
          onClick={deletePalette}
          id='deleteIcon'
          style={{ transition: "all 0.3s ease-in-out" }}
        />
      </div>
      </div>
        </div>
    )
}

export default MiniPallete
