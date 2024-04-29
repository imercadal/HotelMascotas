import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { useReservations } from '../../../Context/ReservationsContext';
import Layout from '../../../Layout';
import { useNavigate } from 'react-router-dom';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    TableBody,
    Button,
    Typography
} from '@mui/material';


const MyReservations = () => {
    const { getAllReservations, deleteReservation, reservations } = useReservations();
    const [myReservations, setMyReservations] = useState([]);

    const { isAuthenticated, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAllReservations();
    }, []);

    useEffect(() => {
        if (isAuthenticated && user && reservations.length > 0) {
            const filteredReservations = reservations.filter((reservations) => reservations.reservationClient === user.id);
            setMyReservations(filteredReservations);
        }
    }, [reservations, user, isAuthenticated]);


    const goToEdit = (reservationId) => {
        navigate(`/reservations/${reservationId}/edit`);
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
            <Typography variant='h2'>My Reservations</Typography>
            {reservations.length === 0 && <Typography variant='h6'>(No hay reservas)</Typography>}
            <TableContainer sx={{
            alignItems: "center",
            justifyContent: "center"      
            }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                    return (
                        <tr key={reservation.id}>
                            <TableCell>{reservation.reservationPet}</TableCell>
                            <TableCell>{reservation.checkInDate}</TableCell>
                            <TableCell>{reservation.checkOutDate}</TableCell>
                            <TableCell>$ {reservation.amountDue}</TableCell>
                            <TableCell>{reservation.reservationNotes}</TableCell>
                            <TableCell>
                            <Button
                                onClick={() => goToEdit(reservation._id)}
                                >
                                Edit
                            </Button>
                            <label> | </label>
                            <Button onClick={ handleDelete }>
                                Delete
                            </Button>
                            </TableCell>
                        </tr>
                    );
                })}
                </TableBody>
            </Table>
            </TableContainer>
        </Layout>
    );
};

export default MyReservations;