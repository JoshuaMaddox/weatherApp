import API from '../API'

let location = null

const GetLocationServerAction = {
  receiveConditions(myLoc) {
    if(!myLoc){
      location = 'autoip.json'
    } else {
      location = myLoc
    }
    API.fetchInitWeather(location)
  }
}

export default GetLocationServerAction

