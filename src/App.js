import React, { useState } from "react";
import Insert from "./Insert";

export default function App(){
    const [input, setInput] = useState('');


    function handleKeyDown(event){
        //When the user press Enter key:
        // - set 'city' as a parameter for the function received from the parrent - App
        // - reset the input and clear Input text
        if(event.key === "Enter"){
            async function getTemperature(){
                const request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api}`);
                const jsonResponse = await (await fetch(request)).json()
                const temperature = jsonResponse.main.temp;
                console.log(temperature)
            }
            getTemperature(input);
            setInput('');
        }

    }

    //setCity every time when user is typing
    function handleChange(event){
        setInput(event.target.value)
    }

    return(
        <div>
            <input 
                value={input}
                type="text"
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder="Type the city">
            </input>
        </div>
    )

}

