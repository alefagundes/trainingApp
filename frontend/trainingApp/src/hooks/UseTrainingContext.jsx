import { useContext } from "react";
import { ContextProv } from "../context/UseContext";

export const UseTrainingContext = () => {
  const context = useContext(ContextProv);
  return context ? context : console.log("Contexto invalido");
};
