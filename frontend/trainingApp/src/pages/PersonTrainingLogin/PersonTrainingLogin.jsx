/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Input } from "../../components/Input/Input"
import style from './PersonTrainingLogin.module.scss'
import { UseTrainingContext } from "../../hooks/UseTrainingContext";
import { useNavigate } from "react-router-dom";

export const PersonTrainingLogin = () => {
    const [personal, setPersonal] = useState({});
    const { loginPersonal } = UseTrainingContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginPersonal(personal) ? navigate('/training') : false;
    }

    const handleChange = (e) => {
        setPersonal({...personal, [e.target.name]: e.target.value});
    }
    return (
        <div className={style.loginContainer}>
            <h1>Login do <span>treinador</span></h1>
            <form className={style.formLogin}onSubmit={handleSubmit}>

            <Input type={'email'} 
             name={'coutEmail'} 
             placeholder={'E-mail do treinador:'} 
             handlechange={handleChange}/>

            <Input type={'email'}
             name={'userEmail'}
             placeholder={'E-mail do aluno:'}
             handlechange={handleChange}/>

            <Input type={'submit'} value={'ENTRAR'}/>
            </form>
        </div>
    )
} 