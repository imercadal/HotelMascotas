import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useReservations } from "../../../Context/ReservationsContext";
import { useRates } from "../../../Context/RateContext";
import { usePets } from '../../../Context/PetsContext';
import { AuthContext } from "../../../Context/AuthContext";
import Layout from "../../../Layout";
import {
    Box,
    InputLabel,
    Input,
    Button,
    Typography,
    Grid,
    TextField,
    Container,
    CssBaseline,
    Select
} from "@mui/material";
import { getMostRecentRateRequest } from '../../../Api/rate';


const CreateReservation = () => {
    const { register, handleSubmit } = useForm();
    const { createReservation } = useReservations();
    const navigate = useNavigate();

    const { getAllPets, pets } = usePets();
    const { isAuthenticated, user } = useContext(AuthContext);
    const { getMostRecentRate, mostRecentRate } = useRates();

    const [myPets, setMyPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState("");


    useEffect(() => {
        getAllPets();
    }, []);

    useEffect(() => {
        getMostRecentRate()
            .catch(error => {
            console.error('Error fetching most recent rate:', error);
        });
    }, []);

    useEffect (() => {
        if (isAuthenticated && user && pets.length > 0) {
            const filteredPets = pets.filter((pet) => pet.petOwner._id === user.id);
            setMyPets(filteredPets);
        }
    }, [pets, isAuthenticated, user]);

    useEffect(() => {
        if (Object.keys(mostRecentRate).length === 0) {
            console.log("Most recent rate is not yet available.");
        }
    }, [mostRecentRate]);

    const handleSelectChange = (event) => {
        setSelectedPet(event.target.value);
    };

    const onSubmit = handleSubmit((data) => {
        try{
            console.log(data);
            const reservationData = {
                ...data,
                reservationClient: user.id,
                rate: mostRecentRate.ratePetNight
            };
            console.log(reservationData);
            createReservation(reservationData);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    });

    return (
        <Layout>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Typography component="h1" variant="h5">
                    Make a reservation
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <InputLabel variant='standard'>Mascota:</InputLabel>
                            <Select
                                {...register("reservationPet")}
                                autoFocus
                                fullWidth
                                name="reservationPet"
                                value={selectedPet}
                                onChange={handleSelectChange}
                            >
                                {myPets.map((pet) => (
                                    <option key={pet._id} value={String(pet._id)}>
                                        {pet.petName}
                                    </option>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel variant='standard'>Fecha de entrada:</InputLabel>
                            <Input
                                type="date"
                                fullWidth
                                {...register("checkInDate")}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Fecha de salida:</InputLabel>
                            <Input
                                type="date"
                                fullWidth
                                {...register("checkOutDate")}
                            />
                        </Grid>
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="NOTAS ADICIONALES"
                        name="Notas Adicionales"
                        {...register("reservationNotes", { required: true })}
                        fullWidth
                        id="reservationNotes"
                        label="Notas adicionales"
                        autoFocus
                        />
                    </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color='secondary'
                    sx={{ mt: 3, mb: 2 }}
                    
                    >
                    Submit
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Button color='secondary'>
                            Cancel
                        </Button>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default CreateReservation;