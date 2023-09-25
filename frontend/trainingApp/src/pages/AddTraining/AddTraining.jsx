import style from './AddTraining.module.scss'
import {Input} from '../../components/Input/Input'
import { useState } from 'react'
import { InputSelect } from '../../components/InputSelect/InputSelect';
import { UseTraining } from '../../hooks/UseTraining';
export const AddTraining = () => {
    const [training, setTraining] = useState({});
    const {trainingCreate} = UseTraining();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!training) {
         return
        }
        trainingCreate(training);
        setTraining(null);
    }

    const handleChange = (e) => {
        setTraining({...training, [e.target.name]: e.target.value});
    }
    console.log(training);
    return (
        <div className={style.containerAddTraining}>
            <h1>Criar um treino</h1>
            <form onSubmit={handleSubmit}>
             <Input type={'text'}
              value={training ? training.training : ''} 
              name={'training'} 
              placeholder={'Informe o treino do dia:'}
              handlechange={handleChange}/>
             <InputSelect name={'day'} 
              text={'Selecione o dia da semana'}
              options={['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo']}
              handleOnChange={handleChange}
              option0={'Dias da semana'}
              value={training ? training.day : ''}/>
             <Input type={'number'}
              value={training ? training.shift : ''}
              name={'shift'}
              handlechange={handleChange}
              placeholder={'Número de series'}/>
             <textarea name="exercises"
              value={training ? training.exercises : ''}   
              placeholder={'Descreva os exercios e número de repetições'}
              onChange={handleChange}/>
             <Input name={'observations'} 
              placeholder={'Observações'}
              type={'text'}
              value={training ? training.observations : ''}
              handlechange={handleChange}/>
             <Input name={'cout'}
              value={training ? training.cout : ''}
              type={'email'}
              placeholder={'E-mail do treinador:'}
              handlechange={handleChange}/>
             <Input type={'submit'} 
              value={'CRIAR TREINO'}/>
            </form>
        </div>
    )
}