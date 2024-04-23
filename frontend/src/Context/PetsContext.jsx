import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import {
    createPetRequest,
    getAllPetsRequest,
    getPetRequest,
    getMyPetsRequest,
    updatePetRequest,
    deletePetRequest
} from "../Api/pets";

const PetContext = createContext();

export const usePets = () => {

    const context = useContext(PetContext);

    if (!context) {
        throw new Error("usePets must be used within a PetProvider");
    }

    return context;
};

export function PetProvider({ children }) {
    const [pets, setPets] = useState([]);

    const createPet = async (pet) => {
        const res = await createPetRequest(pet);
        console.log(res);
    };

    const getAllPets = async () => {
        try {
        const res = await getAllPetsRequest();
        setPets(res.data);
        } catch (error) {
        console.error(error);
        }
    };

    const getPet = async () => {
        try {
        const res = await getPetRequest();
        setPets(res.data);
        } catch (error) {
        console.error(error);
        }
    };

    const getMyPets = async () => {
        try {
        const res = await getMyPetsRequest();
        setPets(res.data);
        } catch (error) {
        console.error(error);
        }
    };

    const updatePet = async (updatedPet) => {
        try {
        const res = await updatePetRequest(updatedPet._id, updatedPet);
        if (res.status === 200){
            setPets(prevPets => prevPets.map(pet => (pet._id === updatedPet._id ? updatedPet : pet)))
        }
        } catch (error) {
        console.error(error);
        }
    };

    const deletePet = async (id) => {
        try {
        const res = await deletePetRequest(id);
        if (res.status === 200) setPets(pets.filter((pet) => pet._id !== id));
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <PetContext.Provider
        value={{
            pets,
            createPet,
            getAllPets,
            getPet,
            getMyPets,
            updatePet,            
            deletePet,
        }}
        >
        {children}
        </PetContext.Provider>
    );
    }

PetProvider.propTypes = {
    children: PropTypes.node.isRequired,
};