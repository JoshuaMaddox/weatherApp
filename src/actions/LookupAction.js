import AppDispatcher from '../AppDispatcher'

const LookupAction = {
  getWeatherByZip(weather){
    AppDispatcher.dispatch({
      type: 'WEATHER_BYZIP',
      payload: { weather }
    })
  }
}

export default LookupAction