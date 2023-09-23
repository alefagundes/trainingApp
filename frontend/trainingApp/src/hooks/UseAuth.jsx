/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { axiosApi } from "../utils/api.jsx";
import { UseFlashMessage } from "./UseFlashMessage.jsx";

export const UseAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const { setFlashMessage } = UseFlashMessage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosApi.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
  }, []);

  const authUser = (data) => {
    setAuthenticated(true);
    localStorage.setItem("token", data.token);
  };

  const register = async (user) => {
    let msgText = "Cadastro realizado com sucesso!";
    let msgType = "success";

    const request = await axiosApi
      .post("/users/register", user)
      .then((response) => {
        authUser(response.data);
        setFlashMessage(msgText, msgType);
        return true;
      })
      .catch((err) => {
        msgText = err.response.data.message;
        msgType = "error";
        setFlashMessage(msgText, msgType);
        return false;
      });
    
    return request;
  };

  const login = async (user) => {
    let msgText = "Login realizado com sucesso";
    let msgType = "success";

    const request = axiosApi
      .post("/users/login", user)
      .then((response) => {
        authUser(response.data);
        setFlashMessage(msgText, msgType);
        return true;
      })
      .catch((err) => {
        console.log(err);
        msgText = err.response.data.message;
        msgType = "error";
        setFlashMessage(msgText, msgType);
        return false;
      });
    return request;
  };

  const loginPersonal = async (personal) => {
    let msgText = "Login realizado com sucesso";
    let msgType = "success";

    const request = axiosApi
      .post("/users/login/personal", personal)
      .then((response) => {
        authUser(response.data);
        setFlashMessage(msgText, msgType);
        return true;
      })
      .catch((err) => {
        console.log(err);
        msgText = err.response.data.message;
        msgType = "error";
        setFlashMessage(msgText, msgType);
        return false;
      });
    return request;
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
  };

  return { login, loginPersonal, logout, register, authenticated };
};
