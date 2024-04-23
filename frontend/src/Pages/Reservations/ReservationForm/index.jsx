import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useReservations } from "../../../Context/ReservationsContext";
import Layout from "../../../Layout";
import {
    Box,
    Button,
    Paper,
    Typography
} from "@mui/material";

const CreateReservation = () => {
    const { register, handleSubmit } = useForm();
    const { createReservationRequest } = useReservations();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createReservationRequest(data);
        navigate("/");
    });

    return (
        <Layout>
            <Paper variant="elevation" elevation={3} sx={{
                backgroundColor: "primary.main",
                padding: "30px",
                width: "100%", 
                margin: "auto"
            }}>
                <Box 
                    sx={{ 
                        maxWidth: "500px",
                        margin: "auto",
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                        border: '1px solid',
                        borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        padding: '20px'
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h4" gutterBottom>Reserva</Typography>
                        <Box 
                            sx={{ 
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10px"
                            }}
                        >
                            <label>Fecha de entrada:</label>
                            <input
                                type="date"
                                {...register("checkInDate")}
                                autoFocus
                            />
                        </Box>
                        <Box 
                            sx={{ 
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10px"
                            }}
                        >
                            <label>Fecha de salida:</label>
                            <input
                                type="date"
                                {...register("checkOutDate")}
                            />
                        </Box>
                        <Box 
                            sx={{ 
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10px"
                            }}
                        >
                            <label>Notas de la reserva:</label>
                            <input
                                type="text"
                                placeholder="Notas adicionales"
                                {...register("reservationNotes")}
                            />
                        </Box>
                        <Box 
                            sx={{ 
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10px"
                            }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                            >
                                Crear Reserva
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </Layout>
    );
};

export default CreateReservation;
/*
import React from 'react';
import ReservationForm from '../../Components/ReservationForm';
import { useReservations } from '../../Context/ReservationsContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CreateReservationPage = () => {
    const { register, handleSubmit } = useForm();
    const { createReservation } = useReservations();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((formData) => {
        createReservation(formData);
        console.log(formData);
        navigate("/reservations");
    });

    return (
        <div>
            <h1>Create Reservation</h1>
            <ReservationForm
                initialReservationDate={initialReservationDate}
                initialCheckInDate={initialCheckInDate}
                initialCheckOutDate={initialCheckOutDate}
                initialReservationNotes={initialReservationNotes}
                onSubmitProp={onSubmit}
            />
        </div>
    );
};

export default CreateReservationPage;
*/