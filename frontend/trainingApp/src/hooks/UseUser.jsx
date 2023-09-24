/* eslint-disable no-unused-vars */
import { axiosApi } from "../utils/api"

export const UseUser = () => {
    const getUser = (setUser, setList) => {
        axiosApi.get('users/profile').then((response) => {
            setUser(response.data);
            setList(response.data.cout);
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateUser = (user) => {

    }
    
    return {getUser, updateUser}

}