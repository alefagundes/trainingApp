import style from './SpinnerLoad.module.scss'
import {ImSpinner} from 'react-icons/im'
export const SpinnerLoad = () => {
    return (
        <div className={style.spinner}>
            <ImSpinner/>
        </div>
    )
}