import { useContext, useEffect } from 'react';
import { useReservations } from '../../../Context/ReservationsContext';
import { AuthContext } from '../../../Context/AuthContext';
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


const ReservationList = () => {
    const { getAllReservations, reservations } = useReservations();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
            getAllReservations();
        }, []);

    if (reservations.length === 0) return <h1>No hay mascotas</h1>;

    const goToEdit = (reservationId) => {
        navigate(`/reservations/${reservationId}/edit`);
    };
    
    const goToDetails = (reservationId) => {
            navigate(`/reservations/${reservationId}`);
    };
    
    return (
        <Layout>
            <Typography variant='h2'>All Reservations</Typography>
            <TableContainer sx={{
            alignItems: "center",
            justifyContent: "center"      
            }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Mascota</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Dueñx</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {reservations.map((item, index) => {
                    return (
                        <tr key={index}>
                            <TableCell>{item.reservationName}</TableCell>
                            <TableCell>{item.reservationType}</TableCell>
                            <TableCell>{user(item.reservationOwnerId)?.username || 'Unknown'} </TableCell>
                            <TableCell>
                            <Button
                                onClick={() => goToDetails(item._id)}
                                >
                                Detalle
                            </Button>
                            <label> | </label>
                            <Button onClick={() => goToEdit(item._id)}>
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

export default ReservationList;