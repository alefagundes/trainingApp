/* eslint-disable react/prop-types */

import { createContext } from "react";
import { UseAuth } from "../hooks/UseAuth";
import { UseDiet } from "../hooks/UseDiet";
import { UseUser } from "../hooks/UseUser";
export const ContextProv = createContext();

export const TrainingContext = ({ children }) => {
  const { login, loginPersonal, logout, register, authenticated, authPersonal } = UseAuth();
  const {registerDiet, reqGetDiet} = UseDiet();
  const {getUser} = UseUser();
  return (
    <ContextProv.Provider 
    value={{ login, 
             loginPersonal, 
             register, 
             logout, 
             reqGetDiet, 
             registerDiet,
             getUser, 
             authenticated, 
             authPersonal }}>
      {children}
    </ContextProv.Provider>
  );
};
