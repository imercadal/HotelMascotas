import { useContext, useEffect, useState } from 'react';
import { json, useNavigate } from "react-router-dom";
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
    Paper,
    Select
} from "@mui/material";


const CreateReservation = () => {
    const { register, handleSubmit } = useForm();
    const { updateReservation } = useReservations();
    const navigate = useNavigate();

    const { isAuthenticated, user } = useContext(AuthContext);

    const { getAllRates, rates } = useRates();
    const [mostRecentRate, setMostRecentRate] = useState({});

    const { getAllPets, pets, getPet } = usePets();
    const [myPets, setMyPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState({});


    useEffect(() => {
        getAllPets();
    }, []);

    useEffect(() => {
        getAllRates()
    }, []);

    useEffect(() => {
        if (rates.length > 0) {
            setMostRecentRate(rates[0]);
        }
    }, [rates]);

    useEffect (() => {
        if (isAuthenticated && user && pets.length > 0) {
            const filteredPets = pets.filter((pet) => pet.petOwner._id === user.id);
            setMyPets(filteredPets);
        }
    }, [pets, isAuthenticated, user]);

    const handleSelectChange = async (event) => {
        try {
            const pet = await getPet(event.target.value);
            
            setSelectedPet(pet);
            console.log(selectedPet);
        } catch (error) {
            console.error('Error fetching pet data:', error);
        }
    };

    const onSubmit = handleSubmit(async (data) => {
        try{
            const reservationData = {
                ...data,
                reservationClient: user.id,
                rate: mostRecentRate._id
            };
            await updateReservation(reservationData);
            alert("Reservation updated successfully");
            navigate("/reservations");
            
        } catch (error) {
            console.error(error);
        }
    });

    const goToMyPets = () => {
        navigate("/pets");
    }

    return (
        <Layout>
            <Paper 
            elevation={3}
            sx={{
                justifyContent: "center",
                padding: "30px",
                backgroundColor: "#F6F4F3",
            }}
            >
            <Container component="main" maxWidth="sm">
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Typography component="h1" variant="h5">
                    Edit your reservation
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <InputLabel variant='standard'>Mascota:</InputLabel>
                            <select
                                {...register("reservationPet")}
                                autoFocus
                                name="reservationPet"
                                value={selectedPet}
                                onChange={handleSelectChange}
                            >
                                {myPets.length > 0 ? (
                                    <>
                                        <option value="default">Select a pet</option>
                                        {myPets.map((pet) => (
                                            <option key={pet._id} value={pet._id}>
                                                {pet.petName}
                                            </option>
                                        ))}
                                    </>
                                ) : (
                                    <option value="default">No pets available</option>
                                )}
                            </select>
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
                        <Button color='secondary' onClick={ goToMyPets }>
                            Cancel
                        </Button>
                    </Grid>
                </Box>
                </Box>
            </Container>
            </Paper>
        </Layout>
    );
};

export default CreateReservation;