import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import DragableColorBox from './DragableColorBox';
import {SortableContainer} from 'react-sortable-hoc'

const  DragableColorList = SortableContainer(({colors , handleDelete}) => {
    return (
        <div style={{height : '100%'}}>
            {colors.map((color , i) => (
            <DragableColorBox 
             key={uuidv4()} 
             handleDelete={() => handleDelete(color.id)} 
             bg={color.color}
             name={color.name}
             index={i} />
             ))}

        </div>
    )
})

export default DragableColorList
