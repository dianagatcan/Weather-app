import React, { useState } from "react";
import Forecast from "../Forecast/Forecast";
import './styles.css';

export default function Display(props){
    const api = process.env.REACT_APP_API;

    const lat = props.data?.coord?.lat
    const lon = props.data?.coord?.lon
    const exclude = 'current,minutely,hourly,alerts'
    const [forecast, setForecast] = useState('')
    const [displayForecast, setDisplayForecast] = useState(false);

    async function handleClick(){
        const request = new Request(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${api}&units=metric`)
        const jsonResponse = await (await fetch(request)).json();
        setForecast(jsonResponse.daily.slice(0,4))
        setDisplayForecast(true)
    }


    return(<div className="main">
        <div className="displayContainer">
            <div className="temperature">
                <span>{props.data?.main?.temp}°C </span>
                <p className="bold">{props.data?.name}</p>
            </div>
            <div className="description">
                <img src={`http://openweathermap.org/img/wn/${props.data?.weather?.[0].icon}@2x.png`} />
                <p className="weatherDescription">{props.data?.weather?.[0].description}</p>
            </div>
        </div>
        <button onClick={handleClick}>Weather Forecast</button>
        {displayForecast ? <Forecast data={forecast} /> : <></>}
    </div>)
}

