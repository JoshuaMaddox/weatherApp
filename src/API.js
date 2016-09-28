import $ from 'jquery'
import GetLocationAction from './actions/GetLocationAction'
import GetLocationServerAction from './actions/GetLocationServerAction'

const API = {
  fetchInitWeather(){
    $.get(`//api.wunderground.com/api/a2f3dae43976631a/conditions/q/autoip.json`, (conditions, err) => {
      GetLocationAction.receiveConditions(conditions)
    })
  }
}

export default API
