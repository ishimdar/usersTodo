import request from 'superagent'

const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  console.log('actionDataService', action);
  // debugger;
  // next(action)
  switch (action.type) {
    case 'GET_USER_DATA':
      /*
    In case we receive an action to send an API request, send the appropriate request
    */
    // request.get('http://localhost:3004/users').end((err, res) => {
      request.get('http://jsonplaceholder.typicode.com/users').end((err, res) => {
        if (err) {
          /*
          in case there is any error, dispatch an action containing the error
          */
          return next({
            type: 'GET_TODO_DATA_ERROR',
            err
          })
        }
        const data = JSON.parse(res.text)
        console.log('data', data);
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: 'GET_USER_DATA_RECEIVED',
          data
        })
      })
      break

      case 'CALL_TODO_API':
      /*
    In case we receive an action to send an API request, send the appropriate request
    */
      request.get('http://jsonplaceholder.typicode.com/todos').end((err, res) => {
        if (err) {
          /*
          in case there is any error, dispatch an action containing the error
          */
          return next({
            type: 'GET_TODO_DATA_ERROR1',
            err
          })
        }
        const data = JSON.parse(res.text)
        // console.log('data', data);
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: 'GET_TODO_DATA_RECEIVED',
          data
        })
      })
      break
    /*
  Do nothing if the action does not interest us
  */
    default:
      break
  }
}

export default dataService