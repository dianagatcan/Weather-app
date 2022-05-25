import React, {useState} from "react";

export default function Input(props){

    const [input, setInput] = useState('')

    function handleKeyPress(event){
        if(event.key === "Enter"){
            props.responseCity(input)
            setInput("")
        }
    }

    function handleChange(event){
        setInput(event.target.value)
    }

    return(
        <div>
            <input value={input} 
            onChange={handleChange} 
            onKeyPress={(e)=>handleKeyPress(e)} 
            placeholder="Input city"></input>
        </div>
    )

}
