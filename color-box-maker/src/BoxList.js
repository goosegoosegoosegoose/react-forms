import React, {useState} from "react";
import {v4 as uuid} from "uuid"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    };

    const remove = (e) => {
        e.preventDefault();
        e.target.closest("div").remove();
    };

    return (
        <div> 
            <h2>Box List</h2>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({id, bgcolor, width, height}) => 
                <Box
                    key={id}
                    bgcolor={bgcolor} 
                    width={width} 
                    height={height}
                    remove={remove}
                />)}
        </div>
    )
}

export default BoxList;