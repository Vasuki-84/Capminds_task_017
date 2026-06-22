# 🏥 Healthcare Dashboard - Redux Saga Performance & Reliability

## 📌 Project Overview

This project is a **Healthcare Doctor Dashboard** built using **React, Redux, Redux-Saga, and Bootstrap**. The application demonstrates advanced Redux-Saga concepts such as:

* Pagination Performance Optimization
* Offline Form Submission Queue
* API Request Cancellation
* Redux State Management
* Asynchronous API Handling

The dashboard is designed for doctors and nurses to efficiently manage patient information while ensuring reliability during network interruptions.

---

# 🚀 Features

## 1. Pagination Performance Optimization

### Objective

Improve performance by minimizing unnecessary API requests.

### Implementation

* Fetches **10 patient records** from the API.
* Stores all records in the Redux Store.
* Displays only **5 patients per page**.
* Navigating between pages does not trigger additional API requests.

### Flow

```text
Component
   ↓
Dispatch FETCH_PATIENTS
   ↓
Redux Saga
   ↓
API Call
   ↓
SET_PATIENTS
   ↓
Redux Store Updated
   ↓
UI Displays 5 Records Per Page
```

### Benefits

* Reduced API calls
* Faster page navigation
* Better user experience

---

## 2. Offline Form Submission Queue

### Objective

Ensure patient registration data is not lost when internet connectivity is unavailable.

### Implementation

When Online:

```text
Submit Form
   ↓
Saga API Call
   ↓
Data Saved Successfully
```

When Offline:

```text
Submit Form
   ↓
Add Data To Redux Queue
   ↓
Wait For Network Connection
   ↓
Automatically Submit Queued Data
```

### Redux Queue Example

```js
offlineQueue = [
  {
    name: "John",
    age: 45,
    disease: "Diabetes",
    doctor: "Dr. Smith",
  },
];
```

### Benefits

* No data loss
* Improved reliability
* Better healthcare workflow

---

## 3. API Request Cancellation

### Objective

Prevent unnecessary API responses when users rapidly switch between patient records.

### Implementation

Uses Redux-Saga's:

```js
takeLatest()
```

### Example

```text
Open Patient A
   ↓
API Request Starts

Open Patient B
   ↓
Previous Request Cancelled

Only Patient B Data Loads
```

### Benefits

* Improved performance
* Reduced network traffic
* Better user experience

---

# 🏗️ Project Structure

```text
src
├── redux
│   ├── actions.js
│   ├── reducer.js
│   ├── saga.js
│   ├── store.js
│
├── components
│   ├── PatientList.js
│   ├── PatientForm.js
│   ├── PatientDetails.js
│
├── App.js
├── main.jsx
```

---

# 🛠️ Technologies Used

* React
* Redux
* Redux-Saga
* Bootstrap
* JavaScript (ES6+)
* JSONPlaceholder API

---

# 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to project folder:

```bash
cd healthcare-dashboard
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# 📚 Redux Saga Concepts Demonstrated

## takeEvery()

Used for:

* Fetching patients
* Submitting forms
* Processing offline queue

Example:

```js
yield takeEvery(
  FETCH_PATIENTS,
  fetchPatientsSaga
);
```

---

## takeLatest()

Used for:

* Fetching patient details

Example:

```js
yield takeLatest(
  FETCH_PATIENT_DETAILS,
  fetchPatientDetailsSaga
);
```

Only the latest request is executed.

---

## call()

Used for API calls.

Example:

```js
yield call(fetchPatientsAPI);
```

---

## put()

Used to dispatch Redux actions from Saga.

Example:

```js
yield put({
  type: SET_PATIENTS,
  payload: data,
});
```

---

## select()

Used to access Redux Store data inside Saga.

Example:

```js
const queue = yield select(
  (state) => state.offlineQueue
);
```

---

# 🎯 Learning Outcomes

By completing this project, I learned:

* Redux State Management
* Redux-Saga Middleware
* Handling Asynchronous Operations
* API Request Cancellation
* Offline Queue Processing
* Performance Optimization Techniques
* Scalable React Application Architecture

---

# 👨‍💻 Author

**Vasuki T**

Frontend Developer | React Developer

Skills:

* React.js
* Redux
* Redux-Saga
* JavaScript
* Bootstrap
* HTML5
* CSS3
