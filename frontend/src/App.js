// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useContext } from 'react';

// Pages Imports
import SupervisorPage from "./pages/SupervisorPage/SupervisorPage";
import NewRequestPage from "./pages/NewRequestPage/NewRequestPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
// import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { EmployeeContext } from "./context/EmployeeContext";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from 'axios';

function App() {
  const [setEmployees] = useContext(EmployeeContext);

  const fetchEmployees = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/employees/all/");
      setEmployees(response.data);
      console.log(response.data)
    } catch (error) {
      // console.log(error.response.data);
    }
  };
  fetchEmployees();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/request" element={<NewRequestPage />} />
        <Route path="/login" element={<SupervisorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
