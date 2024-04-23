import { z } from "zod"; // Importamos zod para validar los datos

export const createReservationSchema = z.object({
    reservationNotes: z
        .string()
        .optional(),
    reservationDate: z
        .string() // Tipo de dato
        .datetime() // La fecha de creación de la tarea
        .optional(), // La fecha de creación de la tarea
    checkInDate: z
        .string({
            required_error: "check-in date is required",
        }),
    checkInDate: z
        .string({
            required_error: "check-out date is required",
        }),
    numberOfNights: z
        .string()
        .optional
});