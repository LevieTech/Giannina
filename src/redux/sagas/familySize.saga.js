// familySizeSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFamilySizeData() {
  try {
    const response = yield call(fetchFamilySizeDataFromDatabase);
    const data = response.data;
    yield put({ type: 'FETCH_FAMILY_SIZE_DATA_SUCCESS', payload: data });
  } catch (error) {
    console.log('Fetch Family Size Data Failed', error);
    yield put({ type: 'FETCH_FAMILY_SIZE_DATA_FAILURE', error });
  }
}

function fetchFamilySizeDataFromDatabase() {
  return axios.get('/api/family-size');
}

function* familySizeSaga() {
  yield takeLatest('FETCH_FAMILY_SIZE_DATA', fetchFamilySizeData);
}

export default familySizeSaga;

