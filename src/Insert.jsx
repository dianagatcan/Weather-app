import React, {useState} from "react";

export default function Insert(props){
    const [input, setInput] = useState('');

    function handleKeyDown(event){
        //When the user press Enter key:
        // - set 'city' as a parameter for the function received from the parrent - App
        // - reset the input and clear Input text
        if(event.key === "Enter"){
            props.passCity(input);
            setInput('');
        }

    }

    //setCity every time when user is typing
    function handleChange(event){
        setInput(event.target.value)
    }


    return(<div>
        <input 
        value={input}
        type="text"
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Type the city"></input>
    </div>)
}