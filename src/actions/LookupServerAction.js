import API from '../API'

const LookupServerAction = {
  getWeatherByZip(zip){
    console.log('zip was found in LookupServerAction: ', zip)
    API.fetchWeatherByZip(zip)
  }
}

export default LookupServerAction