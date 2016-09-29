import React, { Component } from 'react'

export default class WeatherByZip extends Component {
  constructor(){
    super()
  }

  render(){
    let { weather } = this.props
    let weatherByZip;

    if(weather){
      console.log('conditions have made it into inital conditons: ', weather.icon_url)
      let city = weather.current_observation.display_location.city
      let temp = weather.current_observation.temp_f
      let tempForTards = weather.current_observation.temp_c 
      let image = weather.current_observation.icon_url
      let radiation = weather.current_observation.solarradiation
      weatherByZip = (
          <div className="WeatherByZip">
            <img src={image} alt=""/>
            <h3>Your Current Weather in: {city}</h3>
            <p>Current Temp: {temp}</p>
            <p>Current Temp for Tards: {tempForTards}</p>
            <p>Current Solar Radiation: {radiation}</p>
          </div>
      )
    } else {
      weatherByZip = <div></div>
    }
   
    return (
      <div>
       {weatherByZip}
      </div>
    )
  }
}