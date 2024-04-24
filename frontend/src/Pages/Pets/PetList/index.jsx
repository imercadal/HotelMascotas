import { useContext, useEffect } from 'react';
import { usePets } from '../../../Context/PetsContext';
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


const PetList = () => {
    const { getAllPets, pets } = usePets();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
            getAllPets();
        }, []);

    if (pets.length === 0) return <h1>No hay mascotas</h1>;

    const goToEdit = (petId) => {
        navigate(`/pets/${petId}/edit`);
    };
    
    const goToDetails = (petId) => {
            navigate(`/pets/${petId}`);
    };
    
    return (
        <Layout>
            <Typography variant='h2'>All Pets</Typography>
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

                    {pets.map((item, index) => {
                    return (
                        <tr key={index}>
                            <TableCell>{item.petName}</TableCell>
                            <TableCell>{item.petType}</TableCell>
                            <TableCell>{item.petOwner?.username || 'Unknown'} </TableCell>
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

export default PetList;