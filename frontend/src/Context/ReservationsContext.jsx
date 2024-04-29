import { createContext, useContext, useState } from "react";
import {
    createReservationRequest,
    getAllReservationsRequest,
    getReservationByIdRequest,
    getMyReservationsRequest,
    updateReservationRequest,
    deleteReservationRequest
} from "../Api/reservations";

const ReservationContext = createContext();

export const useReservations = () => {
    const context = useContext(ReservationContext);

    if (!context) {
        throw new Error("useReservations must be used within a ReservationProvider");
    }
    return context;
};

export function ReservationProvider({ children }) {
    const [reservations, setReservations] = useState([]);

    const createReservation = async (reservationData) => {
        try{
            await createReservationRequest(reservationData);
        } catch (error) {
            console.error(error);
        }
    };

    const getAllReservations = async () => {
        try {
        const res = await getAllReservationsRequest();
        setReservations(res.data);
        } catch (error) {
        console.error(error);
        }
    };

    const getReservationById = async (id) => {
        try {
        const res = await getReservationByIdRequest(id);
        return res.data;
        } catch (error) {
        console.error(error);
        }
    }

    const getMyReservations = async (clientId) => {
        try {
        const res = await getMyReservationsRequest(clientId);
        return res.data;
        } catch (error) {
        console.error(error);
        }
    }


    const updateReservation = async (reservation) => {
        try {
        const res = await updateReservationRequest(reservation);
        if (res.status === 200) {
            setReservations(reservations.map((res) => (res._id === reservation._id ? reservation : res)));
        }
        } catch (error) {
        console.error(error);
        }
    }

    const deleteReservation = async (id) => {
        try {
        const res = await deleteReservationRequest(id);
        if (res.status === 200) setReservations(reservations.filter(reservation => reservation._id !== id));
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <ReservationContext.Provider
        value={{
            reservations,
            createReservation,
            getAllReservations,
            getMyReservations,
            getReservationById,
            updateReservation,
            deleteReservation
        }}
        >
        {children}
        </ReservationContext.Provider>
    );
}

export default ReservationContext;
