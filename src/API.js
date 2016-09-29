import $ from 'jquery'
import GetLocationAction from './actions/GetLocationAction'
import GetLocationServerAction from './actions/GetLocationServerAction'
import LookupAction from './actions/LookupAction'
import LookupServerAction from './actions/LookupServerAction'

const API = {
  fetchInitWeather(location){
    $.get(`//api.wunderground.com/api/a2f3dae43976631a/conditions/q/${location}`, (conditions, err) => {
      GetLocationAction.receiveConditions(conditions)
    })
  },

  fetchWeatherByZip(zip){
    $.get(`//api.wunderground.com/api/a2f3dae43976631a/conditions/q/${zip}.json`, (weather, err) => {
      console.log('I am the weather object in API: ', weather )
      LookupAction.getWeatherByZip(weather)
    })
  }
}

export default API
