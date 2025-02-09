import React from "react"; 
import { useState } from "react";
import apiData from "./Data"; //ignored
import WeatherData from "./Components/WeatherData";
import LocationError from "./Components/LocationError";
import Loading from "./loader/Loading";
import Input from "./Components/Input";
import './App.css';



function App() {
  const [search,setSearch]=useState("");
  const [weatherData,setWeatherData]=useState({data:{},loading:false});

  const {key,baseUrl}=apiData;

  const handleChange=(e)=>{
    setSearch(e.target.value)
  }

  const weatherSearch=async (e)=>{

    try {
      
      if(e.key==="Enter"){
        e.preventDefault()

        setWeatherData({...weatherData,loading:true})

        const res=await fetch(`${baseUrl}?q=${search}&appid=${key}`);

        const data=await res.json();
        setWeatherData({data:data,loading:false})
      }

    } catch (error) {
      console.log(error.message)
    }
  }


  return (
  <div className="container">
    <Input search={search} handleChange={handleChange} weatherSearch={weatherSearch}/>

    {weatherData.loading && <Loading />}

    {weatherData && weatherData.data && !weatherData.loading && weatherData.data.main
    && <WeatherData weatherData={weatherData} />}

    {weatherData.data.message==="city not found" && !weatherData.loading && <LocationError />}

  </div>
  )

}

export default App;
