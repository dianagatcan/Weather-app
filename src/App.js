import React, { useState } from "react";
import Insert from "./Insert";



export default function App(){

    const[city, setCity] = useState('')

    function saveCity(data){
        setCity(data);
    }


    return(
        <div>
            <h1>{city}</h1>
            {/* Get city from Insert through passCity */}
            <Insert passCity={saveCity} />
        </div>
    )

}