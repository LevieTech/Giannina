import { call, put, takeLatest, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

function* getUserFlights() {
  try {
    const response = yield call(axios.get, "/api/flight_info/user");
    yield put({ type: "GET_USER_FLIGHTS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log("Error getting flights:", error);
    yield put({ type: "GET_USER_FLIGHTS_ERROR" });
  }
}

function* getAllFlights() {
  try {
    const response = yield call(axios.get, "/api/flight_info");
    yield put({ type: "GET_ALL_FLIGHTS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log("Error getting all FLIGHTS:", error);
    yield put({ type: "GET_ALL_FLIGHTS_ERROR" });
  }
}

function* getFlightId(action) {
  try {
    const response = yield call(axios.get, `/api/flight_info/${action.payload.flightID}`, { params: { userID: action.payload.id } });
    yield put({ type: "GET_SELECTED_FLIGHT_SUCCESS", payload: response.data });
  } catch (error) {
    console.log("Error getting flight by id:", error);
    yield put({ type: "GET_FLIGHT_BY_ID_ERROR" });
  }
}

function* updateFlights(action) {
  try {
    const { guestName, departureDate, arrivalDate, fromCity, toCity, airline, flightNumber, url, flightID } = action.payload;
    yield call(axios.put, `/api/flight_info/${flightID}`, {
      guestName, 
      departureDate, 
      arrivalDate, 
      fromCity, 
      toCity, 
      airline,
      flightNumber,
      url,
    });
    yield put({ type: "UPDATE_FLIGHTS_SUCCESS" });
    yield put({ type: "GET_USER_FLIGHTS" }); // refresh the user's flights
    //   handleClose();
  } catch (error) {
    console.log("Error updating flights:", error);
    yield put({ type: "UPDATE_FLIGHTS_ERROR" });
  }
}

function* flightSaga() {
  yield takeLatest("GET_ALL_FLIGHTS", getAllFlights);
  yield takeLatest("GET_USER_FLIGHTS", getUserFlights);
  yield takeLatest("UPDATE_FLIGHTS", updateFlights);
}

export default flightSaga;
