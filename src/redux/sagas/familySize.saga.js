// familySizeSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';// makes request to server

function* fetchFamilySizeData() {
  try {
    //"yield" here to wait until the data comes back from the database.
    // The "call" another function called "fetchFamilySizeDataFromDatabase."
    // store the result of this function call in a variable called "response."
    const response = yield call(fetchFamilySizeDataFromDatabase);
    //extract the data from the "response" and save it in a variable called "data."
    const data = response.data;
    //"put" to send an action to our app with the data we fetched.
  
    yield put({ type: 'FETCH_FAMILY_SIZE_DATA_SUCCESS', payload: data });
  } catch (error) {
    console.log('Fetch Family Size Data Failed', error);
    //"put" to send another action to our app, but this time with an error message.
   yield put({ type: 'FETCH_FAMILY_SIZE_DATA_FAILURE', error });
  }
}
// This function will talk to a database and get the family size data
// "axios" library to make the request to the server.
function fetchFamilySizeDataFromDatabase() {
  // When this function is called, it will use "axios" to make a GET request to a specific address on the internet ("/api/family-size").
  // The server will handle this request and respond with the family size data.
  return axios.get('/api/family-size');
}
// This function brings everything together and controls the flow of data fetching.
function* familySizeSaga() {
    //  "Whenever someone asks for family size data (when they dispatch an action with the type 'FETCH_FAMILY_SIZE_DATA'), call the 'fetchFamilySizeData' function
  // The "takeLatest" function helps ensure that if multiple requests are made at once, only handle the latest one.
  yield takeLatest('FETCH_FAMILY_SIZE_DATA', fetchFamilySizeData);
}

export default familySizeSaga;

