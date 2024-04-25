import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import Navbar from "../../../Components/NavBar"
import {
    Typography,
    Paper,
    CircularProgress
} from "@mui/material";
import UserCard from "../../../Components/UserCard";

const PetProfile = () => {
    const { user } = useAuth();
    const [petData, setPetData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const params = useParams();
    const petId = params.petId;

    useEffect(() => {
        getPetData();
    }
    , []);

    const getPetData = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/pets/${petId}`);
            setPetData(res.data);
            console.log(res.data);

            if (!petData) {
                console.log("La mascota no existe");
                navigatePetList();
                return;
            }

            const petWithOwner = {
                ...petData, 
                petOwnerCurrentUser: petData.petOwner === user.id
            };

            setPetData(petWithOwner);
            setLoading(false);

        } catch (error) {
            console.error(error);
        }
    }

    const navigatePetList = () => {
        navigate("/pets");
    }

    const goToEdit = () => {
        navigate(`/pets/${petId}/edit`);
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/pets/${petId}`);
            alert('Pet deleted successfully');
            navigatePetList();
        } catch (error) {
            console.error('Error deleting pet:', error);
            alert('Failed to delete pet. Please try again.');
        }
    }

    return (
        <div>
        <Navbar/>
        <Paper
            variant="elevation"
            elevation={3}
            sx={{
                backgroundColor: "#F6F4F3",
                padding: "30px",
            }}
        >
            {loading && <CircularProgress />}
            {!petData && !loading && <Typography variant="h2">La mascota no existe</Typography>}
            <UserCard
                antetitulo={"Mascota"}
                titulo={"Nombre: " + petData.petName}
                bajada={"Tipo: " + petData.petType}
                descripcion={`${petData.petAge} años, ${petData.petWeight}kg`}
                masInfo={petData.petNotes}
                onClick1={ goToEdit }
                linkName1={"Editar"}
                onClick2={ handleDelete }
                linkName2={"Eliminar"}
            ></UserCard>
        </Paper>
        </div>
    );
};

export default PetProfile;