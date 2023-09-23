/* eslint-disable react/prop-types */

import { createContext } from "react";
import { UseAuth } from "../hooks/UseAuth";
import { UseDiet } from "../hooks/UseDiet";
export const ContextProv = createContext();

export const TrainingContext = ({ children }) => {
  const { login, loginPersonal, logout, register, authenticated } = UseAuth();
  const {registerDiet} = UseDiet();
  return (
    <ContextProv.Provider value={{ login,loginPersonal, registerDiet, logout, register, authenticated }}>
      {children}
    </ContextProv.Provider>
  );
};
