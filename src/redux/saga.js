import axios from "axios";

import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";

import {
  FETCH_PATIENTS,
  SET_PATIENTS,
  FETCH_PATIENT_DETAILS,
  SET_PATIENT_DETAILS,
  SUBMIT_PATIENT_FORM,
  QUEUE_PATIENT_FORM,
  REMOVE_FROM_QUEUE,
  NETWORK_ONLINE,
  SET_LOADING,
  SET_ERROR,
} from "./actions";

// ======================
// API FUNCTIONS
// ======================

const fetchPatientsAPI = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );

  return response.data;
};

const fetchPatientDetailsAPI = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  return response.data;
};

const postPatientAPI = async (data) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    data,
  );

  return response.data;
};

// ======================
// FETCH PATIENTS SAGA
// ======================

// worker saga - generator function 
function* fetchPatientsSaga() {
  try {
    yield put({
      type: SET_LOADING,
      payload: true,
    });

    const data = yield call(fetchPatientsAPI);

    yield put({
      type: SET_PATIENTS,
      payload: data.slice(0, 10),
    });

    yield put({
      type: SET_LOADING,
      payload: false,
    });
  } catch (error) {
    yield put({
      type: SET_ERROR,
      payload: "Failed to fetch patients",
    });

    yield put({
      type: SET_LOADING,
      payload: false,
    });
  }
}

// ======================
// FETCH PATIENT DETAILS
// ======================

function* fetchPatientDetailsSaga(action) {
  try {
    const data = yield call(fetchPatientDetailsAPI, action.payload);

    yield put({
      type: SET_PATIENT_DETAILS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: SET_ERROR,
      payload: "Failed to fetch patient details",
    });
  }
}

// ======================
// SUBMIT PATIENT FORM
// ======================

function* submitPatientSaga(action) {
  console.log("Form Submitted");
  console.log(navigator.onLine);
  try {
    if (!navigator.onLine) {
      yield put({
        type: QUEUE_PATIENT_FORM,
        payload: action.payload,
      });

      console.log("Offline - Added to Queue");

      return;
    }

    const response = yield call(postPatientAPI, action.payload);

    console.log("Patient Saved", response);
  } catch (error) {
    yield put({
      type: QUEUE_PATIENT_FORM,
      payload: action.payload,
    });

    console.log("API Failed - Added to Queue");
  }
}

// ======================
// PROCESS OFFLINE QUEUE
// ======================

function* processQueueSaga() {
  const queue = yield select((state) => state.offlineQueue);

  for (let i = 0; i < queue.length; i++) {
    try {
      yield call(postPatientAPI, queue[i]);

      yield put({
        type: REMOVE_FROM_QUEUE,
        payload: i,
      });

      console.log("Queued Patient Submitted");
    } catch (error) {
      console.log("Queue Processing Failed");

      break;
    }
  }
}

// ======================
// ROOT SAGA
// ======================
// watcher saga
export default function* rootSaga() {
  yield takeEvery(FETCH_PATIENTS, fetchPatientsSaga);

  yield takeEvery(SUBMIT_PATIENT_FORM, submitPatientSaga);

  yield takeEvery(NETWORK_ONLINE, processQueueSaga);

  yield takeLatest(FETCH_PATIENT_DETAILS, fetchPatientDetailsSaga);
}
