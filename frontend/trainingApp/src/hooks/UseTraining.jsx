import { axiosApi } from "../utils/api"
import { UseFlashMessage } from "./UseFlashMessage"
export const UseTraining = () => {
    const {setFlashMessage} = UseFlashMessage();

    const trainingCreate = (training) => {
        axiosApi.post('/training/create', training).then((response) => {
            setFlashMessage(response.data.message, 'success');
        }).catch((err) => {
            console.log(err);
            setFlashMessage(err.response.data.message, 'error');
        })
    }

    const getTraining = (setTraining) => {
        axiosApi.get('/training/getAll').then((response) => {
            setTraining(response.data);
        }).catch((err) => {
            console.log(err);
            setFlashMessage(err.response.data.messag, 'error');
        })
    }

    return {trainingCreate, getTraining}
}