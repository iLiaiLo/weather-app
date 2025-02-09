import React from 'react'

const WeatherData = ({weatherData}) => {
  return (
    <section className="mainContent">
      <div>City: {weatherData.data.name} {weatherData.data.sys.country}</div>
      <div>Temperature: {(weatherData.data.main.temp - 273.15).toFixed(2)} &deg;C</div>
      <div>wind speed: {weatherData.data.wind.speed} m/s</div>

      <img src={`https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`} alt="untitled" />

      <div>Weather: {weatherData.data.weather[0].main}</div>
      <div>Description: {weatherData.data.weather[0].description}</div>
    </section>
  )
}

export default WeatherData