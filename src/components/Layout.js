import React, { Component } from 'react'
import InitialWeather from './InitialWeather'
import GetLocationAction from '../actions/GetLocationAction'
import GetLocationServerAction from '../actions/GetLocationServerAction'
import WeatherStore from '../stores/WeatherStore'

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      conditions: WeatherStore.getConditions()
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
      conditions: WeatherStore.getConditions()
    })
  }

  // delete to here

  render() {

    let { conditions } = this.state
    return (
      <div className='container'>
        <h1 className='text-center'>Weather App - It's a Code Storm</h1>
        {!this.state.conditions ? <h4>No Conditions</h4> : <InitialWeather conditions={this.state.conditions} />}
        <button className='btn btn-lg btn-primary'>Get Conditions</button>
      </div>
    )
  }
}
