import axios from "./axios";

export const createReservationRequest = (reservation) => axios.post("/reservations", reservation);

export const getAllReservationsRequest = () => axios.get("/reservations");

export const getReservationByIdRequest = (id) => axios.get(`/reservations/${id}`);

export const getMyReservationsRequest = (clientId) => axios.get(`/reservations/client/${clientId}`);

export const updateReservationRequest = (reservation) => axios.put(`/reservations/${reservation._id}`, reservation);

export const deleteReservationRequest = (id) => axios.delete(`/reservations/${id}`);

export const calculateAmountDueRequest = (reservation) => axios.get("/calculate-amount-due", reservation);