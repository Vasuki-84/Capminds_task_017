import PatientList from "./components/PatientList";
import PatientDetails from "./components/PatientDetails";
import PatientForm from "./components/PatientForm";

function App() {
  return (
    <div className="bg-light min-vh-100">
      {/* Top bar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm mb-4">
        <div className="container">
          <span className="navbar-brand d-flex align-items-center fw-bold">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center me-2"
              style={{
                width: 38,
                height: 38,
                background: "linear-gradient(135deg, #667eea, #764ba2)",
              }}
            >
              <i className="bi bi-hospital text-white"></i>
            </div>
            Healthcare Dashboard
          </span>
        </div>
      </nav>

      <div className="container pb-5">
        <div className="mb-4 text-center text-md-start">
          <h1 className="fw-bold fs-3 mb-1">Patient Management</h1>
          <p className="text-muted mb-0">
            View, manage, and register patients in one place
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <PatientList />
          </div>

          <div className="col-12 col-lg-4">
            <PatientDetails />
          </div>

          <div className="col-12 col-lg-4">
            <PatientForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
