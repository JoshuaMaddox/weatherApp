import React, { Component } from 'react'
import GetLocationServerAction from '../actions/GetLocationServerAction'
import LookupServerAction from '../actions/LookupServerAction'

export default class WeatherLookup extends Component {
  constructor(){
    super()
    this.sendLocation = this.sendLocation.bind(this)
  }

  sendLocation(e){
    e.preventDefault()
    const { city } = this.refs
    let zip = city.value
    city.value = ''
    console.log('I am zip in the WeatherLookup Component sending to LSA: ',zip)
    LookupServerAction.getWeatherByZip(zip)
  }

  render(){

    return  (
      <div className="getWeatherByZip text-center"> 
        <h3>Enter 5 Digit Zip Code to Get Weather Information: </h3>
        <form onSubmit={this.sendLocation} className="lookupForm">
          <input type="number" name="city" id="city" ref='city' min='10000' max='99999' />
          <button className="btn btn-lg btn-danger" type='submit' >Get Weather</button>
        </form>
      </div>
    )
  }
}