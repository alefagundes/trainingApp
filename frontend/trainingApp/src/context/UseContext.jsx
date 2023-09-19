/* eslint-disable react/prop-types */

import { createContext } from "react";
import { UseAuth } from "../hooks/UseAuth";
export const ContextProv = createContext();

export const TrainingContext = ({ children }) => {
  const { login, logout, register, authenticated } = UseAuth();
  return (
    <ContextProv.Provider value={{ login, logout, register, authenticated }}>
      {children}
    </ContextProv.Provider>
  );
};
