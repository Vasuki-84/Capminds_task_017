import PatientList from "./components/PatientList";
import PatientDetails from "./components/PatientDetails";
import PatientForm from "./components/PatientForm";

function App() {
  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
      <div className="container">
        <h1 className="text-center fw-bold mb-4">
          Healthcare Dashboard
        </h1>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <PatientList />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
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