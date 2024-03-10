import React from "react"; 
import { useState } from "react";

function Loading(){
  return <div className="load">
    <div className="circle"></div>
  </div>
}

function App() {
  const [search,setSearch]=useState("")
  const [weatherData,setWeatherData]=useState({data:{},loading:false});

  const api={
    key:"cade8244dcabce81842511b67d0115d8",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
  }

  async function weatherSearch(e){
    if(e.key==="Enter"){
    setSearch("")
    setWeatherData({...weatherData,loading:true})
    e.preventDefault()
    await fetch(`${api.baseUrl}?q=${search}&appid=${api.key}`)
    .then(res=>res.json())
    .then(data=>{
      setWeatherData({data:data,loading:false})
      console.log(data)
    })
    .catch((error)=>{
      console.log("error",error);
    })
    
  }
  }

  return (
  <div className="container">
    
    <input type="text" className="weatherInput" placeholder="enter city name"
     value={search} onChange={e=>setSearch(e.target.value)} onKeyDownCapture={weatherSearch} />

    {weatherData.loading && <Loading />}

    {weatherData && weatherData.data && !weatherData.loading && weatherData.data.main ? (
      
    <section className="mainContent">
      <div>City: {weatherData.data.name} {weatherData.data.sys.country}</div>
      <div>Temperature: {(weatherData.data.main.temp - 273.15).toFixed(2)} &deg;C</div>
      <div>wind speed: {weatherData.data.wind.speed} m/s</div>

      <img src={`https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`} alt="aall" />

      <div>Weather: {weatherData.data.weather[0].main}</div>
      <div>Description: {weatherData.data.weather[0].description}</div>
    </section>
    
  ):(<></>)
    }
    {weatherData.data.message==="city not found" && !weatherData.loading && <section className="incorrectName">Incorrect location</section>}

  </div>
  )

}

export default App;
