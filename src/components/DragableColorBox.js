import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon  from '@material-ui/icons/Delete';

// import chroma from 'chroma-js';


// const isDark = (c) => chroma(c.bg).luminance() <= 0.08 ; 



const useStyles = makeStyles( () => ({
    root: {
        height: '25%',
        width: '20%',
        position:' relative',
        cursor:' pointer',
        display: 'inline-flex',
        flexDirection: 'row',
        margin: ' auto',
        textTransform: 'uppercase',
        fontFamily: 'Neucha, cursive',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding : '10px', 
        color: '#fff' 
    }
}))

function DragableColorBox(props) {

    const classes = useStyles()

    return (
        <div className={classes.root} style={{backgroundColor : props.bg}}>
            <DeleteIcon onClick={props.handleDelete} />
             {props.name}
        </div>
    )
}

export default DragableColorBox
