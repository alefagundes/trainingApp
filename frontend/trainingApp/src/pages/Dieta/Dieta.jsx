import { useState } from 'react';
import { Input } from '../../components/Input/Input';
import style from './Dieta.module.scss'
import { InputSelect } from '../../components/InputSelect/InputSelect';
import { UseTrainingContext } from '../../hooks/UseTrainingContext';

export const Dieta = () => {
    const [diet, setDiet] = useState({});
    const {registerDiet} = UseTrainingContext();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerDiet(diet);
    }
    const handleChange = (e) => {
        setDiet({...diet, [e.target.name]: e.target.value});
    }
    return (
        <div className={style.containerDiet}>
            <h1>Dieta do aluno</h1>
            <form onSubmit={handleSubmit}>
                
                <InputSelect name={'type'} 
                 value={diet.type}
                 options={["hypercalorica", "hipocalorica", "deficit calorico"]} 
                 handleOnChange={handleChange} />
                
                <textarea name="diet" 
                 placeholder='Informe aqui sua dieta:'
                 cols="65" rows="18" onChange={handleChange}/>
                 <Input type={'submit'} value={'CADASTRAR'}/>
            </form>
        </div>
    )
}