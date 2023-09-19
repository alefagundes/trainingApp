/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import style from "./Register.module.scss";
import { UseTrainingContext } from "../../hooks/UseTrainingContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [newUser, setNewUser] = useState({});
  const { register } = UseTrainingContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(newUser);
  };
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.registerContainer}>
      <h1>Cadastro de usuário</h1>
      <form onSubmit={handleSubmit} className={style.registerForm}>
        <Input
          name={"name"}
          placeholder={"Nome completo"}
          handlechange={handleChange}
          type={"text"}
        />
        <Input name={"email"} type={"email"} placeholder={"E-mail"} handlechange={handleChange} />
        <Input name={"birthDate"} type={"date"} handlechange={handleChange} />
        <Input type={"text"} name={"phone"} placeholder={"Telefone:"} handlechange={handleChange} />
        <Input
          type={"decimal"}
          name={"weight"}
          placeholder={"Seu peso em Kg:"}
          handlechange={handleChange}
        />
        <Input
          type={"email"}
          name={"cout"}
          placeholder={"E-mail do treinador:"}
          handlechange={handleChange}
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Senha:"}
          handlechange={handleChange}
        />
        <Input
          type={"password"}
          name={"confirmPassword"}
          placeholder={"Confirme sua senha:"}
          handlechange={handleChange}
        />
        <Input type={"submit"} value={"Cadastrar"} />
      </form>
    </div>
  );
};
