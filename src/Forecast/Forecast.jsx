import React from "react";
import './styles.css';

export default function Forecast(props){

    return(<div className="row">
    {props.data.map((day, i) => <div className="card" key={i}>
        <p className="date">{new Date(props.data?.[i].dt * 1000).toLocaleDateString('en-us', { weekday:"short", month:"long", day:"numeric"})}</p>
        <img src={`http://openweathermap.org/img/wn/${props.data?.[i].weather?.[0].icon}@2x.png`} />
        <p>{props.data?.[i].weather?.[0].description}</p>
        <p>{props.data?.[i].temp?.day}°C</p>
    </div>)}
    </div>)
}
