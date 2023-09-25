/* eslint-disable react/prop-types */
import style from './CardTraining.module.scss'
import {Link} from 'react-router-dom'

export const CardTraining = ({training}) => {
    return (
        <Link className={style.card} to={`/training/${training._id}`}>
            <h3>{training.training}</h3>
            <p>Repetições: {training.shift}</p>
            <p>observações: {training.observations}</p>
            {training.cout && <p>Cout: {training.cout}</p>}
        </Link>
    )
}