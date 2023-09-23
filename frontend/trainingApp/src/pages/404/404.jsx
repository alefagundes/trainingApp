import style from './404.module.scss'

export const NotFound = () => {
    return (
        <div className={style.containerNotFound}>
            <img src="erro_404.png" alt="erro404" />
            <h1>TENTE NOVAMENTE</h1>
        </div>
    )
}