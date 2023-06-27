import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Action Types
const FETCH_PATIENTS_REQUEST = 'FETCH_PATIENTS_REQUEST';
const FETCH_PATIENTS_SUCCESS = 'FETCH_PATIENTS_SUCCESS';
const FETCH_PATIENTS_FAILURE = 'FETCH_PATIENTS_FAILURE';

// Action Creators
const fetchPatientsRequest = () => ({
  type: FETCH_PATIENTS_REQUEST,
});

const fetchPatientsSuccess = (data) => ({
  type: FETCH_PATIENTS_SUCCESS,
  payload: data,
});

const fetchPatientsFailure = (error) => ({
  type: FETCH_PATIENTS_FAILURE,
  payload: error,
});

// Saga worker function
function* fetchPatients() {
  try {
    const response = yield axios.get('/api/patients');
    yield put(fetchPatientsSuccess(response.data));
  } catch (error) {
    yield put(fetchPatientsFailure(error));
  }
}

// Saga watcher function
function* patientsSaga() {
  yield takeLatest(FETCH_PATIENTS_REQUEST, fetchPatients);
}

export {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
  fetchPatientsRequest,
  fetchPatientsSuccess,
  fetchPatientsFailure,
  patientsSaga,
};




// // patients.saga.js
// import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

// // Action Types
// const FETCH_PATIENTS_REQUEST = 'FETCH_PATIENTS_REQUEST';
// const FETCH_PATIENTS_SUCCESS = 'FETCH_PATIENTS_SUCCESS';
// const FETCH_PATIENTS_FAILURE = 'FETCH_PATIENTS_FAILURE';

// // Action Creators
// const fetchPatientsRequest = () => ({
//   type: FETCH_PATIENTS_REQUEST,
// });

// const fetchPatientsSuccess = (data) => ({
//   type: FETCH_PATIENTS_SUCCESS,
//   payload: data,
// });

// const fetchPatientsFailure = (error) => ({
//   type: FETCH_PATIENTS_FAILURE,
//   payload: error,
// });

// // Saga worker function
// function* fetchPatients() {
//   try {
//     const response = yield axios.get('/api/patients');
//     yield put(fetchPatientsSuccess(response.data));
//   } catch (error) {
//     yield put(fetchPatientsFailure(error));
//   }
// }

// // Saga watcher function
// function* patientsSaga() {
//   yield takeLatest(FETCH_PATIENTS_REQUEST, fetchPatients);
// }

// export {
//   FETCH_PATIENTS_REQUEST,
//   FETCH_PATIENTS_SUCCESS,
//   FETCH_PATIENTS_FAILURE,
//   fetchPatientsRequest,
//   fetchPatientsSuccess,
//   fetchPatientsFailure,
//   patientsSaga,
// };
// export default patientsSaga;



// import { put, takeLatest } from 'redux-saga/effects';

// function* fetchPatients() {
//   try {
//     const response = yield fetch('/api/visits/week');
//     const data = yield response.json();
//     yield put({ type: 'SET_PATIENTS', payload: data });
//   } catch (error) {
//     console.error('Error fetching patients', error);
//     yield put({ type: 'SET_PATIENTS_ERROR', payload: error.toString() });
//   }
// }

// function* patientsSaga() {
//   yield takeLatest('FETCH_PATIENTS', fetchPatients);
// }

// export default patientsSaga;

