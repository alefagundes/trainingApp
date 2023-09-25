/* eslint-disable no-unused-vars */
import { axiosApi } from "../utils/api"
import { UseFlashMessage } from "./UseFlashMessage"

export const UseUser = () => {
    const {setFlashMessage} = UseFlashMessage();
    const getUser = (setUser, setList) => {
        axiosApi.get('users/profile').then((response) => {
            setUser(response.data);
            setList(response.data.cout);
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateUser = (user) => {
        let msg = 'Usuário atualizado com sucesso!'
        let msgType = 'success'
        axiosApi.put('/users/profile/update', user).then((response) => {
            setFlashMessage(msg, msgType);
        }).catch((err) => {
            msg = `Erro: ${err}`
            msgType = 'error'
            setFlashMessage(msg, msgType);
            console.log(err)
        })
    }
    
    return {getUser, updateUser}

}