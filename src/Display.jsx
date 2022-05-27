import React from "react";

export default function Display(props){


    return(<div>
        <h1>{props.data?.name}</h1>
        <p>Temperature: {props.data?.main?.temp} </p>
        <p>Humidity: {props.data?.main?.humidity}% </p>
        <p>Wind speed: {props.data?.wind?.speed} miles/hour </p>
        
        <img src={`http://openweathermap.org/img/wn/${props.data?.weather?.[0].icon}@2x.png`} />
        <p>Description: {props.data?.weather?.[0].description}</p>
    </div>)

}

