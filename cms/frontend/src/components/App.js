import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import NotFound from "./../pages/NotFound";
import Home from "./../pages/Home";

function Logout() {
  console.log("oooooo");
  localStorage.clear();
  return <Login />;
}
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/frontend/logout" element={<Logout />} />
          <Route path="/frontend/login" element={<Login />} />
          <Route path="/frontend/register" element={<Register />} />
          <Route
            path="/frontend"
            element={<ProtectedRoutes childeren={<Home />} />}
          />
          <Route path="/frontend/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
const appDiv = document.getElementById("app");
const root = createRoot(appDiv); // Create a root
root.render(<App />);
