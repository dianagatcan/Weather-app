import React, {useState} from "react";

export default function Insert(props){
    const [city, setCity] = useState('');

    function handleKeyDown(event){
        //When the user press Enter key:
        // - set 'city' as a parameter for the function received from the parrent - App
        // - reset the city
        if(event.key === "Enter"){
            props.saveCity(city);
            setCity('');
        }

    }

    //setCity every time when user is typing
    function handleChange(event){
        setCity(event.target.value)
    }


    return(<div>
        <input 
        type="text"
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Type the city"></input>
    </div>)
}