import  { useEffect } from "react";
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
  
 // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch({ type: FETCH_PATIENTS });
  }, []);

  const start = (page - 1) * 5;
  const visiblePatients = patients.slice(start, start + 5);

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center me-3"
              style={{
                width: 44,
                height: 44,
                background: "linear-gradient(135deg, #fa709a, #fee140)",
              }}
            >
              <i className="bi bi-people-fill text-white fs-5"></i>
            </div>
            <h2 className="card-title mb-0 fw-semibold fs-5">Patients</h2>
          </div>
          <span className="badge bg-light text-dark border">
            {patients.length} total
          </span>
        </div>

        <div className="list-group flex-grow-1 mb-3">
          {visiblePatients.length > 0 ? (
            visiblePatients.map((patient) => (
              <button
                key={patient.id}
                onClick={() =>
                  dispatch({
                    type: FETCH_PATIENT_DETAILS,
                    payload: patient.id,
                  })
                }
                className="list-group-item list-group-item-action d-flex align-items-center justify-content-between border-0 border-bottom rounded-3 mb-1 py-3"
              >
                <span className="d-flex align-items-center">
                  <i className="bi bi-person-circle text-secondary me-2 fs-5"></i>
                  {patient.name}
                </span>
                <i className="bi bi-chevron-right text-muted"></i>
              </button>
            ))
          ) : (
            <div className="text-center text-muted py-4">
              <i className="bi bi-inbox fs-2 d-block mb-2 opacity-50"></i>
              No patients found
            </div>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <button
            className="btn btn-outline-secondary btn-sm px-3"
            onClick={() => dispatch({ type: PREV_PAGE })}
            disabled={page === 1}
          >
            <i className="bi bi-chevron-left me-1"></i>
            Previous
          </button>

          <span className="text-muted small">Page {page}</span>

          <button
            className="btn btn-outline-primary btn-sm px-3"
            onClick={() => dispatch({ type: NEXT_PAGE })}
            disabled={start + 5 >= patients.length}
          >
            Next
            <i className="bi bi-chevron-right ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientList;
