import {  createContext, useContext } from "react";

const PetContext = createContext();

export const usePets = () => {

    const context = useContext(PetContext);

    if (!context) {
        throw new Error("usePets must be used within a PetProvider");
    }

    return context;
};