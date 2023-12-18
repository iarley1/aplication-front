import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const UserContext = createContext({});

export function Providers({ children }) {
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [erroLogin, setErroLogin] = useState(false);
  const [erroRegister, setErroRegister] = useState(false);
  const [sucessMessage, setSucessMessage] = useState(false)
  const [user, setUser] = useState("olaa");

  const navigate = useNavigate();

  async function registerUser(data) {
    try {
      setErroRegister(false)
      setSucessMessage(false)
      setLoading(true);
      const res = await api.post("/users", data);
      setSucessMessage(true)
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if(error.response.data.statusCode === 409){
        setErroRegister(true)
      }
    } finally {
      setLoading(false);
    }
  }

  async function loginUser(data) {
    try {
      setLoading(true);
      const res = await api.post("/login", data);
      setErroLogin(false)
      console.log(res);
    } catch (error) {
      if (
        error.response.data.message === "User not found" ||
        error.response.data.message === "Invalid email or password"
      ) {
        setErroLogin(true);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ registerUser, loginUser, user, setUser, loading, setLoading, erroLogin, sucessMessage, erroRegister }}
    >
      {children}
    </UserContext.Provider>
  );
}
