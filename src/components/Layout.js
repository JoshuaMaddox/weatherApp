import React, { Component } from 'react'
import InitialWeather from './InitialWeather'
import WeatherLookup from './WeatherLookup'
import GetLocationAction from '../actions/GetLocationAction'
import GetLocationServerAction from '../actions/GetLocationServerAction'
import WeatherStore from '../stores/WeatherStore'
import WeatherByZip from './WeatherByZip'

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      conditions: WeatherStore.getConditions(),
      weather: WeatherStore.getWeatherByZipCode()
    }
    this.onChange = this.onChange.bind(this)
    // this.grabConditions = this.grabConditions.bind(this)
  }

  componentWillMount(){
    WeatherStore.startListening(this.onChange)
    GetLocationServerAction.receiveConditions()
  }

  componentWillUnmount(){
    WeatherStore.stopListening(this.onChange)
  }

  onChange(){
    this.setState({
      conditions: WeatherStore.getConditions(),
      weather: WeatherStore.getWeatherByZipCode()
    })
  }

  // delete to here

  render() {

    let { conditions, weather } = this.state
    return (
      <div className='container'>
        <div className="row">
          <div className="col-xs-12 text-center">
            <h1 className='text-center'>Weather App - It's a Code Storm</h1>
            <h4>Weather Report Brought to You By Coca-Cola</h4>
            {!this.state.conditions ? <h4>No Conditions</h4> : <InitialWeather conditions={this.state.conditions} />}
          </div>
        </div>
        <WeatherLookup />
        <div className="row">
          <div className="col-xs-12 weatherByZipContainer text-center">
            <WeatherByZip weather={weather} />
          </div>
        </div>
      </div>
    )
  }
}
