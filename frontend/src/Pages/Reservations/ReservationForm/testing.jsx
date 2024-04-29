import { useEffect } from 'react';
import { usePets } from '../../../Context/PetsContext';
import Layout from '../../../Layout';
import { useNavigate } from 'react-router-dom';
import {
    Table,
    TableCell,
    TableContainer,
    TableBody,
    Button,
    Typography,
    Box,
    InputLabel,
    Input,
    Grid,
    TextField,
    Container,
    CssBaseline,
    Select
} from '@mui/material';


const PetList = () => {
    const { getAllPets, pets } = usePets();
    const navigate = useNavigate();
    const [myPets, setMyPets] = useState([]);

    useEffect(() => {
            getAllPets();
        }, []);

    if (pets.length === 0) return <h1>No hay mascotas</h1>;



    const goToMyPets = () => {
        navigate('/pets');
    }

    return (
        <Layout>
            <TableContainer sx={{
            alignItems: "center",
            justifyContent: "center"      
            }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>

                    {pets.map((item, index) => {
                    return (
                        <tr key={index}>
                            <TableCell>{item.petName}</TableCell>
                            <TableCell>{item.petType}</TableCell>
                            <TableCell>{item.petOwner?.username || 'Unknown'} </TableCell>
                            <TableCell>

                            <label> | </label>

                            <label> | </label>
                            <Button onClick={() => handleDelete(item._id) }>
                                Eliminar
                            </Button>
                            </TableCell>
                        </tr>
                    );
                })}
                </TableBody>
            </Table>
            </TableContainer>
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
                        <Button color='secondary' onClick={ goToMyPets }>
                            Cancel
                        </Button>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </Layout>
        </Layout>
    );
};

export default PetList;