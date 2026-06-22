import {
  call,
  put,
  takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";

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

const fetchPatientsAPI = () =>
  fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());

const fetchPatientDetailsAPI = (
  id
) =>
  fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

const postPatientAPI = (data) =>
  fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type":
          "application/json",
      },
    }
  );

function* fetchPatientsSaga() {
  try {
    yield put({
      type: SET_LOADING,
      payload: true,
    });

    const data = yield call(
      fetchPatientsAPI
    );

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
      payload:
        "Failed to fetch patients",
    });
  }
}

function* fetchPatientDetailsSaga(
  action
) {
  try {
    const data = yield call(
      fetchPatientDetailsAPI,
      action.payload
    );

    yield put({
      type: SET_PATIENT_DETAILS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* submitPatientSaga(action) {
  try {
    if (!navigator.onLine) {
      yield put({
        type: QUEUE_PATIENT_FORM,
        payload: action.payload,
      });

      return;
    }

    yield call(
      postPatientAPI,
      action.payload
    );
  } catch (error) {
    yield put({
      type: QUEUE_PATIENT_FORM,
      payload: action.payload,
    });
  }
}

function* processQueueSaga() {
  const queue = yield select(
    (state) => state.offlineQueue
  );

  for (
    let i = 0;
    i < queue.length;
    i++
  ) {
    try {
      yield call(
        postPatientAPI,
        queue[i]
      );

      yield put({
        type: REMOVE_FROM_QUEUE,
        payload: i,
      });
    } catch {
      break;
    }
  }
}

export default function* rootSaga() {
  yield takeEvery(
    FETCH_PATIENTS,
    fetchPatientsSaga
  );

  yield takeEvery(
    SUBMIT_PATIENT_FORM,
    submitPatientSaga
  );

  yield takeEvery(
    NETWORK_ONLINE,
    processQueueSaga
  );

  yield takeLatest(
    FETCH_PATIENT_DETAILS,
    fetchPatientDetailsSaga
  );
}