import React from 'react'

const validation = (props) =>{
    let paragraph= null;
    if(props.length <5 ){
        paragraph = <div>
            <p>Text length is too short</p>
        </div>
    }
    else{
        paragraph =
        <div>
            <p> Text length is long enough</p>
        </div>
    }  
    return (
       <div>{paragraph}
        </div>
    )
}
export default validation