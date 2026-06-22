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
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title mb-4">Register Patient</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Patient Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              placeholder="Age"
              value={form.age}
              onChange={(e) =>
                setForm({
                  ...form,
                  age: e.target.value,
                })
              }
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Disease"
              value={form.disease}
              onChange={(e) =>
                setForm({
                  ...form,
                  disease: e.target.value,
                })
              }
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Doctor Assigned"
              value={form.doctor}
              onChange={(e) =>
                setForm({
                  ...form,
                  doctor: e.target.value,
                })
              }
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PatientForm;
