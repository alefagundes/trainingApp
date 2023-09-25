/* eslint-disable react/prop-types */
import style from './CardTraining.module.scss'
export const CardTraining = ({training}) => {
    return (
        <div className={style.card}>
            <h3>{training.training}</h3>
            <p>Repetições: {training.shift}</p>
            <p>observações: {training.observations}</p>
            {training.cout && <p>Cout: {training.cout}</p>}
        </div>
    )
}