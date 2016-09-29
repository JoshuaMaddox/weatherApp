import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _conditions = null
let _weatherByZipCode = null

class WeatherStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type){
        case 'INIT_CONDITIONS':
          _conditions = action.payload.conditions
          this.emit('CHANGE')
        case 'WEATHER_BYZIP':
        _weatherByZipCode = action.payload.weather
        console.log('I am WeatherStore: weather ', action.payload.weather)
        this.emit('CHANGE')
      } 
    })
  }

  startListening(cb){
    this.on('CHANGE', cb)
  }

  stopListening(cb){
    this.on('CHANGE', cb)
  }

  getConditions(){
    return _conditions
  }

  getWeatherByZipCode(){
    return _weatherByZipCode
  }
}

export default new WeatherStore

