import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

import {
    calculateAmountDue, 
    createReservation, 
    getClientsReservations, 
    getAllReservations, 
    getReservationById, 
    updateReservation, 
    deleteReservation
} from "../controllers/reservation.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";
import { createReservationSchema } from "../validators/reservation.validator.js";

const router = Router();

router.get('/calculate-amount-due', async (req, res) => {
    try {
        const amountDue = await calculateAmountDue(req.body);
        res.status(200).json({ amountDue });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post(
    "/reservations/new", 
    authRequired,
    validateSchema(createReservationSchema),
    createReservation
);

router.get("/reservations", getAllReservations);
router.get("/reservations/:id", authRequired, getReservationById);
router.get("/reservations/client/:id", authRequired, getClientsReservations);

router.put("/reservations/:id", authRequired, updateReservation);
router.delete("/reservations/:id", authRequired, deleteReservation);

export default router;