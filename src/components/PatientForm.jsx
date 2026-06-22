import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SUBMIT_PATIENT_FORM } from "../redux/actions";

function PatientForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
    doctor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: SUBMIT_PATIENT_FORM,
      payload: form,
    });

    setForm({
      name: "",
      age: "",
      disease: "",
      doctor: "",
    });
  };

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-4">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: 44,
              height: 44,
              background: "linear-gradient(135deg, #43e97b, #38f9d7)",
            }}
          >
            <i className="bi bi-clipboard2-plus-fill text-white fs-5"></i>
          </div>
          <h2 className="card-title mb-0 fw-semibold fs-5">Register Patient</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label small text-muted">Patient Name</label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-person"></i>
                </span>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label small text-muted">Age</label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-calendar3"></i>
                </span>
                <input
                  type="number"
                  placeholder="Age"
                  value={form.age}
                  onChange={(e) =>
                    setForm({ ...form, age: e.target.value })
                  }
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label small text-muted">Disease</label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-heart-pulse"></i>
                </span>
                <input
                  type="text"
                  placeholder="Disease"
                  value={form.disease}
                  onChange={(e) =>
                    setForm({ ...form, disease: e.target.value })
                  }
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label small text-muted">Doctor Assigned</label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-person-badge"></i>
                </span>
                <input
                  type="text"
                  placeholder="Doctor"
                  value={form.doctor}
                  onChange={(e) =>
                    setForm({ ...form, doctor: e.target.value })
                  }
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mt-4 py-2 fw-medium"
            style={{
              background: "linear-gradient(135deg, #4facfe, #00f2fe)",
              border: "none",
            }}
          >
            <i className="bi bi-check-circle me-2"></i>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PatientForm;