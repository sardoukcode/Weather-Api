import "./App.css";
import { useState } from "react";
import React from 'react';
import axios from 'axios';
import Search from '../src/component/Search'
import Middle from "./component/Middle";
import Down from "./component/Down";

function App() {


  const [weatherInfo,setWeatherInfo]=useState();
  const [location,setLocation]=useState('lebanon');
  
  const [headerid,setheaderid]=useState(null);
  
  
  const [tempmin,settempmin]=useState();
  const [tempmax,settempmax]=useState();
  const[humidity,sethumidity]=useState();
  const[Pressure,setPressure]=useState();
  const [description,setdescription]=useState();
  
  
    const [lis,setlis]=useState([])
  
  
    const [message, setMessage] = useState('');
  
    const handleChange = event => {
      setMessage(event.target.value);
  
      console.log('value is:', event.target.value);
    };
  
  
  
    const dol =`https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=8&units=metric&appid=ccde546cfeb486c4e0022c6fda4a4a4d`;
  
  const datagetter= async ()=>{
  
    const {data} = await axios.get(dol);
    console.log(data)
    setWeatherInfo(data)
    console.log(weatherInfo?.list)
  
  monket();
  }
  
  const monket =()=>{
    setheaderid(weatherInfo.list[0].weather[0].id)
    settempmin(weatherInfo.list[0].main.temp_min)
    settempmax(weatherInfo.list[0] .main.temp_max)
    sethumidity(weatherInfo.list[0].main.humidity)
    setPressure(weatherInfo.list[0].main.pressure)
    setdescription(weatherInfo.list[0].weather[0].description)
  
  }
  

  
  return (
    <div className="App">
          <div className="Navbar">
        <div className="Input-button-container">
          <div className="location-input">
            <input onChange={handleChange} value={message} type="text"   placeholder="Type a City Name" />
          </div>
          <div>
            <button  onClick={async e=>{await datagetter();setLocation(message)} }>Find Weather</button>
          </div>
        </div>
      </div> 


      <Middle   min={tempmin}  max={tempmax} hum={humidity}  pre={Pressure} />
      <Down     />
      <Down     />
      <Down     />
      <Down     />
      <Down     />
      <Down     />
      <Down     />
         </div>
  );
}

export default App;
