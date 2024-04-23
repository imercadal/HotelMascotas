import axios from "./axios";

export const createPetRequest = (pet) => axios.post("/pets", pet);

export const getAllPetsRequest = () => axios.get("/pets");

export const getPetRequest = (id) => axios.get(`/pets/${id}`);

export const getMyPetsRequest = (id) => axios.get(`/pets/mypets/${id}`);

export const updatePetRequest = (pet) => axios.put(`/pets/${pet._id}`, pet);

export const deletePetRequest = (id) => axios.delete(`/pets/${id}`);
