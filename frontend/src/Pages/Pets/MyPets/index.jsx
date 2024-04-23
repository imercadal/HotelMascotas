import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { usePets } from '../../../Context/PetsContext';
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


const MyPets = () => {
    const { getMyPets, pets } = usePets();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user._id) {
            getMyPets(user._id);
        }
    }, [getMyPets, user]);

    const goToEdit = (petId) => {
        navigate(`/pets/${petId}/edit`);
    };
    
    const goToDetails = (petId) => {
            navigate(`/pets/${petId}`);
    };
    
    return (
        <Layout>
            <Typography variant='h2'>My Pets</Typography>
            {pets.length === 0 && <Typography variant='h6'>(No hay mascotas)</Typography>}
            <TableContainer sx={{
            alignItems: "center",
            justifyContent: "center"      
            }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Mascota</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Peso</TableCell>
                        <TableCell>Edad</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pets.map((pet) => {
                    return (
                        <tr key={pet.id}>
                            <TableCell>{pet.petName}</TableCell>
                            <TableCell>{pet.petType}</TableCell>
                            <TableCell>{pet.petWeight} kg</TableCell>
                            <TableCell>{pet.petAge} años</TableCell>
                            <TableCell>{pet.petNotes}</TableCell>
                            <TableCell>
                            <Button
                                onClick={() => goToDetails(pet._id)}
                                >
                                Detalle
                            </Button>
                            <label> | </label>
                            <Button onClick={() => goToEdit(pet._id)}>
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

export default MyPets;