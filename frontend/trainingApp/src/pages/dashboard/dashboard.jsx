import style from './dashboard.module.scss'
import { GiMuscleUp } from 'react-icons/gi';
export const Dashboard = () => {
    return (
        <div>
          <h1 className={style.title}>Welcome to the training<span><GiMuscleUp/></span></h1>
          <div className={style.containerImage}>
            <img src="../../../public/abs.png" alt="image1" />
          </div>
        </div>
    )
}