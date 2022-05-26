import React, {useState} from "react";


export default function Insert(props){
    const [input, setInput] = useState('');

    function handleKeyDown(event){

        const api = 'b2541e68db5723fa17feb71c4a3a4a74';

        //When the user press Enter key:
        // - set 'city' as a parameter for the function received from the parrent - App
        // - reset the input and clear Input text
        if(event.key === "Enter"){
            async function getTemperature(){
                const request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api}`);
                const jsonResponse = await (await fetch(request)).json()
                props.passCity(jsonResponse.main.temp);
            }
            getTemperature(input)
            // setInput('');


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