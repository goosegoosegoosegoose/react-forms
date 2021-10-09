import React, { useState } from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        bgcolor: "",
        width: "",
        height: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData.bgcolor, formData.width, formData.height);
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="bgcolor">Background Color: </label>
            <input 
                id="bgcolor"
                placeholder="background color"
                type="text"
                name="bgcolor"
                value={formData.bgcolor}
                onChange={handleChange}
            /><br/>

            <label htmlFor="width">Width: </label>
            <input
                id="width"
                placeholder="width"
                type="number"
                name="width"
                value={formData.width}
                onChange={handleChange}
            /><br/>

            <label htmlFor="height">Height: </label>
            <input
                id="height"
                placeholder="height"
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
            /><br/>
            
            <button>Submit</button>
        </form>
    )
}

export default NewBoxForm;