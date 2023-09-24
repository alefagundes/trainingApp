/* eslint-disable no-unused-vars */
import { axiosApi } from "../utils/api"
import { UseFlashMessage } from "./UseFlashMessage";

export const UseDiet = () => {
    const {setFlashMessage} = UseFlashMessage();

    const registerDiet = async (diet) => {
        let msgText = 'Dieta atualizada com sucesso!'
        let msgType = 'success'
        const request = await axiosApi.post('/diet/save', diet).then((response) => {
            setFlashMessage(msgText, msgType)
        }).catch((err) => {
            console.log(err);
            msgText = err.response.data.message;
            msgType = "error";
            setFlashMessage(msgText, msgType);
        })
        return request
    } 

    const reqGetDiet = async (setData) => {
        await axiosApi.get('/diet/yourDiet').then((response) => {
            setData(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }
     
    return {registerDiet, reqGetDiet}
}