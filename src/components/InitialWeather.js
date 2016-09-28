import React, { Component } from 'react'

export default class InitialWeather extends Component {
  constructor(){
    super()
  }
  
  render(){
     
    let { conditions } = this.props
    console.log('conditions have made it into inital conditons: ', conditions)
    let city = conditions.current_observation.observation_location.city
    let temp = conditions.current_observation.temp_f
    let tempForTards = conditions.current_observation.temp_c 
    let initalCondition;

    if(conditions){
      initalCondition = (
        <div className="row">
          <div className="initialWeather">
            <h3>Your Current Weather Conditions:</h3>
            <p>Current Temp: {temp}</p>
            <p>Current Temp for Tards: {tempForTards}</p>
            <p></p>
          </div>
        </div>
      )
    } else {
      initalCondition = <h4>currently getting initial conditions...</h4>
    }
   
    return (
      <div>
        {initalCondition}
      </div>
    )
  }
}