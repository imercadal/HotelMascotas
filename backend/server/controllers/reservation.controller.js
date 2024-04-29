import Reservation from "../models/reservation.model.js";
import Rate from "../models/rate.model.js";

const calculateAmountDue = async (rateId, checkInDate, checkOutDate) => {
    try {
        const rate = await Rate.findById(rateId);
        if (!rate) {
            throw new Error("Rate not found for reservation");
        }

        const numberOfNights = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));

        const amountDue = numberOfNights * rate.ratePerNight;

        return amountDue;
    } catch (error) {
        throw new Error(`Error calculating amount due: ${error.message}`);
    }
};

const createReservation = async (req, res) => {
    try{
        const { reservationClient, reservationPet, reservationNotes, checkInDate, checkOutDate, rate } = req.body;
    
        const amountDue = await calculateAmountDue(rate, checkInDate, checkOutDate);
    
        const newReservation = new Reservation({
            reservationClient,
            reservationPet,
            reservationNotes,
            checkInDate,
            checkOutDate,
            rate,
            amountDue
        });
        console.log(newReservation)
    
        const savedReservation = await newReservation.save();
    
        res.status(201).json({ status: 'success', reservation: savedReservation });
    } catch (error) {
        console.error("Error" + error);
        res.status(400).json({
        error: "La reserva no se ha podido guardar"});
    }
};

const getClientsReservations = async (req, res) => {
    try{        
        const reservations = await Reservation.find({ reservationClient: req.user.id })
        .populate("reservationClient")
        .populate("reservationPet")
        .populate("rate");
    
        res.json(reservations);
    } catch (error) {
        console.error("Error" + error);
        res.status(400).json({
        error: "No se han podido obtener las reservas"});
    }
};

const getAllReservations = async (req, res) => {
    try{
        const reservations = await Reservation.find();
        
        res.json(reservations);
    } catch (error) {
        console.error("Error" + error);
        res.status(400).json({
        error: "No se han podido obtener las reservas"});
    }
};

const getReservationById = async (req, res) => {
    try{
        const reservation = await Reservation.findById(req.params.id);

        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }

        res.json(reservation);
    } catch (error) {
        console.error("Error" + error);
        res.status(400).json({
        error: "No se ha podido obtener la reserva"});
    }
};

const updateReservation = async (req, res) => {
    const { reservationPet, reservationNotes, reservationDate, checkInDate, checkOutDate, rate } = req.body;

    const amountDue = await calculateAmountDue(rate, checkInDate, checkOutDate);

    const updatedReservation = {
        reservationPet,
        reservationNotes,
        reservationDate,
        checkInDate,
        checkOutDate,
        rate,
        amountDue
    };
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, updatedReservation, {
        new: true,
    });
    if (!reservation) return res.status(404).json({ message: "Reservation not found" });
    res.json(reservation);
};

const deleteReservation = async (req, res) => {
    try{
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }
        res.json({ message: "Reservation deleted" });
    } catch (error) {
        console.error("Error" + error);
        res.status(400).json({
        error: "La reserva no se ha podido eliminar"});
    }
}

export { calculateAmountDue, createReservation, getClientsReservations, getAllReservations, getReservationById, updateReservation, deleteReservation };

