import { useContext, useEffect } from 'react';
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
    const { getMyReservations, reservations } = useReservations();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user._id) {
            getMyReservations(user._id);
        }
    }, [getMyReservations, user]);

    const goToEdit = (reservationId) => {
        navigate(`/reservations/${reservationId}/edit`);
    };
    
    const goToDetails = (reservationId) => {
            navigate(`/reservations/${reservationId}`);
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
                        <TableCell>Additional Notes</TableCell>
                        <TableCell>Check-in Date</TableCell>
                        <TableCell>Check-out Date</TableCell>
                        <TableCell>Number of nights</TableCell>
                        <TableCell>Amount Due</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reservations.map((reservation) => {
                    return (
                        <tr key={reservation.id}>
                            <TableCell>{reservation.reservationPet}</TableCell>
                            <TableCell>{reservation.reservationNotes}</TableCell>
                            <TableCell>{reservation.checkInDate}</TableCell>
                            <TableCell>{reservation.checkOutDate}</TableCell>
                            <TableCell>{reservation.numberOfNights}</TableCell>
                            <TableCell>Amount Due Temp</TableCell>
                            <TableCell>
                            <Button
                                onClick={() => goToDetails(reservation._id)}
                                >
                                Detalle
                            </Button>
                            <label> | </label>
                            <Button onClick={() => goToEdit(reservation._id)}>
                                Editar
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