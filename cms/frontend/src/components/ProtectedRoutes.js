import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "./../api";
import { ACCESS_TOKEN, REFRESH_TOEKN } from "../constants";
import { useState, useEffect } from "react";

function ProtectedRoutes({ childeren }) {
  const [isAutherized, setIsAutherized] = useState(null);

  useEffect(() => {
    auth().catch(() => setIsAutherized(false));
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOEKN);
    try {
      const res = await api.post("/token/refresh/", { refresh: refreshToken });
      if (res.status == 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAutherized(true);
      }
      setIsAutherized(false);
    } catch (error) {
      console.log(error);
      setIsAutherized(false);
    }
  };
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAutherized(false);
      return;
    }
    const decoded = jwtDecode(token);
    const expDate = decoded.exp;
    const nowDate = Date.now() / 1000; // in seconds
    if (expDate < nowDate) {
      await refreshToken();
    }
    {
      setIsAutherized(true);
    }
  };

  if (isAutherized == null) {
    return <div>Loading ....</div>;
  }

  return isAutherized ? childeren : <Navigate to="/login"></Navigate>;
}

export default ProtectedRoutes;
