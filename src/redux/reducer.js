import {
  SET_PATIENTS,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PATIENT_DETAILS,
  QUEUE_PATIENT_FORM,
  REMOVE_FROM_QUEUE,
  SET_LOADING,
  SET_ERROR,
} from "./actions";

const initialState = {
  patients: [],
  currentPage: 1,

  patientDetails: null,

  offlineQueue: [],

  loading: false,
  error: null,

  isOnline: navigator.onLine,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATIENTS:
      return {
        ...state,
        patients: action.payload,
      };

    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1,
      };

    case SET_PATIENT_DETAILS:
      return {
        ...state,
        patientDetails: action.payload,
      };

    case QUEUE_PATIENT_FORM:
      return {
        ...state,
        offlineQueue: [...state.offlineQueue, action.payload],
      };

    case REMOVE_FROM_QUEUE:
      return {
        ...state,
        offlineQueue: state.offlineQueue.filter(
          (_, index) => index !== action.payload,
        ),
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
