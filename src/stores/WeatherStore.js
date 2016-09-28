import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _conditions = null

class WeatherStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type){
        case 'INIT_CONDITIONS':
          console.log('I am WeatherStore: conditions ', action.payload.conditions)
          _conditions = action.payload.conditions
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
}

export default new WeatherStore

