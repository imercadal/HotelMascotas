import { createContext, useState } from "react";
import PropTypes from "prop-types";

import {
    createPetRequest,
    getPetsRequest,
    getPetRequest,
    getMyPetsRequest,
    updatePetRequest,
    deletePetRequest
} from "../Api/pets";

const PetContext = createContext();

export function PetProvider({ children }) {
    const [pets, setPets] = useState([]);

    const createPet = async (pet) => {
        const res = await createPetRequest(pet);
        console.log(res);
    };

    const getPets = async () => {
        try {
        const res = await getPetsRequest();
        setPets(res.data);
        } catch (error) {
        console.error(error);
        }
    };

    const getAllPets = async () => {
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

    const updatePet = async (id) => {
        try {
        const res = await updatePetRequest(id);
        if (res.status === 200) setPets(pets.filter((pet) => pet._id !== id));
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
            getPets,
            getAllPets,
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