import React from 'react'
import './char.css'
const char = (props) =>
{
    return(
        <div onClick={props.click} className="charComponent">
            <p>{props.character}</p>
        </div>
    )
}

export default char;