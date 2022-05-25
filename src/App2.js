import React, { useEffect, useState } from "react";
import Input from "./input";
import axios from "axios";

export default function App2() {
  const [info, setInfo] = useState(null);
  const [city, setCity] = useState('Paris');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`

  //when the component mounts, you use the useEffect hook
  useEffect(()=>{
  //using the .get() method to make a GET request to your endpoint
    axios.get(url)
  //using a .then() callback to get back all of the response data.
    .then((response) => {
      setInfo(response.data)
    })
  }, [city])

  function saveCity(input){
    setCity(input)
    console.log(city)
  }

  if(!info) return null;
  return(<div>
    <Input responseCity={saveCity} />
    <h1 >{info.sys.country}</h1>
    <p>{city}</p>
  </div>)
}


