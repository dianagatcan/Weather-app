import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [info, setInfo] = useState(null);

  const city = 'Paris'

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=85fc7ae3e9a3345a538f1c9368c5f935`

  //when the component mounts, you use the useEffect hook
  useEffect(()=>{
  //using the .get() method to make a GET request to your endpoint
    axios.get(url)
  //using a .then() callback to get back all of the response data.
    .then((response) => {
      setInfo(response.data)
    })
  }, [])

  if(!info) return null;
  return(<div>
    <h1 >{info.sys.country}</h1>
  </div>)

  
}

export default App;
