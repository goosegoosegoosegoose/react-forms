import React from "react";

const Box = ({width, height, bgcolor, remove}) => {
    return (
        <div className="box" style={{backgroundColor: `${bgcolor}`,
                                    width: `${width}rem`, 
                                    height: `${height}rem`,
                                    display: "inline-block"}} >
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;