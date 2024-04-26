import axios from "axios";

export const addRateRequest = (rate) => axios.post("/rates", rate);

export const getMostRecentRateRequest = () => axios.get("/rates/effective");

export const getAllRatesRequest = () => axios.get("/rates");

export const getRateByIdRequest = (id) => axios.get(`/rates/${id}`);

export const deleteRateRequest = (id) => axios.delete(`/rates/${id}`);