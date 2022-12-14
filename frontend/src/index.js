import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { EmployeeProvider } from "./context/EmployeeContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <EmployeeProvider>
          <App />
        </EmployeeProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
