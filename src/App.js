import React, { useState } from "react";
import Display from "./Display/Display";

export default function App(){
    const [input, setInput] = useState('');
    const [response, setResponse]= useState("");
    const [display, setDisplay] = useState(false)

    function handleKeyDown(event){
        const api = process.env.REACT_APP_API;

        //When user press Enter key:
        if(event.key === "Enter"){
            async function getTemperature(){
                const request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api}`);
                const jsonResponse = await (await fetch(request)).json();
                setResponse(jsonResponse)
            }
            getTemperature(input);
            setInput('');
            setDisplay(true)
        }
    }

    //setCity every time when user is typing
    function handleChange(event){
        setDisplay(false)
        setInput(event.target.value)
    }

    return(
        <div>
            <input data-testid="input" 
                value={input}
                type="text"
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder="Type the city">
            </input>
            {display ? <Display data={response} /> : <></> }
            
        </div>
    )

}

