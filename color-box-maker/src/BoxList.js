import React, {useState} from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = (bgcolor, width, height) => {
        setBoxes(boxes => [...boxes, {bgcolor, width, height}])
    };

    const remove = (e) => {
        e.preventDefault();
        e.target.closest("div").remove();
    }

    return (
        <div> 
            <h2>Box List</h2>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({bgcolor, width, height}, id) => 
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