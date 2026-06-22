import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  FETCH_PATIENTS,
  NEXT_PAGE,
  PREV_PAGE,
  FETCH_PATIENT_DETAILS,
} from "../redux/actions";

function PatientList() {
  const dispatch = useDispatch();

  const patients = useSelector((state) => state.patients);

  const page = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch({
      type: FETCH_PATIENTS,
    });
  }, [dispatch]);

  const start = (page - 1) * 5;

  const visiblePatients = patients.slice(start, start + 5);

  return (
   <div className="card shadow-sm h-100">
  <div className="card-body">
    <h2 className="card-title mb-3">
      Patients
    </h2>

    <div className="list-group">
      {visiblePatients.map((patient) => (
        <button
          key={patient.id}
          onClick={() =>
            dispatch({
              type: FETCH_PATIENT_DETAILS,
              payload: patient.id,
            })
          }
          className="list-group-item list-group-item-action"
        >
          {patient.name}
        </button>
      ))}
    </div>

    <div className="d-flex justify-content-between mt-3">
      <button
        className="btn btn-secondary"
        onClick={() =>
          dispatch({ type: PREV_PAGE })
        }
      >
        Previous
      </button>

      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({ type: NEXT_PAGE })
        }
      >
        Next
      </button>
    </div>
  </div>
</div>
  );
}

export default PatientList;
