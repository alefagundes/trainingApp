/* eslint-disable no-unused-vars */
import style from './Profile.module.scss'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input/Input'
import {UseTrainingContext} from '../../hooks/UseTrainingContext'
import {IoIosRemoveCircleOutline} from 'react-icons/io'
import {GrAddCircle} from 'react-icons/gr'
import { UseUser } from '../../hooks/UseUser'

export const Profile = () => {
    const [user, setUser] = useState({});
    const [cout, setCout] = useState('');
    const [list, setList] = useState([]);
    const {getUser} = UseTrainingContext();
    const {updateUser} = UseUser();

    useEffect(() => {
        getUser(setUser, setList);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(user);
    }
    const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    } 

    const handleRemove = (index) => {
        if(!list){
            return
        }
        const res = list.filter((item, idx) => idx != index);
        setList(res);
        let removeCout = user;
        removeCout['cout'] = res
        setUser(removeCout);
    }

    const handleAdd = () => {
       if(cout.length === 0){
        return
       }
       const res = list.find((email) => {
           if(email === cout) {
              return email
           }
       });
       if(res) {
           return
       }
       let coutAdd = user;
       coutAdd['cout'] = [...coutAdd.cout, cout];
       setUser(coutAdd)
       setList((prev) => [...prev, cout]);
       setCout('');
    }

    const formatDate = (date) => {
        return `${date.substring(0,4)}-${date.substring(5, 7)}-${date.substring(8,10)}`
    } 
    return (
        <div className={style.containerProfile}>
            <h1>Perfil do {user.name}</h1>
            <div className={style.containerCout}>
                <div className={style.jsc}>
                    <Input
                    value={cout}
                    type={'email'}
                    name={'cout'} 
                    placeholder={'Cout e-mail:'}
                    handlechange={(e) => setCout(e.target.value)}
                    />
                    <button onClick={handleAdd}><GrAddCircle/></button>
                </div>
                <div className={style.wrapList}>
                    {list && list.map((cout, index) => (
                        <div className={style.listCout} key={index}>
                        <li>{cout}</li>
                        <button onClick={() => handleRemove(index)}><IoIosRemoveCircleOutline/></button>
                        </div>
                    ))}
                </div>
             </div>
            <form onSubmit={handleSubmit}>
            <Input value={user.name || ''} name={'name'}
             type={'text'} 
             placeholder={'Nome completo:'} 
             handlechange={handleChange}/>
             <Input value={user.email || ''} name={'email'}
             type={'email'} 
             placeholder={'E-mail:'} 
             handlechange={handleChange}/>
             <Input value={user.birthDate ? formatDate(user.birthDate) : ''} 
             name={'birthDate'}
             type={'date'} 
             placeholder={'Data de nascimento:'} 
             handlechange={handleChange}/>
             <Input value={user.weight || ''} name={'weight'}
             type={'number'} 
             placeholder={'Peso:'} 
             handlechange={handleChange}/>
             <Input value={user.phone || ''} name={'phone'}
             type={'text'} 
             placeholder={'Número de telefone:'} 
             handlechange={handleChange}/>
             <Input name={'password'}
             type={'password'} 
             placeholder={'Senha:'} 
             handlechange={handleChange}/>
             <Input name={'confirmPassword'}
             type={'password'} 
             placeholder={'Confirme sua senha:'} 
             handlechange={handleChange}/>
             <Input type={'submit'} value={'SALVAR'}/>
            </form>
        </div>
    )
}