import style from './LockAcess.module.scss';
import {BsShieldLock} from 'react-icons/bs';
export const LockAcess = () => {
    return (
        <div className={style.containerLockAcess}>
            <h1>Acesso negado!</h1>
            <div className={style.iconLock}>
                <BsShieldLock/>
            </div>
        </div>
    )
}