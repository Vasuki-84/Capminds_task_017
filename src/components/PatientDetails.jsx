import React from "react";
import { useSelector } from "react-redux";

function PatientDetails() {
  const patient = useSelector((state) => state.patientDetails);

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-4">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: 44,
              height: 44,
              background: "linear-gradient(135deg, #6f86d6, #48c6ef)",
            }}
          >
            <i className="bi bi-person-fill text-white fs-5"></i>
          </div>
          <h2 className="card-title mb-0 fw-semibold fs-5">Patient Details</h2>
        </div>

        {patient ? (
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-start border-bottom pb-2">
              <i className="bi bi-person text-primary me-3 fs-5"></i>
              <div>
                <div className="text-muted small">Name</div>
                <div className="fw-medium">{patient.name}</div>
              </div>
            </div>

            <div className="d-flex align-items-start border-bottom pb-2">
              <i className="bi bi-envelope text-primary me-3 fs-5"></i>
              <div>
                <div className="text-muted small">Email</div>
                <div className="fw-medium text-break">{patient.email}</div>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <i className="bi bi-telephone text-primary me-3 fs-5"></i>
              <div>
                <div className="text-muted small">Phone</div>
                <div className="fw-medium">{patient.phone}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-muted py-5">
            <i className="bi bi-person-x fs-1 d-block mb-2 opacity-50"></i>
            <p className="mb-0">Select a patient to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientDetails;