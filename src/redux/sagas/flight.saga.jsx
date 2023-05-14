import { call, put, takeLatest, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

function* getUserFlights() {
    try {
        const response= yield call(axios.get, "/api/flight_info/user")
        yield put({type: "GET_USER_FLIGHTS_SUCCESS", payload: response.data});
    }catch(error) {
        console.log("Error getting flights:", error)
        yield put ({ type: "GET_USER_FLIGHTS_ERROR"});
    }
}