import React, { Component } from 'react'

export default class InitialWeather extends Component {
  constructor(){
    super()
  }

  render(){
     
    let { conditions } = this.props
    let city = conditions.current_observation.display_location.city
    let temp = conditions.current_observation.temp_f
    let tempForTards = conditions.current_observation.temp_c 
    let image = conditions.current_observation.icon_url
    let radiation = conditions.current_observation.solarradiation
    let initalCondition;

    if(conditions){
      initalCondition = (
        <div className="row">
          <div className="initialWeather">
            <img src={image} alt=""/>
            <h3>Your Current Weather Conditions in: {city}</h3>
            <p>Current Temp: {temp}</p>
            <p>Current Temp for Tards: {tempForTards}</p>
            <p>Current Solar Radiation: {radiation}</p>
          </div>
        </div>
      )
    } else {
      initalCondition = <div></div>
    }
   
    return (
      <div>
        {initalCondition}
      </div>
    )
  }
}