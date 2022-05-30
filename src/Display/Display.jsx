import React from "react";
import './styles.css'

export default function Display(props){


    return(<div className="displayContainer">
        <div className="temperature">
            <span>{props.data?.main?.temp}° </span>
            <p className="bold">{props.data?.name}</p>
        </div>
        <div className="description">
            <img src={`http://openweathermap.org/img/wn/${props.data?.weather?.[0].icon}@2x.png`} />
            <p className="weatherDescription">{props.data?.weather?.[0].description}</p>
        </div>
        {/* <p>Humidity: {props.data?.main?.humidity}% </p>
        <p>Wind speed: {props.data?.wind?.speed} miles/hour </p> */}
    </div>)

}

