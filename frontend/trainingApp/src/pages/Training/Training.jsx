/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import style from './Training.module.scss'
import { SpinnerLoad } from '../../components/SpinnerLoad/SpinnerLoad';
import { UseTraining } from '../../hooks/UseTraining';
import { CardTraining } from '../../components/CardTraining/CardTraining';

export const Training = () => {
    const {getTraining} = UseTraining();
    const [training, setTraining] = useState([]);

    useEffect(() => {
        getTraining(setTraining);
    }, [])

    return (
        <>
        <h1 className={style.title}>Trainos do usuário</h1>
        <div className={style.containerTraining}>
        {training.length === 0 && <SpinnerLoad/>}
        {training.length > 0 && training.map((item, index) => (
            <CardTraining key={index} training={item}/>
        ))}
        </div>
        </>
    )
}