import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AdminNavbarComp from "./components/AdminNavbarComp";
function App() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    ccNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    loginEmail: "",
    loginPassword: "",
  });
  const domains = window.location.hostname.split(".");
  return (
    <div className="App">
      {domains[0] == "admin" ? (
        <AdminNavbarComp />
      ) : (
        <NavbarComp userData={userData} setUserData={setUserData} />
      )}
    </div>
  );
}

export default App;
