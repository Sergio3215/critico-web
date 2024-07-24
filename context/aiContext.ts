import { useContext, createContext } from "react";

export const AiContext = createContext({});

export const useAi = () => useContext(AiContext);