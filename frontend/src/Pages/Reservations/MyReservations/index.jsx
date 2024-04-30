import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { useReservations } from '../../../Context/ReservationsContext';
import { usePets } from '../../../Context/PetsContext';
import Layout from '../../../Layout';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../Helpers/helpers';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    TableBody,
    Button,
    Typography,
    Paper
} from '@mui/material';


const MyReservations = () => {
    const { getAllReservations, deleteReservation, reservations } = useReservations();
    const [myReservations, setMyReservations] = useState([]);
    const { getPet } = usePets();
    const [petData, setPetData] = useState({});

    const { isAuthenticated, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAllReservations();
        console.log(reservations)
    }, []);

    useEffect(() => {
        if (isAuthenticated && user && reservations.length > 0) {
            const filteredReservations = reservations.filter((reservations) => reservations.reservationClient === user.id);
            setMyReservations(filteredReservations);
        }
    }, [reservations, user, isAuthenticated]);

    useEffect(() => {
        const fetchPetData = async () => {
            const petIds = myReservations.map(reservation => reservation.reservationPet);
            const petPromises = petIds.map(petId => getPet(petId));
            const petObjects = await Promise.all(petPromises);
            const petDataMap = petObjects.reduce((acc, pet, index) => {
                acc[petIds[index]] = pet;
                return acc;
            }, {});
            setPetData(petDataMap);
        };
    
        if (myReservations.length > 0) {
            fetchPetData();
        }
        
    }, [myReservations]);

    const goToEdit = (reservationId) => {
        navigate(`/reservations/${reservationId}`);
    };
    
    const handleDelete = async(reservationId) => {
        try {
            await deleteReservation(reservationId);
            alert('Reservation deleted successfully');
            window.location.reload();
        } catch (error) {
            console.error('Error deleting reservation:', error);
            alert('Failed to delete reservation. Please try again.');
        }
    };

    
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
            <Typography variant='h2'>My Reservations</Typography>
            {reservations.length === 0 && <Typography variant='h6'>(No hay reservas)</Typography>}
            <TableContainer sx={{
            alignItems: "center",
            justifyContent: "center"      
            }}>
            <Table sx={{ minWidth: 650, marginTop: "20px"}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Pet</TableCell>
                        <TableCell>Check-in Date</TableCell>
                        <TableCell>Check-out Date</TableCell>
                        <TableCell>Amount Due</TableCell>
                        <TableCell>Additional Notes</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myReservations.map((reservation) => {
                    const pet = petData[reservation.reservationPet];
                    const petName = pet ? pet.petName : 'Loading...';
                    return (
                        <TableRow key={reservation.id}>
                            <TableCell>{petName}</TableCell>
                            <TableCell>{formatDate(`${reservation.checkInDate}`)}</TableCell>
                            <TableCell>{formatDate(`${reservation.checkOutDate}`)}</TableCell>
                            <TableCell>$ {reservation.amountDue}</TableCell>
                            <TableCell>{reservation.reservationNotes}</TableCell>
                            <TableCell>
                            <Button
                                onClick={() => goToEdit(reservation._id)}
                                sx={{ color: "#F03A47" }}
                                >
                                Edit
                            </Button>
                            <label> | </label>
                            <Button onClick={ () => handleDelete(reservation._id) } sx={{ color: "#F03A47" }}>
                                Delete
                            </Button>
                            </TableCell>
                        </TableRow>
                    );
                })}
                </TableBody>
            </Table>
            </TableContainer>
            </Paper>
        </Layout>
    );
};

export default MyReservations;