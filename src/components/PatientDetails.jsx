import React from "react";
import { useSelector } from "react-redux";

function PatientDetails() {
  const patient = useSelector((state) => state.patientDetails);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-4">Patient Details</h2>

        {patient ? (
          <>
            <p>
              <strong>Name:</strong> {patient.name}
            </p>

            <p>
              <strong>Email:</strong> {patient.email}
            </p>

            <p>
              <strong>Phone:</strong> {patient.phone}
            </p>
          </>
        ) : (
          <p className="text-muted">Select a patient</p>
        )}
      </div>
    </div>
  );
}

export default PatientDetails;
