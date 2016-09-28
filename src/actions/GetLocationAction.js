import AppDispatcher from '../AppDispatcher'

const GetLocationAction = {
  receiveConditions(conditions) {
    AppDispatcher.dispatch({
      type: 'INIT_CONDITIONS',
      payload: { conditions }
    })
  }
}

export default GetLocationAction
