import API from '../API'

const GetLocationServerAction = {
  receiveConditions() {
    console.log('GetLocationAction has been triggered: ' )
    API.fetchInitWeather()
  }
}

export default GetLocationServerAction

