import { useContext, useEffect, useState } from 'react';
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
    const { getAllPets, pets } = usePets();
    const { isAuthenticated, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [myPets, setMyPets] = useState([]);

    useEffect(() => {
        getAllPets();
    }, []);

    useEffect (() => {
        if (isAuthenticated && user && pets.length > 0) {
            console.log(pets)
            const filteredPets = pets.filter((pet) => pet.petOwner._id === user.id);
            console.log(filteredPets)
            setMyPets(filteredPets);
        }
    }, [pets, user, isAuthenticated]);

    const goToEdit = (petId) => {
        navigate(`/pets/${petId}/edit`);
    };
    
    const goToDetails = (petId) => {
            navigate(`/pets/${petId}`);
    };

    const newPet = () => {
        navigate(`/pets/new`);
};
    
    return (
        <Layout>
            <Typography variant='h2'>My Pets</Typography>
            {pets.length === 0 && <Typography variant='h6'>(No hay mascotas)</Typography>}
            <Button
                onClick={() => newPet()}
                variant='contained'
                color='secondary'
                sx={{ margin: 2 }}
            >
                Agregar nueva mascota
            </Button>
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
                    {myPets.map((pet) => {
                    return (
                        <TableRow key={pet._id}>
                            <TableCell>{pet.petName}</TableCell>
                            <TableCell>{pet.petType}</TableCell>
                            <TableCell>{pet.petWeight} kg</TableCell>
                            <TableCell>{pet.petAge} años</TableCell>
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
                        </TableRow>
                    );
                })}
                </TableBody>
            </Table>
            </TableContainer>
        </Layout>
    );
};

export default MyPets;