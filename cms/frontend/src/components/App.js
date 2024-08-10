import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import NotFound from "./../pages/NotFound";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login"></Navigate>;
}
function RegisterAndLogout() {
  localStorage.clear();
  return <Register></Register>;
}
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv); // Create a root
root.render(<App />);
