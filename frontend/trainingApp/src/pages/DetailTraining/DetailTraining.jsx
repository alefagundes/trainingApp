/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom'
import style from './DetailTraining.module.scss'
import { useEffect, useState } from 'react';
import { UseTraining } from '../../hooks/UseTraining';
import {RiDeleteBin6Line} from 'react-icons/ri'
export const DetailTraining = () => {
    const [training, setTraining] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();
    const {getTrainigById, deleteTrainingById} = UseTraining();

    const handleRemove = () => {
        deleteTrainingById(id);
        setTimeout(() => {
        navigate('/training');
        }, 2000);
        
    }

    useEffect(() => {
        getTrainigById(id, setTraining);
    }, [])

    return (
        <div className={style.containerDetail}>
            <h1>{training.training}</h1>
            <h3>Dia do treino: {training.day}</h3>
            <h3>Número de séries:{training.shift}</h3>
            <h4>Descrição:{training.exercises}</h4>
            <h4>Obs:{training.observations}</h4>
            {training.cout && <h4>Cout: {training.cout}</h4>}
            <button onClick={handleRemove}>Excluir treino<RiDeleteBin6Line/></button>
        </div>
    )
}