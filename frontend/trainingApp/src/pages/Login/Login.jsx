/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import style from "./Login.module.scss";
import { UseTrainingContext } from "../../hooks/UseTrainingContext";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { login } = UseTrainingContext(); 

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(user) ? navigate('/') : false;
  };

  return (
    <div className={style.loginContainer}>
      <h1>Login do usuário</h1>
      <form onSubmit={handleSubmit} className={style.formLogin}>
        <Input type={"email"} name={"email"} placeholder={"E-mail"} handlechange={handleChange} />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Senha"}
          autocomplete={"off"}
          handlechange={handleChange}
        />
        <Input type={"submit"} name={"submit"} value={"Entrar"} />
      </form>
    </div>
  );
};
